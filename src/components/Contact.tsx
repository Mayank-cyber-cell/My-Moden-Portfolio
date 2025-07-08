import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle, Sparkles, Heart, CheckCircle, AlertCircle, Zap, Star, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields', {
        duration: 4000,
        icon: '⚠️',
        style: {
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #EF4444, #DC2626)',
          color: '#fff',
          fontWeight: '600',
          boxShadow: '0 20px 40px rgba(239, 68, 68, 0.3)',
        },
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration with your actual values
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'jimayank2105@gmail.com'
      };

      await emailjs.send(
        'service_ai1kbyy', // Your service ID
        'template_0k5tmms', // Your template ID
        templateParams,
        'OOJHpL4PUhgUVFbSW' // Your public key
      );

      toast.success('🚀 Message sent successfully! I\'ll get back to you soon.', {
        duration: 6000,
        icon: '✨',
        style: {
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #10B981, #059669)',
          color: '#fff',
          fontWeight: '600',
          boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)',
        },
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('❌ Failed to send message. Please try again or contact me directly.', {
        duration: 5000,
        icon: '💔',
        style: {
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #EF4444, #DC2626)',
          color: '#fff',
          fontWeight: '600',
          boxShadow: '0 20px 40px rgba(239, 68, 68, 0.3)',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "jimayank2105@gmail.com",
      description: "Send me an email anytime",
      gradient: "from-purple-400 to-pink-500",
      href: "mailto:jimayank2105@gmail.com",
      bgPattern: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9013584367",
      description: "Call me for urgent matters",
      gradient: "from-green-400 to-emerald-500",
      href: "tel:+919013584367",
      bgPattern: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "India",
      description: "Available for remote work",
      gradient: "from-cyan-400 to-blue-500",
      href: "#",
      bgPattern: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Mayank-cyber-cell",
      gradient: "from-gray-600 to-gray-800",
      hoverColor: "hover:from-gray-700 hover:to-gray-900",
      description: "Check out my code"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/mayankkshah",
      gradient: "from-blue-500 to-blue-700",
      hoverColor: "hover:from-blue-600 hover:to-blue-800",
      description: "Let's connect professionally"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/mayankkshah_/",
      gradient: "from-pink-500 to-rose-600",
      hoverColor: "hover:from-pink-600 hover:to-rose-700",
      description: "Follow my journey"
    },
    {
      name: "Discord",
      icon: <MessageCircle className="w-6 h-6" />,
      url: "https://discord.com/mayankkumar5463",
      gradient: "from-indigo-500 to-purple-600",
      hoverColor: "hover:from-indigo-600 hover:to-purple-700",
      description: "Chat with me"
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
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden">
      <Toaster 
        position="top-right" 
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: '16px',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            maxWidth: '400px',
          },
        }}
      />
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        {[...Array(15)].map((_, i) => (
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
            className="absolute w-24 h-24 bg-gradient-to-r from-purple-400/10 to-cyan-600/10 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Geometric Patterns */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-32 h-32 border border-purple-400/20 dark:border-purple-400/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
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
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Star className="w-12 h-12 text-purple-400" />
          </motion.div>
          <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation
          </p>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8"
          >
            <Rocket className="w-8 h-8 text-cyan-400 mx-auto" />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"></div>
            
            <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/30 dark:border-gray-700/30 overflow-hidden">
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-600 opacity-20 blur-sm"></div>
              <div className="absolute inset-[1px] bg-white/90 dark:bg-slate-800/90 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-8 h-8 text-purple-400 mr-4" />
                  </motion.div>
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white">
                    Send me a message
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 bg-white/70 dark:bg-slate-700/70 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-purple-400/20 focus:border-purple-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 group-hover:border-purple-400/50 hover-target"
                          placeholder="John Doe"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 bg-white/70 dark:bg-slate-700/70 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-purple-400/20 focus:border-purple-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 group-hover:border-purple-400/50 hover-target"
                          placeholder="john@example.com"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                      Message *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-6 py-4 bg-white/70 dark:bg-slate-700/70 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-purple-400/20 focus:border-purple-400 transition-all duration-300 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 group-hover:border-purple-400/50 hover-target"
                        placeholder="Tell me about your project or idea..."
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-600 text-white rounded-2xl font-bold hover:from-purple-500 hover:via-pink-600 hover:to-cyan-700 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed hover-target"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                        <span>Send Message</span>
                        <Zap className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.button>
                </form>

              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-8 flex items-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-8 h-8 text-pink-500 mr-4" />
                </motion.div>
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`group flex items-start space-x-6 p-6 bg-gradient-to-br ${info.bgPattern} backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30 dark:border-gray-700/30 hover-target relative overflow-hidden`}
                  >
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 12 }}
                      className={`relative z-10 w-16 h-16 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl`}
                    >
                      {info.icon}
                    </motion.div>
                    <div className="flex-1 relative z-10">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-500">
                        {info.title}
                      </h4>
                      <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg mb-1">
                        {info.value}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.description}
                      </p>
                    </div>
                    
                    {/* Hover Particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
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
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-8">
                Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group flex items-center space-x-3 p-4 bg-gradient-to-r ${social.gradient} ${social.hoverColor} rounded-2xl text-white shadow-xl hover:shadow-2xl relative overflow-hidden hover-target transition-all duration-500`}
                  >
                    <span className="relative z-10 group-hover:rotate-12 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <div className="relative z-10">
                      <p className="font-bold">{social.name}</p>
                      <p className="text-xs opacity-80">{social.description}</p>
                    </div>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Enhanced Availability Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-2xl overflow-hidden"
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(10)].map((_, i) => (
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
                <h3 className="text-2xl font-black mb-4 flex items-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-6 h-6 mr-3" />
                  </motion.div>
                  Available for Work
                </h3>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  I'm currently looking for internship opportunities and exciting projects to work on. 
                  Let's collaborate and build something amazing together!
                </p>
                <div className="flex items-center space-x-3">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-4 h-4 bg-green-300 rounded-full"
                  />
                  <span className="font-bold text-lg">Available for new opportunities</span>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;