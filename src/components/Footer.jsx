export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} Akshit Sharma</span>
        <span className="hidden sm:inline">
          Built with React & Tailwind
        </span>
      </div>
    </footer>
  );
}
