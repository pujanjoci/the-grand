export interface BookingData {
    roomId: number;
    roomName: string;
    price: number;
    checkIn: string;
    checkOut: string;
    guests: number;
    name: string;
    email: string;
    totalPrice: number;
}

const STORAGE_KEY = 'the_grand_booking';

export const bookingStore = {
    saveBooking: (data: BookingData) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        }
    },

    getBooking: (): BookingData | null => {
        if (typeof window !== 'undefined') {
            const data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : null;
        }
        return null;
    },

    clearBooking: () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(STORAGE_KEY);
        }
    }
};
