"use client";

import Navigation from "@/components/Navigation";
import BackgroundElements from "@/components/BackgroundElements";
import ChallengeCard from "@/components/ChallengeCard";
import ContributionCard from "@/components/ContributionCard";
import GitHubLink from "@/components/GitHubLink";
import BackLink from "@/components/BackLink";

export default function NUSDatathonProject() {
  return (
    <div className="min-h-screen bg-[#1A202C] text-white">
      <Navigation />

      {/* NUS Datathon Detail Section */}
      <section className="pt-24 pb-16 px-8 relative">
        <BackgroundElements />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="fade-down text-5xl lg:text-6xl font-bold mb-4">
              NUS Datathon 2025
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Context */}
            <div className="fade-down fade-down-delay-1 space-y-8">
              {/* The Challenge */}
              <ChallengeCard
                title="The Challenge"
                description="Motivated by the challenge of <strong className='text-white'>classifying businesses as Global Ultimate vs Domestic Ultimate</strong>, where data redundancy and feature imbalance risked reducing model performance and accuracy."
              />

            </div>

            {/* Right Column - Contributions */}
            <div className="fade-down fade-down-delay-2">
              <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-8 border border-gray-700/20">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">My Contributions</h2>

                <div className="grid gap-6">
                  <ContributionCard
                    icon="🔧"
                    title="Feature Engineering"
                    description="Created <strong className='text-white'>meaningful predictors from raw business data</strong>, raising model accuracy by identifying and engineering key business metrics features."
                  />

                  <ContributionCard
                    icon="📊"
                    title="Feature Selection"
                    description="Applied <strong className='text-white'>correlation matrix analysis to remove redundant features</strong> and implemented <strong className='text-white'>feature importance ranking to reduce noise</strong>, improving model accuracy through strategic feature selection and simplifying the model by removing low-impact variables."
                  />

                  <ContributionCard
                    icon="🤖"
                    title="Model Implementation"
                    description="Implemented a <strong className='text-white'>Random Forest Classifier</strong> in scikit-learn, overcoming class imbalance using <strong className='text-white'>SMOTE (Synthetic Minority Over-sampling Technique)</strong> for optimal performance and robust model training."
                  />

                  <ContributionCard
                    icon="📈"
                    title="Performance Results"
                    description="Achieved <strong className='text-white'>82% accuracy for Global Ultimate classification</strong> and <strong className='text-white'>80% accuracy for Domestic Ultimate classification</strong>, successfully overcoming class imbalance issues and delivering robust model performance on test data."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Google Colab Link */}
          <div className="text-center pt-8">
            <a 
              href="https://drive.google.com/file/d/1w_hzKBRbKNEemaEsnFX2krx1y_fldYfx/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#B3EBF2]/20 to-[#B3EBF2]/10 hover:from-[#B3EBF2]/30 hover:to-[#B3EBF2]/20 text-white px-6 py-3 rounded-xl border border-[#B3EBF2]/30 hover:border-[#B3EBF2]/50 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              View Google Colab Notebook
            </a>
          </div>

          {/* Back to Projects */}
          <BackLink href="/projects" text="Back to Projects" className="pt-4" />
        </div>
      </section>
    </div>
  );
}
