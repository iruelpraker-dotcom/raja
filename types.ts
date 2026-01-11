
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  phone: string;
  whatsapp: string;
  address: string;
  services: ServiceItem[];
  testimonials: Array<{ name: string; text: string; rating: number }>;
}

export interface AppState {
  isLoggedIn: boolean;
  content: SiteContent;
}
