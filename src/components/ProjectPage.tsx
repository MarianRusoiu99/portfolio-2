import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Navigate } from 'react-router-dom';
import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Layout from './Layout';
import InteractiveText from './InteractiveText';

const projectsData = {
  'ai-storybook-app': {
    title: 'AI Storybook App',
    subtitle: 'AI-powered children\'s story generation with voice narration',
    category: 'AI Product',
    status: 'Live',
    timeline: '6 months',
    team: '3 developers',
    tech: ['React', 'GPT-4', 'DALL·E', 'PlayHT', 'Node.js', 'Express'],
    description: 'A revolutionary children\'s storytelling application that leverages cutting-edge AI technology to create personalized, interactive stories with custom illustrations and professional voice narration.',
    challenge: 'Creating an engaging, safe, and educational platform for children while integrating multiple AI services seamlessly. The main challenge was ensuring content appropriateness and maintaining consistent story quality across different AI models.',
    solution: 'Developed a sophisticated content moderation system with custom prompts and safety filters. Implemented a story template system that ensures narrative coherence while allowing for creative AI generation. Created a user-friendly interface that parents and children can navigate together.',
    features: [
      'AI-generated personalized stories based on child preferences',
      'Custom DALL·E illustrations for each story',
      'Professional voice narration with multiple voice options',
      'Interactive story elements and choices',
      'Parental controls and content filtering',
      'Story library with favorites and history',
      'Offline reading mode',
      'Multi-language support'
    ],
    impact: [
      '50,000+ stories generated in first month',
      '95% parent satisfaction rate',
      'Average session time of 25 minutes',
      'Featured in App Store Kids category'
    ],
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=500&fit=crop'
    ]
  },
  'ai-support-evaluator': {
    title: 'AI Support Evaluator',
    subtitle: 'Conversation analytics platform for customer support quality assessment',
    category: 'Enterprise Tool',
    status: 'Live',
    timeline: '8 months',
    team: '5 developers',
    tech: ['Django', 'React', 'PostgreSQL', 'Redis', 'TensorFlow', 'NLP'],
    description: 'An enterprise-grade platform that uses advanced AI and natural language processing to analyze customer support conversations, providing detailed insights into agent performance, customer satisfaction, and support quality metrics.',
    challenge: 'Building a system that could accurately analyze the nuances of human conversation, detect emotional context, and provide actionable insights without compromising customer privacy. The complexity lay in processing real-time conversations across multiple channels.',
    solution: 'Implemented a multi-layered NLP pipeline with sentiment analysis, entity recognition, and custom scoring algorithms. Created a real-time dashboard with actionable insights and automated reporting. Ensured GDPR compliance with advanced data anonymization.',
    features: [
      'Real-time conversation analysis across multiple channels',
      'Sentiment analysis and emotion detection',
      'Agent performance scoring and recommendations',
      'Customer satisfaction prediction',
      'Automated quality assurance workflows',
      'Custom reporting and analytics dashboards',
      'Integration with major support platforms',
      'GDPR-compliant data handling'
    ],
    impact: [
      '40% improvement in customer satisfaction scores',
      '60% reduction in quality assurance time',
      '25% increase in first-call resolution rates',
      'Deployed across 15+ enterprise clients'
    ],
    images: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop'
    ]
  },
  'doctor-assist': {
    title: 'Doctor Assist',
    subtitle: 'Medical transcription app with voice-to-text and PDF export',
    category: 'Healthcare',
    status: 'Live',
    timeline: '4 months',
    team: '2 developers',
    tech: ['React Native', 'Whisper API', 'PDF Generation', 'SQLite', 'AWS'],
    description: 'A mobile application designed for healthcare professionals to streamline patient documentation through AI-powered voice transcription, intelligent formatting, and secure PDF generation for medical records.',
    challenge: 'Creating a HIPAA-compliant solution that could accurately transcribe medical terminology while maintaining patient privacy. The app needed to work offline and handle complex medical vocabulary with high accuracy.',
    solution: 'Integrated OpenAI\'s Whisper API with custom medical vocabulary training. Implemented offline-first architecture with local encryption. Created intelligent text formatting that recognizes medical patterns and structures.',
    features: [
      'Real-time voice-to-text transcription',
      'Medical terminology recognition',
      'Intelligent text formatting and structuring',
      'PDF export with customizable templates',
      'Offline functionality with sync',
      'HIPAA-compliant security measures',
      'Multi-language support',
      'Integration with EMR systems'
    ],
    impact: [
      '70% reduction in documentation time',
      '95% transcription accuracy for medical terms',
      '200+ healthcare professionals using daily',
      'HIPAA certification achieved'
    ],
    images: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=500&fit=crop'
    ]
  },
  'corporate-website': {
    title: 'Corporate Website',
    subtitle: 'High-performance business website with headless CMS integration',
    category: 'Full Stack',
    status: 'Live',
    timeline: '3 months',
    team: '3 developers',
    tech: ['Next.js', 'Strapi', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    description: 'A modern, high-performance corporate website built with Next.js and Strapi CMS, featuring advanced SEO optimization, dynamic content management, and lightning-fast loading speeds.',
    challenge: 'Delivering a website that could handle high traffic while maintaining perfect SEO scores and providing non-technical stakeholders with easy content management capabilities.',
    solution: 'Implemented Next.js with static site generation and incremental static regeneration. Created a custom Strapi configuration with user-friendly content types. Achieved 100% Lighthouse scores across all metrics.',
    features: [
      'Server-side rendering with Next.js',
      'Headless CMS with Strapi',
      'Advanced SEO optimization',
      'Dynamic content management',
      'Multi-language support',
      'Analytics and tracking integration',
      'Contact forms with validation',
      'Mobile-first responsive design'
    ],
    impact: [
      '100% Lighthouse performance score',
      '300% increase in organic traffic',
      '50% improvement in conversion rates',
      '0.8s average page load time'
    ],
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop'
    ]
  },
  'photobooth-platform': {
    title: 'Photobooth Platform',
    subtitle: 'Complete booking and management system for event photography',
    category: 'Business Platform',
    status: 'Live',
    timeline: '5 months',
    team: '4 developers',
    tech: ['WordPress', 'Custom Plugins', 'Cloudflare CDN', 'WooCommerce', 'MySQL'],
    description: 'A comprehensive platform for photobooth rental businesses, featuring online booking, payment processing, equipment management, and automated photo delivery systems.',
    challenge: 'Creating a robust booking system that could handle complex scheduling, equipment availability, and automated workflows while remaining user-friendly for both customers and business owners.',
    solution: 'Developed custom WordPress plugins with advanced booking logic, integrated multiple payment gateways, and created an automated photo processing pipeline with cloud storage and delivery.',
    features: [
      'Online booking and scheduling system',
      'Equipment inventory management',
      'Automated payment processing',
      'Photo gallery and delivery system',
      'Customer management dashboard',
      'Email automation and notifications',
      'Analytics and reporting tools',
      'Mobile-responsive design'
    ],
    impact: [
      '500% increase in online bookings',
      '80% reduction in manual administrative tasks',
      '200+ events managed monthly',
      '99.9% platform uptime'
    ],
    images: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=500&fit=crop'
    ]
  },
  'self-hosted-infrastructure': {
    title: 'Self-Hosted Infrastructure',
    subtitle: 'Dockerized infrastructure with CI/CD pipelines and monitoring',
    category: 'DevOps',
    status: 'Live',
    timeline: '6 months',
    team: '2 developers',
    tech: ['Docker', 'GitHub Actions', 'Grafana', 'Prometheus', 'Nginx', 'Traefik'],
    description: 'A complete self-hosted infrastructure solution featuring containerized applications, automated CI/CD pipelines, comprehensive monitoring, and scalable deployment strategies.',
    challenge: 'Building a production-ready infrastructure that could compete with cloud providers while maintaining cost efficiency, security, and reliability.',
    solution: 'Designed a microservices architecture with Docker containers, implemented GitOps workflows, and created comprehensive monitoring with alerting. Achieved enterprise-level reliability on self-hosted hardware.',
    features: [
      'Containerized microservices architecture',
      'Automated CI/CD with GitHub Actions',
      'Comprehensive monitoring with Grafana/Prometheus',
      'Load balancing with Traefik',
      'Automated backups and disaster recovery',
      'Security scanning and vulnerability management',
      'Resource optimization and scaling',
      'Documentation and runbook automation'
    ],
    impact: [
      '99.9% uptime achieved',
      '70% cost reduction vs cloud providers',
      '50% faster deployment times',
      'Zero security incidents in production'
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
            >
              {project.images.map((image, index) => (
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
