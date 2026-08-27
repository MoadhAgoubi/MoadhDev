import SectionLabel from "@/components/SectionLabel";
import { site } from "@/data/site";

export default function Stacks() {
  return (
    <section className="py-12">
      <SectionLabel>Stack technique</SectionLabel>
      <ul className="mt-6 flex flex-wrap gap-2">
        {site.stacks.map((stack) => (
          <li
            key={stack}
            className="rounded-full border border-line bg-sheet px-3 py-1 font-mono text-[11px] text-soft"
          >
            {stack}
          </li>
        ))}
      </ul>
    </section>
  );
}
