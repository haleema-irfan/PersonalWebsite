"use client";

import Link from "next/link";

export default function CampusConnect() {
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

      {/* Campus Connect Detail Section */}
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
              Campus Connect
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Context */}
            <div className="fade-down fade-down-delay-1 space-y-8">
              {/* The Challenge */}
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-6 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#B3EBF2] text-lg">🎯</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-3">The Challenge</h2>
                          <p className="text-gray-300 leading-relaxed">
                            Students lacked a <strong className="text-white">centralised space</strong> for academic and personal guidance. 
                            Conversations were <strong className="text-white">scattered and slow</strong>, making it difficult to get timely support and connect with peers.
                          </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Contributions */}
            <div className="fade-down fade-down-delay-2">
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-8 border border-gray-700/20">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">My Contributions</h2>

                <div className="grid gap-6">
                  {/* APIs & Data */}
                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">🔗</span>
                      </span>
                      APIs & Data
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Built <strong className="text-white">RESTful endpoints</strong> in Express and designed a <strong className="text-white">PostgreSQL schema</strong> hosted on Supabase, 
                      resulting in more reliable data flow and scalable storage.
                    </p>
                  </div>

                  {/* Mobile UX */}
                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">📱</span>
                      </span>
                      Mobile UX
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Implemented <strong className="text-white">React Native interfaces</strong> styled with Tailwind, 
                      improving user experience and creating a more intuitive interface on iOS/Android.
                    </p>
                  </div>

                  {/* Real-time Comms */}
                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">💬</span>
                      </span>
                      Real-time Comms
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Implemented <strong className="text-white">real-time chat with WebSockets</strong>, 
                      enabling instant peer-to-peer messaging creating a more interactive experience.
                    </p>
                  </div>

                  {/* Personalisation */}
                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">🎯</span>
                      </span>
                      Personalisation
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Prototyped a <strong className="text-white">memory-based collaborative filtering feed</strong>, 
                      delivering more relevant recommendations that boosts user engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* App Demo Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">App Demo</h2>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-6 border border-gray-700/20 max-w-md">
                <video 
                  controls 
                  loop
                  autoPlay
                  muted
                  className="w-full rounded-lg shadow-md"
                  poster="/domus_dashboard_screenshot.jpg"
                >
                  <source src="/CampusConnectDemo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Back to Projects */}
          <div className="text-center pt-12">
            <Link href="/projects" className="inline-flex items-center gap-2 nav-link text-lg text-white hover:text-[#B3EBF2] transition-colors">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
