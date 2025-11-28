import { BookingData, bookingStore } from './bookingStore';

export async function createBooking(bookingData: BookingData) {
    try {
        // 1. Save to local storage (mock database/session)
        bookingStore.saveBooking(bookingData);

        // 2. Call API to send email (mock)
        const response = await fetch('/api/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        });

        if (!response.ok) {
            throw new Error('Failed to create booking');
        }

        return await response.json();
    } catch (error) {
        console.error('Booking creation failed:', error);
        throw error;
    }
}
