/**
 * ProjectsSection — Blueprint Developer style
 * Card grid with GitHub/demo links, tech badges, and key learnings
 */
import { Github, ExternalLink, Wrench, BookOpen, Zap } from "lucide-react";

const DISCORD_BOT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482733063/4jaoiWKKMSWPdEtevUigzk/discord-bot-project-d42pJErLTUQtSJSs6BNN9G.webp";

const PROJECTS = [
  {
    id: 1,
    title: "Discord Bot",
    subtitle: "전적 조회 & 포켓몬 정보 봇",
    description:
      "RIOT API를 활용하여 리그 오브 레전드 소환사의 전적 정보를 조회하고, PokeAPI를 통해 포켓몬 관련 정보를 Discord 채널에 출력하는 봇입니다.",
    image: DISCORD_BOT_IMG,
    tech: ["Node.js", "MySQL", "RIOT API", "PokeAPI", "Discord.js"],
    features: [
      "RIOT API 연동 전적 조회 기능",
      "포켓몬 정보 출력 (도감 번호, 타입, 스탯)",
      "MySQL 데이터베이스 연동",
      "Discord 슬래시 커맨드 구현",
    ],
    learnings: [
      { icon: Zap, text: "외부 API 활용 및 데이터 가공 능력 향상" },
      { icon: Wrench, text: "비동기 처리 (async/await) 패턴 습득" },
      { icon: BookOpen, text: "데이터베이스 설계 및 쿼리 작성 경험" },
    ],
    github: "https://github.com",
    demo: null,
    status: "완료",
    period: "2024",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        {/* Section Header */}
        <div className="reveal mb-16">
          <p className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-2 tracking-widest uppercase">03. Projects</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            <span className="section-dot">프로젝트</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl">
            직접 기획하고 개발한 프로젝트들입니다. 각 프로젝트를 통해 얻은 경험과 배운 점을 함께 정리했습니다.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-10">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className="reveal project-card bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-200 dark:hover:border-blue-700"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Image */}
                <div className="lg:col-span-2 relative overflow-hidden bg-slate-900 min-h-[220px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent" />
                  {/* Status badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="font-mono text-white/70 text-xs">{project.period}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-8">
                  {/* Title */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1">{project.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{project.subtitle}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          aria-label="Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge text-xs">{t}</span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-5">
                    <h4 className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">주요 기능</h4>
                    <ul className="space-y-1">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learnings */}
                  <div className="pt-5 border-t border-slate-100 dark:border-slate-700">
                    <h4 className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">배운 점</h4>
                    <div className="space-y-2">
                      {project.learnings.map((l) => (
                        <div key={l.text} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <l.icon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          {l.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects placeholder */}
        <div className="reveal mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-dashed border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500">
            <span className="text-sm">더 많은 프로젝트는 GitHub에서 확인하세요</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
