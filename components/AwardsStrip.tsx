"use client";

import { useEffect, useRef } from 'react';

interface Award {
  id: number;
  title: string;
  organization: string;
  year: string;
  imageName?: string;   // <-- make optional
  icon?: string;
  iconType?: string;
}


interface AwardsStripProps {
  awards?: Award[];
  speed?: number;
}


// Resort & Spa themed awards data with local image names
const defaultResortAwards = [
  {
    id: 1,
    title: "World's Best Luxury Resort",
    organization: "Travel & Leisure",
    year: "2024",
    imageName: "award(luxury-resort)"
  },
  {
    id: 2,
    title: "Best Spa & Wellness",
    organization: "World Spa Awards",
    year: "2024",
    imageName: "award(spa-wellness)"
  },
  {
    id: 3,
    title: "5-Star Excellence Award",
    organization: "Forbes Travel Guide",
    year: "2023",
    imageName: "award(5stars)"
  },
  {
    id: 4,
    title: "Best Wellness Retreat",
    organization: "Luxury Travel Awards",
    year: "2024",
    imageName: "award(wellness-retreat)"
  },
  {
    id: 5,
    title: "Sustainable Resort Award",
    organization: "Green Hotel Association",
    year: "2023",
    imageName: "award(sustainable-resort)"
  },
  {
    id: 6,
    title: "Best Luxury Spa",
    organization: "Spa & Wellness International",
    year: "2024",
    imageName: "award(luxury-spa)"
  }
];

const AwardsStrip: React.FC<AwardsStripProps> = ({ 
  awards = defaultResortAwards, 
  speed = 40 
}) => {
  const stripRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const positionRef = useRef<number>(0);
  const isHoveredRef = useRef<boolean>(false);

  useEffect(() => {
    if (!stripRef.current || awards.length === 0) return;

    const strip = stripRef.current;
    let lastTimestamp: number | null = null;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      
      if (!isHoveredRef.current) {
        const deltaTime = (timestamp - lastTimestamp) / 1000; // Convert to seconds
        positionRef.current -= speed * deltaTime;
        
        // Get the actual width of a single award item for seamless looping
        const awardItem = strip.firstChild as HTMLElement;
        if (awardItem) {
          const itemWidth = awardItem.offsetWidth + 48; // width + gap
          const totalWidth = itemWidth * awards.length;
          
          // Reset position when one full set has scrolled
          if (Math.abs(positionRef.current) >= totalWidth) {
            positionRef.current += totalWidth;
          }

          strip.style.transform = `translateX(${positionRef.current}px)`;
        }
      }
      
      lastTimestamp = timestamp;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, awards.length]);

  // Get image path for local award images
  const getImagePath = (imageName: string) => {
    return `/assets/${imageName}.jpg`;
  };

  // Instant stop on hover
  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  // Duplicate awards for seamless looping - use 3 copies for smooth infinite effect
  const duplicatedAwards = [...awards, ...awards, ...awards];

  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white py-8 border-b border-t border-gray-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      {/* Awards Strip */}
      <div 
        ref={stripRef}
        className="flex items-center space-x-12 whitespace-nowrap transition-transform duration-0 ease-linear will-change-transform"
        style={{ transition: 'transform 0s linear' }} // Instant updates
      >
        {duplicatedAwards.map((award, index) => (
          <div
            key={`${award.id}-${index}`}
            className="group flex items-center space-x-6 px-6 py-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer flex-shrink-0"
          >
            {/* Award Image - Perfect Circle */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-gray-300 transition-all duration-300">
                <img 
                  src={getImagePath(award.imageName ?? "")}
                  alt={`${award.title} award`}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                  onError={(e) => {
                  }}
                />
              </div>
            </div>
            
            {/* Award Content - Always visible but grayed out */}
            <div className="flex items-center space-x-4 transition-all duration-300">
              <div className="text-sm font-medium whitespace-nowrap tracking-tight text-gray-400 group-hover:text-black group-hover:font-semibold transition-all duration-300">
                {award.title}
              </div>
              
              <div className="flex items-center space-x-3 text-sm transition-all duration-300">
                <span className="whitespace-nowrap text-gray-400 group-hover:text-gray-700 transition-colors duration-300">
                  {award.organization}
                </span>
                <span className="font-medium text-gray-400 group-hover:text-gray-800 group-hover:bg-gray-100 bg-gray-50 px-2 py-1 rounded text-xs transition-all duration-300">
                  {award.year}
                </span>
              </div>
            </div>

            {/* Separator - Always visible but subtle */}
            <div className="h-6 w-px bg-gray-200 group-hover:bg-gray-400 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsStrip;