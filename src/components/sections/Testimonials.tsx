import SectionLabel from "@/components/SectionLabel";
import { site } from "@/data/site";

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

export default function Testimonials() {
  return (
    <section className="py-12">
      <SectionLabel>Témoignages</SectionLabel>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {site.testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex flex-col justify-between rounded-xl border border-line bg-sheet p-6"
          >
            <blockquote className="text-[13.5px] leading-relaxed text-soft">
              «&nbsp;{testimonial.quote}&nbsp;»
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper font-mono text-[11px] font-semibold text-soft"
              >
                {initialsOf(testimonial.name)}
              </span>
              <span>
                <span className="block text-[13px] font-semibold text-ink">
                  {testimonial.name}
                </span>
                <span className="block text-[11.5px] text-faint">
                  {testimonial.role}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
