"use client";

import Link from "next/link";

export default function Home() {
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

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Text */}
            <div className="text-left">
              <h1 className="fade-down text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="text-[#B3EBF2]">Haleema!</span>
              </h1>
              <p className="fade-down fade-down-delay-1 text-xl text-gray-300 mb-8 leading-relaxed">
                Transforming real-world challenges into scalable and user-centric software solutions
              </p>
              <div className="fade-down fade-down-delay-2 flex gap-4 flex-wrap">
                <button className="bg-[#B3EBF2] text-[#1A202C] px-8 py-4 rounded-full font-semibold hover:bg-transparent hover:text-[#B3EBF2] hover:border-2 hover:border-[#B3EBF2] transition-all duration-300 transform hover:scale-105">
                  Contact Me
                </button>
                <button className="border-2 border-[#B3EBF2] text-[#B3EBF2] px-8 py-4 rounded-full font-semibold hover:bg-[#B3EBF2] hover:text-[#1A202C] transition-all duration-300 transform hover:scale-105">
                  View My Work
                </button>
              </div>
            </div>
            
            {/* Right Column - Visual Element */}
            <div className="fade-down fade-down-delay-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-[#B3EBF2]/20 to-[#3C414A]/20 rounded-[3rem] flex items-center justify-center backdrop-blur-sm border border-[#B3EBF2]/30">
                  <div className="text-6xl">💻</div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#B3EBF2]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#3C414A]/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}