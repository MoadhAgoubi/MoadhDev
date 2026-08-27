import ScrollTopButton from "@/components/ScrollTopButton";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="pt-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[240px] text-[13px] leading-relaxed text-soft">
          {site.footer.line}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="text-xl font-medium tracking-tight text-ink transition-opacity hover:opacity-70 sm:text-2xl"
        >
          {site.email}
        </a>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <ul className="flex gap-2.5">
          {site.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] text-soft transition-colors hover:border-ink hover:text-ink"
              >
                {social.label}
                <span className="sr-only"> (ouvre un nouvel onglet)</span>
              </a>
            </li>
          ))}
        </ul>
        <ScrollTopButton />
      </div>

      <p className="mt-10 text-center font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint">
        © 2026 {site.name}. Tous droits réservés.
      </p>

      {/* Le filigrane est volontairement rogné par overflow-hidden : sa taille
          suit celle du conteneur (x1,5 comme lui, dès que celui-ci atteint ses
          900px) pour garder le même débordement de part et d'autre. */}
      <div
        aria-hidden="true"
        className="mt-4 h-14 select-none overflow-hidden sm:h-20 lg:h-[120px]"
      >
        <p className="whitespace-nowrap text-center text-[17vw] font-bold leading-none tracking-tighter text-line sm:text-[104px] lg:text-[156px]">
          {site.footer.watermark}
        </p>
      </div>
    </footer>
  );
}
