import React, { useState, useEffect } from 'react';
import { Code, Database, Palette, Settings, Brain, TrendingUp, Zap, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setVisibleSkills(new Array(4).fill(true));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-purple-400 to-pink-500",
      skills: [
        { name: "HTML5", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "CSS3", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "JavaScript", level: 80, color: "from-yellow-400 to-yellow-600" },
        { name: "Python", level: 70, color: "from-green-400 to-green-600" }
      ]
    },
    {
      title: "Web Development",
      icon: <Monitor className="w-6 h-6" />,
      gradient: "from-cyan-400 to-blue-500",
      skills: [
        { name: "Responsive Design", level: 90, color: "from-purple-400 to-purple-600" },
        { name: "UI/UX Design", level: 80, color: "from-pink-400 to-pink-600" },
        { name: "Web Standards", level: 85, color: "from-indigo-400 to-indigo-600" },
        { name: "Cross-browser Compatibility", level: 75, color: "from-red-400 to-red-600" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-6 h-6" />,
      gradient: "from-emerald-400 to-teal-500",
      skills: [
        { name: "Git/GitHub", level: 85, color: "from-gray-400 to-gray-600" },
        { name: "VS Code", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Chrome DevTools", level: 80, color: "from-green-400 to-green-600" },
        { name: "Figma", level: 70, color: "from-purple-400 to-purple-600" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-pink-400 to-rose-500",
      skills: [
        { name: "Leadership", level: 90, color: "from-teal-400 to-teal-600" },
        { name: "Communication", level: 85, color: "from-cyan-400 to-cyan-600" },
        { name: "Problem Solving", level: 88, color: "from-emerald-400 to-emerald-600" },
        { name: "Team Collaboration", level: 85, color: "from-lime-400 to-lime-600" }
      ]
    }
  ];

  const interests = [
    { name: "AI & Machine Learning", icon: <Brain className="w-5 h-5" />, gradient: "from-purple-400 to-pink-500" },
    { name: "Trading & Finance", icon: <TrendingUp className="w-5 h-5" />, gradient: "from-green-400 to-emerald-500" },
    { name: "Cricket", icon: "🏏", gradient: "from-orange-400 to-red-500" },
    { name: "Startups", icon: "🚀", gradient: "from-blue-400 to-purple-500" },
    { name: "Web Development", icon: <Code className="w-5 h-5" />, gradient: "from-cyan-400 to-blue-500" },
    { name: "Hackathons", icon: "💻", gradient: "from-pink-400 to-rose-500" }
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
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-purple-50 to-cyan-50 dark:from-slate-800 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text mb-6 relative">
            My Skills
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 text-5xl sm:text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent blur-sm opacity-30 animate-pulse"></div>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical abilities, creative skills, and personal expertise
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-4xl transition-all duration-700 border border-white/30 dark:border-gray-700/30 hover-target`}
            >
              <div className="flex items-center mb-8">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 12 }}
                  className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center text-white mr-6 shadow-xl`}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-500">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 dark:text-gray-200 font-semibold text-lg">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg relative overflow-hidden`}
                        initial={{ width: 0 }}
                        animate={{ 
                          width: visibleSkills[index] ? `${skill.level}%` : '0%'
                        }}
                        transition={{ 
                          duration: 1.5,
                          delay: skillIndex * 0.2,
                          ease: "easeOut"
                        }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interests Section */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-12">
            My <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text">Interests</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex items-center space-x-4 bg-gradient-to-r ${interest.gradient} text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden hover-target`}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="text-2xl relative z-10 transform group-hover:scale-125 transition-transform duration-300">
                  {typeof interest.icon === 'string' ? interest.icon : interest.icon}
                </span>
                <span className="font-bold text-lg relative z-10">{interest.name}</span>
                <Zap className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div 
          variants={itemVariants}
          className="mt-20"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-600 rounded-3xl p-10 text-white text-center shadow-4xl relative overflow-hidden"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 4
                  }}
                  className="absolute w-16 h-16 border border-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-6">
                Continuous Learning Journey
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                As a 1st-year student, I'm constantly expanding my skillset and exploring new technologies. 
                My passion for learning drives me to stay updated with the latest trends in tech.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 backdrop-blur-xl px-6 py-3 rounded-2xl font-bold border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  Currently Learning: Python
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 backdrop-blur-xl px-6 py-3 rounded-2xl font-bold border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  Next Goal: React.js
                </motion.span>
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 backdrop-blur-xl px-6 py-3 rounded-2xl font-bold border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  Future Interest: AI/ML
                </motion.span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;