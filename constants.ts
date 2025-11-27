import { ItineraryItem, TransportOption, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Start', id: 'hero' },
  { label: 'Vision', id: 'vision' },
  { label: 'Location', id: 'location' },
  { label: 'Itinerary', id: 'itinerary' },
  { label: 'Transport', id: 'transport' },
];

export const ITINERARY_DATA: ItineraryItem[] = [
  {
    day: "Day 01",
    date: "Dec 25",
    title: "Christmas Wonder Night",
    theme: "Gathering · Celebration",
    details: [
      "14:00 - Check-in & Leisure Time",
      "18:30 - Christmas Buffet Dinner under the Stars",
      "Experience the exclusive outdoor lawn, sea breeze, and festive atmosphere."
    ],
    image: "https://picsum.photos/id/431/800/600" // Coffee/Relaxing/Tea time vibe
  },
  {
    day: "Day 02",
    date: "Dec 26",
    title: "Beauty & Scenery",
    theme: "Bloom · Goddess Glory",
    details: [
      "Morning - Free time at Yalong Bay ('No. 1 Bay in the World')",
      "14:30 - Group 2026 Strategy Empowerment Meeting",
      "Evening - 'Most Beautiful Goddess' Finals"
    ],
    image: "https://picsum.photos/id/324/800/600" // Forest/Nature vibe
  },
  {
    day: "Day 03",
    date: "Dec 27",
    title: "Peak Dialogue & Family Banquet",
    theme: "Ascension · Heritage",
    details: [
      "All Day - Deep Dive into Future Strategy",
      "17:00 - Gala Styling & Red Carpet Preparation",
      "19:30 - 2025 Annual Awards Gala Dinner"
    ],
    image: "https://picsum.photos/id/203/800/600" // Bicycle/Activity/Or just generic landscape
  },
  {
    day: "Day 04",
    date: "Dec 28",
    title: "Mountain & Sea Blessings",
    theme: "Prayers · Great Love",
    details: [
      "Morning - Yalong Bay Tropical Paradise Forest Park (Glass Walkway)",
      "Lunch - Traditional Hainan Cuisine",
      "Afternoon - Nanshan Cultural Tourism Zone (108m Guanyin Statue)"
    ],
    image: "https://picsum.photos/id/1015/800/600" // Ocean/Valley
  }
];

export const TRANSPORT_OPTIONS: TransportOption[] = [
  {
    type: 'flight',
    title: 'Direct Flight',
    description: 'Preferred: Fly directly to Sanya Phoenix Airport (SYX) during the day on Dec 25.',
    iconName: 'Plane'
  },
  {
    type: 'train',
    title: 'High-Speed Rail',
    description: 'Option: Fly to Haikou Meilan Airport, then transfer to the island loop high-speed train to "Yalong Bay Station".',
    iconName: 'Train'
  },
  {
    type: 'service',
    title: 'VIP Pickup',
    description: 'Exclusive designated car pickup arranged for all arrival stations.',
    iconName: 'Car'
  }
];