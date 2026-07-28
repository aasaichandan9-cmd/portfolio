import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Server,
  Database,
  Wrench,
  Cloud,
  Cpu,
  Layout,
  Palette,
  Rocket,
  Shield,
  Gauge,
  Megaphone,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  name: 'ASAPU APPALA SAI CHANDAN',
  shortName: 'Sai Chandan',
  initials: 'SC',
  role: 'Full Stack Developer',
  tagline: 'Building scalable web applications with modern technologies.',
  location: 'Visakhapatnam, Andhra Pradesh, India',
  email: 'aasaichandan9@gmail.com',
  status: 'Open to internships, freelance & collaborations',
  github: 'https://github.com/aasaichandan9-cmd',
  linkedin: 'https://www.linkedin.com/in/asapuappalasaichandan9/',
  leetcode: 'https://leetcode.com/',
  portfolio: 'https://chandan9.netlify.app/',
  resumePath: '/resume.pdf',
  summary:
    'Computer Science Engineering student focused on full stack development. I build production-grade web applications end-to-end — from database design and REST APIs to responsive, accessible frontends. I care about clean architecture, readable code, and shipping features that solve real problems.',
};

export const heroRoles = [
  'Full Stack Developer',
  'Java Developer',
  'Backend Engineer',
  'Problem Solver',
];

export const heroStats: { label: string; value: number; suffix: string }[] = [
  { label: 'Projects Completed', value: 4, suffix: '+' },
  { label: 'Certifications', value: 5, suffix: '+' },
  { label: 'GitHub Contributions', value: 120, suffix: '+' },
  { label: 'Coding Hours', value: 500, suffix: '+' },
];

export const aboutParagraphs = [
  'I am a Computer Science Engineering student in Visakhapatnam, India, focused on becoming a full stack software engineer. My work spans the entire stack — designing schemas, building APIs with Node.js and Express, and crafting responsive frontends with modern JavaScript.',
  'I build because I enjoy turning ideas into working software. Every project I ship starts with a real problem: connecting job seekers with local employers, digitising a campus canteen, or managing tasks efficiently. I focus on the smallest details that make a product feel professional.',
  'When I solve problems, I start by understanding the constraints, then design the simplest system that handles them. I write code that other engineers can read and maintain, I test my assumptions early, and I iterate based on feedback rather than guessing.',
  'My goal is to join a product-based company as a full stack engineer, contribute to systems used by real users, and keep growing through open source and challenging work.',
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Java', 'Python', 'C', 'JavaScript'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Dev Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Netlify'],
  },
  {
    title: 'CS Fundamentals',
    icon: Cpu,
    skills: ['DBMS', 'Data Structures', 'Digital Logic', 'OOPS'],
  },
];

export type TechItem = { name: string; icon: LucideIcon };
export const techStack: TechItem[] = [
  { name: 'Java', icon: Code2 },
  { name: 'JavaScript', icon: Code2 },
  { name: 'Python', icon: Code2 },
  { name: 'Node.js', icon: Server },
  { name: 'Express.js', icon: Server },
  { name: 'MongoDB', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'Git', icon: Github },
  { name: 'Postman', icon: Wrench },
  { name: 'Netlify', icon: Cloud },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  timeline: string;
  tech: string[];
  features: string[];
  challenges: string;
  problem: string;
  solution: string;
  architecture: string;
  lessons: string;
  github: string;
  demo: string | null;
  accent: string;
};

