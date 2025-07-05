import React, { useState } from 'react';
import { Github, Lightbulb, Code, Users, Trophy, ExternalLink, Zap, Brain } from 'lucide-react';
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
      title: "EcoCoder",
      description: "AI-powered waste classification site with user-buyer interaction system. Built with HTML, CSS, and JavaScript to promote environmental sustainability through smart waste management.",
      tech: ["HTML5", "CSS3", "JavaScript", "AI Integration"],
      icon: <Lightbulb className="w-8 h-8" />,
      status: "Completed",
      category: "Environmental Tech",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      githubUrl: "https://github.com/Mayank-cyber-cell",
      features: ["AI Waste Classification", "User-Buyer Interaction", "Environmental Impact Tracking"]
    },
    {
      title: "Zomato Clone",
      description: "A responsive front-end UI replica of Zomato with modern design principles. Features include restaurant listings, search functionality, and mobile-first responsive design.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      icon: <Code className="w-8 h-8" />,
      status: "Completed",
      category: "Web Development",
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      githubUrl: "https://github.com/Mayank-cyber-cell",
      features: ["Restaurant Listings", "Search Functionality", "Mobile Responsive"]
    },
    {
      title: "AI Study Partner App",
      description: "A smart matching system concept for study buddies based on learning styles. This innovative app connects students with compatible study partners using AI algorithms.",
      tech: ["Python", "AI/ML", "React", "Node.js"],
      icon: <Brain className="w-8 h-8" />,
      status: "Concept",
      category: "AI/ML",
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      githubUrl: "https://github.com/Mayank-cyber-cell",
      features: ["Smart Matching Algorithm", "Learning Style Analysis", "Study Session Planning"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-gradient-to-r from-green-400 to-emerald-500 text-white';
      case 'Concept':
        return 'bg-gradient-to-r from-purple-400 to-pink-500 text-white';
      case 'In Development':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white';
    }
  };

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
          <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my skills in web development, AI integration, and problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className={`px-4 py-2 rounded-full text-xs font-bold shadow-lg ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </motion.span>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                    Technologies Used
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

                {/* Action Button */}
                <div className="flex justify-center">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-3 px-8 py-4 bg-gradient-to-r ${project.gradient} text-white rounded-2xl font-bold hover:shadow-2xl transition-all duration-500 group/btn shadow-xl relative overflow-hidden`}
                  >
                    <Github size={20} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>View on GitHub</span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
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
                I'm always working on new projects and ideas. Check out my GitHub for the latest updates and contributions!
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