"use client";

import { useState, use } from "react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { rooms } from "@/data/rooms";
import BookingModal from "@/components/BookingModal";
import Link from "next/link";
import {
    Wifi,
    Tv,
    Coffee,
    Wine,
    Bath,
    Home,
    Users,
    MapPin,
    Check,
    Star,
    Calendar,
    Shield,
    Maximize,
} from "lucide-react";

export default function RoomDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const roomId = parseInt(id);
    const room = rooms.find((r) => r.id === roomId);

    if (!room) {
        notFound();
        return null;
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [guests, setGuests] = useState(1);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const calculateTotal = () => {
        if (!checkInDate || !checkOutDate) return room.price * guests;
        const start = new Date(checkInDate);
        const end = new Date(checkOutDate);
        const diffTime = end.getTime() - start.getTime();
        const nights = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 1);
        return room.price * nights * guests;
    };

    const handleBookClick = () => {
        if (!checkInDate || !checkOutDate) {
            setErrorMessage("Please select both check‑in and check‑out dates.");
            return;
        }
        if (new Date(checkOutDate) <= new Date(checkInDate)) {
            setErrorMessage("Check‑out date must be after check‑in date.");
            return;
        }
        setErrorMessage(null);
        setIsModalOpen(true);
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pt-24">
                {/* Room Header & Image */}
                <section className="container mx-auto px-4 py-8">
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/rooms"
                            className="text-amber-700 hover:text-amber-800 font-medium mb-4 inline-block"
                        >
                            ← Back to All Rooms
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                            {room.name}
                        </h1>
                        <div className="flex items-center space-x-4 text-gray-600">
                            <span className="flex items-center">
                                <Maximize className="w-5 h-5 mr-2" />
                                {room.size}
                            </span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full" />
                            <span className="flex items-center">
                                <Users className="w-5 h-5 mr-2" />
                                Up to {room.maxGuests} Guests
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl mb-12"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={room.image}
                            alt={room.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 md:p-12">
                            <div className="text-white">
                                <span className="text-lg md:text-xl font-light opacity-50 block mb-2">
                                    Starting from
                                </span>
                                <span className="text-4xl md:text-5xl opacity-40 font-bold">
                                    NPR {room.price}
                                </span>
                                <span className="text-lg opacity-30"> / night</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                        {/* Left Column: Details */}
                        <div className="lg:col-span-2 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                                    Overview
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {room.description}. Designed with your comfort in mind, this
                                    room offers a perfect blend of luxury and functionality.
                                    Whether you are traveling for business or leisure, you will
                                    find everything you need for a relaxing stay.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                                    Room Amenities
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {room.amenities.map((amenity, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                                        >
                                            <div className="text-amber-600">
                                                <Check className="w-5 h-5" />
                                            </div>
                                            <span className="text-gray-700 font-medium">
                                                {amenity}
                                            </span>
                                        </div>
                                    ))}
                                    {/* Common amenities for all rooms */}
                                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                                        <div className="text-amber-600">
                                            <Wifi className="w-5 h-5" />
                                        </div>
                                        <span className="text-gray-700 font-medium">
                                            High‑Speed WiFi
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                                        <div className="text-amber-600">
                                            <Bath className="w-5 h-5" />
                                        </div>
                                        <span className="text-gray-700 font-medium">
                                            Luxury Toiletries
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Booking Card */}
                        <div className="lg:col-span-1">
                            <motion.div
                                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-32"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                                    Book Your Stay
                                </h3>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Check‑in Date
                                        </label>
                                        <input
                                            type="date"
                                            className="w-full px-4 py-3 border border-gray-200 text-gray-500 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                            value={checkInDate}
                                            onChange={(e) => setCheckInDate(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Check‑out Date
                                        </label>
                                        <input
                                            type="date"
                                            className="w-full px-4 py-3 border border-gray-200 text-gray-500 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                            value={checkOutDate}
                                            onChange={(e) => setCheckOutDate(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Guests
                                        </label>
                                        <select
                                            className="w-full px-4 py-3 border border-gray-200 text-gray-500 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                            value={guests}
                                            onChange={(e) => setGuests(parseInt(e.target.value))}
                                        >
                                            <option value={1}>1 Guest</option>
                                            <option value={2}>2 Guests</option>
                                            <option value={3}>3 Guests</option>
                                            <option value={4}>4 Guests</option>
                                        </select>
                                    </div>

                                    <div className="pt-4 border-t border-gray-100">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-600">Price per night</span>
                                            <span className="font-semibold">NPR {room.price}</span>
                                        </div>
                                        <div className="flex justify-between items-center mb-6">
                                            <span className="text-gray-600">Service Charge (10%)</span>
                                            <span className="font-semibold">NPR {Math.round(room.price * 0.1)}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-lg font-bold text-amber-800 mb-6">
                                            <span>Total</span>
                                            <span>NPR {Math.round(calculateTotal() * 1.1)}</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleBookClick}
                                        className="w-full bg-amber-700 text-white py-4 rounded-lg font-semibold hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        Book Now
                                    </button>
                                    {errorMessage && (
                                        <p className="text-red-500 mt-2 text-sm">{errorMessage}</p>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                bookingDetails={{
                    roomId: room.id,
                    roomName: room.name,
                    price: room.price,
                    checkIn: checkInDate,
                    checkOut: checkOutDate,
                    guests,
                    totalPrice: calculateTotal(),
                }}
            />
        </>
    );
}
