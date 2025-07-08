import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Instagram, Mail, Sparkles, Code, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const roles = ['Web Developer', 'Dreamer', 'Future Innovator', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let index = 0;
    
    const typeText = () => {
      if (index < currentRoleText.length) {
        setDisplayText(currentRoleText.slice(0, index + 1));
        index++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setDisplayText('');
            setCurrentRole((prev) => (prev + 1) % roles.length);
            setIsTyping(true);
            index = 0;
          }, 1000);
        }, 2000);
      }
    };

    if (isTyping) {
      typeText();
    }
  }, [currentRole, isTyping]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 light:from-slate-50 light:via-purple-50 light:to-slate-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-indigo-400/30 to-purple-500/30 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        {/* Main Content */}
        <div className="space-y-8">
          {/* Greeting with Icon */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center space-x-3"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-purple-400" />
            </motion.div>
            <p className="text-xl sm:text-2xl text-gray-300 dark:text-gray-400 light:text-gray-600 font-medium">
              Hello, I'm
            </p>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Code className="w-6 h-6 text-cyan-400" />
            </motion.div>
          </motion.div>

          {/* Name with Gradient Animation */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-8xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-500 via-cyan-400 to-blue-500 bg-clip-text animate-gradient bg-300% relative"
          >
            Mayank Kumar Shah
            {/* Glowing effect */}
            <div className="absolute inset-0 text-4xl sm:text-6xl lg:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent blur-sm opacity-50 animate-pulse"></div>
          </motion.h1>

          {/* Dynamic Role with Typing Effect */}
          <motion.div 
            variants={itemVariants}
            className="h-16 sm:h-20 flex items-center justify-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">I'm a </span>
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text relative">
                {displayText}
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-purple-400"
                >
                  |
                </motion.span>
              </span>
            </h2>
          </motion.div>

          {/* Description with Glassmorphism */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/10 dark:bg-slate-800/20 light:bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 light:border-gray-200/30 shadow-2xl"
          >
            <p className="text-lg sm:text-xl text-gray-200 dark:text-gray-300 light:text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Passionate about building useful projects, exploring AI, participating in hackathons, 
              and solving real-world problems through code. Currently pursuing B.Tech CSE and 
              constantly learning new technologies.
            </p>
          </motion.div>

          {/* Action Buttons with Hover Effects */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white rounded-2xl font-semibold hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden hover-target"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Code className="w-5 h-5" />
                <span>View My Projects</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border-2 border-purple-400/50 dark:border-purple-400/50 light:border-purple-400 text-gray-200 dark:text-gray-300 light:text-gray-700 rounded-2xl font-semibold hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:text-white transition-all duration-500 shadow-xl hover:shadow-2xl relative overflow-hidden hover-target"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
              </span>
            </motion.button>
          </motion.div>

          {/* Social Links with Floating Animation */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com/Mayank-cyber-cell', color: 'hover:text-white', bg: 'hover:bg-gray-700' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/mayankkshah', color: 'hover:text-blue-400', bg: 'hover:bg-blue-900/20' },
              { icon: Instagram, href: 'https://www.instagram.com/mayankkshah_/', color: 'hover:text-pink-400', bg: 'hover:bg-pink-900/20' },
              { icon: Mail, href: 'mailto:jimayank2105@gmail.com', color: 'hover:text-cyan-400', bg: 'hover:bg-cyan-900/20' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 bg-white/10 dark:bg-slate-800/20 light:bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-gray-300 dark:text-gray-300 light:text-gray-600 ${social.color} ${social.bg} border border-white/20 dark:border-gray-700/30 light:border-gray-200/30 hover-target`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator with Pulse Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
            className="p-3 text-gray-300 dark:text-gray-400 light:text-gray-600 hover:text-purple-400 transition-colors duration-300 bg-white/10 dark:bg-slate-800/20 light:bg-white/80 backdrop-blur-xl rounded-full border border-white/20 dark:border-gray-700/30 light:border-gray-200/30 shadow-xl hover:shadow-2xl hover-target"
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          animate={{ 
            rotate: 360,
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-10 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white shadow-xl"
        >
          <Zap className="w-6 h-6" />
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, 20, 0]
          }}
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-32 left-10 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-xl"
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;