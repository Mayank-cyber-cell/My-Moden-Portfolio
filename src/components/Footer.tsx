import React from 'react';
import { Heart, Github, Linkedin, Instagram, Mail, Sparkles, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github className="w-5 h-5" />, 
      url: 'https://github.com/Mayank-cyber-cell',
      gradient: "from-gray-600 to-gray-800",
      hoverGradient: "hover:from-gray-700 hover:to-gray-900"
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-5 h-5" />, 
      url: 'https://www.linkedin.com/in/mayankkshah',
      gradient: "from-blue-500 to-blue-700",
      hoverGradient: "hover:from-blue-600 hover:to-blue-800"
    },
    { 
      name: 'Instagram', 
      icon: <Instagram className="w-5 h-5" />, 
      url: 'https://www.instagram.com/mayankkshah_/',
      gradient: "from-pink-500 to-rose-600",
      hoverGradient: "hover:from-pink-600 hover:to-rose-700"
    },
    { 
      name: 'Email', 
      icon: <Mail className="w-5 h-5" />, 
      url: 'mailto:jimayank2105@gmail.com',
      gradient: "from-red-500 to-orange-600",
      hoverGradient: "hover:from-red-600 hover:to-orange-700"
    }
  ];

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 rounded-full blur-xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1 animate-slideInFromLeft">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-xl transform hover:scale-110 hover:rotate-12 transition-all duration-500">
                MKS
              </div>
              <span className="text-2xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text">
                Mayank Kumar Shah
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              1st-year B.Tech CSE student passionate about coding, AI, and creating innovative solutions that make a difference.
            </p>
            <div className="flex items-center space-x-2 text-green-400">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slideInFromBottom delay-200">
            <h3 className="text-xl font-black mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium hover:translate-x-2 transform block group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {link.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="animate-slideInFromBottom delay-400">
            <h3 className="text-xl font-black mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text">
              Featured Projects
            </h3>
            <ul className="space-y-3">
              {[
                "Zomato Clone",
                "Personal Portfolio",
                "AI Study Partner",
                "EcoCoder Project"
              ].map((project, index) => (
                <li key={project}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium hover:translate-x-2 transform block group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {project}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slideInFromRight delay-600">
            <h3 className="text-xl font-black mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Email:</span> jimayank2105@gmail.com
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Phone:</span> +91 9013584367
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Location:</span> India
              </p>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold">Status:</span> 
                <span className="text-green-400 ml-1">Available for opportunities</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-3 text-gray-400 animate-fadeInUp">
              <span>© {currentYear} Mayank Kumar Shah. Made with</span>
              <Heart className="w-5 h-5 text-red-500 animate-pulse" />
              <span>and lots of</span>
              <span className="text-yellow-400">☕</span>
              <span>coffee</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 animate-fadeInUp delay-300">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gradient-to-r ${social.gradient} ${social.hoverGradient} rounded-2xl flex items-center justify-center text-white transform hover:scale-125 hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl relative overflow-hidden group`}
                  aria-label={social.name}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10 group-hover:rotate-12 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-12 animate-fadeInUp delay-500">
          <button
            onClick={() => scrollToSection('hero')}
            className="group inline-flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10 hover:border-white/20 transform hover:scale-110 hover:-translate-y-1"
          >
            <span className="text-sm font-semibold">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;