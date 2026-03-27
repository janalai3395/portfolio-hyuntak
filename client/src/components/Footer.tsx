/**
 * Footer — Blueprint Developer style
 * Minimal footer with copyright and nav links
 */
import { Code2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-white text-sm">김현탁</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-500">
            © {currentYear} 김현탁. Built with React & Tailwind CSS.
          </p>

          {/* Nav */}
          <nav className="flex gap-4 text-xs">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
