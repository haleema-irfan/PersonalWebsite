"use client";

import Navigation from "@/components/Navigation";
import BackgroundElements from "@/components/BackgroundElements";
import ChallengeCard from "@/components/ChallengeCard";
import ContributionCard from "@/components/ContributionCard";
import GitHubLink from "@/components/GitHubLink";
import BackLink from "@/components/BackLink";

export default function CampusConnect() {
  return (
    <div className="min-h-screen bg-[#1A202C] text-white">
      <Navigation />

      {/* Campus Connect Detail Section */}
      <section className="pt-24 pb-16 px-8 relative">
        <BackgroundElements />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="fade-down text-5xl lg:text-6xl font-bold mb-4">
              Campus Connect
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Context */}
            <div className="fade-down fade-down-delay-1 space-y-8">
              {/* The Challenge */}
              <ChallengeCard
                title="The Challenge"
                description="Students lacked a <strong className='text-white'>centralised space</strong> for academic and personal guidance. Conversations were <strong className='text-white'>scattered and slow</strong>, making it difficult to get timely support and connect with peers."
              />

            </div>

            {/* Right Column - Contributions */}
            <div className="fade-down fade-down-delay-2">
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-8 border border-gray-700/20">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">My Contributions</h2>

                <div className="grid gap-6">
                  <ContributionCard
                    icon="🔗"
                    title="APIs & Data"
                    description="Built <strong className='text-white'>RESTful endpoints</strong> in Express and designed a <strong className='text-white'>PostgreSQL schema</strong> hosted on Supabase, resulting in more reliable data flow and scalable storage."
                  />

                  <ContributionCard
                    icon="📱"
                    title="Mobile UX"
                    description="Implemented <strong className='text-white'>React Native interfaces</strong> styled with Tailwind, improving user experience and creating a more intuitive interface on iOS/Android."
                  />

                  <ContributionCard
                    icon="💬"
                    title="Real-time Comms"
                    description="Implemented <strong className='text-white'>real-time chat with WebSockets</strong>, enabling instant peer-to-peer messaging creating a more interactive experience."
                  />

                  <ContributionCard
                    icon="🎯"
                    title="Personalisation"
                    description="Prototyped a <strong className='text-white'>memory-based collaborative filtering feed</strong>, delivering more relevant recommendations that boosts user engagement."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* App Demo Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">App Demo</h2>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-6 border border-gray-700/20 max-w-md">
                <video 
                  controls 
                  loop
                  autoPlay
                  muted
                  className="w-full rounded-lg shadow-md"
                  poster="/domus_dashboard_screenshot.jpg"
                >
                  <source src="/CampusConnectDemo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* GitHub Link */}
          <div className="text-center pt-8">
            <GitHubLink url="https://github.com/haleemairfan/CampusConnect" />
          </div>

          {/* Back to Projects */}
          <BackLink href="/projects" text="Back to Projects" className="pt-4" />
        </div>
      </section>
    </div>
  );
}
