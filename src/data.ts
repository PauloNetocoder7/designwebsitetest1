import { StyleConfig, StyleRef, ServiceItem, Testimonial } from './types';

export const STYLE_CONFIGS: Record<StyleRef, StyleConfig> = {
  ref2: {
    id: 'ref2',
    name: 'Estilo Ref 2 (Ocean Blue & Sunset Coral)',
    tagline: 'Design Calmo com Azul Oceano e Tom Pôr do Sol da Praia',
    colors: {
      primary: '#1E3E5B',       // Deep Ocean Blue
      primaryDark: '#12273B',
      accent: '#E07A5F',        // Sunset Peach Coral
      bg: '#FAF8F5',            // Soft Ivory Sand
      cardBg: '#FFFFFF',
      textDark: '#172838',      // Deep Marine Slate
      textMuted: '#586E80',     // Sea Mist Gray
      headerBg: 'rgba(250, 248, 245, 0.95)',
    },
    fontSerif: "'Playfair Display', serif",
    fontSans: "'Jost', sans-serif",
    heroBgUrl: 'https://i.ibb.co/WW33PdZN/pexels-noyami-170979394-19783658.jpg',
    heroOverlay: 'linear-gradient(135deg, rgba(18, 39, 59, 0.45) 0%, rgba(18, 39, 59, 0.25) 60%, rgba(18, 39, 59, 0.1) 100%)',
  },
  ref1: {
    id: 'ref1',
    name: 'Estilo Ref 1 (Coastal Slate & Sunset)',
    tagline: 'Azul Costeiro Orgânico com Detalhes Pôr do Sol e Areia de Praia',
    colors: {
      primary: '#1C3852',       // Coastal Slate Navy
      primaryDark: '#102234',
      accent: '#E07A5F',        // Sunset Coral
      bg: '#F2F5F8',            // Soft Coastal Gray
      cardBg: '#FFFFFF',
      textDark: '#162838',
      textMuted: '#52687A',
      headerBg: 'rgba(242, 245, 248, 0.95)',
    },
    fontSerif: "'Cormorant Garamond', serif",
    fontSans: "'Jost', sans-serif",
    heroBgUrl: 'https://i.ibb.co/WW33PdZN/pexels-noyami-170979394-19783658.jpg',
    heroOverlay: 'linear-gradient(135deg, rgba(16, 34, 52, 0.45) 0%, rgba(16, 34, 52, 0.25) 60%, rgba(16, 34, 52, 0.1) 100%)',
  },
  ref3: {
    id: 'ref3',
    name: 'Estilo Ref 3 (Classic Marine & Sunset)',
    tagline: 'Elegância Clássica com Azul Marinho e Tom Pôr do Sol',
    colors: {
      primary: '#1E3E5B',       // Deep Ocean Blue
      primaryDark: '#12273B',
      accent: '#E07A5F',        // Sunset Coral
      bg: '#FAF9F6',            // Warm Off-White
      cardBg: '#FFFFFF',
      textDark: '#172838',
      textMuted: '#586E80',
      headerBg: 'rgba(255, 255, 255, 0.96)',
    },
    fontSerif: "'Playfair Display', serif",
    fontSans: "'Plus Jakarta Sans', sans-serif",
    heroBgUrl: 'https://i.ibb.co/WW33PdZN/pexels-noyami-170979394-19783658.jpg',
    heroOverlay: 'linear-gradient(135deg, rgba(18, 39, 59, 0.45) 0%, rgba(18, 39, 59, 0.25) 60%, rgba(18, 39, 59, 0.1) 100%)',
  },
  ref4: {
    id: 'ref4',
    name: 'Estilo Ref 4 (Deep Ocean Dusk)',
    tagline: 'Oceano Profundo e Coral do Pôr do Sol com Fundo Escuro Envolvente',
    colors: {
      primary: '#2B5575',       // Ocean Dusk Blue
      primaryDark: '#19364C',
      accent: '#E07A5F',        // Sunset Coral
      bg: '#0F1C28',            // Deep Midnight Sea
      cardBg: '#192B3C',
      textDark: '#F0F5FA',
      textMuted: '#94A7B8',
      headerBg: 'rgba(15, 28, 40, 0.92)',
    },
    fontSerif: "'Playfair Display', serif",
    fontSans: "'Jost', sans-serif",
    heroBgUrl: 'https://i.ibb.co/WW33PdZN/pexels-noyami-170979394-19783658.jpg',
    heroOverlay: 'linear-gradient(rgba(15, 28, 40, 0.35), rgba(15, 28, 40, 0.65))',
  },
  ref4_alt1: {
    id: 'ref4_alt1',
    name: 'Estilo Ref 4 Alt (Sea Blue & Sunset)',
    tagline: 'Azul do Mar Profundo com Tons Pôr do Sol e Areia',
    colors: {
      primary: '#1C3852',       // Coastal Slate Navy
      primaryDark: '#102234',
      accent: '#E07A5F',        // Sunset Coral
      bg: '#F5F2EB',            // Salted Warm Sand
      cardBg: '#FFFFFF',
      textDark: '#162838',
      textMuted: '#52687A',
      headerBg: 'rgba(245, 242, 235, 0.95)',
    },
    fontSerif: "'Playfair Display', serif",
    fontSans: "'Jost', sans-serif",
    heroBgUrl: 'https://i.ibb.co/WW33PdZN/pexels-noyami-170979394-19783658.jpg',
    heroOverlay: 'linear-gradient(rgba(16, 34, 52, 0.4), rgba(16, 34, 52, 0.6))',
  },
  ref4_light: {
    id: 'ref4_light',
    name: 'Estilo Ref 4 Light (Ocean Mist & Sunset Coral)',
    tagline: 'Névoa Oceânica Clara com Detalhes Coral Pôr do Sol',
    colors: {
      primary: '#1E3E5B',       // Deep Ocean Blue
      primaryDark: '#12273B',
      accent: '#E07A5F',        // Sunset Coral
      bg: '#F0F4F8',            // Soft Horizon Blue
      cardBg: '#FFFFFF',
      textDark: '#172838',
      textMuted: '#586E80',
      headerBg: 'rgba(240, 244, 248, 0.95)',
    },
    fontSerif: "'Playfair Display', serif",
    fontSans: "'Jost', sans-serif",
    heroBgUrl: 'https://i.ibb.co/WW33PdZN/pexels-noyami-170979394-19783658.jpg',
    heroOverlay: 'linear-gradient(rgba(18, 39, 59, 0.35), rgba(18, 39, 59, 0.65))',
  },
  ref5: {
    id: 'ref5',
    name: 'Ref 5 (Ocean Breeze & Sunset Coral)',
    tagline: 'Azul do Mar Profundo com Acento Coral Pôr do Sol',
    colors: {
      primary: '#1C3852',       // Coastal Slate Navy
      primaryDark: '#102234',
      accent: '#E07A5F',        // Sunset Coral Accent
      bg: '#F4F7F9',            // Cool Sea Foam Light Background
      cardBg: '#FFFFFF',
      textDark: '#162838',
      textMuted: '#52687A',
      headerBg: 'rgba(244, 247, 249, 0.95)',
    },
    fontSerif: "'Playfair Display', serif",
    fontSans: "'Jost', sans-serif",
    heroBgUrl: 'https://i.ibb.co/WW33PdZN/pexels-noyami-170979394-19783658.jpg',
    heroOverlay: 'linear-gradient(rgba(16, 34, 52, 0.35), rgba(16, 34, 52, 0.65))',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'emotional',
    category: 'emotional',
    icon: '🌊',
    title: 'Difficultés psychologiques et émotionnelles',
    subtitle: 'Anxiété, dépression, transitions & gestion des émotions',
    description: 'Accompagnement des adolescents et adultes confrontés à une souffrance psychique, des doutes ou un moment de vie difficile.',
    details: [
      'Anxiété, stress, angoisses, ruminations',
      'Dépression, tristesse, perte de motivation ou d\'énergie, difficultés à retrouver du sens',
      'Perte de confiance en soi, dévalorisation, difficultés à s\'affirmer',
      'Périodes de transition ou de remise en question (changement de vie, deuil, rupture, changement professionnel...)',
      'Épuisement professionnel (burn-out), surcharge mentale, difficultés liées au travail',
      'Troubles du sommeil (difficultés d\'endormissement, réveils nocturnes, fatigue chronique)',
      'Difficultés relationnelles (couple, famille, amis, collègues)',
      'Sentiment de solitude ou d\'isolement',
      'Difficultés à gérer ses émotions (colère, tristesse, irritabilité...)',
      'Perfectionnisme, exigence excessive envers soi-même'
    ],
    badge: 'Fréquent'
  },
  {
    id: 'addictions',
    category: 'addictions',
    icon: '🐚',
    title: 'Addictions et conduites à risque',
    subtitle: 'Questionner, réduire ou arrêter les dépendances',
    description: 'Soutien bienveillant pour comprendre vos habitudes, engager un changement ou sécuriser un sevrage.',
    details: [
      'Une consommation de substances (alcool, tabac, drogues) que vous souhaitez questionner, réduire ou arrêter',
      'Une addiction avec ou sans substance (jeux, écrans...)',
      'Une démarche de sevrage ou un travail après une période de sevrage'
    ]
  },
  {
    id: 'trauma',
    category: 'trauma',
    icon: '✨',
    title: 'Psychotraumatismes (EMDR)',
    subtitle: 'Retraiter les événements difficiles',
    description: 'Formée à l\'EMDR (niveau 1), je peux vous accompagner si vous avez vécu un événement traumatique (accident, agression, deuil brutal, événement médical difficile...) qui continue d\'avoir des répercussions dans votre vie actuelle.',
    details: [
      'Conséquences post-traumatiques : reviviscences, cauchemars, évitements, hypervigilance',
      'Retraitement doux et structuré des souvenirs douloureux',
      'Accompagnement personnalisé en EMDR niveau 1'
    ],
    badge: 'Spécialité EMDR'
  },
  {
    id: 'health',
    category: 'health',
    icon: '🌿',
    title: 'Face à la maladie et aux épreuves de santé',
    subtitle: 'Maladie grave, douleur chronique & soutien aux aidants',
    description: 'Un espace d\'écoute pour la personne malade ainsi que ses proches et aidants, souvent eux aussi fragilisés par la maladie d\'un être cher.',
    details: [
      'L\'annonce d\'une maladie grave ou chronique',
      'La douleur physique persistante',
      'Les répercussions psychologiques d\'une hospitalisation ou d\'une intervention chirurgicale',
      'L\'accompagnement en fin de vie, pour la personne malade comme pour ses proches',
      'Le vécu émotionnel lié à un parcours de soins (oncologie, cardiologie, neurologie, chirurgie...)',
      'Accompagnement des proches et aidants'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Aurélie F.',
    role: 'Accompagnement Anxiété & EMDR',
    text: 'Une grande écoute, énormément de bienveillance et un véritable professionnel. Célia a su me mettre en confiance dès la première séance en visio.',
    rating: 5,
    date: 'Janvier 2026',
    tag: 'TCC & EMDR'
  },
  {
    id: 't2',
    author: 'Marc L.',
    role: 'Soutien Burn-out',
    text: 'J’étais dans une période d’épuisement professionnel totale. L’approche humaine et concrète de Célia m’a permis de poser mes limites et de retrouver mon équilibre.',
    rating: 5,
    date: 'Décembre 2025',
    tag: 'Gestion du Stress'
  },
  {
    id: 't3',
    author: 'Sophie P.',
    role: 'Suivi Trauma & Deuil',
    text: 'Grâce aux séances d’EMDR, un événement bloquant depuis des années s’est enfin apaisé. Merci pour cette douceur et cette grande rigueur clinique.',
    rating: 5,
    date: 'Novembre 2025',
    tag: 'EMDR Niveau 1'
  },
  {
    id: 't4',
    author: 'Thomas D.',
    role: 'Visio Doctolib',
    text: 'La consultation à distance sur Doctolib s’est faite très facilement. Le cadre est rassurant et l’écoute est au rendez-vous. Je recommande vivement.',
    rating: 5,
    date: 'Février 2026',
    tag: 'Consultation Visio'
  }
];

export const FAQS = [
  {
    question: 'Comment se déroule un premier rendez-vous ?',
    answer: 'La première séance est l\'occasion de faire connaissance, de comprendre ce qui vous amène à consulter, et de définir ensemble vos besoins et vos attentes. Il n\'y a pas de "bonne façon" de commencer : vous êtes libre d\'aborder ce qui vous semble important, à votre rythme.'
  },
  {
    question: 'Comment se passent les séances en visio ?',
    answer: 'Les consultations se déroulent en visio, via Doctolib. Un lien de connexion vous est envoyé avant chaque séance. Ce format vous permet de consulter depuis chez vous ou tout autre endroit calme et confidentiel, en toute simplicité.'
  }
];
