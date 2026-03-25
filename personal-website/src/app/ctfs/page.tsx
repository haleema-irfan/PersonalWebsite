"use client";

import Navigation from "@/components/Navigation";
import BackgroundElements from "@/components/BackgroundElements";
import Link from "next/link";

export default function CTFs() {
  return (
    <div className="min-h-screen bg-[#1A202C] text-white">
      <Navigation />
      <section className="pt-24 pb-16 px-8 relative">
        <BackgroundElements />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="fade-down text-5xl lg:text-6xl font-bold mb-4">
              CTFs
            </h1>
            <p className="fade-down fade-down-delay-1 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Exploring cybersecurity through hands-on problem solving.
              <br />
              As someone specialising in Computer Security, I&apos;ve been exploring Capture The Flag challenges to
              build practical skills in forensics, steganography, and binary analysis.
            </p>
          </div>

          <div className="max-w-4xl mx-auto fade-down">
            <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-3xl p-8 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">🏁</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">picoCTF</h2>
                  <p className="text-[#B3EBF2] text-sm">Forensics, steganography, log analysis, binary analysis</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                A compilation of my solved picoCTF challenges with full writeups, commands, and reasoning.
              </p>

              <div className="pt-2">
                <Link
                  href="/ctfs/picoctf"
                  className="inline-flex items-center gap-2 nav-link text-lg text-white hover:text-[#B3EBF2] transition-colors"
                >
                  View Writeups
                  <span className="text-[#B3EBF2]">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

