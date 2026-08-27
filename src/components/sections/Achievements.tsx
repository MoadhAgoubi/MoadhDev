import SectionLabel from "@/components/SectionLabel";
import { site } from "@/data/site";

export default function Achievements() {
  return (
    <section className="grid gap-6 py-12 sm:grid-cols-[150px_1fr] sm:gap-10">
      <SectionLabel>En chiffres</SectionLabel>
      <ul className="grid grid-cols-3 gap-3 sm:gap-6">
        {site.stats.map((stat) => (
          <li key={stat.label}>
            <p className="font-mono text-[22px] font-semibold leading-none text-ink">
              {stat.value}
            </p>
            <p className="mt-2 text-[12px] leading-snug text-soft">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
