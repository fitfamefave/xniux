import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, DollarSign, Users, TrendingUp, Send, Check, CheckCircle, AlertCircle } from 'lucide-react';
import { submitPartnershipForm } from '../utils/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BackToTop from '../components/BackToTop';

interface PartnershipProgram {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  benefits: string[];
  commission: string;
  requirements: string[];
}

const PartnershipPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    partnershipType: '',
    experience: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const partnershipPrograms: PartnershipProgram[] = [
    {
      id: 'affiliate',
      title: 'Affiliate Partner',
      icon: TrendingUp,
      description: 'Earn commissions by referring clients to our digital services. Perfect for bloggers, influencers, and content creators.',
      benefits: [
        'Earn 5-15% commission on referred sales',
        'One time commission payouts',
        'Dedicated affiliate dashboard and tracking',
        'Marketing materials and resources.',
        'No minimum sales requirements',
        'Lifetime cookie tracking for referrals'
      ],
      commission: '5-15%',
      requirements: [
        'Active website, blog, or social media presence',
        'Audience interested in digital marketing services',
        'Commitment to promoting xniux services ethically',
        'Basic understanding of digital marketing concepts'
      ]
    },
    {
      id: 'reseller',
      title: 'Reseller Partner',
      icon: Users,
      description: 'White-label our services and sell them under your brand. Ideal for agencies looking to expand their offerings.',
      benefits: [
        'White-label all xniux services',
        'Flexible pricing and package customization',
        'Dedicated account manager support',
        'Co-branded marketing materials',
        'Recurring commission payouts',
        'Bulk discount pricing tiers'
      ],
      commission: '7-10%',
      requirements: [
        'Established business with existing client base',
        'Experience in digital marketing or web services',
        'Minimum commitment of 5 projects per quarter',
        'Professional sales and support capabilities'
      ]
    },
    {
      id: 'strategic',
      title: 'Strategic Partner',
      icon: Handshake,
      description: 'Long-term partnership for mutual business growth. Joint ventures, co-marketing, and shared resources.',
      benefits: [
        'Joint marketing and co-branding',
        'Shared resources and expertise',
        'Exclusive partnership territories',
        'Custom commission structures',
        'Priority access to new services',
        'Collaborative business development'
      ],
      commission: 'Custom',
      requirements: [
        'Established company with complementary services',
        'Proven track record in digital industry',
        'Commitment to long-term partnership',
        'Alignment with xniux values and quality standards'
      ]
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await submitPartnershipForm(formData);
      setSubmitStatus({
        type: 'success',
        message: response.message || 'Partnership application submitted successfully!'
      });
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        company: '',
        partnershipType: '',
        experience: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit application. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Partner with{' '}
                <span className="gradient-text">xniux</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our partner network and grow your business with our comprehensive digital services.
                Earn attractive commissions while helping businesses succeed.
              </p>
            </motion.div>

            {/* Partnership Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-4 gap-8 mb-16"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-600">Active Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">15%</div>
                <div className="text-gray-600">Avg. Commission</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">99%</div>
                <div className="text-gray-600">Partner Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Programs */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Partnership Programs</h2>
              <p className="text-lg text-gray-600">Choose the partnership model that fits your business</p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {partnershipPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 gradient-bg rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.title}</h3>
                    <div className="text-3xl font-bold gradient-text mb-4">{program.commission}</div>
                    <p className="text-gray-600">{program.description}</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {program.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-gray-600 text-sm">
                            <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {program.requirements.map((requirement, idx) => (
                          <li key={idx} className="flex items-start text-gray-600 text-sm">
                            <DollarSign className="w-4 h-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">How Partnership Works</h2>
              <p className="text-lg text-gray-600">Simple steps to start earning with xniux</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Apply', description: 'Submit your partnership application with details about your business' },
                { step: '2', title: 'Review', description: 'We review your application and assess partnership fit' },
                { step: '3', title: 'Onboard', description: 'Get access to partner portal, materials, and training' },
                { step: '4', title: 'Earn', description: 'Share the value, refer clients, and grow your income with commissions.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 gradient-bg rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Apply for Partnership</h2>
              <p className="text-lg text-gray-600">Ready to join our partner network? Fill out the form below.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              {/* Status Messages */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
                    submitStatus.type === 'success'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span>{submitStatus.message}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-2">
                      Partnership Type *
                    </label>
                    <select
                      id="partnershipType"
                      name="partnershipType"
                      required
                      value={formData.partnershipType}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select partnership type</option>
                      <option value="affiliate">Affiliate Partner</option>
                      <option value="reseller">Reseller Partner</option>
                      <option value="strategic">Strategic Partner</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Relevant Experience
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="Brief description of your experience"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your business, audience, and why you want to partner with xniux..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-bg text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
};

export default PartnershipPage;