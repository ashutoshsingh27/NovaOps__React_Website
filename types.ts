import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  result: string;
  description: string;
  tags: string[];
  image: string;
}

export interface NavItem {
  label: string;
  // Fix: Change type from string to AppView to match usage in Layout.tsx
  view: AppView;
}

export enum AppView {
  HOME = 'home',
  SERVICES = 'services',
  ABOUT = 'about',
  CASE_STUDIES = 'case-studies',
  CONTACT = 'contact',
  BOOKING = 'booking',
}