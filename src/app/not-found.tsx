import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="theme-kit grid min-h-screen place-items-center bg-bg text-ink">
      <Container className="text-center">
        <p className="font-semibold uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">That page is not in the kit</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The template you are looking for may have been renamed or has not been published yet.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink href="/" size="lg">
            Back to the gallery
          </ButtonLink>
          <Link
            href="/#templates"
            className="inline-flex h-12 items-center rounded-card border border-line px-6 text-sm font-semibold transition hover:border-accent hover:text-accent"
          >
            Browse templates
          </Link>
        </div>
      </Container>
    </div>
  );
}
