export interface TripPackage {
  id: string;
  title: string;
  destination: "araku" | "tirupati";
  duration: string;
  days: number;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: number; title: string; description: string }[];
  accommodationType: "budget" | "standard" | "premium";
  activities: string[];
  featured?: boolean;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  destination: "araku" | "tirupati";
  rating: number;
  reviews: number;
  pricePerNight: number;
  image: string;
  amenities: string[];
  roomTypes: { name: string; price: number; capacity: number }[];
  description: string;
}

export const packages: TripPackage[] = [
  {
    id: "araku-explorer",
    title: "Araku Valley Explorer",
    destination: "araku",
    duration: "3 Days / 2 Nights",
    days: 3,
    price: 5999,
    originalPrice: 7999,
    rating: 4.8,
    reviews: 234,
    image: "araku",
    description: "Explore the mesmerizing Araku Valley with visits to Borra Caves, coffee plantations, and tribal museums. A perfect weekend getaway from Vizag.",
    inclusions: ["AC Transport from Vizag", "2 Nights Hotel Stay", "Breakfast & Dinner", "Sightseeing", "Guide"],
    exclusions: ["Lunch", "Personal Expenses", "Entry Tickets"],
    itinerary: [
      { day: 1, title: "Vizag to Araku", description: "Scenic train ride through Eastern Ghats, visit Tribal Museum, evening at leisure." },
      { day: 2, title: "Araku Sightseeing", description: "Borra Caves, Coffee Plantations, Padmapuram Gardens, Chaparai Waterfalls." },
      { day: 3, title: "Return to Vizag", description: "Morning nature walk, local market visit, return journey by road." },
    ],
    accommodationType: "standard",
    activities: ["Sightseeing", "Nature Walk", "Photography"],
    featured: true,
  },
  {
    id: "araku-premium",
    title: "Araku Premium Retreat",
    destination: "araku",
    duration: "4 Days / 3 Nights",
    days: 4,
    price: 11999,
    originalPrice: 15999,
    rating: 4.9,
    reviews: 156,
    image: "araku",
    description: "Premium hill station experience with luxury resort stay, exclusive coffee tasting, tribal village visit, and adventure activities.",
    inclusions: ["Luxury AC Transport", "3 Nights Resort Stay", "All Meals", "Adventure Activities", "Personal Guide", "Coffee Tasting"],
    exclusions: ["Personal Expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival & Settle In", description: "Scenic drive to Araku, check-in at premium resort, welcome dinner." },
      { day: 2, title: "Caves & Waterfalls", description: "Borra Caves exploration, Katiki Waterfalls trek, sunset point visit." },
      { day: 3, title: "Culture & Coffee", description: "Tribal village visit, Ananthagiri coffee estate tour, bamboo crafts workshop." },
      { day: 4, title: "Departure", description: "Morning yoga, local market shopping, return to Vizag." },
    ],
    accommodationType: "premium",
    activities: ["Trekking", "Coffee Tasting", "Cultural Tour", "Photography"],
    featured: true,
  },
  {
    id: "tirupati-darshan",
    title: "Tirupati Darshan Package",
    destination: "tirupati",
    duration: "2 Days / 1 Night",
    days: 2,
    price: 3999,
    originalPrice: 5499,
    rating: 4.7,
    reviews: 412,
    image: "tirupati",
    description: "Hassle-free Tirupati Balaji darshan with comfortable stay, special darshan tickets, and guided temple tour.",
    inclusions: ["AC Bus/Train from Vizag", "1 Night Hotel", "Breakfast", "Special Darshan Ticket", "Local Transport"],
    exclusions: ["Lunch & Dinner", "Personal Offerings", "Laddu Tickets"],
    itinerary: [
      { day: 1, title: "Journey & Darshan", description: "Early morning departure, arrive Tirupati, Sri Venkateswara Temple darshan." },
      { day: 2, title: "Sightseeing & Return", description: "Visit Padmavathi Temple, Sri Kalahasti, return journey." },
    ],
    accommodationType: "standard",
    activities: ["Pilgrimage", "Temple Tour"],
  },
  {
    id: "tirupati-premium",
    title: "Tirupati Spiritual Journey",
    destination: "tirupati",
    duration: "3 Days / 2 Nights",
    days: 3,
    price: 8499,
    originalPrice: 10999,
    rating: 4.9,
    reviews: 289,
    image: "tirupati",
    description: "Complete spiritual experience covering all major temples with VIP darshan, luxury hotel stay, and guided temple history tour.",
    inclusions: ["Flight/AC Train", "2 Nights Luxury Hotel", "All Meals", "VIP Darshan", "Guide", "Local AC Transport"],
    exclusions: ["Personal Offerings", "Shopping"],
    itinerary: [
      { day: 1, title: "Arrival", description: "Arrive Tirupati, visit Govindaraja Swamy Temple, evening Aarti at Kapila Theertham." },
      { day: 2, title: "Tirumala Darshan", description: "Early morning VIP darshan at Sri Venkateswara Temple, Silathoranam viewpoint." },
      { day: 3, title: "Extended Tour", description: "Visit Sri Kalahasti Temple, Kanipakam Vinayaka Temple, departure." },
    ],
    accommodationType: "premium",
    activities: ["Pilgrimage", "Temple Tour", "Cultural Tour"],
    featured: true,
  },
  {
    id: "araku-budget",
    title: "Araku Budget Trip",
    destination: "araku",
    duration: "2 Days / 1 Night",
    days: 2,
    price: 2999,
    originalPrice: 4499,
    rating: 4.5,
    reviews: 178,
    image: "araku",
    description: "Affordable Araku experience covering all key attractions with comfortable budget accommodation.",
    inclusions: ["Shared Transport", "1 Night Stay", "Breakfast", "Sightseeing"],
    exclusions: ["Lunch & Dinner", "Entry Tickets", "Personal Expenses"],
    itinerary: [
      { day: 1, title: "Vizag to Araku", description: "Morning departure, Borra Caves, Coffee Museum, check-in." },
      { day: 2, title: "Explore & Return", description: "Padmapuram Gardens, Tribal Museum, return to Vizag." },
    ],
    accommodationType: "budget",
    activities: ["Sightseeing", "Photography"],
  },
  {
    id: "tirupati-budget",
    title: "Tirupati Quick Darshan",
    destination: "tirupati",
    duration: "1 Day",
    days: 1,
    price: 1999,
    originalPrice: 2999,
    rating: 4.4,
    reviews: 321,
    image: "tirupati",
    description: "One-day express darshan package with round-trip transport from Vizag.",
    inclusions: ["AC Bus Transport", "Darshan Ticket", "Breakfast Pack"],
    exclusions: ["Lunch", "Offerings", "Personal Expenses"],
    itinerary: [
      { day: 1, title: "Express Darshan", description: "Midnight departure from Vizag, early morning darshan, return by evening." },
    ],
    accommodationType: "budget",
    activities: ["Pilgrimage"],
  },
];

