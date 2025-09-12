"use client";

import Navigation from "@/components/Navigation";
import BackgroundElements from "@/components/BackgroundElements";
import ChallengeCard from "@/components/ChallengeCard";
import ContributionCard from "@/components/ContributionCard";
import GitHubLink from "@/components/GitHubLink";
import BackLink from "@/components/BackLink";

export default function ReminderBot() {
  return (
    <div className="min-h-screen bg-[#1A202C] text-white">
      <Navigation />

      {/* Reminder Bot Detail Section */}
      <section className="pt-24 pb-16 px-8 relative">
        <BackgroundElements />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="fade-down text-5xl lg:text-6xl font-bold mb-4">
              Reminder Bot
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Context */}
            <div className="fade-down fade-down-delay-1 space-y-8">
              {/* The Challenge */}
              <ChallengeCard
                title="The Challenge"
                description="Users needed a <strong className='text-white'>lightweight way to capture and retrieve reminders</strong> without leaving Telegram."
              />

            </div>

            {/* Right Column - Contributions */}
            <div className="fade-down fade-down-delay-2">
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-8 border border-gray-700/20">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">My Contributions</h2>

                <div className="grid gap-6">
                  <ContributionCard
                    icon="⚙️"
                    title="Backend API"
                    description="Built <strong className='text-white'>Flask endpoints backed by MongoDB</strong> for fast writes/reads and smooth reminder retrieval, ensuring reliable data persistence and quick response times."
                  />

                  <ContributionCard
                    icon="🚀"
                    title="Deployment"
                    description="Set up <strong className='text-white'>Render deploys with CI/CD</strong> for repeatable releases and higher reliability with less manual effort, automating the deployment pipeline for consistent updates."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Link */}
          <div className="text-center pt-8">
            <GitHubLink url="https://github.com/haleemairfan/ReminderBot" />
          </div>

          {/* Back to Projects */}
          <BackLink href="/projects" text="Back to Projects" className="pt-4" />
        </div>
      </section>
    </div>
  );
}
