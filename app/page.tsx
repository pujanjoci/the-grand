import Header from '../components/Header';
import Hero from '../components/Hero';
import Advert from '../components/Advert';
import Story from '../components/Story';
import RoomCard from '../components/RoomCard';
import Award from '../components/AwardsStrip';
import Footer from '../components/Footer';

import Image from 'next/image';
import { Room } from '../types';

import Link from 'next/link';

// Import rooms data from TS file
import { rooms } from '../data/rooms';

export default function Home() {
  // Only take the first 3 rooms for featured section
  const featuredRooms: Room[] = rooms.slice(0, 3);

  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* About Section - Moved below Hero */}
        <section className="min-h-screen bg-gradient-to-br from-gray-100/80 to-white py-16 flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-amber-700 font-semibold tracking-wider uppercase text-sm">
                    Luxury & Excellence
                  </span>
                  <h2 className="text-5xl font-serif font-light text-gray-800 leading-tight">
                    Welcome to <br />
                    <span className="font-bold font-parfumerie text-8xl">The Grand</span>
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Nestled in the heart of the city, The Grand Hotel offers an unparalleled
                    experience of luxury and comfort. Our commitment to excellence ensures
                    every guest enjoys world-class service and amenities.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    From our elegantly appointed rooms to our exceptional dining experiences,
                    every aspect of your stay is designed to create unforgettable memories.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-amber-700">50+</div>
                    <div className="text-gray-600 text-sm uppercase tracking-wide">Luxury Rooms</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-amber-700">24/7</div>
                    <div className="text-gray-600 text-sm uppercase tracking-wide">Concierge Service</div>
                  </div>
                </div>

                <Link
                  href="/about"
                  className="bg-white border-2 border-amber-700 text-amber-700 px-10 py-4 rounded-lg font-semibold hover:cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden group inline-block text-center"
                >
                  <span className="relative z-10">Discover Our Story</span>

                  {/* Dark Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-700/60 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 ease-in-out"></div>
                </Link>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="/assets/about.webp"
                    alt="Hotel Lobby"
                    className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                  />
                </div>
                <div className="absolute md:flex hidden -bottom-6 -right-6 w-full h-full border-2 border-amber-200 rounded-2xl z-0"></div>
              </div>
            </div>
          </div>
        </section>

        <Advert />

        {/* Featured Rooms Section */}
        <section id="featured-rooms" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-amber-700 font-semibold tracking-wider uppercase text-sm mb-4 block">
                Exclusive Collection
              </span>
              <h2 className="text-5xl font-serif font-bold text-gray-800 mb-6">
                Featured Rooms & Suites
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Discover our carefully curated selection of luxurious accommodations designed for the discerning traveler
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>

            {/* View All Rooms Button */}
            <div className="text-center mt-12">
              <Link
                href="/rooms"
                className="inline-flex items-center justify-center bg-amber-700 text-white px-12 py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View All Rooms & Suites
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <Story />
        <Award />

      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}