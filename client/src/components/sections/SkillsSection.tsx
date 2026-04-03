/**
 * SkillsSection — Blueprint Developer style
 * Categorized skill badges with icons
 */

const SKILL_CATEGORIES = [
  {
    category: "Languages",
    color: "blue",
    skills: [
      { name: "JavaScript", level: "주력", icon: "JS" },
      { name: "Python", level: "활용 가능", icon: "PY" },
      { name: "C#", level: "학습 중", icon: "C#" },
    ],
  },
  {
    category: "Frontend",
    color: "purple",
    skills: [
      { name: "React", level: "학습 중", icon: "⚛" },
      { name: "HTML/CSS", level: "활용 가능", icon: "🌐" },
    ],
  },
  {
    category: "Backend",
    color: "green",
    skills: [
      { name: "Node.js", level: "주력", icon: "🟢" },
      { name: "Express", level: "활용 가능", icon: "⚡" },
    ],
  },
  {
    category: "Database",
    color: "orange",
    skills: [
      { name: "MySQL", level: "활용 가능", icon: "🐬" },
      { name: "Oracle", level: "학습 중", icon: "🔴" },
    ],
  },
  {
    category: "Tools",
    color: "slate",
    skills: [
      { name: "Git", level: "활용 가능", icon: "🔀" },
      { name: "GitHub", level: "활용 가능", icon: "🐙" },
      { name: "VS Code", level: "주력", icon: "💙" },
    ],
  },
];

const LEVEL_COLORS: Record<string, string> = {
  "주력": "bg-blue-100 text-blue-700 border-blue-200",
  "활용 가능": "bg-green-100 text-green-700 border-green-200",
  "학습 중": "bg-amber-100 text-amber-700 border-amber-200",
};

const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  blue: { bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-700", dot: "bg-blue-500" },
  purple: { bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-700", dot: "bg-purple-500" },
  green: { bg: "bg-green-50", border: "border-green-100", text: "text-green-700", dot: "bg-green-500" },
  orange: { bg: "bg-orange-50", border: "border-orange-100", text: "text-orange-700", dot: "bg-orange-500" },
  slate: { bg: "bg-slate-50", border: "border-slate-200", text: "text-slate-700", dot: "bg-slate-500" },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container">
        {/* Section Header */}
        <div className="reveal mb-16">
          <p className="text-sm font-mono text-blue-600 mb-2 tracking-widest uppercase">02. Skills</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
            <span className="section-dot">기술 스택</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
          <p className="mt-4 text-slate-500 max-w-xl">
            현재까지 학습하고 프로젝트에 활용한 기술들입니다. 지속적으로 새로운 기술을 학습하고 있습니다.
          </p>
        </div>

        {/* Legend */}
        <div className="reveal flex flex-wrap gap-3 mb-10">
          {Object.entries(LEVEL_COLORS).map(([level, cls]) => (
            <span key={level} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${cls}`}>
              {level}
            </span>
          ))}
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => {
            const colors = CATEGORY_COLORS[cat.color];
            return (
              <div
                key={cat.category}
                className={`reveal p-6 rounded-xl border ${colors.bg} ${colors.border} hover:shadow-md hover:bg-blue-50 hover:border-blue-200 transition-all duration-300`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2.5 h-2.5 rounded-full ${colors.dot}`} />
                  <h3 className={`font-bold text-sm uppercase tracking-wider font-mono ${colors.text}`}>
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-start gap-1">
                      <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-white/80 shadow-sm">
                        <span className="text-sm">{skill.icon}</span>
                        <span className="font-semibold text-slate-800 text-sm">{skill.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${LEVEL_COLORS[skill.level]}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
