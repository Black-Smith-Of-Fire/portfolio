export const nav = [
  { label: 'Work', count: 40, href: '#work' },
  { label: 'Service', count: 4, href: '#service' },
  { label: 'Experience', count: '9+', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const socials = [
  { label: 'Dribbble', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Behance', href: '#' },
]

export type WorkCategory = 'Real Project' | 'Exploration'

export interface WorkItem {
  id: string
  title: string
  tags: string[]
  category: WorkCategory
  from: string
  to: string
  badge?: string
}

export const workItems: WorkItem[] = [
  {
    id: 'bloomcare',
    title: 'BloomCare — Mental Health App Landing Page',
    tags: ['Landing Page', 'Kumpin Studio'],
    category: 'Real Project',
    from: '#FF3D9A',
    to: '#170018',
  },
  {
    id: 'fragwater',
    title: 'FragWater — Luxury Fragrance Landing Page',
    tags: ['Landing Page', 'Kumpin Studio'],
    category: 'Real Project',
    from: '#2B2B2B',
    to: '#0A0A0A',
    badge: 'Real Project',
  },
  {
    id: 'cryptocalm',
    title: 'CryptoCalm — Portfolio Dashboard',
    tags: ['Dashboard', 'Exploration'],
    category: 'Exploration',
    from: '#1B1E2A',
    to: '#05060A',
  },
  {
    id: 'tapfast',
    title: 'TapFast — Payments App UI',
    tags: ['Mobile App', 'Exploration'],
    category: 'Exploration',
    from: '#12261F',
    to: '#05100C',
  },
]

export const services = [
  {
    title: 'UIUX Design',
    description:
      'Designing clear and scalable interfaces for dashboards, mobile apps, and websites.',
  },
  {
    title: 'Web Design & Dev',
    description: 'Building fast, responsive websites from design to deployment.',
  },
  {
    title: 'Branding',
    description: 'Crafting visual identities that feel consistent across every touchpoint.',
  },
  {
    title: 'Motions & Animations',
    description: 'Adding purposeful motion that guides attention and adds polish.',
  },
]

export interface ExperienceItem {
  company: string
  role: string
  from: string
  to: string
}

export const experience: ExperienceItem[] = [
  { company: 'Kumpin Studio', role: 'UI/UX & Product Designer', from: 'Nov 2025', to: 'Now' },
  { company: 'Mikan Team', role: 'Creative Director', from: 'Aug 2025', to: 'Now' },
  { company: 'Microsoft', role: 'Interaction Designer', from: 'Jan 2022', to: 'Aug 2025' },
  { company: 'Facebook', role: 'Visual Designer', from: 'Mar 2019', to: 'Dec 2021' },
  { company: 'Apple', role: 'Experience Designer', from: 'Feb 2017', to: 'Feb 2019' },
]
