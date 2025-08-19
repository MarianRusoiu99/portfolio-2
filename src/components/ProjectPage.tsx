import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Navigate } from 'react-router-dom';
import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Layout from './Layout';
import InteractiveText from './InteractiveText';

const projectsData = {
  'outsnapped-platform': {
    title: 'OutSnapped Photo Booth Platform',
    subtitle: 'Nationwide photo booth booking and management system',
    category: 'WordPress Development',
    status: 'Live',
    timeline: '1.5 years',
    team: '3 developers',
    tech: ['WordPress', 'JavaScript', 'Cloudflare', 'Oxygen Builder', 'WooCommerce'],
    description: 'Developed and maintained a nationwide photo booth company\'s WordPress marketing and booking platform, serving major corporate clients including GitHub, Cisco, CVS, and Accenture.',
    challenge: 'Optimizing a complex booking platform for nationwide operations while ensuring fast load times and handling high traffic from major corporate events.',
    solution: 'Implemented Cloudflare CDN and advanced caching strategies, rebuilt core functionality with Oxygen Site Builder, and achieved perfect Lighthouse audit scores.',
    features: [
      'Online booking and scheduling system',
      'Equipment inventory management',
      'Automated photo delivery system',
      'Corporate client management',
      'Event asset management workflows',
      'SEO-optimized marketing pages',
      'Responsive design across all devices',
      'Performance monitoring and analytics'
    ],
    impact: [
      '~40% reduction in load times and bounce rates',
      'Perfect Lighthouse performance scores',
      'Successful deployment for Fortune 500 events',
      'Streamlined workflows for nationwide operations'
    ],
    images: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=500&fit=crop'
    ]
  },
  'peerconcept-website': {
    title: 'Peerconcept Corporate Site',
    subtitle: 'Modern corporate website with headless CMS',
    category: 'Full Stack Development',
    status: 'Live',
    timeline: '4 months',
    team: '3 developers',
    tech: ['Next.js', 'Strapi CMS', 'Tailwind CSS', 'Docker', 'Nginx'],
    description: 'Built a modern corporate website using Next.js with server-side rendering for optimal SEO performance and integrated Strapi CMS for seamless content management.',
    challenge: 'Creating a high-performance corporate site with excellent SEO while providing non-technical stakeholders with easy content management capabilities.',
    solution: 'Implemented SSR with Next.js for SEO optimization, integrated Strapi headless CMS for content management, and containerized the entire stack with Docker for reliable deployment.',
    features: [
      'Server-side rendering with Next.js',
      'Headless CMS integration with Strapi',
      'SEO-optimized architecture',
      'Responsive design with Tailwind CSS',
      'Containerized deployment with Docker',
      'Nginx reverse proxy configuration',
      'Content management workflows',
      'Performance optimization'
    ],
    impact: [
      'Significant SEO performance improvements',
      'Streamlined content management process',
      'Fast loading times across all pages',
      'Scalable containerized infrastructure'
    ],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop'
    ]
  },
  'ai-storybook-app': {
    title: 'AI Storybook App',
    subtitle: 'AI-powered children\'s story generation platform',
    category: 'AI Product Development',
    status: 'Live',
    timeline: '8 months',
    team: '4 developers',
    tech: ['React', 'Nest.js', 'OpenAI API', 'DALL·E', 'PlayHT', 'Azure Storage', 'Docker', 'Stripe'],
    description: 'Led frontend development of an AI-driven children\'s storybook application that generates personalized narratives, images, and audio content with synchronized multimedia playback.',
    challenge: 'Creating an engaging, safe platform for children while integrating multiple AI services and ensuring content appropriateness across different AI models.',
    solution: 'Developed interactive personalization features, implemented synchronized multimedia playback, and integrated Stripe for subscription management while ensuring child safety.',
    features: [
      'AI-generated personalized stories',
      'Custom DALL·E illustrations',
      'Audio narration with PlayHT',
      'Interactive personalization interface',
      'Synchronized multimedia playback',
      'Stripe subscription integration',
      'Content safety and moderation',
      'Cloud storage with Azure'
    ],
    impact: [
      'Successful product launch with AI integration',
      'Seamless subscription payment system',
      'Safe and engaging user experience',
      'Scalable cloud infrastructure deployment'
    ],
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=500&fit=crop'
    ]
  },
  'ai-support-evaluator': {
    title: 'AI Customer Support Evaluation Tool',
    subtitle: 'AI-powered support conversation analysis platform',
    category: 'Enterprise AI Tool',
    status: 'Live',
    timeline: '6 months',
    team: '5 developers',
    tech: ['Django', 'React', 'Docker', 'PostgreSQL', 'GitHub Actions', 'AWS EC2', 'Portainer'],
    description: 'Developed frontend and backend features for an AI-powered tool that analyzes customer support conversations to assess agent performance and ethical compliance.',
    challenge: 'Building a comprehensive analysis system that could accurately evaluate support conversations while maintaining data privacy and providing actionable insights.',
    solution: 'Implemented robust CI/CD pipelines with GitHub Actions and deployed on AWS EC2 using Portainer for container management, ensuring scalable and reliable operations.',
    features: [
      'AI-powered conversation analysis',
      'Agent performance evaluation',
      'Ethics compliance monitoring',
      'Real-time dashboard interface',
      'Automated CI/CD with GitHub Actions',
      'AWS EC2 deployment with Portainer',
      'PostgreSQL data management',
      'Docker containerization'
    ],
    impact: [
      'Streamlined support quality assessment',
      'Automated performance evaluation',
      'Reliable cloud deployment infrastructure',
      'Improved support team efficiency'
    ],
    images: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop'
    ]
  },
  'doctor-assist-app': {
    title: 'Doctor Assist App',
    subtitle: 'Medical consultation transcription mobile app',
    category: 'Healthcare Mobile App',
    status: 'Live',
    timeline: '5 months',
    team: '2 developers',
    tech: ['React Native', 'FastAPI', 'Whisper API', 'AWS S3', 'Amazon Cognito'],
    description: 'Developed a React Native application for automated medical form-filling by transcribing doctor-patient consultations using OpenAI\'s Whisper API.',
    challenge: 'Creating a HIPAA-compliant solution with high accuracy for medical terminology while ensuring offline functionality and data security.',
    solution: 'Implemented offline-first functionality with secure cloud sync, integrated Whisper API for accurate medical transcription, and ensured compliance with healthcare data regulations.',
    features: [
      'Real-time consultation transcription',
      'Automated medical form filling',
      'Offline-first functionality',
      'HIPAA-compliant data handling',
      'AWS S3 secure cloud storage',
      'Amazon Cognito authentication',
      'Medical terminology optimization',
      'Cross-platform mobile support'
    ],
    impact: [
      'Significant time savings for healthcare providers',
      'Improved documentation accuracy',
      'HIPAA compliance achievement',
      'Enhanced patient care efficiency'
    ],
    images: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=500&fit=crop'
    ]
  },
  'self-hosted-infrastructure': {
    title: 'Self-Hosted Business Infrastructure',
    subtitle: 'Complete DevOps infrastructure with monitoring and CI/CD',
    category: 'DevOps & Infrastructure',
    status: 'Live',
    timeline: '8 months',
    team: '2 developers',
    tech: ['Docker', 'Portainer', 'Traefik', 'GitHub Actions', 'Grafana', 'Prometheus', 'Loki', 'Gitea', 'Wiki.js'],
    description: 'Designed and deployed comprehensive in-house infrastructure for business operations, including CI/CD pipelines, monitoring, documentation, and automated deployments.',
    challenge: 'Building enterprise-level infrastructure that could compete with cloud providers while maintaining cost efficiency, security, and reliability.',
    solution: 'Implemented observability with Grafana/Prometheus/Loki stack, automated containerized deployments with Portainer and GitHub Actions, including comprehensive Playwright UI testing.',
    features: [
      'Complete Docker containerization',
      'Automated CI/CD with GitHub Actions',
      'Comprehensive monitoring with Grafana/Prometheus/Loki',
      'Load balancing and routing with Traefik',
      'Self-hosted Git with Gitea',
      'Documentation platform with Wiki.js',
      'Automated Playwright UI testing',
      'Infrastructure as Code'
    ],
    impact: [
      'Cost-effective alternative to cloud providers',
      'Enterprise-level reliability and monitoring',
      'Automated deployment and testing workflows',
      'Complete operational infrastructure solution'
    ],
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=500&fit=crop'
    ]
  }
};

const ProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { theme } = useTheme();
  
  if (!projectId || !projectsData[projectId as keyof typeof projectsData]) {
    return <Navigate to="/" replace />;
  }

  const project = projectsData[projectId as keyof typeof projectsData];

  return (
    <Layout showBackButton>
      <div className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="px-6 md:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center items-center gap-4 mb-6">
                <span 
                  className="text-xs px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: theme.colors.surface,
                    color: theme.colors.textSecondary 
                  }}
                >
                  {project.category}
                </span>
                <span 
                  className="text-xs px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: theme.colors.success + '20',
                    color: theme.colors.success 
                  }}
                >
                  {project.status}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <InteractiveText text={project.title} />
              </h1>
              
              <p 
                className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
                style={{ color: theme.colors.textSecondary }}
              >
                {project.subtitle}
              </p>
            </motion.div>

            {/* Project Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-8 mb-16"
            >
              <div className="flex items-center gap-2">
                <Calendar size={20} style={{ color: theme.colors.textSecondary }} />
                <span style={{ color: theme.colors.textSecondary }}>{project.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} style={{ color: theme.colors.textSecondary }} />
                <span style={{ color: theme.colors.textSecondary }}>{project.team}</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={20} style={{ color: theme.colors.textSecondary }} />
                <span style={{ color: theme.colors.textSecondary }}>High Performance</span>
              </div>
            </motion.div>

            {/* Project Images */}
            {project.images && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
              >
                {project.images.map((image: string, index: number) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    style={{ border: `1px solid ${theme.colors.border}` }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* Content Sections */}
        <section className="px-6 md:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <InteractiveText text="Overview" />
              </h2>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: theme.colors.textSecondary }}
              >
                {project.description}
              </p>
            </motion.div>

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <InteractiveText text="Challenge" />
              </h2>
              <p 
                className="text-lg leading-relaxed"
                style={{ color: theme.colors.textSecondary }}
              >
                {project.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <InteractiveText text="Solution" />
              </h2>
              <p 
                className="text-lg leading-relaxed mb-8"
                style={{ color: theme.colors.textSecondary }}
              >
                {project.solution}
              </p>

              {/* Tech Stack */}
              <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.background,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <InteractiveText text="Key Features" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg"
                    style={{ backgroundColor: theme.colors.surface }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: theme.colors.accent }}
                    />
                    <span style={{ color: theme.colors.textSecondary }}>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Impact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <InteractiveText text="Impact & Results" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.impact.map((result, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-xl text-center"
                    style={{ 
                      backgroundColor: theme.colors.surface,
                      border: `1px solid ${theme.colors.border}`
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <p 
                      className="text-lg font-medium"
                      style={{ color: theme.colors.text }}
                    >
                      {result}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <h2 className="text-3xl font-bold mb-6">
                <InteractiveText text="Interested in Similar Work?" />
              </h2>
              <p 
                className="text-lg mb-8 max-w-2xl mx-auto"
                style={{ color: theme.colors.textSecondary }}
              >
                Let's discuss how I can help bring your project to life with the same attention to detail and technical excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:contact@valentinrusoiu.dev"
                  className="px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2 justify-center no-spawn"
                  style={{
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.background,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start a Project</span>
                  <ExternalLink size={16} />
                </motion.a>
                
                <motion.button
                  className="px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2 justify-center no-spawn"
                  style={{
                    border: `2px solid ${theme.colors.border}`,
                    color: theme.colors.text,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View More Projects</span>
                  <Github size={16} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProjectPage;
