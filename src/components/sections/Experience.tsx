import SectionLabel from "@/components/SectionLabel";
import { site } from "@/data/site";

export default function Experience() {
  return (
    <section id="parcours" className="scroll-mt-10 py-12">
      <SectionLabel>Parcours</SectionLabel>
      <ol className="mt-8 max-w-[540px] space-y-12 border-l border-line pl-8">
        {site.experience.map((item) => (
          <li key={item.period} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[38px] top-1 h-2.5 w-2.5 rounded-full border-2 border-faint-decor bg-sheet"
            />
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              {item.period}
            </p>
            <h3 className="mt-2.5 flex flex-wrap items-center gap-2 text-[15px] font-semibold text-ink">
              {item.role}
              <span className="font-normal text-faint-decor" aria-hidden="true">
                ·
              </span>
              <span className="inline-flex items-center rounded-md border border-line px-2 py-0.5 text-[13px] font-medium">
                {item.company}
              </span>
            </h3>
            <ul className="mt-3.5 space-y-2 text-[13.5px] leading-relaxed text-soft">
              {item.bullets.map((bullet) => (
                <li key={bullet.slice(0, 32)} className="flex gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-faint-decor"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10.5px] text-soft"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
