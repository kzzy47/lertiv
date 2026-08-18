import Image from "next/image";

export default function PlaceholderPhoto({
  label,
  className = "",
  src,
  alt,
  priority = false,
  objectPosition = "center",
}: {
  label: string;
  className?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
  objectPosition?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt ?? label}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectPosition }}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent transition-opacity duration-500 group-hover:from-black/30" />
      </div>
    );
  }

  return (
    <div className={`placeholder-photo relative flex items-end ${className}`}>
      <span className="m-3 border border-border-hover bg-background/70 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-text-muted">
        {label}
      </span>
    </div>
  );
}
