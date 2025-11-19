"use client";

import { useState, useEffect } from 'react';

// Types
interface Award {
  id: number;
  title: string;
  organization: string;
  year: string;
  description: string;
  image?: string;
  category: string;
}

interface AwardsCarouselProps {
  awards: Award[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const AwardsCarousel: React.FC<AwardsCarouselProps> = ({
  awards,
  autoPlay = true,
  autoPlayInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || awards.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, awards.length, autoPlayInterval]);

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + awards.length) % awards.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  if (awards.length === 0) {
    return (
      <div className="flex items-center justify-center py-16 bg-gray-50 rounded-2xl">
        <p className="text-gray-500 text-lg">No awards to display</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-white shadow-xl">
        {/* Award Card */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {awards.map((award, index) => (
            <div
              key={award.id}
              className="w-full flex-shrink-0 px-8 py-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Award Content */}
                <div className="space-y-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full">
                    <span className="text-amber-700 text-sm font-semibold uppercase tracking-wide">
                      {award.category}
                    </span>
                  </div>

                  {/* Award Title */}
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 leading-tight">
                    {award.title}
                  </h3>

                  {/* Organization and Year */}
                  <div className="space-y-2">
                    <p className="text-xl font-semibold text-amber-600">
                      {award.organization}
                    </p>
                    <p className="text-gray-500 font-medium">
                      {award.year}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {award.description}
                  </p>

                  {/* Current Position Indicator */}
                  <div className="pt-4">
                    <span className="text-sm text-gray-500">
                      {currentIndex + 1} of {awards.length}
                    </span>
                  </div>
                </div>

                {/* Award Visual */}
                <div className="flex justify-center items-center">
                  {award.image ? (
                    <div className="relative">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-64 h-64 object-contain rounded-2xl shadow-lg"
                      />
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-20"></div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-300 rounded-full opacity-30"></div>
                    </div>
                  ) : (
                    <div className="relative w-64 h-64 bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl shadow-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">🏆</div>
                        <p className="text-amber-700 font-semibold">Award</p>
                      </div>
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full opacity-20"></div>
                      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-30"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {awards.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Previous award"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Next award"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {awards.length > 1 && (
        <div className="flex justify-center space-x-3 mt-8">
          {awards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-amber-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to award ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Auto-play Toggle */}
      {awards.length > 1 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors duration-300"
          >
            <div className={`w-4 h-4 border-2 border-current rounded-sm flex items-center justify-center ${
              isAutoPlaying ? 'bg-current' : ''
            }`}>
              {isAutoPlaying && (
                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                  <path d="M0 0h8v8H0z"/>
                </svg>
              )}
            </div>
            <span className="text-sm font-medium">
              {isAutoPlaying ? 'Pause' : 'Play'} Auto
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AwardsCarousel;