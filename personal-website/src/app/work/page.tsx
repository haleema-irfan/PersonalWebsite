"use client";

import Link from "next/link";

export default function Work() {
  return (
    <div className="min-h-screen bg-[#1A202C] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A202C]/95 backdrop-blur-sm border-b border-gray-800/50">
        <div className="flex justify-center items-center py-4">
          <div className="flex gap-12 text-lg font-bold text-gray-300">
            <Link href="/" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">Home</Link>
            <Link href="/work" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">Work Experience</Link>
            <Link href="/ctfs" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">CTFs</Link>
            <Link href="/projects" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">Projects</Link>
            <Link href="/skills" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">Skills</Link>
            <Link href="/contact" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">Contact Me</Link>
          </div>
        </div>
      </nav>

      {/* Work Experience Section */}
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
              My Work
            </h1>
          </div>
          
          {/* Work Experience Grid */}
          <div id="synapxe" className="grid lg:grid-cols-3 gap-8 scroll-mt-32">
            {/* Left Column - Company Info */}
            <div className="fade-down fade-down-delay-1 lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-gradient-to-br from-[#3C414A]/50 to-[#3C414A]/30 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/30">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">🏥</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Synapxe</h2>
                      <p className="text-[#B3EBF2] text-sm">National HealthTech Agency of Singapore</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Role</h3>
                      <p className="text-gray-300">Engineering Ops Intern</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">AWS S3</span>
                        <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">Bash</span>
                        <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">Outlook</span>
                        <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">Excel VBA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Achievements */}
            <div className="fade-down fade-down-delay-2 lg:col-span-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-6 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-[#B3EBF2] text-lg">🧩</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">UAM Pipeline Redesign</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">Consolidated fragmented per-application macros into a <strong className="text-white">unified 3-step configurable workflow</strong>.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-6 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-[#B3EBF2] text-lg">📨</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Onboarding Automation</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">Eliminated manual email data entry by building a parser that <strong className="text-white">traverses Outlook threads</strong> and <strong className="text-white">auto-populates Excel</strong>.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-6 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300 hover:scale-105 md:col-span-2">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-[#B3EBF2] text-lg">☁️</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">AWS File Transfer Automation</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">Automated bulk S3 file movements with <strong className="text-white">Bash</strong>, with <strong className="text-white">spooled logging</strong> for auditability.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <a href="/work/synapxe" className="inline-flex items-center gap-2 nav-link text-lg text-white hover:text-[#B3EBF2] transition-colors">
                    Read More
                    <span className="text-[#B3EBF2]">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 flex justify-center">
            <a
              href="#domus"
              className="group inline-flex flex-col items-center gap-2 text-gray-300 hover:text-[#B3EBF2] transition-colors"
            >
              <span className="text-sm tracking-wide">More experience</span>
              <span className="text-[#B3EBF2] text-xl transition-transform duration-300 group-hover:translate-y-1 animate-bounce">
                ↓
              </span>
            </a>
          </div>

          {/* Domus */}
          <div id="domus" className="grid lg:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-800/50 scroll-mt-32">
            {/* Left Column - Company Info */}
            <div className="fade-down fade-down-delay-1 lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-gradient-to-br from-[#3C414A]/50 to-[#3C414A]/30 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/30">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Domus</h2>
                      <p className="text-[#B3EBF2] text-sm">Mobile Application</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Role</h3>
                      <p className="text-gray-300">Full-Stack Developer</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">React Native</span>
                        <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">NestJS</span>
                        <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">PostgreSQL</span>
                        <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">Firebase</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Achievements */}
            <div className="fade-down fade-down-delay-2 lg:col-span-2">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-6 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-[#B3EBF2] text-lg">🚀</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Full-Stack Automation</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">Built a <strong className="text-white">full-stack app</strong> automating condo management tasks, <strong className="text-white">reducing manpower dependency</strong>.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-6 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-[#B3EBF2] text-lg">🏗️</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Scalable Architecture</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">Designed <strong className="text-white">scalable, modular architecture</strong> for <strong className="text-white">maintainability and cross-platform reach</strong>.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-6 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-[#B3EBF2] text-lg">🔒</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Security & Usability</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">Enhanced <strong className="text-white">security & usability</strong> with JSON Web Token authentication and SMS 2FA.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-6 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-[#B3EBF2] text-lg">🤝</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Stakeholder Coordination</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">Coordinated with founders & investors, ensuring <strong className="text-white">business and tech alignment</strong>.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <a href="/work/domus" className="inline-flex items-center gap-2 nav-link text-lg text-white hover:text-[#B3EBF2] transition-colors">
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