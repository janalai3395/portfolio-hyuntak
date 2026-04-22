/**
 * ActivitySection — Blueprint Developer style
 * Timeline-style activity list with education
 */
import { Users, GraduationCap, Calendar } from "lucide-react";

const ACTIVITIES = [
  {
    type: "club",
    icon: Users,
    title: "교내 개발 동아리 IN&OUT",
    period: "재학 중",
    description: "교내 개발 동아리 IN&OUT에서 활동하며 다양한 개발 경험과 팀원들과의 협업 능력을 키우고 있습니다.",
    tags: ["팀 협업", "개발 스터디", "프로젝트"],
    color: "blue",
  },
  {
    type: "club",
    icon: Users,
    title: "만화 A-L동아리 부회장",
    period: "2025년",
    description: "만화 A-L동아리에서 부회장으로 활동하며 동아리 운영과 회원들과의 협력을 주도했습니다.",
    tags: ["동아리 운영", "리더십", "협력"],
    color: "blue",
  },
  {
    type: "club",
    icon: Users,
    title: "만화 A-L동아리 회장",
    period: "2026년",
    description: "만화 A-L동아리의 회장으로서 동아리의 전반적인 운영과 발전을 주도하고 있습니다.",
    tags: ["리더십", "동아리 운영", "기획"],
    color: "blue",
  },
];

const EDUCATION = [
  {
    icon: GraduationCap,
    school: "신라대학교",
    major: "컴퓨터공학과",
    period: "재학 중",
    studentId: "202395013",
  },
];

export default function ActivitySection() {
  return (
    <section id="activity" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        {/* Section Header */}
        <div className="reveal mb-16">
          <p className="text-sm font-mono text-blue-600 dark:text-blue-400 dark:text-blue-400 mb-2 tracking-widest uppercase">04. Activity</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            <span className="section-dot">활동 & 학력</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Activities */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              활동
            </h3>
            <div className="space-y-4">
              {ACTIVITIES.map((act, i) => (
                <div
                  key={i}
                  className="reveal p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <act.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-slate-900">{act.title}</h4>
                        <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3 h-3" />
                          {act.period}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">{act.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {act.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 bg-blue-50 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full border border-blue-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              학력
            </h3>
            <div className="space-y-4">
              {EDUCATION.map((edu, i) => (
                <div
                  key={i}
                  className="reveal p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <edu.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-slate-900">{edu.school}</h4>
                        <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.major}</p>
                      <p className="text-xs text-slate-400 font-mono">학번: {edu.studentId}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Growth mindset card */}
            <div className="reveal mt-6 p-6 bg-blue-600 rounded-xl text-white">
              <h4 className="font-bold mb-2">성장하는 개발자</h4>
              <p className="text-sm text-blue-100 leading-relaxed">
                매일 조금씩 성장하는 것을 목표로, 새로운 기술을 꾸준히 학습하고 있습니다.
                백엔드 개발자로서의 역량을 키우기 위해 다양한 프로젝트에 도전하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
