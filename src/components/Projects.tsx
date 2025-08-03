import React, { useState } from 'react';
import { Github, ExternalLink, Code, Brain, Heart, Music, Shield, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "Blind Date With AI",
      description: "A fun AI-powered dating simulation where users chat with an AI character on a blind date.",
      tech: ["AI", "Chat Interface", "React", "JavaScript"],
      icon: <Heart className="w-8 h-8" />,
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
      icon: <Shield className="w-8 h-8" />,
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
      icon: <Music className="w-8 h-8" />,
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
      icon: <Brain className="w-8 h-8" />,
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
      icon: <Monitor className="w-8 h-8" />,
      category: "OS Simulation",
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      liveUrl: "https://pookie-os.netlify.app",
      githubUrl: "https://github.com/Mayank-cyber-cell/Pookie-OS"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900 transition-colors duration-300">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text mb-6 relative">
            My Projects
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 text-5xl sm:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent blur-sm opacity-30 animate-pulse"></div>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of innovative projects showcasing AI integration, healthcare solutions, and creative web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
              className={`group relative bg-gradient-to-br ${project.bgGradient} backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-700 overflow-hidden border border-white/20 dark:border-gray-700/20 hover-target`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Animated Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 12 }}
                      className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl`}
                    >
                      {project.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-500">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl text-gray-800 dark:text-gray-200 rounded-xl text-sm font-semibold border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-2xl font-bold hover:shadow-2xl transition-all duration-500 group/btn shadow-xl relative overflow-hidden flex-1`}
                  >
                    <ExternalLink size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>Live Demo</span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </motion.a>
                  
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-3 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-bold hover:border-transparent hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-800 hover:text-white transition-all duration-500 shadow-lg hover:shadow-xl flex-1"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </motion.a>
                </div>

                {/* Hover Effect Indicator */}
                {hoveredProject === index && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-600 rounded-full"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-20"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-600 rounded-3xl p-10 text-white shadow-4xl relative overflow-hidden"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3
                  }}
                  className="absolute w-20 h-20 border border-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4">
                Want to see more of my work?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                I'm constantly building new projects and exploring innovative technologies. Check out my GitHub for the latest updates and contributions!
              </p>
              <motion.a
                href="https://github.com/Mayank-cyber-cell"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 px-10 py-4 bg-white text-purple-600 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-500 shadow-2xl hover:shadow-4xl hover-target"
              >
                <Github className="w-6 h-6" />
                <span>Visit My GitHub</span>
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;