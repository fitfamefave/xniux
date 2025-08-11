import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [firstLineIndex, setFirstLineIndex] = useState(0);
  const [secondLineIndex, setSecondLineIndex] = useState(0);
  const [firstLineText, setFirstLineText] = useState('');
  const [secondLineText, setSecondLineText] = useState('');
  const [isFirstLineTyping, setIsFirstLineTyping] = useState(true);
  const [isSecondLineTyping, setIsSecondLineTyping] = useState(true);

  const firstLineWords = ['Stress', 'Hustle', 'Chaos'];
  const secondLineWords = ['Growth', 'Results', 'Success'];

  const scrollToPricing = () => {
    const element = document.querySelector('#pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const typeText = (
      text: string,
      setText: (text: string) => void,
      setIsTyping: (typing: boolean) => void,
      onComplete?: () => void
    ) => {
      let i = 0;
      const timer = setInterval(() => {
        if (i <= text.length) {
          setText(text.slice(0, i));
          i++;
        } else {
          clearInterval(timer);
          setIsTyping(false);
          setTimeout(() => {
            onComplete?.();
          }, 2000);
        }
      }, 100);
      return timer;
    };

    const eraseText = (
      setText: (text: string) => void,
      setIsTyping: (typing: boolean) => void,
      onComplete?: () => void
    ) => {
      setText('');
      setIsTyping(true);
      setTimeout(() => {
        onComplete?.();
      }, 500);
    };

    // First line typing effect
    const firstLineTimer = typeText(
      firstLineWords[firstLineIndex],
      setFirstLineText,
      setIsFirstLineTyping,
      () => {
        setTimeout(() => {
          eraseText(setFirstLineText, setIsFirstLineTyping, () => {
            setFirstLineIndex((prev) => (prev + 1) % firstLineWords.length);
          });
        }, 1500);
      }
    );

    return () => clearInterval(firstLineTimer);
  }, [firstLineIndex]);

  useEffect(() => {
    const typeText = (
      text: string,
      setText: (text: string) => void,
      setIsTyping: (typing: boolean) => void,
      onComplete?: () => void
    ) => {
      let i = 0;
      const timer = setInterval(() => {
        if (i <= text.length) {
          setText(text.slice(0, i));
          i++;
        } else {
          clearInterval(timer);
          setIsTyping(false);
          setTimeout(() => {
            onComplete?.();
          }, 2000);
        }
      }, 100);
      return timer;
    };

    const eraseText = (
      setText: (text: string) => void,
      setIsTyping: (typing: boolean) => void,
      onComplete?: () => void
    ) => {
      setText('');
      setIsTyping(true);
      setTimeout(() => {
        onComplete?.();
      }, 500);
    };

    // Second line typing effect (delayed start)
    const delayTimer = setTimeout(() => {
      const secondLineTimer = typeText(
        secondLineWords[secondLineIndex],
        setSecondLineText,
        setIsSecondLineTyping,
        () => {
          setTimeout(() => {
            eraseText(setSecondLineText, setIsSecondLineTyping, () => {
              setSecondLineIndex((prev) => (prev + 1) % secondLineWords.length);
            });
          }, 1500);
        }
      );
    }, 1000);

    return () => clearTimeout(delayTimer);
  }, [secondLineIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-100/80 via-cyan-50/60 to-green-50/70">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-emerald-200/30 rounded-full blur-sm"
        ></motion.div>
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/3 w-12 h-12 bg-cyan-200/25 rounded-lg blur-sm"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-emerald-300/20 rounded-full blur-sm"
        ></motion.div>
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full opacity-10"
        >
          <div className="w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl"></div>
        </motion.div>
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full opacity-10"
        >
          <div className="w-80 h-80 bg-cyan-200/35 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight"
            >
              Skip the{' '}
              <span className="gradient-text">
                {firstLineText}
                {isFirstLineTyping && <span className="animate-pulse">|</span>}
              </span>
              <br />
              <span className="text-gray-800">
                Focus on{' '}
                <span className="gradient-text">
                  {secondLineText}
                </span>
                {isSecondLineTyping && <span className="animate-pulse">|</span>}
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl"
            >
              From stunning websites to engaging content,
              <br />
              <span className="gradient-text">xniux</span> is your all-in-one digital partner.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToPricing}
                className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Plans
              </button>
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#portfolio');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-emerald-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 hover:gradient-bg hover:text-white"
              >
                <span>Our Work</span>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-8 text-sm text-gray-500"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                <span>Reliable Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold">✓</span>
                </div>
                <span>Transforming Businesses</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Hero Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/src/assets/xniux heros.jpg"
                  alt="xniux Digital Agency"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;