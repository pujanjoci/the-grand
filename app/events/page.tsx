"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Events() {
    const venues = [
        {
            title: "Grand Ballroom",
            capacity: "Up to 500 Guests",
            description: "Our magnificent ballroom is perfect for weddings, gala dinners, and large corporate events. Featuring crystal chandeliers and state-of-the-art AV equipment.",
            image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Executive Boardrooms",
            capacity: "10-50 Guests",
            description: "Designed for productive meetings and intimate gatherings. Equipped with high-speed internet, video conferencing facilities, and ergonomic seating.",
            image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Rooftop Terrace",
            capacity: "Up to 150 Guests",
            description: "An open-air venue offering breathtaking views of the city skyline. Ideal for cocktail receptions, networking events, and private parties.",
            image: "/assets/rooftop-terrace.jpg"
        }
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pt-24">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                            alt="Events Hero"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    <div className="relative z-10 text-center text-white px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-serif font-bold mb-6"
                        >
                            Events & Conferences
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
                        >
                            Where memorable moments are crafted
                        </motion.p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20 container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Host Your Event With Us</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                            From intimate board meetings to lavish weddings, The Grand offers versatile venues to suit every occasion.
                            Our dedicated events team will ensure every detail is meticulously planned and executed to perfection.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {venues.map((venue, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
                            >
                                <div className="w-full lg:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src={venue.image}
                                        alt={venue.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <h3 className="text-3xl font-serif font-bold text-gray-900">{venue.title}</h3>
                                    <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-medium text-sm">
                                        {venue.capacity}
                                    </div>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {venue.description}
                                    </p>
                                    <button className="text-amber-700 font-semibold hover:text-amber-800 transition-colors flex items-center group">
                                        Inquire Now
                                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
