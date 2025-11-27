export interface ItineraryItem {
  day: string;
  date: string;
  title: string;
  theme: string;
  details: string[];
  image: string;
}

export interface TransportOption {
  type: 'flight' | 'train' | 'service';
  title: string;
  description: string;
  iconName: string;
}

export interface NavItem {
  label: string;
  id: string;
}