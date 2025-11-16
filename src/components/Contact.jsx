import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="text-xl font-semibold">Contact</h2>
      <p className="mt-1 text-sm text-slate-400">
        Best way to reach me.
      </p>

      <div className="mt-4 space-y-2 text-sm">
        <p>
          Email:{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-indigo-400 hover:underline"
          >
            {profile.email}
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:underline"
          >
            {profile.linkedin}
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:underline"
          >
            {profile.github}
          </a>
        </p>
      </div>
    </section>
  );
}
