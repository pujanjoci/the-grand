import { BookingData, bookingStore } from './bookingStore';
import { sendBookingEmail } from './emailServiceMock';

export async function createBooking(bookingData: BookingData) {
    try {
        // 1. Save to local storage (client-side storage)
        bookingStore.saveBooking(bookingData);

        // 2. Send mock email notification (client-side simulation)
        await sendBookingEmail(bookingData);

        // 3. Log booking confirmation
        console.log('✅ Booking created successfully:', bookingData);

        return {
            success: true,
            message: 'Booking processed successfully',
            bookingId: `BK-${Date.now()}`
        };
    } catch (error) {
        console.error('❌ Booking creation failed:', error);
        throw error;
    }
}
