"use client";
import Link from "next/link";

export default function Domus() {
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

      {/* Domus Detail Section */}
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
              Full-Stack Developer | <span className="text-[#B3EBF2]">Domus</span>
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
                      Residential management in Sri Lanka was heavily manual, leading to <strong className="text-white">inefficiency</strong>. 
                      Without a centralised system, residents and managers faced a <strong className="text-white">fragmented, inconvenient experience</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* My Role */}
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-6 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-[#B3EBF2] text-lg">👨‍💻</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-3">My Role</h2>
                    <p className="text-gray-300 leading-relaxed">
                      As the sole full-stack developer for the pilot phase, I worked closely with founders and investors to design and implement a <strong className="text-white">secure, scalable, and user-friendly solution</strong>.
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
                  {/* Architecture */}
                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">🏗️</span>
                      </span>
                      Architecture
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>Designed an N-tier architecture with facade pattern</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>Improved maintainability and scalability for future rollouts</span>
                      </li>
                    </ul>
                  </div>

                  {/* Security */}
                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">🔒</span>
                      </span>
                      Security
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>Implemented JSON Web Token authentication for secure sessions and added SMS-based 2FA via Firebase</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>Strengthened data security and resident trust</span>
                      </li>
                    </ul>
                  </div>

                  {/* Backend */}
                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">⚙️</span>
                      </span>
                      Backend
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>Built REST APIs with NestJS + PostgreSQL</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>Ensured modularity, and support for high concurrency</span>
                      </li>
                    </ul>
                  </div>

                  {/* Frontend */}
                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">📱</span>
                      </span>
                      Frontend
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>Developed cross-platform app with React Native</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>Reduced development overhead and improved usability</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* App Demo & Screenshots Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">App Demo & Screenshots</h2>
            
            {/* Compact Demo & Screenshots */}
            <div className="grid lg:grid-cols-3 gap-6 items-start">
              {/* Demo Video - Compact */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-bold text-white mb-3 text-center">Quick Demo</h3>
                <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-xl p-3 border border-gray-700/20">
                  <video 
                    controls 
                    loop
                    autoPlay
                    muted
                    className="w-full rounded-lg shadow-md"
                    poster="/domus_dashboard_screenshot.jpg"
                  >
                    <source src="/domus_demo_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Screenshots Grid - Compact */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-bold text-white mb-3 text-center">App Screenshots</h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <div className="bg-white rounded-lg p-1 mb-1 shadow-sm">
                      <img
                        src="/domus_dashboard_screenshot.jpg"
                        alt="Dashboard"
                        className="w-full h-auto rounded"
                      />
                    </div>
                    <p className="text-xs text-gray-300">Dashboard</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-white rounded-lg p-1 mb-1 shadow-sm">
                      <img
                        src="/domus_function_hall_booking.jpg"
                        alt="Facility Booking"
                        className="w-full h-auto rounded"
                      />
                    </div>
                    <p className="text-xs text-gray-300">Facility</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-white rounded-lg p-1 mb-1 shadow-sm">
                      <img
                        src="/domus_access_pass_qr.jpg"
                        alt="Access Pass"
                        className="w-full h-auto rounded"
                      />
                    </div>
                    <p className="text-xs text-gray-300">Access</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-white rounded-lg p-1 mb-1 shadow-sm">
                      <img
                        src="/domus_management_request.jpg"
                        alt="Management Request"
                        className="w-full h-auto rounded"
                      />
                    </div>
                    <p className="text-xs text-gray-300">Management</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-white rounded-lg p-1 mb-1 shadow-sm">
                      <img
                        src="/domus_community_forum.jpg"
                        alt="Community Forum"
                        className="w-full h-auto rounded"
                      />
                    </div>
                    <p className="text-xs text-gray-300">Community</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-white rounded-lg p-1 mb-1 shadow-sm">
                      <img
                        src="/domus_marketplace.jpg"
                        alt="Marketplace"
                        className="w-full h-auto rounded"
                      />
                    </div>
                    <p className="text-xs text-gray-300">Marketplace</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Work */}
          <div className="text-center pt-12">
            <Link href="/work" className="inline-flex items-center gap-2 nav-link text-lg text-white hover:text-[#B3EBF2] transition-colors">
              ← Back to Work Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
