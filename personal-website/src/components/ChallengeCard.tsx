
/**
 * Props interface for the ChallengeCard component
 */
interface ChallengeCardProps {
  /** Title of the challenge section */
  title: string;
  /** HTML description of the challenge */
  description: string;
  /** Optional emoji icon (defaults to target emoji) */
  icon?: string;
}

/**
 * ChallengeCard Component
 * 
 * A reusable card component that displays challenge or problem statements.
 * Features a gradient background, hover effects, and HTML support for
 * rich text formatting in descriptions.
 * 
 * @param props - The component props
 * @returns {JSX.Element} A styled challenge card
 */
export default function ChallengeCard({ 
  title, 
  description, 
  icon = "🎯" 
}: ChallengeCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-6 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300">
      <div className="flex items-start gap-4">
        {/* Icon container */}
        <div className="w-12 h-12 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="text-[#B3EBF2] text-lg">{icon}</span>
        </div>
        
        {/* Content area */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
          <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
}
