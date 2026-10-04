#!/usr/bin/env node
/**
 * Export one ProWebKit template as a standalone Next.js project and publish
 * it to a new public GitHub repository.
 *
 *   npm run export -- talent-model
 *   npm run export -- talent-model --repo noor-contractor-site
 *   npm run export -- talent-model --no-push        (build the folder only)
 *
 * Exports are written to ../prowebkit-exports/<repo>, beside this repo.
 *   npm run export -- talent-model --verify         (also install + build it)
 *
 * The standalone site is the same code, not a rewrite: every file the
 * template's route imports is copied byte for byte at the same path, so it
 * renders identically. Only three things change, all ProWebKit chrome:
 *   - the template becomes the home page ("/")
 *   - the gallery preview strip is removed from TemplateShell
 *   - globals.css keeps the base, the motion layer and this template's theme
 *
 * Re-running against an existing repo pushes the current version on top of
 * its history, so ProWebKit stays the source of truth and fixes can be
 * shipped to a client repo at any time.
 */

import { execFileSync, execSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import readline from "node:readline";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "src");
const APP = path.join(SRC, "app");
// Outside the repo on purpose: a second Next.js project nested inside
// ProWebKit (with its own node_modules and .next) breaks ProWebKit's build.
const EXPORTS = path.join(path.dirname(ROOT), "prowebkit-exports");

/* ── Small utilities ─────────────────────────────────────────────────── */

const color = (code) => (s) => (process.stdout.isTTY ? `\x1b[${code}m${s}\x1b[0m` : s);
const bold = color(1);
const dim = color(2);
const green = color(32);
const red = color(31);
const yellow = color(33);

/**
 * Stop with a message. Throws instead of calling process.exit: exiting while
 * fetch is still closing its socket crashes Node on Windows.
 */
class ExportError extends Error {}
function fail(message) {
  throw new ExportError(message);
}

const rel = (p) => path.relative(ROOT, p).split(path.sep).join("/");
const read = (p) => fs.readFileSync(p, "utf8");

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function copyFile(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

function write(to, content) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.writeFileSync(to, content);
}

/* ── Arguments ───────────────────────────────────────────────────────── */

function parseArgs(argv) {
  const args = { slug: null, repo: null, owner: null, push: true, verify: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--repo") args.repo = argv[++i];
    else if (a === "--owner") args.owner = argv[++i];
    else if (a === "--no-push") args.push = false;
    else if (a === "--verify") args.verify = true;
    else if (a === "--help" || a === "-h") args.help = true;
    else if (!a.startsWith("-") && !args.slug) args.slug = a;
    else fail(`Unknown option "${a}". Run with --help.`);
  }
  return args;
}

function templateSlugs() {
  const dirs = [path.join(SRC, "templates"), path.join(SRC, "premium", "templates")];
  return dirs.flatMap((d) =>
    fs.existsSync(d) ? fs.readdirSync(d, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name) : [],
  );
}

/* ── Prompts ─────────────────────────────────────────────────────────── */

// Created on the first prompt, so a run that asks nothing never holds stdin.
let rl = null;
let muted = false;

function prompt() {
  if (rl) return rl;
  rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
  const originalWrite = rl._writeToOutput.bind(rl);
  rl._writeToOutput = (s) => {
    if (!muted) originalWrite(s);
    else if (s.includes("\n")) originalWrite("\n");
  };
  return rl;
}

function closePrompt() {
  rl?.close();
  rl = null;
}

function ask(question, fallback = "") {
  const suffix = fallback ? dim(` (${fallback})`) : "";
  return new Promise((resolve) =>
    prompt().question(`${question}${suffix}: `, (answer) => resolve(answer.trim() || fallback)),
  );
}

async function askSecret(question) {
  process.stdout.write(`${question}: `);
  muted = true;
  const answer = await new Promise((resolve) => prompt().question("", resolve));
  muted = false;
  return answer.trim();
}

async function confirm(question, yes = false) {
  const answer = (await ask(`${question} ${yes ? "[Y/n]" : "[y/N]"}`)).toLowerCase();
  return answer ? answer.startsWith("y") : yes;
}

