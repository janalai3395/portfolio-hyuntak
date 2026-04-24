/**
 * ContactSection — Blueprint Developer style
 * Email + GitHub + Instagram contact with clean card layout
 */
import { Mail, Github, MessageSquare, Instagram } from "lucide-react";

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
        <div className="max-w-5xl mx-auto">
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Email */}
            <a
              href="mailto:gusxkrtkfkd@gmail.com"
              className="group p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-all duration-300">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">이메일</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 break-all">gusxkrtkfkd@gmail.com</p>
              <span className="mt-3 inline-block text-xs text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                메일 보내기 →
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/janalai3395"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-slate-200 dark:group-hover:bg-slate-600 transition-all duration-300">
                <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">GitHub</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">github-janalai3395</p>
              <span className="mt-3 inline-block text-xs text-slate-600 dark:text-slate-400 font-medium group-hover:underline">
                프로필 보기 →
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/gusxkrtkfkd"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-pink-300 dark:hover:border-pink-700 hover:bg-pink-50 dark:hover:bg-slate-700 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 bg-pink-50 dark:bg-pink-950 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-pink-100 dark:group-hover:bg-pink-900 transition-all duration-300">
                <Instagram className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Instagram</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">@gusxkrtkfkd</p>
              <span className="mt-3 inline-block text-xs text-pink-600 dark:text-pink-400 font-medium group-hover:underline">
                프로필 보기 →
              </span>
            </a>
          </div>

          {/* CTA */}
          <div className="reveal p-8 bg-blue-50 dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-slate-700 text-center">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">함께 일해요</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-5">
              좋은 기회나 협업 제안이 있으시면 언제든지 연락 주세요.
            </p>
            <a
              href="mailto:gusxkrtkfkd@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm"
            >
              <Mail className="w-4 h-4" />
              이메일 보내기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
