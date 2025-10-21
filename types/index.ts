export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  image: string;
  campaign: string;
}

export interface SustainabilityInitiative {
  id: string;
  title: string;
  description: string;
  image: string;
  stats: {
    value: string;
    label: string;
  };
  link: string;
}

export interface TimelineEvent {
  year: number;
  event: string;
}

export interface CompanyStat {
  value: string;
  label: string;
  suffix?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavigationLink {
  name: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinks {
  company: FooterLink[];
  brands: FooterLink[];
  sustainability: FooterLink[];
  legal: FooterLink[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  keywords: string;
  author: string;
}