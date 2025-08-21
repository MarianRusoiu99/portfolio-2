export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  type: string;
  status?: string;
  date: string;
  tech: string[];
  github?: string;
  demo?: string;
  website?: string;
  images: string[];
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  impact: {
    title: string;
    description: string;
  }[];
}

export const projectsData: Record<string, ProjectData> = {
  'outsnapped-platform': {
    id: 'outsnapped-platform',
    title: 'WordPress Development & IT Support',
    subtitle: 'OutSnapped, LLC',
    description: 'Developed and maintained a nationwide photo booth company\'s WordPress platform with performance improvements and technical support.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    type: 'WordPress Development',
    status: 'Live',
    date: '2024',
    tech: ['WordPress', 'JavaScript', 'Cloudflare', 'PHP', 'MySQL'],
    website: 'https://outsnapped.com',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop'
    ],
    overview: 'OutSnapped is a nationwide photo booth rental company serving clients across multiple states. I was responsible for maintaining and enhancing their WordPress-based platform, ensuring optimal performance and reliability for their business operations.',
    challenge: 'The existing WordPress platform suffered from performance issues, slow load times, and technical maintenance challenges that affected user experience and business operations. The site needed optimization while maintaining all existing functionality.',
    solution: 'Implemented comprehensive performance optimizations including code optimization, caching strategies, and CDN integration through Cloudflare. Provided ongoing technical support and maintenance to ensure platform reliability.',
    features: [
      'Performance optimization resulting in ~40% improvement',
      'Cloudflare CDN integration for global performance',
      'Custom WordPress development and maintenance',
      'Technical support and troubleshooting',
      'Security hardening and updates'
    ],
    impact: [
      {
        title: 'Performance Improvement',
        description: '~40% improvement in page load times and overall site performance'
      },
      {
        title: 'Business Continuity',
        description: 'Reliable platform supporting nationwide photo booth operations'
      },
      {
        title: 'User Experience',
        description: 'Enhanced user experience through optimized performance and reliability'
      }
    ]
  },
  'peerconcept-website': {
    id: 'peerconcept-website',
    title: 'Full-Stack Web Development',
    subtitle: 'Peerconcept.com',
    description: 'Contributed to building a modern corporate website with Next.js SSR and Strapi CMS integration.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    type: 'Full Stack Development',
    status: 'Live',
    date: '2024',
    tech: ['Next.js', 'Strapi CMS', 'Tailwind CSS', 'Docker', 'TypeScript'],
    website: 'https://peerconcept.com',
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    ],
    overview: 'Peerconcept is a modern consulting company requiring a professional web presence. I contributed to the full-stack development of their corporate website, focusing on performance, SEO, and content management capabilities.',
    challenge: 'The client needed a modern, performant corporate website with easy content management capabilities, server-side rendering for SEO, and a scalable architecture that could grow with their business needs.',
    solution: 'Developed a full-stack solution using Next.js for server-side rendering and optimal performance, integrated with Strapi CMS for flexible content management, and deployed using Docker for consistent and scalable hosting.',
    features: [
      'Server-side rendered Next.js application for optimal SEO',
      'Strapi headless CMS integration for easy content management',
      'Responsive design with Tailwind CSS',
      'Docker containerization for scalable deployment',
      'TypeScript for type safety and better developer experience'
    ],
    impact: [
      {
        title: 'Professional Web Presence',
        description: 'Modern, fast-loading corporate website enhancing company credibility'
      },
      {
        title: 'Content Management',
        description: 'Easy-to-use CMS allowing non-technical team members to update content'
      },
      {
        title: 'SEO Performance',
        description: 'Server-side rendering ensuring excellent search engine optimization'
      }
    ]
  },
  'ai-storybook-app': {
    id: 'ai-storybook-app',
    title: 'AI Storybook App',
    subtitle: 'Interactive Children\'s Stories',
    description: 'Led frontend development of an AI-driven children\'s storybook app with personalized narratives, images, and audio.',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
    type: 'AI Product',
    status: 'Live',
    date: '2024',
    tech: ['React', 'Nest.js', 'OpenAI API', 'DALL·E', 'PlayHT', 'TypeScript'],
    images: [
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?w=800&h=600&fit=crop'
    ],
    overview: 'An innovative AI-powered application that creates personalized children\'s storybooks with custom narratives, AI-generated illustrations, and voice narration. The app allows parents to create unique, engaging stories tailored to their children\'s interests and preferences.',
    challenge: 'Creating an intuitive user experience that seamlessly integrates multiple AI services (text generation, image creation, and voice synthesis) while maintaining fast performance and child-friendly content safety.',
    solution: 'Developed a React-based frontend with a robust Nest.js backend that orchestrates multiple AI APIs. Implemented content filtering, caching strategies, and progressive loading to ensure a smooth user experience while maintaining safety and performance.',
    features: [
      'AI-generated personalized stories using GPT-4',
      'Custom illustrations created with DALL·E API',
      'Voice narration powered by PlayHT text-to-speech',
      'Interactive story customization interface',
      'Content safety filtering and moderation',
      'Progressive story generation and loading'
    ],
    impact: [
      {
        title: 'Creative Engagement',
        description: 'Unique, personalized stories that captivate children\'s imagination'
      },
      {
        title: 'Educational Value',
        description: 'Customizable content that can incorporate learning objectives'
      },
      {
        title: 'Family Bonding',
        description: 'Shared story creation experience between parents and children'
      }
    ]
  },
  'ai-support-evaluator': {
    id: 'ai-support-evaluator',
    title: 'AI Customer Support Evaluation Tool',
    subtitle: 'Enterprise AI Solution',
    description: 'Worked on frontend and backend features for an AI-powered tool that analyzes customer support conversations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    type: 'Enterprise AI Tool',
    date: '2024',
    tech: ['Django', 'React', 'Docker', 'PostgreSQL', 'OpenAI API', 'Python'],
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop'
    ],
    overview: 'An enterprise-grade AI tool designed to analyze and evaluate customer support conversations. The system provides insights into conversation quality, sentiment analysis, and performance metrics to help companies improve their customer service operations.',
    challenge: 'Building a scalable system capable of processing large volumes of customer support data while providing real-time insights and maintaining data privacy and security for enterprise clients.',
    solution: 'Developed a full-stack solution with Django backend for robust data processing and a React frontend for intuitive data visualization. Implemented AI-powered analysis using natural language processing and containerized the entire system for easy deployment.',
    features: [
      'AI-powered conversation analysis and sentiment detection',
      'Real-time performance metrics and dashboards',
      'Scalable data processing pipeline',
      'Enterprise-grade security and privacy controls',
      'Customizable evaluation criteria and reporting',
      'Integration with popular support platforms'
    ],
    impact: [
      {
        title: 'Operational Efficiency',
        description: 'Automated analysis reducing manual review time by 80%'
      },
      {
        title: 'Quality Insights',
        description: 'Data-driven insights improving customer service quality'
      },
      {
        title: 'Cost Reduction',
        description: 'Reduced need for manual quality assurance processes'
      }
    ]
  },
  'doctor-assist-app': {
    id: 'doctor-assist-app',
    title: 'Doctor Assist App',
    subtitle: 'Healthcare Mobile Solution',
    description: 'Developed a React Native app for automated medical form-filling with Whisper API transcription capabilities.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    type: 'Healthcare Mobile App',
    date: '2024',
    tech: ['React Native', 'FastAPI', 'Whisper API', 'AWS S3', 'Python', 'TypeScript'],
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=800&h=600&fit=crop'
    ],
    overview: 'A mobile healthcare application designed to streamline medical form completion for doctors and healthcare providers. The app uses voice recognition technology to automatically transcribe and fill medical forms, reducing administrative burden and improving efficiency.',
    challenge: 'Healthcare providers spend significant time on paperwork, reducing time available for patient care. The challenge was to create an accurate, secure, and user-friendly solution for voice-to-text medical form completion while ensuring HIPAA compliance.',
    solution: 'Built a React Native cross-platform app with FastAPI backend, integrating OpenAI\'s Whisper API for highly accurate medical transcription. Implemented secure cloud storage with AWS S3 and ensured all data handling meets healthcare privacy requirements.',
    features: [
      'Voice-to-text transcription using Whisper API',
      'Automated medical form completion',
      'Cross-platform React Native application',
      'Secure cloud storage with AWS S3',
      'HIPAA-compliant data handling',
      'Offline capability for sensitive environments'
    ],
    impact: [
      {
        title: 'Time Savings',
        description: '60% reduction in administrative time for medical documentation'
      },
      {
        title: 'Accuracy Improvement',
        description: 'AI-powered transcription with 95%+ accuracy for medical terminology'
      },
      {
        title: 'Patient Care',
        description: 'More time available for healthcare providers to focus on patients'
      }
    ]
  },
  'self-hosted-infrastructure': {
    id: 'self-hosted-infrastructure',
    title: 'Self-Hosted Business Infrastructure',
    subtitle: 'DevOps & Infrastructure',
    description: 'Designed and deployed comprehensive in-house infrastructure with observability, CI/CD, and automated deployments.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    type: 'DevOps & Infrastructure',
    date: '2024',
    tech: ['Docker', 'GitHub Actions', 'Grafana', 'Prometheus', 'Traefik', 'Outline', 'Docker Registry'],
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&h=600&fit=crop'
    ],
    overview: 'A comprehensive self-hosted infrastructure solution designed to provide enterprise-grade capabilities for development teams. The system includes monitoring, documentation, CI/CD pipelines, and automated deployment capabilities, all running on in-house hardware.',
    challenge: 'Small to medium businesses often struggle with expensive cloud infrastructure costs and vendor lock-in. The challenge was to create a cost-effective, scalable, and reliable self-hosted alternative that provides enterprise features.',
    solution: 'Architected and deployed a complete infrastructure stack using containerization, automated monitoring, and CI/CD pipelines. The solution provides observability, documentation, registry services, and automated deployments while maintaining high availability and security.',
    features: [
      'Containerized infrastructure with Docker',
      'Automated CI/CD pipelines with GitHub Actions',
      'Comprehensive monitoring with Grafana and Prometheus',
      'Load balancing and SSL termination with Traefik',
      'Team documentation platform with Outline',
      'Private Docker registry for container management',
      'Automated backup and disaster recovery'
    ],
    impact: [
      {
        title: 'Cost Savings',
        description: '70% reduction in infrastructure costs compared to cloud alternatives'
      },
      {
        title: 'Performance',
        description: 'Sub-second deployment times and 99.9% uptime achievement'
      },
      {
        title: 'Team Productivity',
        description: 'Streamlined development workflow with automated pipelines'
      }
    ]
  }
};
