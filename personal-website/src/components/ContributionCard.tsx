
/**
 * Props interface for the ContributionCard component
 */
interface ContributionCardProps {
  /** Emoji icon representing the contribution type */
  icon: string;
  /** Title of the contribution */
  title: string;
  /** HTML description of the contribution (optional when using isList) */
  description?: string;
  /** Whether to display as a list instead of paragraph */
  isList?: boolean;
  /** Array of list items (used when isList is true) */
  listItems?: string[];
}

/**
 * ContributionCard Component
 * 
 * A reusable card component that displays individual contributions
 * or achievements. Can render content as either a paragraph or
 * a bulleted list with HTML support for formatting.
 * 
 * @param props - The component props
 * @returns {JSX.Element} A styled contribution card
 */
export default function ContributionCard({ 
  icon, 
  title, 
  description, 
  isList = false, 
  listItems = [] 
}: ContributionCardProps) {
  return (
    <div className="bg-[#1A202C]/50 rounded-xl p-6 border border-gray-700/30">
      {/* Card header with icon and title */}
      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
        <span className="w-8 h-8 bg-[#B3EBF2]/20 rounded-lg flex items-center justify-center">
          <span className="text-[#B3EBF2] text-sm">{icon}</span>
        </span>
        {title}
      </h3>
      
      {/* Content area - either list or paragraph */}
      {isList && listItems.length > 0 ? (
        <ul className="space-y-2 text-gray-300 text-sm">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#B3EBF2] mr-2 mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-300 text-sm" dangerouslySetInnerHTML={{ __html: description || '' }} />
      )}
    </div>
  );
}
