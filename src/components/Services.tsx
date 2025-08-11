import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ServiceModal from './ServiceModal';
import { 
  Globe, 
  Zap, 
  Search, 
  PenTool, 
  Share2, 
  Mail,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  features: string[];
}

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('website');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Listen for service tab change events from footer links
  useEffect(() => {
    const handleServiceTabChange = (event: CustomEvent) => {
      setActiveTab(event.detail.tabId);
    };

    const handleStorageTabChange = () => {
      const storedTab = sessionStorage.getItem('activeServiceTab');
      if (storedTab) {
        setActiveTab(storedTab);
        sessionStorage.removeItem('activeServiceTab');
      }
    };

    // Listen for custom event
    window.addEventListener('changeServiceTab', handleServiceTabChange as EventListener);
    
    // Check for stored tab on component mount
    handleStorageTabChange();

    return () => {
      window.removeEventListener('changeServiceTab', handleServiceTabChange as EventListener);
    };
  }, []);
  const getServiceImage = (serviceId: string) => {
    const images = {
      'website': '/src/assets/xniux website design.jpg',
      'hosting': '/src/assets/xniux lightning hosting.jpg',
      'seo': '/src/assets/xniux smart seo.jpg',
      'content': '/src/assets/xniux content writing.jpg',
      'social': '/src/assets/xniux social media.png',
      'email': '/src/assets/xniux email design.jpg'
    };
    return images[serviceId as keyof typeof images];
  };

  const services: Service[] = [
    {
      id: 'website',
      title: 'Website Design',
      icon: Globe,
      description: 'Create beautiful, responsive websites that convert visitors into customers.',
      features: [
        'Mobile-First responsive design that looks perfect on all devices',
        'Speed optimized for lightning-fast loading times and better SEO',
        'SEO-Friendly structure built for search engine visibility',
        'Brand consistent design that reflects your unique identity'
      ]
    },
    {
      id: 'hosting',
      title: 'Lightning Hosting',
      icon: Zap,
      description: 'Ultra-fast, secure hosting that keeps your website running smoothly.',
      features: [
        'Fast load times with global CDN and optimized servers',
        'SSL certificate and CDN included for security and speed',
        'Automated daily backups to protect your valuable data',
        '99.9% uptime guarantee with 24/7 monitoring'
      ]
    },
    {
      id: 'seo',
      title: 'Smart SEO Boost',
      icon: Search,
      description: 'Improve your search rankings and drive more organic traffic.',
      features: [
        'On-page optimization for better search engine rankings',
        'Strategic link building to increase domain authority',
        'Technical SEO fixes for optimal website performance',
        'Monthly reporting with actionable insights and recommendations'
      ]
    },
    {
      id: 'content',
      title: 'Content Writing',
      icon: PenTool,
      description: 'Engaging, SEO-optimized content that resonates with your audience.',
      features: [
        '1-4 high-quality articles per month tailored to your audience',
        'SEO-optimized content to improve search rankings',
        '1500-2500 words per article for comprehensive coverage',
        'Content strategy aligned with your business goals'
      ]
    },
    {
      id: 'social',
      title: 'Social Media Pulse',
      icon: Share2,
      description: 'Build your brand presence across major social platforms.',
      features: [
        '2-8 engaging posts per month across multiple platforms',
        'Engagement-optimized content for maximum reach',
        'Consistent branding across key social channels',
        'Brand-consistent visuals and messaging across all channels'
      ]
    },
    {
      id: 'email',
      title: 'Email Design Power',
      icon: Mail,
      description: 'Professional email campaigns that drive conversions and sales.',
      features: [
        '1-3 professionally designed campaigns per month',
        'Responsive design that looks great on all devices',
        'Conversion-focused layouts and compelling calls-to-action',
        'A/B testing and performance optimization for better results'
      ]
    }
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-br from-emerald-100/70 via-cyan-50/50 to-green-50/60 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-emerald-200/40 rounded-full blur-sm"
        ></motion.div>
        <motion.div
          animate={{
            y: [10, -10, 10],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-cyan-200/35 rounded-lg blur-sm"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-emerald-300/25 rounded-full blur-sm"
        ></motion.div>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-200/25 rounded-full blur-3xl opacity-20"></div>
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
            <span className="gradient-text">Smart Solutions for Modern Brands</span>
            <br />
            Everything You Need in One Place.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From design to deployment, we handle every aspect of your digital presence 
            so you can focus on growing your business.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                onClick={() => setActiveTab(service.id)}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${
                  activeTab === service.id
                    ? 'gradient-bg text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                <service.icon className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm font-medium leading-tight">
                  {service.title}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Active Service Content */}
        <AnimatePresence mode="wait">
          {activeService && (
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center">
                      <activeService.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">
                      {activeService.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 mb-8">
                    {activeService.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {activeService.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <button 
                    onClick={() => {
                      setSelectedService(activeService);
                    }}
                    className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                  >
                    <activeService.icon className="w-5 h-5" />
                    <span>Explore {activeService.title}</span>
                  </button>
                </div>

                {/* Visual */}
                <div className="relative">
                  <div className="relative w-full max-w-lg mx-auto">
                    <img
                      src={getServiceImage(activeService.id)}
                      alt={activeService.title}
                      className="w-full h-auto object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={selectedService}
        />
      )}
    </section>
  );
};

export default Services;