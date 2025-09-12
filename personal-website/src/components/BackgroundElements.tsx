/**
 * BackgroundElements Component
 * 
 * A reusable component that renders decorative background elements
 * to enhance the visual appeal of pages. Creates floating blur effects
 * that add depth and atmosphere without interfering with user interactions.
 * 
 * @returns {JSX.Element} Container with decorative background blur elements
 */
export default function BackgroundElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top-right decorative blur element */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#B3EBF2]/10 rounded-full blur-3xl"></div>
      
      {/* Bottom-left decorative blur element */}
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#3C414A]/20 rounded-full blur-3xl"></div>
      
      {/* Center-left decorative blur element */}
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#B3EBF2]/5 rounded-full blur-2xl"></div>
    </div>
  );
}