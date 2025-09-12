"use client";

import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#1A202C] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A202C]/95 backdrop-blur-sm border-b border-gray-800/50">
        <div className="flex justify-center items-center py-4">
          <div className="flex gap-12 text-lg font-bold text-gray-300">
            <Link href="/" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">Home</Link>
            <Link href="/work" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">Work Experience</Link>
            <Link href="/projects" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">Projects</Link>
            <Link href="/skills" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">Skills</Link>
            <Link href="/contact" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">Contact Me</Link>
          </div>
        </div>
      </nav>

      {/* Projects Section */}
      <section className="pt-24 pb-16 px-8 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 bg-[#B3EBF2]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#3C414A]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#B3EBF2]/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="fade-down text-5xl lg:text-6xl font-bold mb-4">
              My Projects
            </h1>
          </div>
          
          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Campus Connect Project */}
            <div className="fade-down fade-down-delay-1">
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-3xl p-8 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Campus Connect</h2>
                    <p className="text-[#B3EBF2] text-sm">Mobile Application</p>
                    <p className="text-gray-400 text-sm">Jun 2024 - Aug 2024</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Built a <strong className="text-white">cross-platform social app</strong> (PERN + React Native) that enabled 
                  <strong className="text-white"> real-time student support and guidance</strong>.
                  <br /><br />
                  <strong className="text-white">WebSockets chat</strong> delivered instant conversations, improving engagement.
                  <br /><br />
                  <strong className="text-white">PostgreSQL + Supabase</strong> schema design improved data reliability and scalability.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">Express.js</span>
                  <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">React Native</span>
                  <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">Tailwind CSS</span>
                </div>

                <div className="pt-4">
                  <a href="/projects/campus-connect" className="inline-flex items-center gap-2 nav-link text-lg text-white hover:text-[#B3EBF2] transition-colors">
                    Read More
                    <span className="text-[#B3EBF2]">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Reminder Bot Project */}
            <div className="fade-down fade-down-delay-2">
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-3xl p-8 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Reminder Bot</h2>
                    <p className="text-[#B3EBF2] text-sm">Telegram Bot</p>
                    <p className="text-gray-400 text-sm">Aug 2024 - Oct 2024</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Developed a <strong className="text-white">Telegram reminders assistant</strong> with Flask + MongoDB for dependable storage.
                  <br /><br />
                  <strong className="text-white">CI/CD on Render</strong> automated deploys and improved uptime & iteration speed.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">Flask</span>
                  <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">Render</span>
                </div>

                <div className="pt-4">
                  <a href="/projects/reminder-bot" className="inline-flex items-center gap-2 nav-link text-lg text-white hover:text-[#B3EBF2] transition-colors">
                    Read More
                    <span className="text-[#B3EBF2]">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}