export const projects: Project[] = [
  {
    id: 'local-job-connect',
    title: 'Local Job Connect',
    tagline: 'Connecting local job seekers with nearby employers',
    description:
      'A platform that bridges the gap between local job seekers and employers by enabling location-based job discovery, applications, and direct contact — built for the unorganised local employment market.',
    role: 'Full Stack Developer',
    timeline: '2026',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML', 'CSS'],
    features: [
      'Location-based job listings with filtering by role and proximity',
      'Employer dashboard to post and manage job openings',
      'Job seeker profiles with application tracking',
      'Direct contact flow between candidates and employers',
    ],
    challenges:
      'Designing a schema that flexibly handles varied job categories while keeping queries fast on location.',
    problem:
      'Local job seekers in tier-2 cities rely on word-of-mouth or printed classifieds. There is no simple digital channel connecting them with nearby employers for informal and semi-formal roles.',
    solution:
      'A lightweight web platform where employers post location-tagged jobs and seekers filter by proximity and role. The system keeps the flow minimal so non-technical users can use it without friction.',
    architecture:
      'REST API built with Express.js over MongoDB. Frontend served as static pages communicating via fetch. Geospatial queries indexed for location filtering.',
    lessons:
      'Designing for non-technical users taught me to prioritise clarity over features. I learned to model flexible job data without over-engineering the schema.',
    github: 'https://github.com/aasaichandan9-cmd',
    demo: null,
    accent: '#00B8FF',
  },
  {
    id: 'smart-canteen',
    title: 'Smart Canteen / Departmental Store',
    tagline: 'Digitising campus canteen ordering and inventory',
    description:
      'A digital ordering and inventory system for campus canteens and departmental stores, replacing manual token systems with a streamlined order flow and real-time stock visibility.',
    role: 'Full Stack Developer',
    timeline: '2026',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'CSS'],
    features: [
      'Browse menu with live item availability',
      'Cart and order placement with order ID generation',
      'Admin panel for inventory and stock updates',
      'Order status tracking from placed to ready',
    ],
    challenges:
      'Keeping inventory consistent when multiple orders are placed simultaneously without a heavy concurrency layer.',
    problem:
      'Campus canteens run on manual tokens and verbal orders, leading to long queues, missed orders, and no visibility into stock.',
    solution:
      'A web-based ordering interface where students place orders and receive an ID, while the canteen admin updates availability and status from a dashboard. The flow reduces queue time and errors.',
    architecture:
      'Express.js REST API with MongoDB for orders and inventory. State transitions handled server-side to keep stock consistent.',
    lessons:
      'I learned how to model state transitions safely and why server-side validation matters even for a small internal tool.',
    github: 'https://github.com/aasaichandan9-cmd',
    demo: null,
    accent: '#D4AF37',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    tagline: 'A premium, responsive personal portfolio',
    description:
      'A modern, responsive personal portfolio built with React and Tailwind CSS, featuring a premium design system, smooth scroll-reveal animations, dark mode, and a command palette — engineered for performance and accessibility.',
    role: 'Frontend & Design',
    timeline: '2026',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    features: [
      'Custom design system with gold and accent-blue palette',
      'Scroll-reveal animations and magnetic buttons',
      'Dark mode with system preference detection',
      'Command palette with keyboard navigation',
      'Fully responsive across mobile, tablet, and desktop',
    ],
    challenges:
      'Balancing rich micro-interactions with performance — keeping animations smooth without bloating the bundle.',
    problem:
      'Student portfolios often look templated and fail to communicate engineering maturity to recruiters.',
    solution:
      'A handcrafted portfolio with editorial spacing, a cohesive design system, and production-grade structure that reads as a professional engineer’s work, not a student exercise.',
    architecture:
      'Component-driven React with a centralised content layer. CSS variables drive theming for instant dark mode. IntersectionObserver powers reveal animations without a heavy animation library.',
    lessons:
      'Design restraint matters more than decoration. I learned to build a system first, then compose sections from it.',
    github: 'https://github.com/aasaichandan9-cmd',
    demo: 'https://chandan9.netlify.app/',
    accent: '#00B8FF',
  },
  {
    id: 'todo-application',
    title: 'Todo Application',
    tagline: 'Fast task management with local persistence',
    description:
      'A task management application with add, edit, delete, filter, and complete states, backed by browser local storage so data persists across sessions without a backend.',
    role: 'Frontend Developer',
    timeline: '2026',
    tech: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
    features: [
      'Create, edit, and delete tasks',
      'Filter by all, active, and completed',
      'Persistent storage across browser sessions',
      'Responsive layout for mobile and desktop',
    ],
    challenges:
      'Keeping the UI in sync with localStorage without re-rendering the entire list on every change.',
    problem:
      'A simple, reliable task manager that works offline and needs no account.',
    solution:
      'A vanilla JavaScript app with a clean separation between data operations and rendering, persisting to localStorage.',
    architecture:
      'Single-page JavaScript app. State held in memory and mirrored to localStorage. Render functions diff against current DOM nodes.',
    lessons:
      'This project taught me the fundamentals of state management and why separating data from rendering pays off as an app grows.',
    github: 'https://github.com/aasaichandan9-cmd',
    demo: null,
    accent: '#D4AF37',
  },
];

