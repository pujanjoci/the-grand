"use client";

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { bookingStore, BookingData } from '@/lib/booking/bookingStore';

export default function BookingConfirmation() {
    const [booking, setBooking] = useState<BookingData | null>(null);

    useEffect(() => {
        const data = bookingStore.getBooking();
        setBooking(data);
    }, []);

    if (!booking) {
        return (
            <>
                <Header />
                <main className="min-h-screen flex items-center justify-center bg-gray-50 pt-24">
                    <div className="text-center">
                        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">No Booking Found</h1>
                        <p className="text-gray-600 mb-8">It seems you haven't made a booking yet.</p>
                        <Link
                            href="/rooms"
                            className="bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
                        >
                            Browse Rooms
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />

            <main className="min-h-screen bg-gray-50 pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="bg-green-600 px-8 py-6 text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h1 className="text-3xl font-serif font-bold text-white mb-2">Booking Confirmed!</h1>
                            <p className="text-green-100">Thank you for choosing The Grand</p>
                        </div>

                        <div className="p-8">
                            <div className="border-b border-gray-100 pb-8 mb-8">
                                <p className="text-gray-600 mb-6 text-center">
                                    A confirmation email has been sent to <span className="font-semibold text-gray-900">{booking.email}</span>
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Guest Name</p>
                                        <p className="font-semibold text-gray-900">{booking.name}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Room Type</p>
                                        <p className="font-semibold text-gray-900">{booking.roomName}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Check-in</p>
                                        <p className="font-semibold text-gray-900">{booking.checkIn}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Check-out</p>
                                        <p className="font-semibold text-gray-900">{booking.checkOut}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Guests</p>
                                        <p className="font-semibold text-gray-900">{booking.guests}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Total Amount</p>
                                        <p className="font-bold text-amber-700">NPR {booking.totalPrice}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/"
                                    className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
                                >
                                    Return Home
                                </Link>
                                <button
                                    onClick={() => window.print()}
                                    className="bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors text-center"
                                >
                                    Print Confirmation
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </>
    );
}
