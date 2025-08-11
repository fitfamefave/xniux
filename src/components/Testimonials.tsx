import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'xniux transformed our online presence completely. Their team delivered a stunning website and our organic traffic increased by 300% in just 6 months. The ongoing content and SEO support has been invaluable.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'James Wilson',
      role: 'Marketing Director',
      company: 'GrowthCo',
      content: 'The Growth Plan has been perfect for our scaling business. The team handles everything from our website updates to social media, allowing us to focus on what we do best. ROI has been incredible.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'Creative Studio',
      content: 'Working with xniux feels like having an entire digital marketing team at a fraction of the cost. Their attention to detail and creative approach has helped us stand out in a crowded market.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Operations Manager',
      company: 'LocalBiz',
      content: 'The Essentials Plan was exactly what our small business needed. Professional website, reliable hosting, and ongoing support - all for less than we were paying for hosting alone before.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 5,
      name: 'Amanda Parker',
      role: 'E-commerce Owner',
      company: 'StyleHub',
      content: 'The Boost Plan has taken our business to the next level. The comprehensive approach to digital marketing has resulted in a 250% increase in online sales within the first year.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gradient-to-br from-emerald-100/75 via-cyan-50/55 to-green-50/65 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background patterns */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-14 h-14 bg-emerald-200/35 rounded-full blur-sm"
        ></motion.div>
        <motion.div
          animate={{
            y: [-25, 25, -25],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/3 w-8 h-8 bg-cyan-200/40 rounded-lg blur-sm"
        ></motion.div>
        <motion.div
          animate={{
            rotate: [0, -180, -360],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-emerald-300/30 rounded-full blur-sm"
        ></motion.div>
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-200/25 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl opacity-20"></div>
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
            What Clients Say
            <br />
            About <span className="gradient-text">xniux</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about 
            working with xniux and the results they've achieved.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24 text-emerald-500" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-1">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-emerald-100"
                  />
                  <div className="text-center">
                    <div className="font-bold text-gray-800 text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-emerald-100 hover:bg-emerald-200 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-emerald-600" />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? 'bg-emerald-500'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-emerald-100 hover:bg-emerald-200 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-emerald-600" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          {/* Company Logos Carousel */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-12">
              {/* First set of logos */}
              <div className="flex space-x-12 min-w-max">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="YouTube" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="Spotify" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-12 min-w-max">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="YouTube" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="Spotify" className="h-8 opacity-30 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;