/**
 * True when the browser can create a WebGL context at all. Kept apart from
 * stage.tsx so checking for support does not pull three.js into a bundle.
 */
export function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}
