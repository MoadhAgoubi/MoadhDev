import SectionLabel from "@/components/SectionLabel";
import { site, type Project, type ProjectTone } from "@/data/site";

const toneClasses: Record<ProjectTone, string> = {
  stone: "from-stone-200 via-stone-100 to-stone-50",
  sage: "from-emerald-100 via-stone-50 to-stone-100",
  sand: "from-amber-100 via-stone-50 to-stone-100",
  slate: "from-slate-200 via-stone-50 to-stone-100",
};

function ProjectCard({ project }: { project: Project }) {
  const isExternal = project.href.startsWith("http");

  return (
    <article>
      <a
        href={project.href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group block"
      >
        <div className="relative overflow-hidden rounded-xl border border-line bg-sheet">
          <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-2.5">
            <span className="h-2 w-2 rounded-full bg-line" aria-hidden="true" />
            <span className="h-2 w-2 rounded-full bg-line" aria-hidden="true" />
            <span className="h-2 w-2 rounded-full bg-line" aria-hidden="true" />
          </div>
          <div
            className={`flex aspect-[16/10] items-center justify-center bg-linear-to-br ${toneClasses[project.tone]}`}
          >
            <span
              aria-hidden="true"
              className="font-script text-4xl text-ink/25 transition-transform duration-300 group-hover:scale-110"
            >
              {project.title.charAt(0)}
            </span>
          </div>
          <span className="absolute left-3 top-[42px] inline-flex items-center gap-1.5 rounded-full border border-line bg-sheet/90 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-soft backdrop-blur-sm">
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${project.live ? "bg-accent" : "bg-amber-400"}`}
            />
            {project.live ? "En ligne" : "En cours"}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.1em] text-faint">
          <span>{project.period}</span>
          <span className="transition-colors group-hover:text-ink">
            {project.linkLabel}
            <span aria-hidden="true"> ↗</span>
            {isExternal && (
              <span className="sr-only"> (ouvre un nouvel onglet)</span>
            )}
          </span>
        </div>
        <h3 className="mt-2 text-[15px] font-semibold leading-snug text-ink">
          {project.title}
        </h3>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-soft">
          {project.description}
        </p>
      </a>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projets" className="scroll-mt-10 py-12">
      <div className="flex items-baseline justify-between">
        <SectionLabel>Projets</SectionLabel>
        <a
          href="https://github.com/MoadhAgoubi"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-soft transition-colors hover:text-ink"
        >
          Tous les projets
          <span className="sr-only"> (ouvre un nouvel onglet)</span>
        </a>
      </div>
      <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2">
        {site.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
