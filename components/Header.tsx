"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add shadow when scrolled
      setIsScrolled(currentScrollY > 10);

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/rooms', label: 'Rooms & Suites' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Header - Always blurry background */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
          } bg-white/50 backdrop-blur-md border-b border-white/10 ${isScrolled ? 'shadow-lg' : 'shadow-sm'
          }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo with animation and color change on scroll */}
            <Link
              href="/"
              className={`text-6xl font-parfumerie font-bold transition-all duration-500 transform hover:scale-105 ${isScrolled
                ? 'text-amber-600 hover:text-amber-500'
                : 'text-amber-800 hover:text-amber-200'
                }`}
            >
              The Grand
              <span className={`block h-0.5 transition-all duration-500 origin-left ${isScrolled
                ? 'bg-amber-600 scale-x-0 hover:scale-x-100'
                : 'bg-white scale-x-0 hover:scale-x-100'
                }`}></span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative transition-all duration-300 group py-2 font-medium ${isScrolled
                    ? 'text-gray-600 hover:text-amber-700'
                    : 'text-gray-800 hover:text-amber-200'
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-amber-600' : 'bg-white'
                    } group-hover:w-full`}></span>
                </Link>
              ))}

              {/* Book Now Button with animation */}
              <Link
                href="/rooms"
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group backdrop-blur-sm"
              >
                <span className="relative z-10 font-semibold">Book Now</span>
                {/* Fill effect only */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </nav>

            {/* Mobile Menu Button with fixed hamburger animation */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/30 transition-all duration-300 z-60 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
                {/* Top line */}
                <span
                  className={`absolute w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-700' : 'bg-white'
                    } ${isMenuOpen
                      ? 'rotate-45 translate-y-0'
                      : '-translate-y-2'
                    }`}
                />
                {/* Middle line */}
                <span
                  className={`absolute w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-700' : 'bg-white'
                    } ${isMenuOpen
                      ? 'opacity-0 translate-x-3'
                      : 'opacity-100'
                    }`}
                />
                {/* Bottom line */}
                <span
                  className={`absolute w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-700' : 'bg-white'
                    } ${isMenuOpen
                      ? '-rotate-45 translate-y-0'
                      : 'translate-y-2'
                    }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation with slide animation */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}>
            <nav className="flex flex-col space-y-3 pb-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:bg-white/50 px-4 py-3 rounded-lg transition-all duration-300 transform hover:translate-x-2 backdrop-blur-sm ${isScrolled
                    ? 'text-gray-700 hover:text-amber-700'
                    : 'text-white hover:text-amber-200'
                    } ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  style={{ transitionDelay: isMenuOpen ? `${index * 100 + 200}ms` : '0ms' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Book Now Button */}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-3 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 mt-2 shadow-lg text-center backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-lg z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;