/**
 * HeroSection — Blueprint Developer style
 * Asymmetric layout: left text + right code editor decoration
 * Background: circuit board pattern image
 */
import { ArrowDown, Github, Mail } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482733063/4jaoiWKKMSWPdEtevUigzk/hero-bg-65F9JxK4MbPc6TGP6PK6zF.webp";
const CODE_EDITOR = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482733063/4jaoiWKKMSWPdEtevUigzk/hero-decoration-CsF5LmHrvhkjqPzoTC4W5D.webp";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 dark:bg-slate-950/60" />

      <div className="container relative z-10 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 mb-6 animate-fade-in-up">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                구직 중 · Open to Work
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4 animate-fade-in-up-delay-1">
              안녕하세요,
              <br />
              <span className="text-blue-600 dark:text-blue-400">김현탁</span>입니다.
            </h1>

            {/* Tagline */}
            <div className="blueprint-accent mb-6 animate-fade-in-up-delay-2">
              <p className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-1">
                백엔드 개발자를 목표로 하는 개발자
              </p>
              <p className="text-slate-500 text-base leading-relaxed">
                데이터를 가공해 사용자에게 보기 쉽게 전달하는 것을 좋아합니다.
                <br />
                API 활용과 데이터 처리 과정에 흥미를 느끼고 있습니다.
              </p>
            </div>

            {/* Tech stack preview */}
            <div className="flex flex-wrap gap-2 mb-8 animate-fade-in-up-delay-3">
              {["Node.js", "JavaScript", "Python", "MySQL", "Git"].map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up-delay-4">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                프로젝트 보기
              </button>
              <a
                href="https://github.com/janalai3395"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:border-blue-300 hover:text-blue-600 dark:text-blue-400 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="mailto:gusxkrtkfkd@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:border-blue-300 hover:text-blue-600 dark:text-blue-400 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                이메일
              </a>
            </div>
          </div>

          {/* Right: Code Editor Decoration */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in-up-delay-2">
            <div className="relative">
              {/* Subtle shadow */}
              <div className="absolute -inset-4 bg-slate-400/10 rounded-2xl blur-2xl" />
              <img
                src={CODE_EDITOR}
                alt="코드 에디터"
                className="relative w-full max-w-lg rounded-xl shadow-2xl"
                style={{ filter: "drop-shadow(0 20px 40px rgba(37,99,235,0.2))" }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-blue-600 dark:text-blue-400 transition-colors"
            aria-label="아래로 스크롤"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
