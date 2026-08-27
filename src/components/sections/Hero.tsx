import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="pb-16">
      <p className="mb-6 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-soft">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        {site.availability}
      </p>

      <h1 className="text-[26px] font-semibold leading-snug tracking-tight sm:text-[30px]">
        Salut, je suis{" "}
        <span
          aria-hidden="true"
          className="mx-0.5 inline-flex h-9 w-9 -translate-y-0.5 items-center justify-center rounded-lg bg-ink align-middle font-mono text-xs font-semibold text-sheet"
        >
          {site.initials}
        </span>{" "}
        {site.name}
        <br />
        {site.role}
      </h1>

      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-soft">
        {site.tagline}
      </p>

      <a
        href={site.cta.href}
        className="mt-8 inline-block rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-sheet transition-opacity hover:opacity-80"
      >
        {site.cta.label}
      </a>
    </section>
  );
}
