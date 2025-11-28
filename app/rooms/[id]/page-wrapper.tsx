import { rooms } from "@/data/rooms";

export async function generateStaticParams() {
    return rooms.map((room) => ({
        id: room.id.toString(),
    }));
}

export { default } from './RoomDetailClient';
