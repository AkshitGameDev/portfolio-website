import { experiences } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="text-xl font-semibold">Experience</h2>
      <p className="mt-1 text-sm text-slate-400">
        Work history & relevant roles.
      </p>

      <div className="mt-6 space-y-4">
        {experiences.map((exp) => (
          <div
            key={`${exp.role}-${exp.company}`}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold">{exp.role}</h3>
                <p className="text-xs text-slate-400">{exp.company}</p>
              </div>
              <span className="text-[11px] text-slate-500">
                {exp.period}
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-400">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
