"use client";

import { Room } from '../types';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
      <img 
        src={room.image} 
        alt={room.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        {/* Main content area */}
        <div className="flex-grow">
          <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-2">
            {room.name}
          </h3>
          <p className="text-gray-600 mb-4">{room.description}</p>
          
          <div className="flex justify-between items-center mb-4">
            <div className="text-amber-700 font-semibold text-xl">
              NPR {room.price}/night
            </div>
            <div className="text-gray-600">
              {room.size} • Up to {room.maxGuests} guests
            </div>
          </div>
        </div>
        
        {/* Bottom section with amenities and button */}
        <div className="mt-auto">
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Amenities:</h4>
            <div className="flex flex-wrap gap-2">
              {room.amenities.map((amenity, index) => (
                <span 
                  key={index}
                  className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
          
          <button className="w-full bg-gradient-to-r from-amber-500 to-amber-800 text-white py-3 rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group">
            <span className="relative z-10">Book This Room</span>
            
            {/* Shimmer/Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;