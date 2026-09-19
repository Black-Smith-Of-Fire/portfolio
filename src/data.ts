import react from "./assets/React.png";
import springboot from "./assets/Spring.png";
import git from "./assets/Git.png";
import docker from "./assets/Docker.png";
import django from "./assets/Django.png";
import github_actions from "./assets/GitHub Actions.png";
import java from "./assets/Java.png";
import python from "./assets/Python.png";
import aws from "./assets/AWS.png";
import linux from "./assets/Linux.png";

export const nav = [
  { label: 'Projects', count: 40, href: '#work' },
  { label: 'Skills', count: 4, href: '#service' },
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
    id: 'cryptocalm',
    title: 'Cognizant | Employee Lifecycle Management system',
    tags: ['React','Spring Boot', 'Spring Security','Docker','Tailwindcss'],
    category: 'Exploration',
    from: '#1B1E2A',
    to: '#05060A',
  },
  {
    id: 'tapfast',
    title: 'Tenet Networks | Automated Router Testing Framework',
    tags: ['Python', 'Selenium','Bash'],
    category: 'Exploration',
    from: '#12261F',
    to: '#05100C',
  },
  {
    id: 'bloomcare',
    title: 'SniperMouse- Navigate gui applications using Vim based keybindings',
    tags: ['Java', 'Robot Library','Vim'],
    category: 'Real Project',
    from: '#FF3D9A',
    to: '#170018',
  },
  {
    id: 'fragwater',
    title: 'Edux- A machine learning library',
    tags: ['ML', 'Java'],
    category: 'Real Project',
    from: '#2B2B2B',
    to: '#0A0A0A',
  },
]

export const services = [
  {
    title: 'Java',
    source:`${java}`,
  },
  {
    title: 'Python',
    source:`${python}`,
  },
  {
    title: 'React',
    source:`${react}`,
  },
  {
    title: 'Spring Boot',
    source:`${springboot}`,
  },
  {
    title: 'Git',
    source:`${git}`,
  },
  {
    title: 'Docker',
    source:`${docker}`,
  },
  {
    title: 'Django',
    source:`${django}`,
  },
  {
    title: 'Github Actions',
    source:`${github_actions}`,
  },
  {
    title: 'Linux',
    source:`${linux}`,
  },
  {
    title: 'AWS',
    source:`${aws}`,
  },
]

export interface ExperienceItem {
  company: string
  role: string
  from: string
  to: string
}

export const experience: ExperienceItem[] = [
  { company: 'Cognizant', role: 'Software Developer', from: 'April 2026', to: 'Present' },
  { company: 'Tenet Networks', role: 'Python intern', from: 'June 2024', to: 'August 2024' },
  { company: 'Edux(open source collaboration)', role: 'Contributor', from: 'Mar 2024', to: 'Present' },
]
