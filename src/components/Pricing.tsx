import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingPlan {
  id: string;
  name: string;
  icon: string;
  price: number;
  originalValue: number;
  description: string;
  services: {
    name: string;
    details: string;
    value: number;
  }[];
  popular?: boolean;
}

const Pricing: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans: PricingPlan[] = [
    {
      id: 'essentials',
      name: 'Essentials Plan',
      icon: '🌱',
      price: 800,
      originalValue: 3200,
      description: 'Perfect for startups and solopreneurs getting started with their online presence.',
      services: [
        {
          name: 'Stunning Website Design',
          details: 'up to 5 Pages, 1 revision/year',
          value: 1500
        },
        {
          name: 'Standard Website Hosting',
          details: '1 Year',
          value: 400
        },
        {
          name: 'Standard SEO Services',
          details: 'On-Page + 1x Link Building/year',
          value: 400
        },
        {
          name: 'Standard Content Writing',
          details: '12 Articles/year or 1 Article x 1500 words/month',
          value: 360
        },
        {
          name: 'Standard Social Media Posts',
          details: '24 Posts/year or 2 Posts/month',
          value: 240
        },
        {
          name: 'Standard Email Promo Design',
          details: '6 Designs/year or 1 Design every 2 months',
          value: 300
        }
      ]
    },
    {
      id: 'growth',
      name: 'Growth Plan',
      icon: '🚀',
      price: 1500,
      originalValue: 5200,
      description: 'Ideal for growing businesses who want consistent presence and marketing support.',
      services: [
        {
          name: 'Stunning Website Design',
          details: 'up to 10 Pages, 2 revisions/year',
          value: 2000
        },
        {
          name: 'Premium Website Hosting',
          details: '1 Year',
          value: 600
        },
        {
          name: 'Premium SEO Services',
          details: 'On-Page + 2x Link Building/year',
          value: 800
        },
        {
          name: 'Premium Content Writing',
          details: '24 Articles/year or 2 Articles x 2000 words/month',
          value: 720
        },
        {
          name: 'Premium Social Media Posts',
          details: '48 Posts/year or 4 Posts/month',
          value: 480
        },
        {
          name: 'Premium Email Promo Design',
          details: '12 Designs/year or 1 Design/month',
          value: 600
        }
      ],
      popular: true
    },
    {
      id: 'pro',
      name: 'Boost Plan',
      icon: '⚡',
      price: 2800,
      originalValue: 8600,
      description: 'Built for established brands ready to scale their marketing and digital dominance.',
      services: [
        {
          name: 'Stunning Website Design',
          details: 'up to 20 Pages, 4 revisions/year',
          value: 3000
        },
        {
          name: 'Ultimate Website Hosting',
          details: '1 Year',
          value: 800
        },
        {
          name: 'Ultimate SEO Services',
          details: 'On-Page + 3x Link Building/year + SEO Audit',
          value: 1200
        },
        {
          name: 'Ultimate Content Writing',
          details: '48 Articles/year or 4 Articles x 2500 words/month',
          value: 1440
        },
        {
          name: 'Ultimate Social Media Posts',
          details: '96 Posts/year or 8 Posts/month',
          value: 960
        },
        {
          name: 'Ultimate Email Promo Design',
          details: '24 Designs/year or 2 Designs/month',
          value: 1200
        }
      ]
    }
  ];

  const calculateSavings = (originalValue: number, price: number) => {
    return Math.round(((originalValue - price) / originalValue) * 100);
  };

  return (
    <section id="pricing" ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-20"></div>
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
            Pick the Plan That
            <br />
            <span className="gradient-text">Fits Your Goals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All plans include our complete suite of 6 digital services.
            <br />
            Save up to 75% compared to individual service pricing.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden ${
                plan.popular ? 'ring-4 ring-emerald-500 transform scale-105 z-10' : ''
              }`}
              style={{ position: 'relative' }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-6 right-6" style={{ zIndex: 30 }}>
                  <div className="gradient-bg text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="text-4xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold gradient-text">${plan.price}</span>
                      <span className="text-gray-600">/year</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="line-through">${plan.originalValue}</span>
                      <span className="ml-2 text-emerald-600 font-semibold">
                        Save {calculateSavings(plan.originalValue, plan.price)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Services List */}
                <div className="space-y-4 mb-8">
                  {plan.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border-b border-gray-100 pb-3">
                      <div className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800 text-sm">
                            {service.name}
                          </div>
                          <div className="text-gray-600 text-xs mt-1">
                            {service.details}
                          </div>
                        </div>
                        <div className="text-gray-500 text-xs">
                          ${service.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total Value */}
                <div className="bg-emerald-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-800 font-semibold">Total Value:</span>
                    <div className="text-right">
                      <div className="line-through text-gray-500">${plan.originalValue}</div>
                      <div className="text-emerald-600 font-bold">Only ${plan.price}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'gradient-bg text-white hover:shadow-xl transform hover:scale-105'
                      : 'bg-gray-100 text-gray-800 hover:gradient-bg hover:text-white text-center'
                  }`}
                >
                  Order Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Need Something Different?</h3>
            <p className="text-gray-600">
              Create a custom plan tailored specifically to your business goals.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="gradient-bg text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-block text-center"
              >
                Custom Plan
              </Link> {/* Removed ArrowRight icon */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;