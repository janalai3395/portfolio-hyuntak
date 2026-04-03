/**
 * ContactSection — Blueprint Developer style
 * Email + GitHub contact with clean card layout
 */
import { Mail, Github, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="container">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <p className="text-sm font-mono text-blue-600 dark:text-blue-400 mb-2 tracking-widest uppercase">05. Contact</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            연락하기
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mb-6" />
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            프로젝트 협업이나 채용 관련 문의는 언제든지 환영합니다.
            아래 채널로 연락해 주세요.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-2xl mx-auto">
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {/* Email */}
            <a
              href="mailto:example@email.com"
              className="group p-8 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-950 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-all duration-300 group-hover:scale-110">
                <Mail className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">이메일</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">example@email.com</p>
              <span className="mt-3 inline-block text-xs text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                메일 보내기 →
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-14 h-14 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-300 dark:group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-110">
                <Github className="w-7 h-7 text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">GitHub</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">@github-username</p>
              <span className="mt-3 inline-block text-xs text-slate-600 font-medium group-hover:underline">
                프로필 보기 →
              </span>
            </a>
          </div>

          {/* CTA */}
          <div className="reveal p-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl text-white text-center shadow-lg">
            <MessageSquare className="w-8 h-8 mx-auto mb-3 opacity-80" />
            <h3 className="text-xl font-bold mb-2">함께 만들어요</h3>
            <p className="text-blue-100 text-sm mb-5 leading-relaxed">
              좋은 아이디어가 있으시다면 언제든지 연락 주세요.
              <br />
              함께 성장할 기회를 기다리고 있습니다.
            </p>
            <a
              href="mailto:example@email.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-sm"
            >
              <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              이메일 보내기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