/* ── 1. Find the route that renders the template ──────────────────────── */

function findRoute(slug) {
  const marker = new RegExp(`["']@/(premium/)?templates/${slug}/`);
  const pages = walk(APP).filter((f) => /[\\/]page\.tsx$/.test(f));
  const hits = pages.filter((f) => marker.test(read(f)));
  if (hits.length === 0) fail(`No route renders "${slug}". Is its page.tsx commented out or parked?`);
  if (hits.length > 1) fail(`More than one route renders "${slug}":\n  ${hits.map(rel).join("\n  ")}`);
  return hits[0];
}

/* ── 2. Trace every file it imports ──────────────────────────────────── */

const IMPORT_RE =
  /(?:import|export)\s+(?:type\s+)?(?:[\w*{}\s,]+?\s+from\s+)?["']([^"']+)["']|import\(\s*["']([^"']+)["']\s*\)/g;

function resolveLocal(spec, fromFile) {
  const base = spec.startsWith("@/") ? path.join(SRC, spec.slice(2)) : path.resolve(path.dirname(fromFile), spec);
  const candidates = [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    `${base}.mjs`,
    `${base}.js`,
    path.join(base, "index.ts"),
    path.join(base, "index.tsx"),
  ];
  // "./x.js" written for an x.ts source
  if (/\.js$/.test(base)) candidates.push(base.replace(/\.js$/, ".ts"), base.replace(/\.js$/, ".tsx"));
  return candidates.find((c) => fs.existsSync(c) && fs.statSync(c).isFile()) ?? null;
}

function packageName(spec) {
  const parts = spec.split("/");
  return spec.startsWith("@") ? parts.slice(0, 2).join("/") : parts[0];
}

function trace(entries) {
  const files = new Set();
  const packages = new Set();
  const queue = [...entries];
  while (queue.length) {
    const file = queue.pop();
    if (files.has(file)) continue;
    files.add(file);
    if (!/\.(tsx?|mjs|js)$/.test(file)) continue;
    for (const m of read(file).matchAll(IMPORT_RE)) {
      const spec = m[1] ?? m[2];
      if (spec.startsWith(".") || spec.startsWith("@/")) {
        // The root globals.css is rebuilt rather than copied.
        if (spec === "./globals.css" && path.dirname(file) === APP) continue;
        const target = resolveLocal(spec, file);
        if (!target) fail(`Cannot resolve "${spec}" imported by ${rel(file)}`);
        queue.push(target);
      } else if (!spec.startsWith("node:")) {
        packages.add(packageName(spec));
      }
    }
  }
  return { files, packages };
}

/* ── 3. Trim globals.css to what this template uses ───────────────────── */

/** Split a stylesheet into top-level chunks: comments, statements and rules. */
function cssChunks(css) {
  const chunks = [];
  let i = 0;
  while (i < css.length) {
    const ws = css.slice(i).match(/^\s+/);
    if (ws) {
      chunks.push({ type: "ws", text: ws[0] });
      i += ws[0].length;
      continue;
    }
    if (css.startsWith("/*", i)) {
      const end = css.indexOf("*/", i + 2);
      const stop = end === -1 ? css.length : end + 2;
      chunks.push({ type: "comment", text: css.slice(i, stop) });
      i = stop;
      continue;
    }
    // A statement (`@tailwind base;`) or a rule with a {...} body.
    let j = i;
    let depth = 0;
    let quote = null;
    for (; j < css.length; j++) {
      const ch = css[j];
      if (quote) {
        if (ch === "\\") j++;
        else if (ch === quote) quote = null;
        continue;
      }
      if (ch === '"' || ch === "'") quote = ch;
      else if (css.startsWith("/*", j)) j = css.indexOf("*/", j + 2) + 1;
      else if (ch === "{") depth++;
      else if (ch === "}" && --depth === 0) break;
      else if (ch === ";" && depth === 0) break;
    }
    const text = css.slice(i, j + 1);
    chunks.push({ type: "rule", text, selector: text.slice(0, text.indexOf("{")).trim() });
    i = j + 1;
  }
  return chunks;
}

