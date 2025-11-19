import Header from '../../components/Header';
import RoomCard from '../../components/RoomCard';
import Footer from '../../components/Footer';
import { Room } from '../../types';

import Link from 'next/link';

// Import Hero Icons
import { 
  Wifi, 
  Tv, 
  Coffee, 
  Wine, 
  Bath, 
  Home,
  Users,
  MapPin
} from 'lucide-react';

// Import rooms data from JSON file
import roomsData from '../../data/rooms.json';

export default function Rooms() {
  const allRooms: Room[] = roomsData.featuredRooms;

  return (
    <>
      <main>

        <Header />

        {/* Page Content */}
        <section className="pt-32 bg-gradient-to-r from-red-50 to-amber-50">
          <div className="container mx-auto px-4">
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-px bg-amber-600"></div>
                <span className="text-amber-700 font-semibold tracking-widest uppercase text-sm">
                  Exclusive Collection
                </span>
                <div className="w-16 h-px bg-amber-600"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-amber-900 to-amber-500 bg-clip-text text-transparent mb-6">
                Rooms & Suites
              </h2>
              <p className="bg-gradient-to-r from-amber-500 to-red-500 bg-clip-text text-transparent max-w-2xl mx-auto leading-relaxed">
                Each of our rooms and suites is thoughtfully designed to provide 
                the perfect blend of comfort, style, and functionality
              </p>
            </div>

            {/* Rooms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {allRooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>

            {/* Stats Section */}
            <div className="bg-gray-50 rounded-2xl p-12 mb-0"> {/* Changed mb-20 to mb-0 */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-amber-700">{allRooms.length}</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Room Types</div>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-amber-700">50+</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Total Rooms</div>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-amber-700">24/7</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Concierge</div>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl font-bold text-amber-700">5★</div>
                  <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Service</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section - Removed top padding since stats section now has no bottom margin */}
        <section className="pb-20 bg-gray-50 pt-0 -mt-8"> {/* Added pt-0 and -mt-8 */}
          <div className="container mx-auto px-4 pt-12"> {/* Added pt-12 to maintain spacing */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-px bg-amber-300"></div>
                <span className="text-amber-600 font-semibold tracking-widest uppercase text-sm">
                  Premium Amenities
                </span>
                <div className="w-16 h-px bg-amber-300"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
                Enhanced Comfort & Convenience
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Enjoy a wide range of premium amenities designed to make your stay truly exceptional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Wifi className="w-8 h-8" />,
                  title: "High-Speed WiFi",
                  description: "Complimentary high-speed internet access throughout your stay"
                },
                {
                  icon: <Tv className="w-8 h-8" />,
                  title: "Smart TV",
                  description: "Streaming services and international channels available"
                },
                {
                  icon: <Coffee className="w-8 h-8" />,
                  title: "Coffee Maker",
                  description: "In-room coffee and tea making facilities"
                },
                {
                  icon: <Wine className="w-8 h-8" />,
                  title: "Mini Bar",
                  description: "Well-stocked mini bar with refreshments and snacks"
                },
                {
                  icon: <Bath className="w-8 h-8" />,
                  title: "Luxury Bathroom",
                  description: "Premium toiletries and plush bathrobes"
                },
                {
                  icon: <Home className="w-8 h-8" />,
                  title: "Room Service",
                  description: "24-hour room service for your convenience"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Family Friendly",
                  description: "Extra beds and childcare services available"
                },
                {
                  icon: <MapPin className="w-8 h-8" />,
                  title: "City Center",
                  description: "Prime location with easy access to attractions"
                }
              ].map((amenity, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                    <div className="text-amber-700">
                      {amenity.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Ready to Experience Luxury?
            </h3>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
              Book your stay today and discover why The Grand Hotel is the preferred choice for discerning travelers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/booking"
                className="bg-white text-amber-700 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
              >
                Book Your Stay
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-700 transition-all duration-300 transform hover:scale-105 inline-block text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}