export interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
  size: string;
  maxGuests: number;
}

export interface Amenity {
  id: number;
  name: string;
  description: string;
  icon: string;
}