import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, TrendingUp, Award, Handshake, ThumbsUp, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Every solution is tailored to your business goals and target audience.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience in digital marketing.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of helping businesses grow their online presence.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'High-performance outcomes with every solution we provide.'
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
            >
              Great Design Meets
              <br />
              <span className="gradient-text">Real Business Results</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              We build digital solutions that grow with your business—professionally managed,
              beautifully designed, and results-ready. <span className="gradient-text">xniux</span>'s comprehensive approach ensures
              every aspect of your digital presence works together seamlessly.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mb-8"
            >
              <div className="text-center">
                <Handshake className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <ThumbsUp className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <div className="text-3xl font-bold gradient-text">99%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <Calendar className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <div className="text-3xl font-bold gradient-text">5+ Yrs</div>
                <div className="text-sm text-gray-600">Experience</div>
              </div>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {feature.title === 'Quality Assurance' 
                        ? 'High-performance outcomes with every solution we provide to clients.' 
                        : feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
             <img
               src="/src/assets/xniux about.jpg"
               alt="xniux team collaboration and digital solutions"
               className="w-full h-auto object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
             />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;