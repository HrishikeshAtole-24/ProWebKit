"use client";

import Image, { type ImageLoaderProps } from "next/image";

/**
 * Unsplash photography, resized on Unsplash's own CDN rather than through
 * the Next image optimiser. `id` is the "photo-…" path segment.
 */
function unsplash({ src, width, quality }: ImageLoaderProps) {
  return `https://images.unsplash.com/${src}?w=${width}&q=${quality ?? 72}&auto=format&fit=crop`;
}

export function Photo({
  id,
  alt,
  sizes = "100vw",
  priority = false,
  className,
}: {
  id: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      loader={unsplash}
      src={id}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className ?? ""}`}
    />
  );
}
