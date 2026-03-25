"use client";

import Link from "next/link";

export default function Synapxe() {
  return (
    <div className="min-h-screen bg-[#1A202C] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A202C]/95 backdrop-blur-sm border-b border-gray-800/50">
        <div className="flex justify-center items-center py-4">
          <div className="flex gap-12 text-lg font-bold text-gray-300">
            <Link
              href="/"
              className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105"
            >
              Home
            </Link>
            <Link
              href="/work"
              className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105"
            >
              Work Experience
            </Link>
            <Link
              href="/ctfs"
              className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105"
            >
              CTFs
            </Link>
            <Link
              href="/projects"
              className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105"
            >
              Projects
            </Link>
            <Link
              href="/skills"
              className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105"
            >
              Skills
            </Link>
            <Link
              href="/contact"
              className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>

      {/* Synapxe Detail Section */}
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
              Engineering Ops Intern | <span className="text-[#B3EBF2]">Synapxe</span>
            </h1>
          </div>

          {/* My Role */}
          <div className="fade-down fade-down-delay-1 max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-6 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-[#B3EBF2] text-lg">👨‍💻</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-3">My Role</h2>
                  <p className="text-gray-300 leading-relaxed">
                    As an Engineering Operations Intern during Synapxe&apos;s shift from on-premise to cloud,
                    my role was to automate manual internal workflows for the new system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Challenges + Role */}
            <div className="fade-down fade-down-delay-1 space-y-8">
              {/* Challenges */}
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-8 border border-gray-700/20">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">The Challenges</h2>

                <div className="grid gap-6">
                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">1</span>
                      </span>
                      UAM Generation
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      UAM generation was fragmented — a separate macro per application with largely
                      duplicated logic, each run individually before manually merging and splitting outputs
                      per client. The shift to cloud also introduced new field requirements the old system
                      couldn’t handle.
                    </p>
                  </div>

                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">2</span>
                      </span>
                      Onboarding Data
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      User onboarding data was tracked by manually reading through emails and keying
                      information into Excel one by one — time-consuming and error-prone as the cloud
                      system scaled up.
                    </p>
                  </div>

                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">3</span>
                      </span>
                      AWS File Transfers
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Files needed to be moved across S3 buckets at scale, with no automated way to handle
                      bulk transfers or track whether each move had succeeded.
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
                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">1</span>
                      </span>
                      UAM Pipeline Redesign
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>
                          Consolidated per-application macros into a unified 3-step pipeline (parse → merge/standardise → split)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>
                          All Group Name-to-Project and column mappings controlled via Excel sheets — no macro editing needed for routine changes
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">2</span>
                      </span>
                      Onboarding Email Parser
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>
                          Built an Excel VBA macro that filters Outlook emails by subject, traverses conversation threads via message IDs to identify the original email, and extracts structured onboarding data into a master Excel sheet
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>Eliminated manual email reading and data entry entirely</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">3</span>
                      </span>
                      AWS S3 File Transfer
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>
                          Wrote a Bash script that takes source and destination locations as input and automates bulk S3 file movements using AWS CLI
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>Spooled logs for each transfer, enabling post-run auditing and error checking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Work */}
          <div className="text-center pt-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 nav-link text-lg text-white hover:text-[#B3EBF2] transition-colors"
            >
              ← Back to Work Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

