/**
 * ProjectsSection — Blueprint Developer style (Improved)
 * Card grid with project image + tagline, development story, tech reasoning, and problem-solution learnings
 */
import { Github, ExternalLink, AlertCircle, CheckCircle } from "lucide-react";

const DISCORD_BOT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663482733063/4jaoiWKKMSWPdEtevUigzk/discord-bot-project-d42pJErLTUQtSJSs6BNN9G.webp";

const PROJECTS = [
  {
    id: 1,
    title: "Discord Bot",
    tagline: "리그 오브 레전드 전적 조회 & 포켓몬 정보 봇",
    story:
      "Discord 커뮤니티에서 팀원들이 게임 전적을 쉽게 확인하고 싶다는 요청에서 시작했습니다. 단순한 조회 기능을 넘어 외부 API를 활용해 데이터를 가공하고 사용자에게 의미 있는 정보로 전달하는 경험을 쌓았습니다.",
    image: DISCORD_BOT_IMG,
    tech: [
      { name: "Node.js", reason: "비동기 처리가 필요한 API 호출과 데이터 처리에 최적화" },
      { name: "MySQL", reason: "사용자 데이터와 조회 기록을 안정적으로 저장 및 관리" },
      { name: "RIOT API", reason: "리그 오브 레전드 공식 데이터를 실시간으로 조회" },
      { name: "PokeAPI", reason: "포켓몬 정보를 무료로 제공받아 추가 기능 구현" },
      { name: "Discord.js", reason: "Discord 봇 개발을 위한 공식 라이브러리" },
    ],
    learnings: [
      {
        problem: "외부 API 응답 시간이 불안정하여 사용자가 오래 기다려야 함",
        solution: "캐싱 메커니즘을 구현해 자주 조회하는 데이터는 로컬에 저장하고, 필요할 때만 API 호출하도록 최적화",
      },
      {
        problem: "API 응답 구조가 복잡해서 필요한 정보를 찾기 어려움",
        solution: "데이터 파싱 함수를 작성해 복잡한 JSON을 간단한 구조로 변환하고, 사용자가 이해하기 쉬운 형식으로 포맷팅",
      },
      {
        problem: "데이터베이스 쿼리가 느려져서 조회 속도가 저하됨",
        solution: "인덱싱과 쿼리 최적화를 통해 응답 시간을 50% 이상 단축",
      },
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
            직접 기획하고 개발한 프로젝트들입니다. 각 프로젝트의 개발 과정과 배운 점을 함께 정리했습니다.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-10">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className="reveal project-card bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-700"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Top: Image + Tagline */}
              <div className="relative overflow-hidden bg-slate-900 h-48 lg:h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent" />
                
                {/* Status badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                    {project.status}
                  </span>
                </div>

                {/* Tagline overlay */}
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-2">{project.title}</h3>
                    <p className="text-blue-200 font-medium text-sm lg:text-base">{project.tagline}</p>
                  </div>
                  <div className="flex gap-2 ml-4 flex-shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-white/10 backdrop-blur text-white hover:bg-white/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-white/10 backdrop-blur text-white hover:bg-white/20 transition-colors"
                        aria-label="Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Period badge */}
                <div className="absolute top-4 right-4">
                  <span className="font-mono text-white/70 text-xs bg-black/20 px-2 py-1 rounded-full">{project.period}</span>
                </div>
              </div>

              {/* Bottom: Content */}
              <div className="p-8 lg:p-10">
                {/* Development Story */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">개발 배경</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm lg:text-base">
                    {project.story}
                  </p>
                </div>

                {/* Tech Stack with Reasoning */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">기술 스택</h4>
                  <div className="space-y-2">
                    {project.tech.map((t) => (
                      <div key={t.name} className="flex items-start gap-3">
                        <span className="tech-badge text-xs flex-shrink-0 mt-0.5">{t.name}</span>
                        <p className="text-slate-600 dark:text-slate-400 text-xs lg:text-sm leading-relaxed">
                          {t.reason}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Problem → Solution Learnings */}
                <div className="pt-8 border-t border-slate-100 dark:border-slate-700">
                  <h4 className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">배운 점</h4>
                  <div className="space-y-4">
                    {project.learnings.map((l, idx) => (
                      <div key={idx} className="space-y-2">
                        {/* Problem */}
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">문제</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300">{l.problem}</p>
                          </div>
                        </div>
                        {/* Solution */}
                        <div className="flex items-start gap-3 ml-0 pl-0">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">해결</p>
                            <p className="text-sm text-slate-700 dark:text-slate-300">{l.solution}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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
