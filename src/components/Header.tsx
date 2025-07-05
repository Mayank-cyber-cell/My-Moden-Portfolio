import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-gray-700/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 relative group hover-target"
            >
              MKS
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 via-pink-500/20 to-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-600 hover:bg-clip-text transition-all duration-300 relative group font-medium hover-target"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
            
            {/* Enhanced Theme Toggle */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 12 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700 hover:from-purple-400/20 hover:to-cyan-600/20 transition-all duration-300 shadow-lg hover:shadow-xl group hover-target"
              >
                <div className="relative">
                  {theme === 'light' ? 
                    <Moon size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 transition-colors duration-300" /> : 
                    <Sun size={20} className="text-purple-400 group-hover:text-yellow-300 transition-colors duration-300" />
                  }
                </div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700 hover:from-purple-400/20 hover:to-cyan-600/20 transition-all duration-300 relative hover-target"
            >
              {theme === 'light' ? <Moon size={20} className="text-gray-700" /> : <Sun size={20} className="text-purple-400" />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700 hover:from-purple-400/20 hover:to-cyan-600/20 transition-all duration-300 hover-target"
            >
              <div className="relative w-6 h-6">
                <motion.span 
                  animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="absolute top-1 left-0 w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300"
                />
                <motion.span 
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute top-3 left-0 w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300"
                />
                <motion.span 
                  animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="absolute top-5 left-0 w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl mt-2 border border-gray-200/20 dark:border-gray-700/20 shadow-2xl">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-600 hover:bg-clip-text hover:bg-gray-50/50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-300 font-medium hover-target"
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                {/* Mobile Theme Toggle */}
                <div className="border-t border-gray-200/20 dark:border-gray-700/20 pt-2 mt-2">
                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50/50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-300 font-medium hover-target"
                  >
                    <div className="flex items-center space-x-3">
                      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-purple-400" />}
                      <span>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</span>
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;