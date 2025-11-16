export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <span className="text-lg font-semibold tracking-tight">
          Akshit<span className="text-indigo-400">.</span>
        </span>
        <div className="flex gap-4 text-sm">
          <a href="#skills" className="hover:text-indigo-400">Skills</a>
          <a href="#projects" className="hover:text-indigo-400">Projects</a>
          <a href="#experience" className="hover:text-indigo-400">Experience</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </div>
      </nav>
    </header>
  );
}
