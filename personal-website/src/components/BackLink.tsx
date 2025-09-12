import Link from "next/link";

/**
 * Props interface for the BackLink component
 */
interface BackLinkProps {
  /** The URL to navigate back to */
  href: string;
  /** The text to display for the back link */
  text: string;
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * BackLink Component
 * 
 * A reusable navigation component that provides a styled back link
 * with consistent styling and hover effects. Used for returning
 * to previous pages or sections.
 * 
 * @param props - The component props
 * @returns {JSX.Element} A styled back navigation link
 */
export default function BackLink({ href, text, className = "" }: BackLinkProps) {
  return (
    <div className={`text-center pt-8 ${className}`}>
      <Link href={href} className="inline-flex items-center gap-2 nav-link text-lg text-white hover:text-[#B3EBF2] transition-colors">
        ← {text}
      </Link>
    </div>
  );
}