export type Experience = {
  period: string;
  title: string;
  org: string;
  description: string;
  type: 'internship' | 'project' | 'certificate' | 'achievement';
};

export const experiences: Experience[] = [
  {
    period: '2026',
    title: 'AWS Generative AI Internship',
    org: 'Amazon Web Services',
    description:
      'Completed a structured internship covering generative AI fundamentals on AWS, including foundation models, prompt engineering, and building with managed AI services.',
    type: 'internship',
  },
  {
    period: '2026',
    title: 'Full Stack Project — Local Job Connect',
    org: 'Personal Project',
    description:
      'Designed and built a location-based job platform end-to-end, from MongoDB schema design to REST APIs and a responsive frontend.',
    type: 'project',
  },
  {
    period: '2026',
    title: 'Full Stack Project — Smart Canteen',
    org: 'Personal Project',
    description:
      'Built a digital ordering and inventory system with order state management and an admin dashboard.',
    type: 'project',
  },
  {
    period: '2025',
    title: 'Cybersecurity Fundamentals',
    org: 'Certification',
    description:
      'Covered core security principles, threat models, and defensive practices for web applications.',
    type: 'certificate',
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export const certifications: Certification[] = [
  { title: 'Cybersecurity Fundamentals', issuer: 'Cisco', year: '2025' },
  { title: 'Employability Skills', issuer: 'TCS iON', year: '2025' },
  { title: 'Security Operations Fundamentals', issuer: 'Cisco', year: '2026' },
  { title: 'AWS Generative AI Internship', issuer: 'Amazon Web Services', year: '2026' },
  { title: 'NoSQL Certificate', issuer: 'MongoDB University', year: '2025' },
];

export type Education = {
  period: string;
  degree: string;
  institution: string;
  detail: string;
};

export const education: Education[] = [
  {
    period: '2024 — 2028',
    degree: 'B.Tech, Computer Science Engineering',
    institution: 'Lendi Institute of Engineering and Technology',
    detail:
      'Studying core CS subjects — DBMS, Data Structures, Digital Logic, OOPS — alongside full stack development projects.',
  },
];

export type Achievement = {
  title: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    title: '5+ Professional Certifications',
    detail: 'Across cybersecurity, AWS generative AI, NoSQL, and employability skills.',
  },
  {
    title: '4 Full Stack Projects',
    detail: 'Shipped end-to-end applications with backend APIs and responsive frontends.',
  },
  {
    title: 'Active GitHub Profile',
    detail: 'Maintaining a professional profile with documented repositories and READMEs.',
  },
  {
    title: 'AWS GenAI Internship',
    detail: 'Completed structured training on generative AI and AWS managed services.',
  },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: 'Full Stack Web Development',
    description:
      'End-to-end web applications — from database schema and REST APIs to responsive, accessible frontends.',
    icon: Code2,
  },
  {
    title: 'Frontend Development',
    description:
      'Responsive, design-led frontends with clean component architecture, modern JavaScript, and smooth interactions.',
    icon: Layout,
  },
  {
    title: 'Backend Development',
    description:
      'REST API design and implementation with Node.js and Express, backed by MongoDB or MySQL.',
    icon: Server,
  },
  {
    title: 'Responsive Website Development',
    description:
      'Pixel-perfect websites that look and work great across mobile, tablet, and desktop.',
    icon: Layout,
  },
  {
    title: 'UI/UX Design',
    description:
      'Clean, user-focused interface design with attention to hierarchy, spacing, and accessibility.',
    icon: Palette,
  },
  {
    title: 'Portfolio & Business Websites',
    description:
      'Professional portfolio and business websites that build credibility and convert visitors.',
    icon: Rocket,
  },
  {
    title: 'Custom Web Applications',
    description:
      'Bespoke web applications tailored to specific business workflows and user needs.',
    icon: Code2,
  },
  {
    title: 'REST API Development',
    description:
      'Well-documented, secure REST APIs with proper error handling and validation.',
    icon: Server,
  },
  {
    title: 'Database Design & Integration',
    description:
      'Schema design and integration for MongoDB and MySQL — optimised for performance and scalability.',
    icon: Database,
  },
  {
    title: 'Git & GitHub Version Control',
    description:
      'Professional version control workflows, branching strategies, and repository documentation.',
    icon: Github,
  },
  {
    title: 'AI Integration',
    description:
      'Integrating AI-powered features into applications using modern APIs and managed services.',
    icon: Cpu,
  },
  {
    title: 'Performance Optimization',
    description:
      'Auditing and optimising load times, bundle size, and runtime performance for fast experiences.',
    icon: Gauge,
  },
  {
    title: 'Website Deployment',
    description:
      'Deploying and configuring sites on Netlify and other platforms with CI-friendly workflows.',
    icon: Cloud,
  },
  {
    title: 'Graphic Design',
    description:
      'Premium visual design for web, social media, and brand collateral with a consistent system.',
    icon: Palette,
  },
  {
    title: 'Branding',
    description:
      'Building cohesive brand identities — logos, colour systems, typography, and visual guidelines.',
    icon: Megaphone,
  },
  {
    title: 'Social Media Creative Design',
    description:
      'Scroll-stopping social media creatives that stay on-brand and drive engagement.',
    icon: Megaphone,
  },
  {
    title: 'Website Maintenance & Support',
    description:
      'Ongoing updates, security patches, and improvements to keep sites running smoothly.',
    icon: Shield,
  },
];

