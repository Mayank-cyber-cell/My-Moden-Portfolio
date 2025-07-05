import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle, Sparkles, Heart, CheckCircle, AlertCircle } from 'lucide-react';
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
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'jimayank2105@gmail.com'
      };

      await emailjs.send(
        'service_portfolio', // You'll need to replace with your EmailJS service ID
        'template_contact', // You'll need to replace with your EmailJS template ID
        templateParams,
        'your_public_key' // You'll need to replace with your EmailJS public key
      );

      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        duration: 5000,
        icon: '🚀',
        style: {
          borderRadius: '12px',
          background: '#10B981',
          color: '#fff',
        },
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again or contact me directly.', {
        duration: 5000,
        icon: '❌',
        style: {
          borderRadius: '12px',
          background: '#EF4444',
          color: '#fff',
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
      href: "mailto:jimayank2105@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9013584367",
      description: "Call me for urgent matters",
      gradient: "from-green-400 to-emerald-500",
      href: "tel:+919013584367"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "India",
      description: "Available for remote work",
      gradient: "from-cyan-400 to-blue-500",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Mayank-cyber-cell",
      gradient: "from-gray-600 to-gray-800",
      hoverColor: "hover:from-gray-700 hover:to-gray-900"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/mayankkshah",
      gradient: "from-blue-500 to-blue-700",
      hoverColor: "hover:from-blue-600 hover:to-blue-800"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/mayankkshah_/",
      gradient: "from-pink-500 to-rose-600",
      hoverColor: "hover:from-pink-600 hover:to-rose-700"
    },
    {
      name: "Discord",
      icon: <MessageCircle className="w-6 h-6" />,
      url: "https://discord.com/mayankkumar5463",
      gradient: "from-indigo-500 to-purple-600",
      hoverColor: "hover:from-indigo-600 hover:to-purple-700"
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
      <Toaster position="top-right" />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
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
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/30 dark:border-gray-700/30"
          >
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
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/50 dark:bg-slate-700/50 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-purple-400/20 focus:border-purple-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 group-hover:border-purple-400/50 hover-target"
                    placeholder="John Doe"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/50 dark:bg-slate-700/50 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-purple-400/20 focus:border-purple-400 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 group-hover:border-purple-400/50 hover-target"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="group">
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-white/50 dark:bg-slate-700/50 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-purple-400/20 focus:border-purple-400 transition-all duration-300 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 group-hover:border-purple-400/50 hover-target"
                  placeholder="Tell me about your project or idea..."
                />
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
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.button>
            </form>

            {/* EmailJS Setup Instructions */}
            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div className="text-sm text-yellow-800 dark:text-yellow-300">
                  <p className="font-semibold mb-1">EmailJS Setup Required</p>
                  <p>To enable the contact form, please:</p>
                  <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>Create an account at <a href="https://emailjs.com" target="_blank" rel="noopener noreferrer" className="underline">emailjs.com</a></li>
                    <li>Create a service and template</li>
                    <li>Update the service ID, template ID, and public key in the Contact component</li>
                  </ol>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
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
                    className="group flex items-start space-x-6 p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30 dark:border-gray-700/30 hover-target"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 12 }}
                      className={`w-16 h-16 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center text-white shadow-xl`}
                    >
                      {info.icon}
                    </motion.div>
                    <div className="flex-1">
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
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-8">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`group w-16 h-16 bg-gradient-to-r ${social.gradient} ${social.hoverColor} rounded-2xl flex items-center justify-center text-white shadow-xl hover:shadow-2xl relative overflow-hidden hover-target`}
                  >
                    <span className="relative z-10 group-hover:rotate-12 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div>
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