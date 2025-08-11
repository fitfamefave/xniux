import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      if (location.pathname === '/') {
        const sections = ['about', 'services', 'portfolio', 'testimonials', 'pricing', 'blog', 'faq'];
        const currentSection = sections.find(section => {
          const element = document.querySelector(`#${section}`);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        setActiveSection(currentSection || '');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Update active section based on current page
  useEffect(() => {
    if (location.pathname === '/contact') {
      setActiveSection('contact');
    } else if (location.pathname === '/blog') {
      setActiveSection('blog');
    } else if (location.pathname === '/portfolio') {
      setActiveSection('portfolio');
    } else if (location.pathname === '/') {
      setActiveSection('');
    } else {
      setActiveSection('');
    }
  }, [location.pathname]);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolios', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
    { label: 'FAQs', href: '#faq' },
  ];

  const isActiveMenuItem = (href: string) => {
    const sectionName = href.replace('#', '');
    
    // Check if we're on a specific page
    if (location.pathname === '/blog' && sectionName === 'blog') return true;
    if (location.pathname === '/portfolio' && sectionName === 'portfolio') return true;
    if (location.pathname === '/contact' && sectionName === 'contact') return true;
    
    // Check if we're on home page and this section is active
    if (location.pathname === '/' && activeSection === sectionName) return true;
    
    return false;
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        // Navigate to home page first, then scroll to section
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          setIsOpen(false); // Ensure menu closes after navigation
        }, 100);
      } else {
        // Already on home page, scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsOpen(false); // Close mobile menu
      }
    } else {
      // External page navigation
      navigate(href);
      setIsOpen(false); // Close mobile menu
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/src/assets/xniux rectagular.png" 
              alt="xniux" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-all duration-300 relative ${
                  isActiveMenuItem(item.href)
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                {isActiveMenuItem(item.href) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
            <Link
              to="/contact"
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                location.pathname === '/contact'
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                  : 'gradient-bg text-white hover:shadow-lg'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-emerald-600 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white rounded-lg shadow-lg mt-2 overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-2 transition-all duration-300 ${
                      isActiveMenuItem(item.href)
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 bg-emerald-50'
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="px-4">
                  <Link
                    to="/contact"
                    className={`block px-6 py-2 rounded-lg text-center transition-all duration-300 ${
                      location.pathname === '/contact'
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                        : 'gradient-bg text-white hover:shadow-lg'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
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