function trimGlobals(css, keepThemes) {
  const isUnusedTheme = (sel) => {
    const themes = sel.match(/\.theme-[\w-]+/g);
    return !!themes && themes.every((t) => !keepThemes.has(t.slice(1)));
  };
  // Gallery-only utilities from the ProWebKit landing page.
  const isGalleryOnly = (sel) => /^\.kit-[\w-]+/.test(sel);

  const chunks = cssChunks(css);
  const out = [];
  for (const chunk of chunks) {
    if (chunk.type === "rule" && chunk.selector && (isUnusedTheme(chunk.selector) || isGalleryOnly(chunk.selector))) {
      // Drop the rule, and the comment header directly above it.
      while (out.length && out[out.length - 1].type === "ws") out.pop();
      if (out.length && out[out.length - 1].type === "comment") out.pop();
      continue;
    }
    out.push(chunk);
  }
  return `${out.map((c) => c.text).join("").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

/* ── 4. ProWebKit chrome that does not belong in a client's site ──────── */

function stripPreviewBar(source) {
  const out = source
    .replace(/import \{ PreviewBar \} from "\.\/preview-bar";\r?\n/, "")
    .replace(/\s*<PreviewBar template=\{preview\} \/>/, "")
    .replace(
      /\/\*\* Label shown in the gallery preview strip\. \*\/(\r?\n\s*)preview: string;/,
      "/** Not rendered outside the ProWebKit gallery. */$1preview?: string;",
    )
    .replace("{ theme, preview, children }", "{ theme, children }")
    .replace(/, and renders the gallery preview strip\./, ".")
    .replace(/\s*\*\s*\r?\n\s*\* When you copy a template out of the kit[\s\S]*?drop <PreviewBar \/>\./, "");
  if (/<PreviewBar|from "\.\/preview-bar"|\{ theme, preview, children \}/.test(out)) {
    fail("Could not remove PreviewBar from TemplateShell; its markup has changed.");
  }
  return out;
}

/** Root layout with ProWebKit's fonts and globals, minus ProWebKit's metadata. */
function standaloneLayout(source) {
  const start = source.indexOf("export const metadata");
  if (start === -1) return source;
  let depth = 0;
  let end = source.indexOf("{", start);
  for (; end < source.length; end++) {
    if (source[end] === "{") depth++;
    else if (source[end] === "}" && --depth === 0) break;
  }
  end = source.indexOf(";", end) + 1;
  const metadata = `export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};`;
  return source.slice(0, start) + metadata + source.slice(end);
}

/* ── 5. Build the standalone project ─────────────────────────────────── */

function buildExport({ slug, repo, routeFile }) {
  const outDir = path.join(EXPORTS, repo);
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  // Route-segment layouts between src/app and the page (e.g. /premium) are
  // kept as route groups, so they still wrap the page but the URL is "/".
  const segments = path.relative(APP, path.dirname(routeFile)).split(path.sep);
  const layouts = [];
  for (let i = 1; i <= segments.length; i++) {
    const layout = path.join(APP, ...segments.slice(0, i), "layout.tsx");
    if (fs.existsSync(layout)) layouts.push({ file: layout, group: `(${segments[i - 1]})` });
  }

  const rootLayout = path.join(APP, "layout.tsx");
  const { files, packages } = trace([routeFile, rootLayout, ...layouts.map((l) => l.file)]);
  files.delete(path.join(SRC, "components", "layout", "preview-bar.tsx"));

  // Placement for files under src/app; everything else keeps its path.
  const groupDirs = layouts.map((_, i) => layouts.slice(0, i + 1).map((l) => l.group));
  const appTarget = new Map([[routeFile, path.join(outDir, "src", "app", ...(groupDirs.at(-1) ?? []), "page.tsx")]]);
  layouts.forEach((l, i) => appTarget.set(l.file, path.join(outDir, "src", "app", ...groupDirs[i], "layout.tsx")));

  const themes = new Set();
  for (const file of files) {
    let target = appTarget.get(file) ?? path.join(outDir, path.relative(ROOT, file));
    if (file.startsWith(APP) && !appTarget.has(file) && file !== rootLayout) {
      // A component colocated under src/app — keep it beside the page.
      target = path.join(outDir, path.relative(ROOT, file));
    }
    let content = read(file);
    // Theme classes used in code (comments stripped, so doc examples don't count).
    const code = content.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
    for (const t of code.matchAll(/["'`\s]theme-([\w-]+)/g)) themes.add(`theme-${t[1]}`);
    if (file === rootLayout) content = standaloneLayout(content);
    if (rel(file) === "src/components/layout/template-shell.tsx") content = stripPreviewBar(content);
    write(target, content);
  }

  write(path.join(outDir, "src", "app", "globals.css"), trimGlobals(read(path.join(APP, "globals.css")), themes));

  // Project configuration, copied as-is.
  for (const f of [
    "tsconfig.json",
    "tailwind.config.ts",
    "postcss.config.mjs",
    "next.config.ts",
    ".eslintrc.json",
    ".gitignore",
    ".gitattributes",
    "LICENSE",
  ]) {
    if (fs.existsSync(path.join(ROOT, f))) copyFile(path.join(ROOT, f), path.join(outDir, f));
  }
  for (const f of walk(path.join(ROOT, "public"))) copyFile(f, path.join(outDir, path.relative(ROOT, f)));

  // package.json: only the dependencies this template actually imports.
  const pkg = JSON.parse(read(path.join(ROOT, "package.json")));
  const needed = new Set(["next", "react", "react-dom", ...packages]);
  const dependencies = Object.fromEntries(Object.entries(pkg.dependencies).filter(([name]) => needed.has(name)));
  const missing = [...needed].filter((n) => !pkg.dependencies[n] && !pkg.devDependencies?.[n]);
  if (missing.length) fail(`Imported but not in package.json: ${missing.join(", ")}`);
  const devDependencies = Object.fromEntries(
    Object.entries(pkg.devDependencies ?? {}).filter(([name]) => {
      const typed = name.match(/^@types\/(.+)$/);
      return !typed || ["node", "react", "react-dom"].includes(typed[1]) || needed.has(typed[1]);
    }),
  );
  const standalonePkg = {
    name: repo.toLowerCase(),
    version: "1.0.0",
    private: true,
    scripts: Object.fromEntries(Object.entries(pkg.scripts).filter(([k]) => k !== "export")),
    dependencies,
    devDependencies,
    ...(pkg.overrides ? { overrides: pkg.overrides } : {}),
  };
  write(path.join(outDir, "package.json"), `${JSON.stringify(standalonePkg, null, 2)}\n`);

  const contentFile = [...files].map(rel).find((f) => /templates\/[^/]+\/content\.ts$/.test(f));
  write(path.join(outDir, "README.md"), readme({ repo, slug, contentFile }));

  return { outDir, files, packages: Object.keys(dependencies), themes };
}