export const servicesIntro =
  'I specialise in building modern, scalable, and user-focused digital solutions that combine clean design with efficient development. Whether it is creating a professional portfolio, developing a business website, designing a custom web application, integrating AI-powered features, or crafting premium visual designs, I focus on delivering high-quality, responsive, secure, and performance-optimised solutions that provide an excellent user experience and solve real-world problems.';

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Chandan is highly dedicated and always eager to learn new technologies. He consistently delivers quality work and pays close attention to every detail.',
    name: 'Collaborator',
    role: 'Project Team',
  },
  {
    quote:
      'A reliable developer who combines creativity with problem-solving skills. His projects demonstrate both technical ability and a strong eye for design.',
    name: 'Peer',
    role: 'Development Community',
  },
  {
    quote:
      'Professional, hardworking, and quick to adapt. Chandan communicates effectively and is committed to building practical, user-focused software solutions.',
    name: 'Mentor',
    role: 'Academic Project Guide',
  },
  {
    quote:
      'His enthusiasm for full-stack development and continuous learning makes him a valuable team member. He approaches every project with responsibility and determination.',
    name: 'Team Member',
    role: 'Collaborative Project',
  },
];

export const testimonialsIntro =
  'Currently open to internships, freelance projects, and collaborative opportunities. More client and team testimonials will be added as I continue working on real-world projects.';

export type CodingProfile = {
  name: string;
  handle: string;
  href: string | null;
  accent: string;
};

export const codingProfiles: CodingProfile[] = [
  {
    name: 'GitHub',
    handle: 'Open source & projects',
    href: 'https://github.com/aasaichandan9-cmd',
    accent: '#00B8FF',
  },
  {
    name: 'LeetCode',
    handle: 'Solving DSA problems',
    href: 'https://leetcode.com/',
    accent: '#D4AF37',
  },
];

export const socials: { label: string; href: string; icon: LucideIcon }[] = [
  { label: 'GitHub', href: 'https://github.com/aasaichandan9-cmd', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/asapuappalasaichandan9/', icon: Linkedin },
  { label: 'Email', href: 'mailto:aasaichandan9@gmail.com', icon: Mail },
  { label: 'LeetCode', href: 'https://leetcode.com/', icon: Code2 },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];
