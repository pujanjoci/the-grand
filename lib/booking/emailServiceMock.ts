import { BookingData } from './bookingStore';

export async function sendBookingEmail(data: BookingData) {
    console.log("----------------------------------------");
    console.log("📧 MOCK EMAIL SERVICE - SENDING EMAIL");
    console.log("----------------------------------------");
    console.log(`To: ${data.email}`);
    console.log(`Subject: Booking Confirmation - ${data.roomName}`);
    console.log("Body:");
    console.log(`Dear ${data.name},`);
    console.log(`Thank you for booking with The Grand.`);
    console.log(`Room: ${data.roomName}`);
    console.log(`Check-in: ${data.checkIn}`);
    console.log(`Check-out: ${data.checkOut}`);
    console.log(`Total Price: NPR ${data.totalPrice}`);
    console.log("----------------------------------------");

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
}
