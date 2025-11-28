"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { teamMembers } from '@/data/team';

export default function About() {
    return (
        <>
            <Header />

            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="Hotel Exterior"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    <div className="relative z-10 text-center text-white px-4">
                        <motion.h1
                            className="text-5xl md:text-7xl font-serif font-bold mb-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            Our Story
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-7xl font-sans md:font-parfumerie font-light max-w-6xl mx-auto"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            A legacy of luxury, hospitality, and timeless elegance.
                        </motion.p>
                    </div>
                </section>

                {/* Description Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                        alt="Hotel Interior"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                className="space-y-8"
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-4xl font-serif font-bold text-gray-900">
                                    Welcome to The Grand
                                </h2>
                                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                    <p>
                                        Established in 1995, The Grand has been a landmark of luxury and sophistication.
                                        What started as a boutique hotel has evolved into a world-class destination,
                                        hosting dignitaries, celebrities, and discerning travelers from around the globe.
                                    </p>
                                    <p>
                                        Our architecture blends classical elegance with modern comfort, creating an
                                        atmosphere that is both grandiose and inviting. Every corner of our hotel
                                        tells a story of craftsmanship and attention to detail.
                                    </p>
                                    <p>
                                        At The Grand, we believe that true luxury lies in the details. From our
                                        meticulously designed rooms to our award-winning culinary experiences,
                                        we strive to exceed expectations at every turn.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-20 bg-amber-50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <motion.div
                                className="bg-white p-10 rounded-2xl shadow-sm border border-amber-100"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="text-3xl font-serif font-bold text-amber-800 mb-6">Our Mission</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    To provide an unforgettable experience of luxury and hospitality, where every
                                    guest feels valued and every stay becomes a cherished memory. We are dedicated
                                    of setting the highest standards in service, comfort, and culinary excellence.
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-white p-10 rounded-2xl shadow-sm border border-amber-100"
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-3xl font-serif font-bold text-amber-800 mb-6">Our Vision</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    To be recognized globally as the epitome of luxury hospitality, continuously
                                    innovating while preserving the timeless traditions of gracious service.
                                    We aim to inspire and delight our guests, employees, and community.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-16">Meet Our Team</h2>

                        <div className="flex justify-center gap-12">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    className="group text-center"
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="relative w-80 h-80 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-amber-700 font-medium uppercase tracking-wide text-lg">
                                        {member.role}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
