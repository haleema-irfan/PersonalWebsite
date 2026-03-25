"use client";

import Link from "next/link";

export default function Skills() {
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

      {/* Skills Section */}
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
              Technical Skills
            </h1>
          </div>
          
          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Programming Languages */}
            <div className="fade-down fade-down-delay-1">
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-3xl p-8 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Programming Languages</h2>
                    <p className="text-[#B3EBF2] text-sm">Core Development</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">Python</span>
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">C</span>
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">Java</span>
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">SQL</span>
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">JavaScript</span>
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">R</span>
                </div>
              </div>
            </div>

            {/* Frontend Development */}
            <div className="fade-down fade-down-delay-2">
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-3xl p-8 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Frontend Development</h2>
                    <p className="text-[#B3EBF2] text-sm">User Interface & Experience</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">React</span>
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">React Native</span>
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">HTML</span>
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">CSS</span>
                </div>
              </div>
            </div>

            {/* Backend Development */}
            <div className="fade-down fade-down-delay-3">
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-3xl p-8 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Backend Development</h2>
                    <p className="text-[#B3EBF2] text-sm">Server & API Development</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">Node.js</span>
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">NestJS</span>
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">Express.js</span>
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">Flask</span>
                </div>
              </div>
            </div>

            {/* Database Management */}
            <div className="fade-down fade-down-delay-4">
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-3xl p-8 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🗄️</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Database Management</h2>
                    <p className="text-[#B3EBF2] text-sm">Data Storage & Management</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">Supabase</span>
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">PostgreSQL</span>
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">MongoDB</span>
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">NoSQL</span>
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">Firebase</span>
                </div>
              </div>
            </div>

            {/* DevOps */}
            <div className="fade-down fade-down-delay-5 lg:col-span-2">
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-3xl p-8 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">DevOps</h2>
                    <p className="text-[#B3EBF2] text-sm">Deployment & Infrastructure</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">AWS</span>
                  <span className="px-4 py-2 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm font-medium">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
