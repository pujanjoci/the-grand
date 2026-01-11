"use client";

import Image from 'next/image';
import { useEffect, useState, useRef, useCallback } from 'react';

import Link from 'next/link';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isStickyActive, setIsStickyActive] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);


  // Animation constants
  const START_POSITION = 100; // Start from bottom
  const END_POSITION = 60; // End position
  const START_SCALE = 0.5;
  const END_SCALE = 1.0;

  // Throttled scroll handler with requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (!heroRef.current) return;

    const heroSection = heroRef.current;
    const sectionHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;

    // Calculate scroll progress within first 50% of hero section
    const progress = Math.min(scrollPosition / (sectionHeight * 0.5), 1);
    setScrollProgress(progress);

    // Sticky effect ends at 50% scroll
    setIsStickyActive(progress < 1);
  }, []);

  // Optimized scroll listener
  useEffect(() => {
    let ticking = false;

    const throttledScroll = () => {
      if (!ticking) {
        animationFrameRef.current = requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive scroll listener for better performance
    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleScroll]);

  // Calculate text animation with easing
  const getTextAnimationStyles = useCallback(() => {
    if (!isStickyActive) {
      return {
        transform: `translateY(${END_POSITION}vh) scale(${END_SCALE})`,
        opacity: 1,
      };
    }

    // Apply easing function for smoother animation
    const easeOutQuart = (x: number): number => {
      return 1 - Math.pow(1 - x, 4);
    };

    const easedProgress = easeOutQuart(scrollProgress);

    const currentPosition = START_POSITION - (easedProgress * (START_POSITION - END_POSITION));
    const opacity = Math.min(easedProgress * 2, 1);
    const scale = START_SCALE + (easedProgress * (END_SCALE - START_SCALE));

    return {
      transform: `translateY(${currentPosition}vh) scale(${scale})`,
      opacity: opacity,
      transition: 'transform 0.1s linear, opacity 0.1s linear', // Fallback for non-transform properties
    };
  }, [scrollProgress, isStickyActive]);

  // Smooth scroll functions
  const scrollToRooms = useCallback(() => {
    const roomsSection = document.getElementById('featured-rooms');
    if (roomsSection) {
      roomsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  const scrollToBooking = useCallback(() => {
    alert('Booking functionality would open here');
  }, []);

  const startExperience = useCallback(() => {
    window.scrollTo({
      top: window.innerHeight * 0.1,
      behavior: 'smooth'
    });
  }, []);

  // Pre-calculate styles to avoid recalculation in render
  const textStyles = getTextAnimationStyles();
  const gradientOpacity = isStickyActive ? 1 - scrollProgress * 1.5 : 0;
  const buttonOpacity = scrollProgress > 0.2 && isStickyActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
  const initialCTAOpacity = scrollProgress > 0.05 ? 'opacity-0 translate-y-10' : 'opacity-100';
  const completionIndicatorOpacity = scrollProgress > 0.5 && isStickyActive ? 'opacity-100' : 'opacity-0 translate-y-10';

  return (
    <section
      ref={heroRef}
      className="relative h-[150vh] flex items-start justify-center overflow-hidden"
    >
      {/* Background Container - Sticky until 50% */}
      <div
        className={`${isStickyActive ? 'fixed' : 'absolute'
          } inset-0 transition-all duration-200`}
      >
        <Image
          src="/assets/Hero-bg.png"
          alt="The-Grand Hotel Luxury Experience"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9DFSDIkeoXJ6jOhShUcVhIWd3KYy"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `linear-gradient(to bottom, 
              rgba(60, 69, 79, ${0.8 - scrollProgress * 1.2}) 20%, 
              rgba(60, 58, 79, ${0.6 - scrollProgress * 1}) 50%,  
              rgba(168, 85, 79, ${0.4 - scrollProgress * 0.5}) 100%
            )`,
            opacity: gradientOpacity
          }}
        />
      </div>

      {/* Animated Content - Only active during sticky phase */}
      <div className="relative z-10 w-full max-w-6xl mx-auto h-screen flex items-center justify-center">
        <div
          className="text-center text-white px-4 w-full will-change-transform"
          style={textStyles}
        >
          {/* Main Heading */}
          <div className="overflow-hidden mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-parfumerie  font-bold">
              The Grand
            </h1>
          </div>

          {/* Subtitle */}
          <div className="overflow-hidden mb-8">
            <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto font-serif font-light tracking-wide">
              Where Luxury Meets Timeless Elegance
            </p>
          </div>

          {/* Description */}
          <div className="overflow-hidden mb-12">
            <p className="text-lg md:text-xl max-w-2xl italic mx-auto opacity-90 leading-relaxed">
              Experience comfort and hospitality
              in the heart of the city. Your extraordinary stay begins here.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-500 ${buttonOpacity}`}>
            <Link
              href="/contact"
              className="group bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl relative overflow-hidden min-w-[200px] text-center"
            >
              <span className="relative z-10">Book Your Stay</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>

            <Link
              href="/rooms"
              className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm min-w-[200px] text-center"
            >
              <span className="relative z-10">Explore Rooms</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Initial Call to Action - Only show at very start */}
      {isStickyActive && (
        <div
          className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${initialCTAOpacity}`}
        >
          <button
            onClick={startExperience}
            className="flex flex-col items-center space-y-2 group"
          >
            <span className="text-white text-lg font-light tracking-widest uppercase group-hover:text-amber-200 transition-colors duration-300">
              Begin Experience
            </span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center group-hover:border-amber-200 transition-colors duration-300">
              <div className="w-1 h-4 bg-white rounded-full mt-2 animate-bounce group-hover:bg-amber-200 transition-colors duration-300"></div>
            </div>
          </button>
        </div>
      )}

      {/* Completion Indicator - Show when approaching 50% */}
      <div
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${completionIndicatorOpacity}`}
      >
        <div className="text-center">
          <p className="text-white text-sm font-light mb-2">
            Continue to explore
          </p>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mx-auto">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Spacer to ensure content flows properly after sticky ends */}
      {!isStickyActive && (
        <div className="h-screen"></div>
      )}
    </section>
  );
};

export default Hero;