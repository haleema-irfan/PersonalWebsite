"use client";

import Navigation from "@/components/Navigation";
import BackgroundElements from "@/components/BackgroundElements";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#1A202C] text-white">
      <Navigation />

      {/* Projects Section */}
      <section className="pt-24 pb-16 px-8 relative">
        <BackgroundElements />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="fade-down text-5xl lg:text-6xl font-bold mb-4">
              My Projects
            </h1>
          </div>
          
          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            <ProjectCard
              title="Campus Connect"
              type="Mobile Application"
              period="Jun 2024 - Aug 2024"
              description="Built a <strong className='text-white'>cross-platform social app</strong> (PERN + React Native) that enabled <strong className='text-white'> real-time student support and guidance</strong>.<br /><br /><strong className='text-white'>WebSockets chat</strong> delivered instant conversations, improving engagement.<br /><br /><strong className='text-white'>PostgreSQL + Supabase</strong> schema design improved data reliability and scalability."
              technologies={["Express.js", "PostgreSQL", "React Native", "Tailwind CSS"]}
              icon="📱"
              link="/projects/campus-connect"
              delay="fade-down-delay-1"
            />

            <ProjectCard
              title="Reminder Bot"
              type="Telegram Bot"
              period="Aug 2024 - Oct 2024"
              description="Developed a <strong className='text-white'>Telegram reminders assistant</strong> with Flask + MongoDB for dependable storage.<br /><br /><strong className='text-white'>CI/CD on Render</strong> automated deploys and improved uptime & iteration speed."
              technologies={["Flask", "Python", "MongoDB", "Render"]}
              icon="🤖"
              link="/projects/reminder-bot"
              delay="fade-down-delay-2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}