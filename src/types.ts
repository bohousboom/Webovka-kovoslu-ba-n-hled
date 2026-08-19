export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  badge?: string;
  features: string[];
  priceHint: string;
  onsiteAvailable: boolean;
}

export interface PriceItem {
  id: string;
  category: 'tv' | 'antenna' | 'pc' | 'other';
  title: string;
  price: string;
  note: string;
  timeframe: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  device: string;
  text: string;
  type: 'residential' | 'b2b';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RepairFormData {
  fullName: string;
  phone: string;
  email?: string;
  deviceType: string;
  brand: string;
  serviceType: 'branch' | 'onsite';
  address?: string;
  issueDescription: string;
}
