"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Dining() {
    const diningOptions = [
        {
            title: "The Grand Restaurant",
            description: "Experience a culinary journey with our world-class chefs preparing exquisite international and local cuisine.",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            features: ["Breakfast Buffet", "A La Carte Lunch", "Fine Dining Dinner"]
        },
        {
            title: "Signature Dishes",
            description: "Savor our chef's signature creations, featuring locally sourced ingredients and innovative cooking techniques.",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            features: ["Himalayan Trout", "Traditional Thali", "Chef's Special Dessert"]
        },
        {
            title: "The Lounge Bar",
            description: "Relax with a selection of premium wines, spirits, and handcrafted cocktails in a sophisticated atmosphere.",
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            features: ["Premium Wines", "Craft Cocktails", "Live Music"]
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
                            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                            alt="Dining Hero"
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
                            Exquisite Dining
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
                        >
                            A symphony of flavors in every bite
                        </motion.p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20 container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Culinary Excellence</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                            At The Grand, dining is not just a meal, but an experience. Our culinary team brings together the finest ingredients
                            and authentic recipes to create dishes that delight the senses. Whether you're looking for a romantic dinner,
                            a business lunch, or a casual gathering, our dining venues offer the perfect setting.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {diningOptions.map((option, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                            >
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={option.image}
                                        alt={option.title}
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{option.title}</h3>
                                    <p className="text-gray-600 mb-6">{option.description}</p>
                                    <ul className="space-y-2">
                                        {option.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-amber-700">
                                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
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
