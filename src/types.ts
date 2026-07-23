export type StyleRef = 'ref2' | 'ref1' | 'ref3' | 'ref4' | 'ref4_alt1' | 'ref4_light' | 'ref5';

export interface StyleConfig {
  id: StyleRef;
  name: string;
  tagline: string;
  colors: {
    primary: string;
    primaryDark: string;
    accent: string;
    bg: string;
    cardBg: string;
    textDark: string;
    textMuted: string;
    headerBg: string;
    logoColor?: string;
  };
  fontSerif: string;
  fontSans: string;
  heroBgUrl: string;
  heroOverlay: string;
}

export type CategoryFilter = 'all' | 'emotional' | 'addictions' | 'trauma' | 'health';

export interface ServiceItem {
  id: string;
  category: CategoryFilter;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  badge?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  text: string;
  rating: number;
  date: string;
  tag: string;
}

export interface BookingDetails {
  modality: 'visio' | 'cabinet';
  consultationType: 'standard' | 'emdr';
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes?: string;
}
