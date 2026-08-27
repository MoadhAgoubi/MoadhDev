import SectionLabel from "@/components/SectionLabel";
import { site } from "@/data/site";

export default function About() {
  return (
    <section
      id="a-propos"
      className="grid scroll-mt-10 gap-6 py-16 sm:grid-cols-[150px_1fr] sm:gap-10"
    >
      <SectionLabel>À propos</SectionLabel>
      <div className="max-w-[520px] space-y-5 text-[14.5px] leading-relaxed text-soft">
        {site.about.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
        <div className="pt-3">
          <p aria-hidden="true" className="font-script text-[30px] leading-none text-ink">
            {site.name}
          </p>
          <p className="mt-1.5 text-[12.5px] text-soft">{site.name}</p>
        </div>
      </div>
    </section>
  );
}
