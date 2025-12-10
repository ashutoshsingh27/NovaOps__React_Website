import {
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  LineChart,
  Lock,
  MessageSquareCode,
  Rocket,
  Server,
  Workflow
} from 'lucide-react';
import { AppView, CaseStudy, NavItem, Service, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', view: AppView.HOME },
  { label: 'Services', view: AppView.SERVICES },
  { label: 'About Us', view: AppView.ABOUT },
  { label: 'Case Studies', view: AppView.CASE_STUDIES },
  { label: 'Contact', view: AppView.CONTACT },
];

export const SERVICES: Service[] = [
  {
    id: 'ai-auto',
    title: 'AI Automation',
    description: 'Streamline operations with custom AI agents and intelligent workflows.',
    icon: BrainCircuit,
    features: ['Custom GPT Agents', 'Workflow Automation', 'Natural Language Processing', 'Data Extraction'],
  },
  {
    id: 'cloud-ops',
    title: 'Cloud Operations',
    description: 'Scalable infrastructure management for AWS, Azure, and Google Cloud.',
    icon: Cloud,
    features: ['Infrastructure as Code', '24/7 Monitoring', 'Cost Optimization', 'Multi-Cloud Strategy'],
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD',
    description: 'Accelerate deployment cycles with robust automated pipelines.',
    icon: Rocket,
    features: ['Automated Testing', 'Docker & Kubernetes', 'Release Management', 'Security Scanning'],
  },
  {
    id: 'data-eng',
    title: 'Data Engineering',
    description: 'Build robust data lakes and pipelines for actionable insights.',
    icon: Database,
    features: ['ETL Pipelines', 'Big Data Architecture', 'Real-time Analytics', 'Data Warehousing'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'FinTech Solutions',
    content: 'NovaOps transformed our deployment process. We went from weekly releases to multiple times a day with zero downtime.',
    image: 'https://picsum.photos/100/100?random=1',
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    role: 'Operations Director',
    company: 'MediCare Systems',
    content: 'The AI automation workflow they implemented saved our team 40+ hours per week on data entry alone. Simply incredible.',
    image: 'https://picsum.photos/100/100?random=2',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Founder',
    company: 'RetailAI',
    content: 'Their cloud cost optimization strategies reduced our AWS bill by 30% within the first two months.',
    image: 'https://picsum.photos/100/100?random=3',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Automated Customer Support Agent',
    client: 'E-commerce Giant',
    result: '70% Reduction in Ticket Volume',
    description: 'We built a custom RAG-based AI agent that handles tier-1 support queries, processes refunds automatically, and escalates complex issues to human agents.',
    tags: ['AI', 'Python', 'OpenAI', 'Vector DB'],
    image: 'https://picsum.photos/600/400?random=4',
  },
  {
    id: 'cs2',
    title: 'Healthcare Cloud Migration',
    client: 'Regional Hospital Network',
    result: '99.99% Uptime Achieved',
    description: 'Migrated legacy on-premise servers to a HIPAA-compliant AWS architecture using Terraform and Kubernetes for orchestration.',
    tags: ['Cloud', 'AWS', 'Kubernetes', 'Security'],
    image: 'https://picsum.photos/600/400?random=5',
  },
  {
    id: 'cs3',
    title: 'Predictive Maintenance System',
    client: 'Logistics Co.',
    result: '$2M Annual Savings',
    description: 'Implemented IoT data ingestion and machine learning models to predict vehicle failures before they occur.',
    tags: ['IoT', 'ML', 'Big Data', 'Azure'],
    image: 'https://picsum.photos/600/400?random=6',
  },
];