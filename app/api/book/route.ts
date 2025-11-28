import { NextResponse } from 'next/server';
import { sendBookingEmail } from '@/lib/booking/emailServiceMock';
import { BookingData } from '@/lib/booking/bookingStore';

export async function POST(request: Request) {
    try {
        const data: BookingData = await request.json();

        // Log the booking data
        console.log('📝 API Received Booking:', data);

        // Send mock email
        await sendBookingEmail(data);

        return NextResponse.json({ success: true, message: 'Booking processed successfully' });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to process booking' },
            { status: 500 }
        );
    }
}
