import { skills } from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="text-xl font-semibold">Skills</h2>
      <p className="mt-1 text-sm text-slate-400">
        Technologies I work with.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
