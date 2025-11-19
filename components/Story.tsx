import React from 'react';
import Image from 'next/image';
import { HomeModernIcon, BuildingStorefrontIcon, HeartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div
      className="group relative h-full cursor-pointer overflow-hidden rounded-2xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-xl transition-all duration-500 group-hover:border-white/40 group-hover:bg-white/15 group-hover:backdrop-blur-lg" />
      
      <div className="relative z-10 flex h-full flex-col items-center p-8 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="mb-4 text-2xl font-bold text-white drop-shadow-lg">{title}</h3>
        <p className="text-white/90 leading-relaxed drop-shadow-md">{description}</p>
        
        <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-24" />
      </div>
    </div>
  );
};

const Story: React.FC = () => {
  const features = [
    {
      title: "Luxury Accommodation",
      description: "Experience unparalleled comfort in our elegantly designed rooms and suites with premium amenities.",
      icon: <HomeModernIcon className="h-8 w-8" />,
    },
    {
      title: "World-Class Dining",
      description: "Savor exquisite culinary creations at our award-winning restaurants and bars.",
      icon: <BuildingStorefrontIcon className="h-8 w-8" />,
    },
    {
      title: "Premium Spa & Wellness",
      description: "Rejuvenate your mind and body with our comprehensive spa treatments and wellness programs.",
      icon: <HeartIcon className="h-8 w-8" />,
    },
  ];

  const stats = [
    { value: "24/7", label: "Concierge Service" },
    { value: "5★", label: "Luxury Rating" },
    { value: "100+", label: "Rooms & Suites" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/story-2.png"
          alt="Luxury Hotel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-3xl font-bold font-serif text-white drop-shadow-2xl md:text-5xl">
            Discover a world of luxury, comfort, and exceptional service <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">where every stay becomes a memorable story.</span>
          </h1>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 200}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-amber-400 to-orange-500 opacity-60 blur-lg" />
            <Link 
              href="/contact" 
              className="relative rounded-full border border-amber-800/30 bg-gradient-to-r from-amber-600 to-orange-800 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:to-orange-700"
            >
              Book Your Stay
            </Link>
          </div>
          
          <p className="mt-8 text-lg text-white/80 drop-shadow-md">
            Contact us at <span className="font-semibold text-amber-300">reservations@the-grand.com</span>
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 text-center md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-white/80">
              <div className="mb-2 text-2xl font-bold text-amber-600">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;