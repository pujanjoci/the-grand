import { rooms } from "@/data/rooms";
import RoomDetailClient from "./RoomDetailClient";

export function generateStaticParams() {
    return rooms.map((room) => ({
        id: room.id.toString(),
    }));
}

export default function RoomDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    return <RoomDetailClient params={params} />;
}
