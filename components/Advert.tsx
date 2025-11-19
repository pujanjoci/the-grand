import Image from 'next/image';
import React from 'react';

const Advert: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* Top Text Section - 20% of screen */}
            <div className="absolute top-0 h-[20vh] w-full flex items-end justify-center bg-white z-20 pb-8">
        <p className="text-amber-800 text-3xl md:text-4xl lg:text-5xl font-serif font-light px-6 text-center tracking-wide">
          Welcome to your luxurious home
        </p>
      </div>

      {/* Background Image Container - 80% height from bottom */}
      <div className="absolute bottom-0 h-[80vh] w-full">
        <Image
          src="/assets/story-1.png"
          alt="Luxurious interior"
          fill
          className="object-cover"
          priority
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-0" />
        
        {/* Top text on image */}
        <div className="absolute top-[3%] left-0 right-0 flex justify-center z-10">
          <p className="text-white text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-widest">
            away from home
          </p>
        </div>

        {/* Main heading - centered in image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="font-parfumerie text-7xl md:text-8xl lg:text-9xl text-white leading-none">
              The Grand
            </h1>
            <div className="h-px w-24 bg-amber-300" />
            <span className="text-xl md:text-xl lg:text-2xl text-white font-light tracking-widest">
              Resort & Spa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advert;