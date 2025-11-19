import Header from '../../components/Header';

const amenities = [
  {
    id: 1,
    name: "Spa & Wellness Center",
    description: "Relax and rejuvenate with our premium spa treatments",
    icon: "💆",
  },
  {
    id: 2,
    name: "Fine Dining Restaurant",
    description: "Experience gourmet cuisine from world-class chefs",
    icon: "🍽️",
  },
  {
    id: 3,
    name: "Swimming Pool",
    description: "Indoor heated pool with panoramic city views",
    icon: "🏊",
  },
  {
    id: 4,
    name: "Fitness Center",
    description: "24/7 access to state-of-the-art fitness equipment",
    icon: "💪",
  },
  {
    id: 5,
    name: "Business Center",
    description: "Fully equipped meeting rooms and workspace",
    icon: "💼",
  },
  {
    id: 6,
    name: "Concierge Service",
    description: "Personalized assistance for all your needs",
    icon: "🔑",
  },
];

export default function Amenities() {
  return (
    <>
      <Header />
      
      <main className="pt-16">
        {/* Page Header */}
        <section className="bg-amber-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-serif font-bold mb-4">Hotel Amenities</h1>
            <p className="text-xl text-amber-100">
              Discover our world-class facilities and services
            </p>
          </div>
        </section>

        {/* Amenities Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {amenities.map((amenity) => (
                <div 
                  key={amenity.id}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
                >
                  <div className="text-4xl mb-4">{amenity.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {amenity.name}
                  </h3>
                  <p className="text-gray-600">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}