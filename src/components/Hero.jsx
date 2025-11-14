import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-6 px-4 pb-16 pt-10 md:flex-row md:items-center">
      <div className="flex-1">
        <p className="text-xs uppercase tracking-[0.25em] text-indigo-400">
          Portfolio
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          {profile.name}
        </h1>
        <h2 className="mt-1 text-lg text-slate-300 md:text-xl">
          {profile.title}
        </h2>
        <p className="mt-4 text-sm text-slate-400 md:text-base">
          {profile.summary}
        </p>
        <p className="mt-2 text-xs text-slate-500">{profile.location}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-indigo-500 px-4 py-2 text-sm font-medium hover:bg-indigo-500 hover:text-white"
          >
            Email me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800"
          >
            LinkedIn
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm hover:bg-slate-800"
            >
              Resume
            </a>
          )}
        </div>
      </div>

      <div className="mt-8 flex-1 md:mt-0 md:flex md:justify-end">
        <div className="h-40 w-40 rounded-3xl border border-slate-800 bg-gradient-to-br from-indigo-500/40 via-slate-900 to-slate-900 shadow-lg md:h-48 md:w-48" />
      </div>
    </section>
  );
}
