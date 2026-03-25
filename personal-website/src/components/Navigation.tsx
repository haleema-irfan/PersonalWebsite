"use client";

import Link from "next/link";

/**
 * Navigation Component
 * 
 * A reusable navigation bar component that provides consistent navigation
 * across all pages of the personal website. Features a fixed position with
 * backdrop blur effect and hover animations.
 * 
 * @returns {JSX.Element} The navigation bar with all main site links
 */
export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A202C]/95 backdrop-blur-sm border-b border-gray-800/50">
      <div className="flex justify-center items-center py-4">
        {/* Navigation Links Container */}
        <div className="flex gap-12 text-lg font-bold text-gray-300">
          <Link href="/" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">
            Home
          </Link>
          <Link href="/work" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">
            Work Experience
          </Link>
            <Link href="/ctfs" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">
              CTFs
            </Link>
          <Link href="/projects" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">
            Projects
          </Link>
          <Link href="/skills" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">
            Skills
          </Link>
          <Link href="/contact" className="nav-link hover:text-[#B3EBF2] transition-all duration-300 hover:scale-105">
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