function readme({ repo, slug, contentFile }) {
  return `# ${repo}

A complete website built with Next.js, React and Tailwind CSS, from the
[ProWebKit](https://github.com/HrishikeshAtole-24/ProWebKit) template \`${slug}\`.

## Run it

\`\`\`bash
npm install
npm run dev
\`\`\`

Then open http://localhost:3000.

## Make it yours

All of the words on the page live in one file:${contentFile ? ` \`${contentFile}\`` : ""}.
Edit it and the page updates. Colours are the \`.theme-*\` block in
\`src/app/globals.css\`.

## Deploy

Push to GitHub and import the repository on [Vercel](https://vercel.com/new).
No configuration is needed.

## Scripts

| Command | Does |
| --- | --- |
| \`npm run dev\` | Local development server |
| \`npm run build\` | Production build |
| \`npm run start\` | Serve the production build |
| \`npm run lint\` | ESLint |
| \`npm run typecheck\` | TypeScript, no emit |
`;
}

/* ── 6. Lockfile pinned to the exact versions ProWebKit runs ──────────── */

function pinLockfile(outDir) {
  const lock = path.join(ROOT, "package-lock.json");
  if (!fs.existsSync(lock)) return false;
  copyFile(lock, path.join(outDir, "package-lock.json"));
  try {
    // Prunes the copied lock to this package.json without touching versions
    // that are already resolved, and without installing anything.
    execSync("npm install --package-lock-only --no-audit --no-fund --ignore-scripts", {
      cwd: outDir,
      stdio: "pipe",
    });
    return true;
  } catch {
    fs.rmSync(path.join(outDir, "package-lock.json"), { force: true });
    return false;
  }
}

