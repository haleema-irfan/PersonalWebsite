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
          <div className="fade-down fade-down-delay-1 max-w-5xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-6 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-[#B3EBF2] text-lg">👨‍💻</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-3">My Role</h2>
                  <p className="text-gray-300 leading-relaxed">
                    As an Engineering Operations Intern at Synapxe, I supported internal
                    operational workflows during the organisation&apos;s transition from on premises
                    systems to the new HEALIX cloud platform. My work focused on reducing manual
                    effort, improving maintainability, and building internal tools that made
                    operational processes easier for users to run and update.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="fade-down fade-down-delay-1">
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
                      The existing UAM generation process was fragmented and difficult to maintain.
                      Standard UAM outputs had to be generated separately for each application,
                      manually merged, and then split again by client. In addition, routine
                      changes such as updating mappings or output fields often required direct
                      edits to macro code, which made the workflow harder for users to manage.
                    </p>
                  </div>

                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">2</span>
                      </span>
                      Onboarding Data Consolidation
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Onboarding information for the new cloud platform was submitted through
                      FormSG and delivered through email, with some submissions containing
                      multiple users. Consolidating this information manually into a master user
                      list was repetitive and error prone, especially when email threads also
                      contained replies that were not part of the original onboarding submission.
                    </p>
                  </div>

                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">3</span>
                      </span>
                      AWS S3 File Reorganisation
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      As part of the cloud transition, files in AWS S3 needed to be reorganised
                      based on client requirements. Handling these moves manually would have been
                      slow and difficult to track at scale, so there was a need for a more
                      reliable bulk transfer workflow with logging.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-down fade-down-delay-2">
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-8 border border-gray-700/20">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">My Contributions</h2>

                <div className="grid gap-6">
                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">1</span>
                      </span>
                      HEALIX UAM Workflow Redesign
                    </h3>
                    <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>
                          Redesigned the HEALIX UAM process in Excel VBA so that users no longer
                          needed to generate standard UAM outputs separately for each application
                          before merging and splitting them manually.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>
                          Introduced configurable Excel sheets for Group Name to Project mapping
                          and raw to standard column mapping, so routine updates could be made
                          without editing the macro code.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>
                          Structured the workflow around four user-facing actions: Run All, Add
                          Project Field, Merge All, and Split by Project, making the tool easier
                          to operate and more flexible for day-to-day use.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>
                          Improved maintainability and scalability by abstracting
                          application-specific logic away from hardcoded VBA and into
                          configuration-driven sheets.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">2</span>
                      </span>
                      Onboarding Email Parser
                    </h3>
                    <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>
                          Built an Excel VBA tool to extract structured onboarding data from
                          FormSG submission emails and populate a master Excel user list.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>
                          Designed the logic to process only the original submission emails while
                          excluding reply noise within the same email threads.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>
                          Reduced repetitive manual effort involved in consolidating onboarding
                          information for users joining the new cloud platform.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                      <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
                        <span className="text-[#B3EBF2] text-sm">3</span>
                      </span>
                      AWS S3 Bulk Transfer Automation
                    </h3>
                    <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>
                          Wrote a Bash script using AWS CLI to automate bulk S3 file transfers by
                          matching source file paths to their destination folders.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>
                          Added logging so that transfer activity could be monitored during
                          execution and reviewed afterwards for auditability and debugging.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
                        <span>
                          Reduced manual effort involved in reorganising cloud storage during
                          platform transition.
                        </span>
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
