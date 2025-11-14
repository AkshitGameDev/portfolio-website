import { projects } from "../data/profile";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="text-xl font-semibold">Projects</h2>
      <p className="mt-1 text-sm text-slate-400">
        Selected work and personal projects.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
          >
            {project.image && (
              <div className="mb-3 h-32 w-full overflow-hidden rounded-xl bg-slate-800">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <h3 className="text-sm font-semibold">{project.name}</h3>
            <p className="mt-2 text-xs text-slate-400">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-800 px-2 py-1 text-[10px] uppercase tracking-wide text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-xs">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:underline"
                >
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
