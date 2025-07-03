export interface DestinationData {
  name: string;
  image: string;
  description: string;
  groupPrice: number;
  individualPrice: number;
  link: string;
}

export const destinationData: DestinationData[] = [
  {
    name: 'Nairobi National Park',
    image: '../nairobi.jpg',
    description: 'A safari in the city with lions, giraffes and more.',
    groupPrice: 3000,
    individualPrice: 1500,
    link: '/destination/nairobi-national-park',
  },
  {
    name: 'Mt. Kenya',
    image: '../mt-kenya.jpg',
    description: 'Kenya’s highest peak and top climbing destination.',
    groupPrice: 3000,
    individualPrice: 1500,
    link: '/destination/mt-kenya',
  },
  {
    name: 'Mt. Ruwenzori',
    image: '../ruwenzori.jpg',
    description: 'Majestic mountain range between Uganda and Congo.',
    groupPrice: 3000,
    individualPrice: 1500,
    link: '/destination/mt-ruwenzori',
  },
  {
    name: 'Tsavo National Park',
    image: '../tsavo.jpg',
    description: 'One of Kenya’s largest parks with red elephants.',
    groupPrice: 3000,
    individualPrice: 1500,
    link: '/destination/tsavo-national-park',
  },
  {
    name: 'Lake Nakuru',
    image: '../Lnakuru.jpg',
    description: 'Famous for flamingos and beautiful lake scenery.',
    groupPrice: 3000,
    individualPrice: 1500,
    link: '/destination/lake-nakuru',
  },
  {
    name: 'Coastal Kenya',
    image: '../coastal-park.jpg',
    description: 'Pristine beaches and Swahili culture by the sea.',
    groupPrice: 3000,
    individualPrice: 1500,
    link: '/destination/coastal-kenya',
  },
];