/* ── 7. GitHub ───────────────────────────────────────────────────────── */

async function github(token, method, url, body) {
  const res = await fetch(`https://api.github.com${url}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "prowebkit-export",
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  return { status: res.status, data };
}

function git(cwd, args, extra = {}) {
  return execFileSync("git", args, { cwd, stdio: "pipe", encoding: "utf8", ...extra });
}

function gitConfig(key) {
  try {
    return git(ROOT, ["config", "--get", key]).trim();
  } catch {
    return "";
  }
}

async function publish({ outDir, repo, owner: ownerArg, slug }) {
  console.log(`\n${bold("GitHub")}`);
  console.log(
    dim(
      "  A personal access token is needed to create the repository.\n" +
        "  Create one at https://github.com/settings/tokens/new with the \"public_repo\" scope\n" +
        "  (or a fine-grained token with Administration + Contents: read and write).\n" +
        "  It is used for this run only and is never written to disk.\n",
    ),
  );

  const token = process.env.GITHUB_TOKEN || (await askSecret("  Personal access token"));
  if (!token) fail("A token is required to publish. Use --no-push to only build the folder.");

  const me = await github(token, "GET", "/user");
  if (me.status !== 200) fail(`GitHub rejected the token (${me.status}): ${me.data.message ?? "unknown error"}`);
  const login = me.data.login;

  const owner = ownerArg || (await ask("  GitHub account or organisation for the repo", login));
  const name = await ask("  Commit author name", gitConfig("user.name") || me.data.name || login);
  const email = await ask(
    "  Commit author email",
    gitConfig("user.email") || me.data.email || `${me.data.id}+${login}@users.noreply.github.com`,
  );

  // Create the repository, or offer to update it if it already exists.
  const create =
    owner.toLowerCase() === login.toLowerCase()
      ? await github(token, "POST", "/user/repos", {
          name: repo,
          private: false,
          description: `Website built from the ProWebKit ${slug} template`,
        })
      : await github(token, "POST", `/orgs/${owner}/repos`, {
          name: repo,
          visibility: "public",
          description: `Website built from the ProWebKit ${slug} template`,
        });

  let existing = false;
  if (create.status === 422) {
    existing = true;
    console.log(yellow(`\n  ${owner}/${repo} already exists.`));
    if (!(await confirm("  Push this version to its main branch as a new commit?"))) {
      fail("Nothing was pushed. Choose another name with --repo.");
    }
  } else if (create.status !== 201) {
    fail(`Could not create ${owner}/${repo} (${create.status}): ${create.data.message ?? ""}`);
  }

  const remote = `https://github.com/${owner}/${repo}.git`;
  const auth = Buffer.from(`x-access-token:${token}`).toString("base64");
  // The token travels as a one-off header; it never lands in .git/config.
  const authed = ["-c", `http.extraHeader=Authorization: Basic ${auth}`];

  if (existing) {
    // Reuse the repo's history so the update is an ordinary new commit.
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "pwk-"));
    try {
      git(tmp, [...authed, "clone", "--no-checkout", remote, "repo"]);
    } catch (e) {
      fail(`Could not clone ${owner}/${repo}: ${e.stderr || e.message}`);
    }
    fs.renameSync(path.join(tmp, "repo", ".git"), path.join(outDir, ".git"));
    fs.rmSync(tmp, { recursive: true, force: true });
    git(outDir, ["symbolic-ref", "HEAD", "refs/heads/main"]);
  } else {
    git(outDir, ["init", "-b", "main"]);
    git(outDir, ["remote", "add", "origin", remote]);
  }

  git(outDir, ["config", "user.name", name]);
  git(outDir, ["config", "user.email", email]);
  git(outDir, ["add", "-A"]);
  const status = git(outDir, ["status", "--porcelain"]).trim();
  if (existing && !status) {
    console.log(green(`\n✔ ${owner}/${repo} is already identical to ProWebKit's ${slug}. Nothing to push.`));
    return `https://github.com/${owner}/${repo}`;
  }
  git(outDir, ["commit", "-m", existing ? `Update from ProWebKit (${slug})` : `Initial site from ProWebKit (${slug})`]);
  try {
    git(outDir, [...authed, "push", "-u", "origin", "main"]);
  } catch (e) {
    fail(`Push failed: ${(e.stderr || e.message).replaceAll(token, "***")}`);
  }
  return `https://github.com/${owner}/${repo}`;
}

