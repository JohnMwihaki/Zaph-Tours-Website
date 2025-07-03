export interface TripData {
  title: string;
  image: string;
  description: string;
  pricing: number;
  offer?: string;
}

export const typesCardData: TripData[] = [
  {
    title: 'Honeymoon',
    image: '../honeymoon.jpg',
    description: 'Romantic getaways for newlyweds with private stays, scenic views, and special couple treats.',
    pricing: 240,
    offer: '10% off for early bookings',
  },
  {
    title: 'Family',
    image: '../family.jpg',
    description: 'Fun-filled safaris for the whole family with guided tours, safe lodges, and kids’ programs.',
    pricing: 1200,
  },
  {
    title: 'Adventure',
    image: '../adventure.jpg',
    description: 'Exciting outdoor experiences including hiking, rafting, and mountain camping in wild Kenya.',
    pricing: 200,
    offer: 'Save $100 for groups of 4+',
  },
  {
    title: 'Cultural Tours',
    image: '../cultural.jpg',
    description: 'Explore Kenya’s rich traditions, historic sites, and cultural dances guided by local experts.',
    pricing: 1200,
  },
  {
    title: 'Wildlife Safaris',
    image: '../wildlife.jpg',
    description: 'Discover the Big Five in Kenya’s top parks with expert guides and 4x4 safari vehicles.',
    pricing: 500,
    offer: 'Includes free binocular rental',
  },
  {
    title: 'Eco-Tours',
    image: '../eco-tours.jpg',
    description: 'Eco-conscious travel that supports local conservation efforts and sustainable lodgings.',
    pricing: 700,
  },
  {
    title: 'Luxury Vacation',
    image: '../luxury.jpg',
    description: 'Premium holiday experience with 5-star lodges, spa packages, and private excursions.',
    pricing: 600,
  },
  {
    title: 'Beach Holiday',
    image: '../beach.jpg',
    description: 'Sun-soaked coastal retreats with white sand beaches, water sports, and seafood feasts.',
    pricing: 3400,
    offer: 'Free snorkeling gear included',
  },
  {
    title: 'Wellness Retreats',
    image: '../wellness.jpg',
    description: 'Rejuvenate your mind and body with guided yoga, nature walks, and spa treatments.',
    pricing: 800,
  },
  {
    title: 'Culinary Tours',
    image: '../culinary.jpg',
    description: 'Tasty journeys into Kenyan cuisine with cooking classes, local markets, and food tastings.',
    pricing: 2500,
    offer: 'Complimentary cooking apron',
  },
];
