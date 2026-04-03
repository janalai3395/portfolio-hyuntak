/**
 * AboutSection — Blueprint Developer style
 * Self-introduction with key highlights
 */
import { User, Target, GitBranch, Lightbulb } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Target,
    title: "목표",
    desc: "백엔드 개발자로 성장하여 안정적이고 효율적인 서버 환경을 구축하는 개발자가 되고 싶습니다.",
  },
  {
    icon: Lightbulb,
    title: "관심 분야",
    desc: "API 활용을 통한 데이터 가공과 사용자에게 의미 있는 정보를 전달하는 과정에 흥미를 느끼고 있습니다.",
  },
  {
    icon: GitBranch,
    title: "협업 경험",
    desc: "프로젝트 경험을 통해 팀원과의 협업 방식과 Git을 활용한 버전 관리 방법을 익혔습니다.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container">
        {/* Section Header */}
        <div className="reveal mb-16">
          <p className="text-sm font-mono text-blue-600 mb-2 tracking-widest uppercase">01. About</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
            <span className="section-dot">저에 대해</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Main intro */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Developer</p>
                <h3 className="text-xl font-bold text-slate-900">김현탁</h3>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                백엔드 개발자를 목표로 하는 개발자입니다. 데이터를 가공하고 사용자에게 보기 쉽게 전달하는 것을 좋아합니다.
              </p>
              <p>
                API를 활용해 데이터를 가공하고 사용자에게 전달하는 과정에 흥미를 느끼고 있으며, 이를 통해 실제로 도움이 되는 서비스를 만들고 싶습니다.
              </p>
              <p>
                프로젝트 경험을 통해 협업과 Git 사용 방법을 익혔으며, 앞으로도 꾸준히 성장하는 개발자가 되겠습니다.
              </p>
            </div>

            {/* Info grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-slate-100">
                <p className="text-xs text-slate-400 font-mono mb-1">학번</p>
                <p className="font-semibold text-slate-800">202395013</p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-slate-100">
                <p className="text-xs text-slate-400 font-mono mb-1">전공</p>
                <p className="font-semibold text-slate-800">컴퓨터 관련 학과</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 col-span-2">
                <p className="text-xs text-blue-500 font-mono mb-1">목표</p>
                <p className="font-semibold text-blue-800">백엔드 개발자</p>
              </div>
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="space-y-4">
            {HIGHLIGHTS.map((item, i) => (
              <div
                key={item.title}
                className={`reveal p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
