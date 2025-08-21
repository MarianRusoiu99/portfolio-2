import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import InteractiveText, { InteractiveTextRef } from '../components/InteractiveText';
import ImageSpawner, { SpawnedImage } from '../components/ImageSpawner';
import BlobCursor from '../components/BlobCursor';
import StickyResetButton from '../components/StickyResetButton';
import Layout from '../components/Layout';

const unsplashImages = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1563089145-599997674d42?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=300&h=200&fit=crop',
  'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1690369519543-c81a2121f740?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const { theme, isDark } = useTheme();
  const interactiveTextRefs = useRef<(InteractiveTextRef | null)[]>([]);
  const [spawnedImages, setSpawnedImages] = useState<SpawnedImage[]>([]);

  useEffect(() => {
    gsap.registerPlugin();
    
    gsap.utils.toArray('.parallax').forEach((element: unknown) => {
      gsap.fromTo(element as Element, 
        { y: 0 }, 
        {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: element as Element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    });
  }, []);

  const spawnImage = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    
    let currentElement: HTMLElement | null = target;
    while (currentElement) {
      if (currentElement.classList.contains('no-spawn') || 
          currentElement.tagName === 'A' || 
          currentElement.tagName === 'BUTTON' ||
          currentElement.getAttribute('role') === 'button') {
        return;
      }
      currentElement = currentElement.parentElement;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const randomImage = unsplashImages[Math.floor(Math.random() * unsplashImages.length)];
    const randomWidth = Math.random() * 150 + 100;
    const randomHeight = Math.random() * 100 + 80;
    const randomRotation = (Math.random() - 0.5) * 20;
    
    const newImage: SpawnedImage = {
      id: `img-${Date.now()}-${Math.random()}`,
      src: randomImage,
      x: x - randomWidth / 2,
      y: y - randomHeight / 2,
      width: randomWidth,
      height: randomHeight,
      rotation: randomRotation
    };

    setSpawnedImages(prev => [...prev, newImage]);
  }, []);

  const resetImages = () => {
    setSpawnedImages([]);
  };

  const resetAllText = () => {
    interactiveTextRefs.current.forEach(ref => {
      if (ref) {
        ref.reset();
      }
    });
  };

  const skills = [
    { category: "Frontend Development", technologies: ["React", "Next.js", "TypeScript", "React Native", "Tailwind CSS"], experience: "5+ years" },
    { category: "Backend & APIs", technologies: ["Node.js", "Django", "FastAPI", "Strapi", "WordPress"], experience: "3+ years" },
    { category: "DevOps & Infrastructure", technologies: ["Docker", "GitHub Actions", "Nginx", "Traefik", "Portainer"], experience: "2+ years" },
    { category: "AI & Automation", technologies: ["GPT-4 API", "DALL·E", "Whisper API", "PlayHT", "Automation"], experience: "1+ years" }
  ];

  const projects = [
    { id: "outsnapped-platform", title: "WordPress Development & IT Support — OutSnapped, LLC", description: "Developed and maintained a nationwide photo booth company's WordPress platform with ~40% performance improvements", tech: ["WordPress", "JavaScript", "Cloudflare"], status: "Live", type: "WordPress Development" },
    { id: "ai-storybook-app", title: "AI Storybook App", description: "Led frontend development of AI-driven children's storybook app with personalized narratives, images, and audio", tech: ["React", "Nest.js", "OpenAI API", "DALL·E", "PlayHT"], status: "Live", type: "AI Product" },
    { id: "ai-support-evaluator", title: "AI Customer Support Evaluation Tool", description: "Worked on frontend and backend features for AI-powered support conversation analysis", tech: ["Django", "React", "Docker", "PostgreSQL"], type: "Enterprise AI Tool" },
    { id: "doctor-assist-app", title: "Doctor Assist App", description: "Developed React Native app for automated medical form-filling with Whisper API transcription", tech: ["React Native", "FastAPI", "Whisper API", "AWS S3"], type: "Healthcare Mobile App" },
    { id: "peerconcept-website", title: "Full-Stack Web Development — Peerconcept.com", description: "Contributed to building modern corporate site with SSR Next.js and Strapi CMS integration", tech: ["Next.js", "Strapi CMS", "Tailwind CSS", "Docker"], status: "Live", type: "Full Stack Development" },
    { id: "self-hosted-infrastructure", title: "Self-Hosted Business Infrastructure", description: "Designed and deployed in-house infrastructure with observability, CI/CD, and automated deployments", tech: ["Docker", "GitHub Actions", "Grafana", "Prometheus", "Traefik", "Outline", "Docker Registry"], type: "DevOps & Infrastructure" }
  ];

  return (
    <Layout>
      <div ref={containerRef} className="min-h-screen overflow-x-hidden">
        <BlobCursor
          blobType="circle"
          fillColor={isDark ? "#ffffff" : "#000000"}
          trailCount={3}
          sizes={[12, 24, 36]}
          innerSizes={[4, 8, 12]}
          innerColor={isDark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.8)"}
          opacities={[1, 0.6, 0.3]}
          shadowColor={isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"}
          shadowBlur={8}
          shadowOffsetX={1}
          shadowOffsetY={1}
          filterStdDeviation={10}
          useFilter={true}
          fastDuration={0.08}
          slowDuration={0.25}
          zIndex={9999}
        />

        <div 
          className="relative w-full min-h-screen"
          onClick={spawnImage}
        >
          <div className="w-full">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-6 md:px-8 relative">
              <motion.div 
                className="text-center max-w-6xl parallax"
                style={{ y }}
              >
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-8">
                  <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold leading-none tracking-tight">
                    <InteractiveText text="Frontend" className="block" ref={(el) => { interactiveTextRefs.current[0] = el; }} />
                    <InteractiveText text="Developer" className="block" ref={(el) => { interactiveTextRefs.current[1] = el; }} />
                  </h1>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mb-12">
                  <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ color: theme.colors.textSecondary }}>
                    <InteractiveText text="I build fast, modern, and expressive digital products" className="block" ref={(el) => { interactiveTextRefs.current[2] = el; }} />
                    <InteractiveText text="— from websites and apps to AI-powered tools" className="block" ref={(el) => { interactiveTextRefs.current[3] = el; }} />
                    <InteractiveText text="and self-hosted infrastructure." className="block" ref={(el) => { interactiveTextRefs.current[4] = el; }} />
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex justify-center items-center gap-2 text-sm" style={{ color: theme.colors.textSecondary }}>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme.colors.success }}></div>
                  <span>Available for projects</span>
                </motion.div>
              </motion.div>
              <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}>
                <div className="w-px h-20 relative" style={{ backgroundColor: theme.colors.border }}>
                  <motion.div className="w-px h-4 absolute top-0" style={{ backgroundColor: theme.colors.text }} animate={{ y: [0, 60, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} />
                </div>
              </motion.div>
            </section>

            {/* About Section */}
            <section className="py-32 px-6 md:px-8">
              <div className="max-w-7xl mx-auto">
                <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                  <div>
                    <motion.h2 className="text-4xl md:text-6xl font-bold mb-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                      <InteractiveText text="About" ref={(el) => { interactiveTextRefs.current[5] = el; }} />
                    </motion.h2>
                  </div>
                  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
                    <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: theme.colors.textSecondary }}>
                      <InteractiveText text="I'm Valentin Rusoiu, a creative developer focused on building reliable, high-performance web apps. My experience spans WordPress, Next.js, React Native, and AI-driven tools. I also design self-hosted infrastructure with Docker, GitHub Actions, and monitoring stacks to keep projects scalable and resilient." ref={(el) => { interactiveTextRefs.current[6] = el; }} />
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {["Creative Problem Solving", "Performance Optimization", "User Experience", "Scalable Architecture"].map((trait, index) => (
                        <motion.span key={index} className="px-4 py-2 rounded-full text-sm" style={{ backgroundColor: theme.colors.surface, color: theme.colors.text }} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }}>
                          {trait}
                        </motion.span>
                      ))}
                    </div>
                    <motion.a href="mailto:contact@valentinrusoiu.dev" className="group flex items-center gap-3 text-lg font-medium transition-colors no-spawn" style={{ color: theme.colors.text }} whileHover={{ x: 10 }}>
                      <span>Let's work together</span>
                      <ArrowUpRight className="group-hover:rotate-45 transition-transform" size={20} />
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="py-32 px-6 md:px-8" style={{ backgroundColor: theme.colors.surface }}>
              <div className="max-w-7xl mx-auto">
                <motion.h2 className="text-4xl md:text-6xl font-bold mb-16 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                  <InteractiveText text="Expertise" ref={(el) => { interactiveTextRefs.current[7] = el; }} />
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {skills.map((skill, index) => (
                    <motion.div key={index} className="p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: theme.colors.background, border: `1px solid ${theme.colors.border}` }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -5 }}>
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-xl font-semibold" style={{ color: theme.colors.text }}>{skill.category}</h3>
                        <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: theme.colors.surface, color: theme.colors.textSecondary }}>{skill.experience}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech, techIndex) => (
                          <motion.span key={techIndex} className="px-3 py-1 text-sm rounded-md" style={{ backgroundColor: theme.colors.primary, color: theme.colors.background }} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: techIndex * 0.05 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }}>
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>


            {/* Projects Section */}
            <section className="py-32 px-6 md:px-8" style={{ backgroundColor: theme.colors.surface }}>
              <div className="max-w-7xl mx-auto">
                <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    <InteractiveText text="Selected Projects" ref={(el) => { interactiveTextRefs.current[8] = el; }} />
                  </h2>
                  <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.colors.textSecondary }}>
                    <InteractiveText text="A collection of recent work spanning AI applications, enterprise tools, and infrastructure solutions." ref={(el) => { interactiveTextRefs.current[9] = el; }} />
                  </p>
                </motion.div>
                <div className="space-y-8">
                  {projects.map((project, index) => (
                    <motion.div key={index} className="group rounded-2xl p-8 hover:shadow-lg transition-all duration-500" style={{ border: `1px solid ${theme.colors.border}`, backgroundColor: theme.colors.background }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.05 }} viewport={{ once: true }} whileHover={{ y: -5 }}>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <h3 className="text-2xl font-bold group-hover:opacity-70 transition-opacity" style={{ color: theme.colors.text }}>{project.title}</h3>
                            <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: theme.colors.surface, color: theme.colors.textSecondary }}>{project.type}</span>
                            {project.status && (
                              <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: theme.colors.success + '20', color: theme.colors.success }}>
                                {project.status}
                              </span>
                            )}
                          </div>
                          <p className="mb-4 max-w-2xl" style={{ color: theme.colors.textSecondary }}>{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <span key={techIndex} className="text-sm px-3 py-1 rounded-md" style={{ border: `1px solid ${theme.colors.border}`, color: theme.colors.textSecondary }}>{tech}</span>
                            ))}
                          </div>
                        </div>
                        <Link to={`/project/${project.id}`} className="no-spawn">
                          <motion.div className="flex items-center gap-2 transition-colors" style={{ color: theme.colors.textSecondary }} whileHover={{ x: 5 }}>
                            <span className="text-sm">View Project</span>
                            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                          </motion.div>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="py-32 px-6 md:px-8" style={{ backgroundColor: isDark ? theme.colors.surface : '#111827', color: isDark ? theme.colors.text : '#ffffff' }}>
              <div className="max-w-7xl mx-auto text-center">
                <motion.h2 className="text-6xl md:text-8xl font-bold mb-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                  <InteractiveText text="Let's Create" ref={(el) => { interactiveTextRefs.current[10] = el; }} />
                </motion.h2>
                <motion.div className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto" style={{ color: isDark ? theme.colors.textSecondary : '#d1d5db' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
                  <InteractiveText text="Ready to build something amazing together?" className="block" ref={(el) => { interactiveTextRefs.current[11] = el; }} />
                  <InteractiveText text="Let's collaborate on your next project." className="block" ref={(el) => { interactiveTextRefs.current[12] = el; }} />
                </motion.div>
                <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
                  <motion.a href="mailto:contact@valentinrusoiu.dev" className="px-8 py-4 rounded-full font-medium transition-colors flex items-center gap-3 no-spawn" style={{ backgroundColor: isDark ? theme.colors.background : '#ffffff', color: isDark ? theme.colors.text : '#111827' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Mail size={20} />
                    <span>contact@valentinrusoiu.dev</span>
                  </motion.a>
                  <motion.button className="px-8 py-4 rounded-full font-medium transition-colors flex items-center gap-3 no-spawn" style={{ border: `2px solid ${isDark ? theme.colors.border : '#ffffff'}`, color: isDark ? theme.colors.text : '#ffffff' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Download size={20} />
                    <span>Download CV</span>
                  </motion.button>
                </motion.div>
              </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 md:px-8 border-t" style={{ backgroundColor: isDark ? theme.colors.surface : '#111827', color: isDark ? theme.colors.textSecondary : '#9ca3af', borderColor: isDark ? theme.colors.border : '#374151' }}>
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm">© 2025 Valentin Rusoiu. All rights reserved.</p>
                <div className="flex items-center gap-2 text-xs">
                  <span>Hover letters to transform</span>
                  <span>•</span>
                  <span>Click anywhere to spawn images</span>
                </div>
              </div>
            </footer>
          </div>

          <ImageSpawner images={spawnedImages} />

          <StickyResetButton
            imageCount={spawnedImages.length}
            onReset={resetImages}
            onResetText={resetAllText}
          />
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
