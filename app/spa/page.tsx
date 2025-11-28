"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, Heart, Sun } from 'lucide-react';

export default function Spa() {
    const services = [
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Signature Massage",
            description: "A blend of Swedish and Deep Tissue techniques to release tension and promote relaxation.",
            price: "From NPR 5,000"
        },
        {
            icon: <Droplets className="w-8 h-8" />,
            title: "Facial Treatments",
            description: "Rejuvenating facials using premium organic products tailored to your skin type.",
            price: "From NPR 4,500"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Couples Retreat",
            description: "A romantic spa experience for two, including a massage and private jacuzzi session.",
            price: "From NPR 12,000"
        },
        {
            icon: <Sun className="w-8 h-8" />,
            title: "Body Scrubs & Wraps",
            description: "Exfoliating scrubs and nourishing wraps to leave your skin glowing and soft.",
            price: "From NPR 4,000"
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
                            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                            alt="Spa Hero"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative z-10 text-center text-white px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-serif font-bold mb-6"
                        >
                            Wellness & Spa
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
                        >
                            Rejuvenate your body, mind, and soul
                        </motion.p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20 container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">A Sanctuary of Peace</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Escape the hustle and bustle of daily life and step into a world of tranquility at The Grand Spa.
                                Our expert therapists are dedicated to providing you with a personalized wellness journey.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Featuring state-of-the-art facilities including a sauna, steam room, and relaxation lounge,
                                we offer a holistic approach to well-being.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Spa Interior"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gray-50 p-8 rounded-xl hover:bg-amber-50 transition-colors duration-300 group"
                            >
                                <div className="text-amber-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                                <p className="text-amber-800 font-semibold">{service.price}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
