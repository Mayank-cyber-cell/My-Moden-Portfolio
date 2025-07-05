import React from 'react';
import { Download, Calendar, MapPin, Award, Book, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const education = [
    {
      degree: "B.Tech Computer Science Engineering",
      institution: "Satyug Darshan Institute of Engineering and Technology",
      duration: "2024 - 2028",
      status: "Current",
      description: "1st Year Student - Batch 2028"
    }
  ];

  const achievements = [
    {
      title: "EcoCoder Project",
      description: "Developed AI-powered waste classification site with user-buyer interaction system",
      date: "2024"
    },
    {
      title: "Zomato Clone",
      description: "Built responsive front-end UI replica with modern design principles",
      date: "2024"
    },
    {
      title: "Hackathon Participant",
      description: "Actively participating in various hackathons and coding competitions",
      date: "2024"
    },
    {
      title: "AI Study Partner Concept",
      description: "Designed smart matching system for study buddies based on learning styles",
      date: "2024"
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Started B.Tech Journey",
      description: "Enrolled in Computer Science Engineering at SDIET",
      icon: <Book className="w-5 h-5" />
    },
    {
      year: "2024",
      title: "First Major Project",
      description: "Built EcoCoder - AI-powered waste classification system",
      icon: <Award className="w-5 h-5" />
    },
    {
      year: "2024",
      title: "Web Development Focus",
      description: "Created Zomato Clone and enhanced front-end skills",
      icon: <Award className="w-5 h-5" />
    },
    {
      year: "2024",
      title: "Learning Python",
      description: "Started learning Python for advanced development and AI",
      icon: <Book className="w-5 h-5" />
    }
  ];

  const handleDownloadResume = () => {
    // Create a link to download the actual PDF
    const link = document.createElement('a');
    link.href = '/Mayank_Kumar_Shah_Resume.pdf';
    link.download = 'Mayank_Kumar_Shah_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    <section id="resume" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-transparent bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text">Resume</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my educational background, projects, and achievements
          </p>
          <motion.button 
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-white rounded-full hover:from-teal-500 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover-target"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education & Experience */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Book className="w-6 h-6 mr-3 text-teal-400" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ x: 5 }}
                    className="border-l-4 border-teal-400 pl-6 hover:border-blue-500 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium">
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center text-gray-500 dark:text-gray-500 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.duration}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-teal-400" />
                Projects & Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {achievement.date}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-teal-400" />
                My Journey
              </h3>
              <div className="relative">
                {timeline.map((item, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 mb-6 last:mb-0"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 12 }}
                      className="flex-shrink-0 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white"
                    >
                      {item.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-medium text-teal-500">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Summary */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-teal-400 to-blue-600 rounded-xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Quick Skills Overview</h3>
              <div className="space-y-3">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex justify-between items-center"
                >
                  <span>Web Development</span>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded">Advanced</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex justify-between items-center"
                >
                  <span>Python</span>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded">Learning</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex justify-between items-center"
                >
                  <span>Leadership</span>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded">Excellent</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex justify-between items-center"
                >
                  <span>Problem Solving</span>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded">Strong</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;