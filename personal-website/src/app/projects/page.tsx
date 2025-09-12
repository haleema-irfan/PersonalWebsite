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
              title="NUS Datathon 2025"
              type="Machine Learning Project"
              period="Jan 2025"
              description="Engineered <strong className='text-white'>business-metric features</strong>, performed <strong className='text-white'>feature selection</strong>, and implemented a <strong className='text-white'>Random Forest Classifier</strong> with scikit-learn.<br /><br />Achieved <strong className='text-white'>82% accuracy (Global) and 80% accuracy (Domestic)</strong>, improving classification reliability and interpretability."
              technologies={["Python", "pandas", "scikit-learn", "matplotlib"]}
              icon="🤖"
              link="/projects/nus-datathon"
              delay="fade-down-delay-1"
            />

            <ProjectCard
              title="Campus Connect"
              type="Mobile Application"
              period="Jun 2024 - Aug 2024"
              description="Built a <strong className='text-white'>cross-platform social app</strong> (PERN + React Native) that enabled <strong className='text-white'> real-time student support and guidance</strong>.<br /><br /><strong className='text-white'>WebSockets chat</strong> delivered instant conversations, improving engagement.<br /><br /><strong className='text-white'>PostgreSQL + Supabase</strong> schema design improved data reliability and scalability."
              technologies={["Express.js", "PostgreSQL", "React Native", "Tailwind CSS"]}
              icon="📱"
              link="/projects/campus-connect"
              delay="fade-down-delay-2"
            />

            <ProjectCard
              title="Reminder Bot"
              type="Telegram Bot"
              period="Aug 2024 - Oct 2024"
              description="Developed a <strong className='text-white'>Telegram reminders assistant</strong> with Flask + MongoDB for dependable storage.<br /><br /><strong className='text-white'>CI/CD on Render</strong> automated deploys and improved uptime & iteration speed."
              technologies={["Flask", "Python", "MongoDB", "Render"]}
              icon="🤖"
              link="/projects/reminder-bot"
              delay="fade-down-delay-3"
            />
          </div>
        </div>
      </section>
    </div>
  );
}