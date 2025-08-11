import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ExternalLink,
  Filter,
  Heart,
  Building,
  DollarSign,
  Monitor,
  ShoppingCart,
  GraduationCap 
} from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: 'healthcare' | 'realestate' | 'financials' | 'it' | 'consumer' | 'communication' | 'education';
  description: string;
  image: string;
  beforeImage?: string;
  tags: string[];
  results?: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('healthcare');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'MedCare Hospital Platform',
      category: 'healthcare',
      description: 'Patient management system with appointment booking and telemedicine features.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Healthcare', 'Patient Portal', 'HIPAA'],
      results: '85% patient satisfaction increase'
    },
    {
      id: 2,
      title: 'HealthTech Analytics Dashboard',
      category: 'healthcare',
      description: 'Real-time analytics platform for healthcare providers and administrators.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Analytics', 'Dashboard', 'Real-time'],
      results: '40% efficiency improvement'
    },
    {
      id: 3,
      title: 'Clinic Management System',
      category: 'healthcare',
      description: 'Comprehensive clinic management with patient records and billing.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Management', 'Records', 'Billing'],
      results: '60% administrative time saved'
    },
    {
      id: 4,
      title: 'PropertyHub Listing Platform',
      category: 'realestate',
      description: 'Advanced property search and listing platform with virtual tours.',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Real Estate', 'Search', 'Virtual Tours'],
      results: '300% user engagement'
    },
    {
      id: 5,
      title: 'RealEstate CRM Solution',
      category: 'realestate',
      description: 'Customer relationship management system for real estate agents.',
      image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['CRM', 'Lead Management', 'Analytics'],
      results: '45% lead conversion increase'
    },
    {
      id: 6,
      title: 'Property Investment Portal',
      category: 'realestate',
      description: 'Investment analysis platform with market insights and ROI calculators.',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Investment', 'Analytics', 'ROI'],
      results: '200% investor sign-ups'
    },
    {
      id: 7,
      title: 'FinanceTracker Pro',
      category: 'financials',
      description: 'Personal finance management with budgeting and investment tracking.',
      image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Finance', 'Budgeting', 'Investment'],
      results: '90% user retention rate'
    },
    {
      id: 8,
      title: 'Banking Dashboard System',
      category: 'financials',
      description: 'Comprehensive banking dashboard with transaction monitoring.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Banking', 'Dashboard', 'Security'],
      results: '50% faster transaction processing'
    },
    {
      id: 9,
      title: 'Investment Portfolio Manager',
      category: 'financials',
      description: 'Advanced portfolio management with risk assessment tools.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Portfolio', 'Risk Assessment', 'Analytics'],
      results: '35% better investment returns'
    },
    {
      id: 10,
      title: 'TechStart Cloud Platform',
      category: 'it',
      description: 'Scalable cloud infrastructure management platform.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Cloud', 'Infrastructure', 'Scalability'],
      results: '99.9% uptime achieved'
    },
    {
      id: 11,
      title: 'DevOps Automation Suite',
      category: 'it',
      description: 'Complete DevOps automation with CI/CD pipeline management.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['DevOps', 'Automation', 'CI/CD'],
      results: '70% deployment time reduction'
    },
    {
      id: 12,
      title: 'Cybersecurity Dashboard',
      category: 'it',
      description: 'Real-time security monitoring and threat detection system.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Security', 'Monitoring', 'Threat Detection'],
      results: '95% threat detection accuracy'
    },
    {
      id: 13,
      title: 'Smart Messaging Platform',
      category: 'communication',
      description: 'AI-powered messaging platform with intelligent routing and automated responses.',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['AI', 'Messaging', 'Automation'],
      results: '75% response time improvement'
    },
    {
      id: 17,
      title: 'RetailHub E-commerce',
      category: 'consumer',
      description: 'Multi-vendor e-commerce platform with advanced analytics.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['E-commerce', 'Multi-vendor', 'Analytics'],
      results: '250% sales increase'
    },
    {
      id: 14,
      title: 'FoodDelivery Mobile App',
      category: 'consumer',
      description: 'On-demand food delivery app with real-time tracking.',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Mobile App', 'Food Delivery', 'Real-time'],
      results: '180% order volume increase'
    },
    {
      id: 18,
      title: 'Fashion Brand Platform',
      category: 'consumer',
      description: 'Fashion e-commerce with AR try-on and style recommendations.',
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Fashion', 'AR', 'Recommendations'],
      results: '320% engagement increase'
    },
    {
      id: 19,
      title: 'VideoConf Pro',
      category: 'communication',
      description: 'High-quality video conferencing solution with screen sharing.',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Video Conference', 'Screen Share', 'HD Quality'],
      results: '99% call quality rating'
    },
    {
      id: 20,
      title: 'EduLearn LMS',
      category: 'education',
      description: 'Comprehensive learning management system with interactive content.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['LMS', 'Interactive', 'Education'],
      results: '95% course completion rate'
    },
    {
      id: 21,
      title: 'Virtual Classroom Platform',
      category: 'education',
      description: 'Real-time virtual classroom with whiteboard and breakout rooms.',
      image: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Virtual Classroom', 'Whiteboard', 'Breakout Rooms'],
      results: '90% student satisfaction'
    },
    {
      id: 22,
      title: 'SkillTracker Assessment',
      category: 'education',
      description: 'Skill assessment and certification platform with analytics.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tags: ['Assessment', 'Certification', 'Analytics'],
      results: '80% skill improvement rate'
    }
  ];

  const filteredItems = portfolioItems.filter(item => item.category === activeFilter).slice(0, 3);

  const categories = [
    { id: 'healthcare', label: 'Healthcare', icon: Heart },
    { id: 'realestate', label: 'Real Estate', icon: Building },
    { id: 'financials', label: 'Financials', icon: DollarSign },
    { id: 'it', label: 'Technology', icon: Monitor },
    { id: 'education', label: 'Education', icon: GraduationCap }
  ];


  return (
    <section id="portfolio" ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our{' '}
            <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped 
            businesses transform their digital presence and achieve remarkable results.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === category.id
                  ? 'gradient-bg text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 group'
              }`}
            >
              <category.icon className={`w-4 h-4 transition-opacity duration-300 ${
                activeFilter === category.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`} />
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Link
                        to={`/portfolio/${item.id.toString().toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full gradient-bg text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Project</span>
                      </Link>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Results */}
                  {item.results && (
                    <div className="bg-emerald-50 rounded-lg p-3 mb-4">
                      <div className="text-emerald-600 font-semibold text-sm">
                        📈 {item.results}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link 
            to="/portfolio"
            className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-block"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;