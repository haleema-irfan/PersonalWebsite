import Link from "next/link";

export default function Contact() {
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

      {/* Contact Section */}
      <section className="pt-24 pb-16 px-8 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 bg-[#B3EBF2]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#3C414A]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#B3EBF2]/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="fade-down text-5xl lg:text-6xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="fade-down fade-down-delay-1 text-xl text-gray-300 max-w-2xl mx-auto">
              {"I'm"} always interested in new opportunities and collaborations. 
              {"Let's"} connect and discuss how we can work together!
            </p>
          </div>
          
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Email */}
            <div className="fade-down fade-down-delay-2">
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-3xl p-8 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Email</h2>
                  </div>
                </div>
                
                <a 
                  href="mailto:haleemairfan04@gmail.com" 
                  className="text-lg text-gray-300 hover:text-[#B3EBF2] transition-colors duration-300 break-all"
                >
                  haleemairfan04@gmail.com
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="fade-down fade-down-delay-3">
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-3xl p-8 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">GitHub</h2>
                  </div>
                </div>
                
                <a 
                  href="https://github.com/haleemairfan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg text-gray-300 hover:text-[#B3EBF2] transition-colors duration-300"
                >
                  github.com/haleemairfan
                </a>
              </div>
            </div>
          </div>

          {/* Resume */}
          <div className="fade-down fade-down-delay-4 flex justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#B3EBF2]/20 to-[#B3EBF2]/10 border border-gray-700/30 hover:border-[#B3EBF2]/40 transition-all duration-300 hover:scale-105 text-white"
            >
              <span className="text-xl">📄</span>
              <span className="text-lg font-semibold">View / Download Resume</span>
              <span className="text-[#B3EBF2]">→</span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
