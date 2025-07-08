import React from 'react';
import { Code, Trophy, Users, Heart, Sparkles, Zap, User, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Passionate Developer",
      description: "Learning web development and exploring AI technologies",
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Hackathon Participant",
      description: "Actively participating in hackathons and coding competitions",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leader",
      description: "Strong leadership and communication skills",
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Multi-Interest",
      description: "Passionate about coding, trading, cricket, and AI startups",
      gradient: "from-pink-400 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20"
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
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 dark:from-slate-800 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-32 h-32 bg-gradient-to-r from-purple-400/10 to-cyan-600/10 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Get to know me better - my journey, passions, and what drives me to create amazing things
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section with Real Photo */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-96 h-96 mx-auto">
              {/* Animated Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-600 rounded-full opacity-20"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full opacity-30"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-20"
              />
              
              {/* Profile Photo Container */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute inset-12 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-600 relative"
              >
                {/* Background gradient for fallback */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-cyan-600"></div>
                
                {/* Enhanced glow effect behind */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-600 rounded-full blur-lg opacity-30 animate-pulse -z-10"></div>
                
                <img 
                  src="/profile copy copy copy copy copy.jpg" 
                  alt="Mayank Kumar Shah - Profile Photo"
                  className="w-full h-full object-cover object-center relative z-10 rounded-full"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to MKS logo if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback MKS Logo */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="absolute inset-0 flex items-center justify-center text-6xl font-black text-white z-20 rounded-full"
                  style={{ display: 'none' }}
                >
                  MKS
                </motion.div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-400/20 via-transparent to-cyan-600/20 opacity-0 hover:opacity-100 transition-opacity duration-500 z-30 rounded-full"></div>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 360, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white shadow-xl"
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -360, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-xl"
              >
                <Zap className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 dark:border-gray-700/30">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-purple-400 mr-4" />
                <h3 className="text-3xl font-black text-gray-900 dark:text-white">
                  Hi, I'm <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text">Mayank Kumar Shah</span>
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                I'm a 1st-year B.Tech Computer Science Engineering student at Satyug Darshan Institute of Engineering and Technology, 
                Batch 2028. I'm passionate about building useful projects, exploring AI, participating in hackathons, 
                and solving real-world problems through code.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Currently learning Python and web development, I enjoy participating in hackathons and building projects that 
                solve real-world problems. When I'm not coding, you'll find me trading, watching cricket, or exploring the latest 
                AI trends and startup ideas.
              </p>
            </div>

            {/* Education */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-4 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3" />
                  Education
                </h4>
                <p className="text-lg opacity-90">
                  <strong className="text-xl">B.Tech Computer Science Engineering</strong><br />
                  Satyug Darshan Institute of Engineering and Technology<br />
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">Batch 2028 | 1st Year</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div variants={itemVariants} className="mt-24">
          <h3 className="text-4xl font-black text-center text-gray-900 dark:text-white mb-16">
            What Makes Me <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text">Unique</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`group bg-gradient-to-br ${highlight.bgGradient} backdrop-blur-xl rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-700 border border-white/30 dark:border-gray-700/30 relative overflow-hidden hover-target`}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    className={`w-16 h-16 bg-gradient-to-r ${highlight.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl`}
                  >
                    {highlight.icon}
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-500">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                {/* Hover Effect Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -50, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;