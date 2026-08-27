import SectionLabel from "@/components/SectionLabel";
import { site } from "@/data/site";

export default function TrustedBy() {
  return (
    <section className="py-8">
      <SectionLabel>Ils me font confiance</SectionLabel>
      <ul className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-3">
        {site.trustedBy.map((name) => (
          <li
            key={name}
            className="text-[14px] font-semibold tracking-tight text-soft"
          >
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