/* ── Main ────────────────────────────────────────────────────────────── */

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const slugs = templateSlugs();

  if (args.help || !args.slug) {
    console.log(`
${bold("Export a ProWebKit template to its own GitHub repository")}

  npm run export -- <template> [--repo <name>] [--owner <account>] [--no-push] [--verify]

  --repo     Repository name (asked for if omitted)
  --owner    GitHub user or organisation (defaults to the token's account)
  --no-push  Only build the folder in ../prowebkit-exports/<repo>
  --verify   Install dependencies and run a production build of the export

Templates:
  ${slugs.join("\n  ")}
`);
    process.exitCode = args.help ? 0 : 1;
    return;
  }
  if (!slugs.includes(args.slug)) fail(`Unknown template "${args.slug}". Run with --help for the list.`);

  const repo = args.repo || (await ask(`Repository name for ${bold(args.slug)}`, args.slug));
  if (!/^[A-Za-z0-9._-]+$/.test(repo)) fail(`"${repo}" is not a valid repository name. Use letters, numbers, ".", "-" and "_".`);

  const routeFile = findRoute(args.slug);
  console.log(`\n${bold("Exporting")} ${args.slug} ${dim(`from ${rel(routeFile)}`)}`);

  const { outDir, files, packages, themes } = buildExport({ slug: args.slug, repo, routeFile });
  console.log(`  ${green("✔")} ${files.size} source files copied unchanged`);
  console.log(`  ${green("✔")} theme kept: ${[...themes].join(", ") || "none"}`);
  console.log(`  ${green("✔")} dependencies: ${packages.join(", ")}`);

  process.stdout.write(`  … pinning versions to ProWebKit's lockfile`);
  const pinned = pinLockfile(outDir);
  process.stdout.write(`\r  ${pinned ? green("✔") : yellow("!")} ${pinned ? "lockfile pinned to ProWebKit's exact versions" : "lockfile skipped (offline?) — npm install will create one"}\n`);

  if (args.verify) {
    console.log(`  … installing and building ${dim("(this takes a minute)")}`);
    try {
      execSync(pinned ? "npm ci --no-audit --no-fund" : "npm install --no-audit --no-fund", { cwd: outDir, stdio: "pipe" });
      execSync("npm run typecheck && npm run build", { cwd: outDir, stdio: "pipe" });
      console.log(`  ${green("✔")} standalone build passes`);
    } catch (e) {
      fail(`Standalone build failed:\n${e.stdout?.toString() ?? ""}${e.stderr?.toString() ?? ""}`);
    }
  }

  console.log(`  ${green("✔")} folder ready: ${outDir}`);

  if (args.push) {
    const url = await publish({ outDir, repo, owner: args.owner, slug: args.slug });
    console.log(`\n${green("✔")} ${bold("Published")} → ${url}\n`);
  } else {
    console.log(`\n${dim("Skipped GitHub (--no-push). To publish:")} npm run export -- ${args.slug} --repo ${repo}\n`);
  }
  closePrompt();
}

main()
  .catch((e) => {
    console.error(`\n${red("✖")} ${e instanceof ExportError ? e.message : e.stack || e.message}\n`);
    process.exitCode = 1;
  })
  .finally(closePrompt);
