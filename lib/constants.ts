export const SITE_CONFIG = {
  name: 'Coca-Cola',
  title: 'Coca-Cola - Open Happiness',
  description: 'Experience the original, ice cold, refreshing, timeless taste that brings people together for generations. Coca-Cola, embracing life exactly as it happens.',
  url: 'https://coca-cola.vercel.app',
  ogImage: 'https://coca-cola.vercel.app/og-image.jpg',
  keywords: 'Coca-Cola, Coke, soft drink, refreshment, beverage, happiness',
  author: 'The Coca-Cola Company',
};

export const NAVIGATION_LINKS = [
  { name: 'Our Company', href: '#company' },
  { name: 'Brands', href: '#products' },
  { name: 'Sustainability', href: '#sustainability' },
  { name: 'Stories', href: '#smiles' },
];

export const COCA_COLA_PRODUCTS = [
  {
    id: 'original',
    name: 'Coca-Cola Original',
    description: 'The original, iconic taste',
    image: '/images/products/original.png',
    color: '#F40009',
  },
  {
    id: 'zero',
    name: 'Coca-Cola Zero',
    description: 'Zero sugar, original taste',
    image: '/images/products/zero.png',
    color: '#000000',
  },
  {
    id: 'light',
    name: 'Coca-Cola Light',
    description: 'Light, crisp, refreshing',
    image: '/images/products/light.png',
    color: '#C0C0C0',
  },
  {
    id: 'vanilla',
    name: 'Coca-Cola Vanilla',
    description: 'Classic Coke with vanilla twist',
    image: '/images/products/vanilla.png',
    color: '#F5DEB3',
  },
];

export const LIFESTYLE_CAMPAIGNS = [
  {
    id: 'real-magic',
    title: 'Real Magic',
    description: 'Celebrate the real magic of humanity',
    image: '/images/lifestyle/real-magic.jpg',
    campaign: 'Real Magic',
  },
  {
    id: 'move',
    title: 'Move',
    description: 'Look, look, look all around you, life is a ballet',
    image: '/images/lifestyle/move.jpg',
    campaign: 'Move Campaign',
  },
  {
    id: 'open-happiness',
    title: 'Open Happiness',
    description: 'Un-cap your happiness and celebrate',
    image: '/images/lifestyle/open-happiness.jpg',
    campaign: 'Open Happiness',
  },
];

export const SUSTAINABILITY_INITIATIVES = [
  {
    id: 'water',
    title: 'Water Stewardship',
    description: "We're on a journey to replenish 100% of the water we use. We want to give back to communities and nature, an amount of water equivalent to what is used in our beverages and their production.",
    image: '/images/sustainability/water.jpg',
    stats: {
      value: '100%',
      label: 'Water Replenishment Goal',
    },
    link: '/sustainability/water',
  },
  {
    id: 'packaging',
    title: 'Sustainable Packaging',
    description: "Every bottle, can is designed to be collected, recycled and reused because waste doesn't belong in nature.",
    image: '/images/sustainability/forest.jpg',
    stats: {
      value: '100%',
      label: 'Recyclable Packaging',
    },
    link: '/sustainability/packaging',
  },
];

export const COMPANY_TIMELINE = [
  {
    year: 1886,
    event: 'Coca-Cola was invented by Dr. John Stith Pemberton in Atlanta, Georgia',
  },
  {
    year: 1892,
    event: 'The Coca-Cola Company was founded',
  },
  {
    year: 1915,
    event: 'The iconic contour bottle design was created',
  },
  {
    year: 1985,
    event: 'Coca-Cola became the first soft drink consumed in space',
  },
  {
    year: 2021,
    event: 'Launch of "Real Magic" global brand platform',
  },
];

export const COMPANY_STATS = [
  {
    value: '137',
    label: 'Years of Refreshment',
    suffix: '+',
  },
  {
    value: '200',
    label: 'Countries & Territories',
    suffix: '+',
  },
  {
    value: '1.9',
    label: 'Billion Servings Daily',
    suffix: 'B',
  },
  {
    value: '700',
    label: 'Global Workforce',
    suffix: 'K+',
  },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://facebook.com/cocacola', icon: 'Facebook' },
  { name: 'Twitter', url: 'https://twitter.com/cocacola', icon: 'Twitter' },
  { name: 'Instagram', url: 'https://instagram.com/cocacola', icon: 'Instagram' },
  { name: 'Youtube', url: 'https://youtube.com/cocacola', icon: 'Youtube' },
];

export const FOOTER_LINKS = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our History', href: '#history' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Careers', href: '#careers' },
  ],
  brands: [
    { name: 'Coca-Cola', href: '#coca-cola' },
    { name: 'Sprite', href: '#sprite' },
    { name: 'Fanta', href: '#fanta' },
    { name: 'All Brands', href: '#all-brands' },
  ],
  sustainability: [
    { name: 'Water Stewardship', href: '#water' },
    { name: 'Packaging', href: '#packaging' },
    { name: 'Climate', href: '#climate' },
    { name: 'Communities', href: '#communities' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Use', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Sitemap', href: '#sitemap' },
  ],
};

export const HERO_CONFIG = {
  headline: 'Open Happiness.',
  subheadline: 'Experience the original, ice cold, refreshing, timeless taste that brings people together for generations. Coca-Cola, embracing life exactly as it happens.',
  ctaText: 'Explore',
  videoUrl: '/videos/hero-background.mp4',
};