export const hotels: Hotel[] = [
  {
    id: "haritha-resort",
    name: "Haritha Valley Resort",
    location: "Araku Valley",
    destination: "araku",
    rating: 4.6,
    reviews: 312,
    pricePerNight: 3500,
    image: "hotel-exterior",
    amenities: ["WiFi", "Restaurant", "Parking", "Room Service", "Garden View", "Hot Water"],
    roomTypes: [
      { name: "Deluxe Room", price: 3500, capacity: 2 },
      { name: "Suite", price: 5500, capacity: 3 },
      { name: "Cottage", price: 7000, capacity: 4 },
    ],
    description: "Nestled amidst lush green hills, Haritha Valley Resort offers a perfect blend of comfort and nature. Wake up to misty mountain views and birdsong.",
  },
  {
    id: "coffee-county",
    name: "Coffee County Resort",
    location: "Araku Valley",
    destination: "araku",
    rating: 4.8,
    reviews: 245,
    pricePerNight: 5200,
    image: "hotel-room",
    amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Coffee Tasting", "Bonfire", "Trekking"],
    roomTypes: [
      { name: "Premium Room", price: 5200, capacity: 2 },
      { name: "Valley View Suite", price: 8000, capacity: 3 },
      { name: "Presidential Villa", price: 12000, capacity: 6 },
    ],
    description: "A luxury coffee-themed resort surrounded by Arabica plantations. Enjoy exclusive coffee tasting sessions and spa treatments.",
  },
  {
    id: "tirumala-lodge",
    name: "Sri Padmavathi Grand",
    location: "Tirupati",
    destination: "tirupati",
    rating: 4.5,
    reviews: 567,
    pricePerNight: 2800,
    image: "hotel-room",
    amenities: ["WiFi", "Restaurant", "Parking", "Temple Shuttle", "Hot Water", "AC"],
    roomTypes: [
      { name: "Standard Room", price: 2800, capacity: 2 },
      { name: "Deluxe Room", price: 4000, capacity: 3 },
      { name: "Family Suite", price: 5500, capacity: 5 },
    ],
    description: "Conveniently located near the bus stand with easy access to Tirumala. Pure vegetarian restaurant and comfortable rooms for pilgrims.",
  },
  {
    id: "fortune-kences",
    name: "Fortune Kences Hotel",
    location: "Tirupati",
    destination: "tirupati",
    rating: 4.7,
    reviews: 423,
    pricePerNight: 4500,
    image: "hotel-exterior",
    amenities: ["WiFi", "Pool", "Gym", "Restaurant", "Bar", "Spa", "Business Center"],
    roomTypes: [
      { name: "Superior Room", price: 4500, capacity: 2 },
      { name: "Club Room", price: 6500, capacity: 2 },
      { name: "Royal Suite", price: 10000, capacity: 4 },
    ],
    description: "Premium 4-star hotel offering world-class amenities with a perfect blend of modern luxury and traditional hospitality.",
  },
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Hyderabad",
    rating: 5,
    text: "Amazing Araku trip! The Borra Caves were breathtaking and the hotel was superb. Pick Your Stay made everything so easy.",
    trip: "Araku Valley Explorer",
  },
  {
    name: "Priya Sharma",
    location: "Vizag",
    rating: 5,
    text: "The Tirupati darshan was so well-organized. No hassles at all. VIP treatment and the guide was very knowledgeable.",
    trip: "Tirupati Spiritual Journey",
  },
  {
    name: "Anil Reddy",
    location: "Bangalore",
    rating: 4,
    text: "Great value for money! The coffee plantation visit in Araku was the highlight. Will definitely book again.",
    trip: "Araku Premium Retreat",
  },
  {
    name: "Sunita Devi",
    location: "Chennai",
    rating: 5,
    text: "Family trip to Araku was perfectly planned. Kids loved the tribal museum and the train ride. Highly recommended!",
    trip: "Araku Valley Explorer",
  },
  {
    name: "Mohammed Irfan",
    location: "Vizag",
    rating: 5,
    text: "Booked the budget Tirupati package for my parents. They were very happy with the arrangements. Thank you team!",
    trip: "Tirupati Quick Darshan",
  },
];
