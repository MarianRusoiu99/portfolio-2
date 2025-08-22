import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Navigate } from 'react-router-dom';
import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Layout from '../components/Layout';
import InteractiveText from '../components/InteractiveText';

const projectsData = {
  'outsnapped-platform': {
    title: 'WordPress Development & IT Support — OutSnapped, LLC',
    subtitle: 'Nationwide photo booth company\'s WordPress marketing and booking platform',
    category: 'WordPress Development',
    status: 'Live',
    timeline: '2+ years',
    team: 'Solo developer',
    tech: ['WordPress', 'JavaScript', 'Cloudflare'],
    description: 'Worked on developing and maintaining a nationwide photo booth company\'s WordPress marketing and booking platform.',
    challenge: 'Improving SEO, responsiveness, and performance for a high-traffic platform serving nationwide operations.',
    solution: 'Improved SEO, responsiveness, and performance using Oxygen Site Builder, achieving Lighthouse audit success. Implemented Cloudflare CDN and caching, cutting load times and bounce rates by ~40%.',
    features: [
      'WordPress marketing and booking platform',
      'SEO optimization with Oxygen Site Builder',
      'Lighthouse audit compliance',
      'Cloudflare CDN implementation',
      'Performance caching solutions',
      'Data entry and QA workflows',
      'Event asset management',
      'Client support for major corporations'
    ],
    impact: [
      '~40% reduction in load times and bounce rates',
      'Lighthouse audit success achieved',
      'Served clients like GitHub, Cisco, CVS, and Accenture',
      'Improved SEO and site responsiveness'
    ],
    images: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=500&fit=crop'
    ]
  },
  'peerconcept-website': {
    title: 'Full-Stack Web Development — Peerconcept.com',
    subtitle: 'Modern corporate site with SSR Next.js for SEO',
    category: 'Full Stack Development',
    status: 'Live',
    timeline: '3 months',
    team: 'Team collaboration',
    tech: ['Next.js', 'Strapi CMS', 'Tailwind CSS', 'Docker', 'Nginx'],
    description: 'Contributed to building a modern corporate site with SSR Next.js for SEO and integrated Strapi CMS for content management.',
    challenge: 'Building a modern corporate website with excellent SEO performance and seamless content management.',
    solution: 'Managed containerization and deployment via Docker while implementing SSR with Next.js for optimal SEO performance.',
    features: [
      'Server-side rendering with Next.js',
      'Integrated Strapi CMS for content management',
      'SEO-optimized architecture',
      'Responsive design with Tailwind CSS',
      'Docker containerization',
      'Nginx deployment configuration',
      'Modern corporate design',
      'Content management workflows'
    ],
    impact: [
      'Improved SEO performance with SSR',
      'Streamlined content management',
      'Successful Docker deployment',
      'Modern, responsive corporate presence'
    ],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop'
    ]
  },
  'ai-storybook-app': {
    title: 'AI Storybook App',
    subtitle: 'AI-driven children\'s storybook app with personalized content',
    category: 'AI Product Development',
    status: 'Live',
    timeline: '6 months',
    team: 'Frontend lead',
    tech: ['React', 'Nest.js', 'OpenAI API', 'DALL·E', 'PlayHT', 'Azure Storage', 'Docker', 'Stripe'],
    description: 'Led frontend development of an AI-driven children\'s storybook app generating personalized narratives, images, and audio.',
    challenge: 'Creating an engaging AI-powered platform for children with personalized content generation and multimedia synchronization.',
    solution: 'Built interactive personalization features and synchronized multimedia playback. Managed deployment pipelines and integrated Stripe for subscriptions. Collaborated on API design and performance optimization.',
    features: [
      'AI-generated personalized narratives',
      'Custom DALL·E image generation',
      'Audio narration with PlayHT',
      'Interactive personalization features',
      'Synchronized multimedia playback',
      'Stripe subscription integration',
      'Azure Storage for content',
      'Docker deployment pipelines'
    ],
    impact: [
      'Successful AI-powered product launch',
      'Seamless multimedia synchronization',
      'Integrated subscription payment system',
      'Optimized performance and API design'
    ],
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=500&fit=crop'
    ]
  },
  'ai-support-evaluator': {
    title: 'AI Customer Support Evaluation Tool',
    subtitle: 'AI-powered tool analyzing support conversations',
    category: 'Enterprise AI Tool',
    status: 'Live',
    timeline: '4 months',
    team: 'Full-stack developer',
    tech: ['Django', 'React', 'Docker', 'PostgreSQL'],
    description: 'Worked on frontend and backend features for an AI-powered tool analyzing support conversations to assess agent performance and ethics.',
    challenge: 'Building a comprehensive AI analysis system for evaluating support conversations and agent performance.',
    solution: 'Set up CI/CD pipelines with GitHub Actions and deployed on AWS EC2 with Portainer for reliable container management.',
    features: [
      'AI-powered conversation analysis',
      'Agent performance assessment',
      'Ethics evaluation capabilities',
      'Frontend and backend development',
      'CI/CD with GitHub Actions',
      'AWS EC2 deployment',
      'Portainer container management',
      'PostgreSQL data management'
    ],
    impact: [
      'Automated support quality assessment',
      'Reliable cloud deployment infrastructure',
      'Streamlined CI/CD workflows',
      'Enhanced agent performance insights'
    ],
    images: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop'
    ]
  },
  'doctor-assist-app': {
    title: 'Doctor Assist App',
    subtitle: 'React Native app for automated medical form-filling',
    category: 'Healthcare Mobile App',
    status: 'Live',
    timeline: '4 months',
    team: 'Solo developer',
    tech: ['React Native', 'FastAPI', 'Whisper API', 'AWS S3', 'Amazon Cognito'],
    description: 'Developed a React Native app for automated medical form-filling by transcribing consultations with Whisper API.',
    challenge: 'Creating a secure, compliant mobile app for medical transcription with offline functionality.',
    solution: 'Ensured offline-first functionality, data security, and compliance. Integrated user authentication and cloud storage for reliable medical data handling.',
    features: [
      'Automated medical form-filling',
      'Consultation transcription with Whisper API',
      'Offline-first functionality',
      'Data security and compliance',
      'User authentication with Amazon Cognito',
      'Cloud storage with AWS S3',
      'Cross-platform mobile support',
      'Medical data handling protocols'
    ],
    impact: [
      'Streamlined medical documentation process',
      'Ensured HIPAA compliance',
      'Reliable offline functionality',
      'Secure cloud integration'
    ],
    images: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=500&fit=crop'
    ]
  },
  'self-hosted-infrastructure': {
    title: 'Self-Hosted Business Infrastructure',
    subtitle: 'In-house infrastructure for operations, CI/CD, monitoring, and documentation',
    category: 'DevOps & Infrastructure',
    status: 'Live',
    timeline: '8 months',
    team: 'Infrastructure architect',
    tech: ['Docker', 'Portainer', 'Traefik', 'GitHub Actions', 'Grafana', 'Prometheus', 'Loki', 'Gitea', 'Wiki.js'],
    description: 'Designed and deployed in-house infrastructure for operations, CI/CD, monitoring, and documentation.',
    challenge: 'Building comprehensive enterprise-level infrastructure for complete business operations management.',
    solution: 'Implemented observability with Grafana/Prometheus/Loki and automated containerized deployments with Portainer and GitHub Actions, including Playwright UI testing.',
    features: [
      'Complete Docker containerization',
      'Portainer for container management',
      'Traefik for load balancing and routing',
      'GitHub Actions CI/CD automation',
      'Grafana/Prometheus/Loki observability stack',
      'Gitea for self-hosted Git',
      'Wiki.js for documentation',
      'Playwright UI testing automation'
    ],
    impact: [
      'Complete operational infrastructure solution',
      'Automated deployment and monitoring',
      'Cost-effective self-hosted alternative',
      'Enterprise-level reliability and observability'
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
            {/* {project.images && (
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
            )} */}
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
