

/**
 * Props interface for the ProjectCard component
 */
interface ProjectCardProps {
  /** The title of the project */
  title: string;
  /** The type/category of the project (e.g., "Mobile Application", "Telegram Bot") */
  type: string;
  /** The time period when the project was developed */
  period: string;
  /** HTML description of the project with key achievements */
  description: string;
  /** Array of technologies used in the project */
  technologies: string[];
  /** Emoji icon representing the project */
  icon: string;
  /** Link to the detailed project page */
  link: string;
  /** Optional CSS animation delay class */
  delay?: string;
}

/**
 * ProjectCard Component
 * 
 * A reusable card component that displays project information including
 * title, type, period, description, technologies, and action links.
 * Features hover animations and optional GitHub integration.
 * 
 * @param props - The component props
 * @returns {JSX.Element} A styled project card with all project details
 */
export default function ProjectCard({ 
  title, 
  type, 
  period, 
  description, 
  technologies, 
  icon, 
  link, 
  delay = "fade-down-delay-1" 
}: ProjectCardProps) {
  return (
    <div className={`fade-down ${delay}`}>
      {/* Main card container with gradient background and hover effects */}
      <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-3xl p-8 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300 hover:scale-105">
        
        {/* Project header with icon and basic info */}
        <div className="flex items-center gap-4 mb-6">
          {/* Project icon container */}
          <div className="w-16 h-16 bg-gradient-to-br from-[#B3EBF2]/30 to-[#B3EBF2]/10 rounded-2xl flex items-center justify-center">
            <span className="text-2xl">{icon}</span>
          </div>
          
          {/* Project title and metadata */}
          <div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <p className="text-[#B3EBF2] text-sm">{type}</p>
            <p className="text-gray-400 text-sm">{period}</p>
          </div>
        </div>
        
        {/* Project description with HTML support for formatting */}
        <p className="text-gray-300 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: description }} />
        
        {/* Technology tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="pt-4">
          {/* Read More link with nav-link styling */}
          <a 
            href={link} 
            className="inline-flex items-center gap-2 nav-link text-lg text-white hover:text-[#B3EBF2] transition-colors"
          >
            Read More
            <span className="text-[#B3EBF2]">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
