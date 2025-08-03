import React, { useState, useMemo } from 'react';
import { Github, ExternalLink, Heart, Shield, Music, Brain, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px'
  });

  const projects = useMemo(() => [
    {
      title: "Blind Date With AI",
      description: "A fun AI-powered dating simulation where users chat with an AI character on a blind date.",
      tech: ["AI", "Chat", "React", "JavaScript"],
      icon: Heart,
      category: "AI Simulation",
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
      liveUrl: "https://blinddatewithai.netlify.app",
      githubUrl: "https://github.com/Mayank-cyber-cell/Blind-Date-With-AI"
    },
    {
      title: "MedGuide Pill Tracker",
      description: "Helps users manage medicine intake with reminders, search, and FDA data integration.",
      tech: ["Healthcare", "FDA API", "Reminders", "React"],
      icon: Shield,
      category: "Healthcare",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      liveUrl: "https://medguide-pill-tracker.netlify.app",
      githubUrl: "https://github.com/Mayank-cyber-cell/MedGuide-Pill_Tracker"
    },
    {
      title: "MoodTunes",
      description: "AI-generated music player that matches songs based on your detected mood.",
      tech: ["AI", "Music", "Mood Detection", "React"],
      icon: Music,
      category: "AI Music",
      gradient: "from-purple-400 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
      liveUrl: "https://mood-tunes-nine.vercel.app",
      githubUrl: "https://github.com/Mayank-cyber-cell/MoodTunes"
    },
    {
      title: "MindMate",
      description: "Your personal mental health buddy offering journaling, quotes, and calming UI.",
      tech: ["Mental Health", "Journaling", "React", "Wellness"],
      icon: Brain,
      category: "Mental Health",
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20",
      liveUrl: "https://mindmatebuddy.netlify.app",
      githubUrl: "https://github.com/Mayank-cyber-cell/MindMate"
    },
    {
      title: "Pookie OS",
      description: "A web-based desktop OS simulation with draggable windows and interactive apps.",
      tech: ["OS Simulation", "Drag & Drop", "JavaScript", "UI/UX"],
      icon: Monitor,
      category: "OS Simulation",
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      liveUrl: "https://pookie-os.netlify.app",
      githubUrl: "https://github.com/Mayank-cyber-cell/Pookie-OS"
    }
  ], []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }), []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900 transition-colors duration-300">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text mb-6">
            My Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of innovative projects showcasing AI integration, healthcare solutions, and creative web applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`group relative bg-gradient-to-br ${project.bgGradient} backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 dark:border-gray-700/20`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                          {project.category}
                        </p>
                      </div>
                    </div>
                    {hoveredProject === index && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-600 rounded-full"
                      />
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium border border-white/30 dark:border-gray-700/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center space-x-2 px-4 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex-1 text-sm`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 px-4 py-2.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300 flex-1 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              I'm constantly building new projects and exploring innovative technologies. Check out my GitHub for the latest updates!
            </p>
            <motion.a
              href="https://github.com/Mayank-cyber-cell"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 px-8 py-3 bg-white text-purple-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              <Github className="w-5 h-5" />
              <span>Visit My GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;