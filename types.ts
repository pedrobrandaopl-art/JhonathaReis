import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  details: string[]; // Parágrafos detalhados para a página exclusiva
  icon: LucideIcon;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  rating: number;
}