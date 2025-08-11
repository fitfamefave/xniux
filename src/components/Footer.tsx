import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MessageSquare,
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Zap,
  Heart
} from 'lucide-react';
import SubscriptionPopup from './SubscriptionPopup';

const Footer: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);

  const footerLinks = {
    services: [
      { label: 'Website Design', href: '#services' },
      { label: 'Lightning Hosting', href: '#services' },
      { label: 'Smart SEO Boost', href: '#services' },
      { label: 'Content Writing', href: '#services' },
      { label: 'Social Media Pulse', href: '#services' },
      { label: 'Email Design', href: '#services' }
    ],
    company: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Portfolios', href: '#portfolio' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Blog', href: '/blog' }
    ],
    more: [
      { label: 'FAQs', href: '#faq' },
      { label: 'Careers', href: '/careers' },
      { label: 'Partnership', href: '/partnership' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Refund Policy', href: '/refund-policy' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/xniuxcom', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/xniuxcom', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/xniuxcom', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/xniuxcom', label: 'LinkedIn' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        // Navigate to home page first, then scroll to section
        window.location.href = `/${href}`;
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('/')) {
      window.location.href = href;
    }
  };

  const scrollToServiceTab = (serviceId: string) => {
    if (window.location.pathname !== '/') {
      // Navigate to home page first, then scroll to services and activate tab
      window.location.href = `/#services`;
      // Use sessionStorage to remember which tab to activate
      sessionStorage.setItem('activeServiceTab', serviceId);
      return;
    }
    
    // Already on home page, scroll to services section
    const servicesElement = document.querySelector('#services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
      
      // Wait for scroll to complete, then trigger tab change
      setTimeout(() => {
        // Dispatch custom event to change active tab
        const event = new CustomEvent('changeServiceTab', { 
          detail: { tabId: serviceId } 
        });
        window.dispatchEvent(event);
      }, 500);
    }
  };
  return (
    <footer ref={ref} className="bg-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="border-b border-blue-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Ready to Transform Your{' '}
                  <span className="gradient-text">Digital Presence?</span>
                </h3>
                <p className="text-blue-200 text-lg">
                  Join 500+ businesses that trust xniux for their digital success.
                  <br />
                  Get started today and see the difference we can make.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('#pricing')}
                  className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Now</span>
                  <Zap className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsSubscriptionOpen(true)}
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border border-blue-300/20 hover:gradient-bg transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Links Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <img 
                src="/src/assets/xniux rectagular.png" 
                alt="xniux" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-blue-200 mb-6 leading-relaxed">
                Your all-in-one digital partner. We build digital solutions that grow 
                with your business—professionally managed, beautifully designed, and results-ready.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span className="text-blue-100">U Coworking Space, Jakarta</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <span className="text-blue-100">Microsoft Teams (id: xenace)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span className="text-blue-100">contact@xniux.com</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">
                <span className="gradient-text">Services</span>
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        if (link.label === 'Website Design') {
                          scrollToServiceTab('website');
                        } else if (link.label === 'Lightning Hosting') {
                          scrollToServiceTab('hosting');
                        } else if (link.label === 'Smart SEO Boost') {
                          scrollToServiceTab('seo');
                        } else if (link.label === 'Content Writing') {
                          scrollToServiceTab('content');
                        } else if (link.label === 'Social Media Pulse') {
                          scrollToServiceTab('social');
                        } else if (link.label === 'Email Design') {
                          scrollToServiceTab('email');
                        } else {
                          scrollToSection(link.href);
                        }
                      }}
                      className="text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6">
                <span className="gradient-text">Company</span>
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            {/* More */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-6">
                <span className="gradient-text">More</span>
              </h4>
              <ul className="space-y-3">
                {footerLinks.more.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="flex flex-col items-center md:items-start space-y-1">
                  <span>© 2020-2025 <span className="gradient-text">xniux</span>.</span>
                  <div className="flex items-center space-x-2">
                    <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>for growing businesses.</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:gradient-bg transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Subscription Popup */}
      <SubscriptionPopup 
        isOpen={isSubscriptionOpen} 
        onClose={() => setIsSubscriptionOpen(false)} 
      />
    </footer>
  );
};

export default Footer;