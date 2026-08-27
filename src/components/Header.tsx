import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-y-3 pb-16 pt-10">
      <a
        href="#"
        aria-label="Revenir en haut de la page"
        className="inline-block py-1 font-script text-[26px] leading-none text-ink"
      >
        {site.logo}
      </a>
      <nav aria-label="Navigation principale">
        <ul className="flex items-center gap-4 sm:gap-7">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-block py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-soft transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
