import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface FAQCategory {
  id: string;
  label: string;
}
const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState<number[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories: FAQCategory[] = [
    { id: 'general', label: 'General' },
    { id: 'website', label: 'Web Design' },
    { id: 'hosting', label: 'Hosting' },
    { id: 'seo', label: 'SEO' },
    { id: 'content', label: 'Content' },
    { id: 'social', label: 'Social Media' },
    { id: 'email', label: 'Email Design' }
  ];
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'What services are included in each plan?',
      answer: 'All plans include our complete suite of 6 digital services: Website Design, Hosting, SEO, Content Writing, Social Media Management, and Email Design. The difference between plans is the scope and frequency of each service. For example, the Essentials plan includes 1 article per month, while the Pro Mastery plan includes 4 articles per month.',
      category: 'general'
    },
    {
      id: 2,
      question: 'How quickly can you get my website up and running?',
      answer: 'We typically deliver websites within 2-4 weeks depending on the complexity and plan you choose. The Essentials plan (up to 5 pages) usually takes 2-3 weeks, while the Pro Mastery plan (up to 15 pages) may take 3-4 weeks. We\'ll provide you with a detailed timeline after our initial consultation.',
      category: 'general'
    },
    {
      id: 3,
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Absolutely! All plans include ongoing support and maintenance. This includes security updates, backup monitoring, technical support, and regular check-ins. Our team is available via email, and Pro Mastery plan clients get priority phone support. We\'re here to ensure your digital presence runs smoothly.',
      category: 'general'
    },
    {
      id: 4,
      question: 'What if I need custom features not included in the plans?',
      answer: 'We understand every business is unique. If you need custom features or additional services, we can create a custom quote tailored to your specific requirements. Many of our clients start with a standard plan and add custom features as their business grows. Let\'s discuss your needs!',
      category: 'general'
    },
    {
      id: 5,
      question: 'How do you measure and report on results?',
      answer: 'We provide monthly reports showing key metrics like website traffic, search rankings, social media engagement, email campaign performance, and more. You\'ll have access to a client dashboard where you can view real-time analytics. We also schedule quarterly review calls to discuss results and optimize strategies.',
      category: 'general'
    },
    {
      id: 6,
      question: 'Is there a long-term contract required?',
      answer: 'Our plans are billed annually to provide the best value, but there\'s no long-term contract. You can cancel at any time with 30 days notice. We believe in earning your business through results, not locking you into lengthy contracts. Many clients stay with us for years because they see the value and results we deliver.',
      category: 'general'
    },
    {
      id: 7,
      question: 'What makes xniux different from other agencies?',
      answer: 'Unlike agencies that specialize in just one area, we provide a complete digital solution under one roof. This means better coordination, consistent branding, and significant cost savings. Our plans are transparent with no hidden fees, and we focus on measurable results. Plus, you get dedicated account management and a team that truly understands your business.',
      category: 'general'
    },
    {
      id: 8,
      question: 'What design styles do you specialize in?',
      answer: 'We create modern, responsive websites that reflect your brand identity. Our designs focus on user experience, conversion optimization, and mobile-first approach. We work with you to understand your vision and create a website that stands out in your industry.',
      category: 'website'
    },
    {
      id: 9,
      question: 'Can you redesign my existing website?',
      answer: 'Absolutely! We can redesign your existing website to improve its performance, user experience, and visual appeal. We\'ll analyze your current site and create a modern, conversion-focused design that better serves your business goals.',
      category: 'website'
    },
    {
      id: 10,
      question: 'Do you provide website maintenance?',
      answer: 'Yes, all our plans include ongoing website maintenance. This covers security updates, plugin updates, backup monitoring, and technical support to keep your website running smoothly and securely.',
      category: 'website'
    },
    {
      id: 11,
      question: 'What hosting features are included?',
      answer: 'Our hosting includes SSL certificates, CDN for fast loading, daily backups, 99.9% uptime guarantee, and 24/7 monitoring. We handle all technical aspects so you can focus on your business.',
      category: 'hosting'
    },
    {
      id: 12,
      question: 'Can I migrate my existing website to your hosting?',
      answer: 'Yes, we provide free website migration services. Our team will handle the entire migration process to ensure your website moves smoothly to our hosting platform without any downtime.',
      category: 'hosting'
    },
    {
      id: 13,
      question: 'What if my website goes down?',
      answer: 'We provide 24/7 monitoring and immediate response to any downtime issues. Our hosting includes a 99.9% uptime guarantee, and our technical team is always ready to resolve any problems quickly.',
      category: 'hosting'
    },
    {
      id: 14,
      question: 'How long does it take to see SEO results?',
      answer: 'SEO is a long-term strategy. You may start seeing improvements in 3-6 months, with significant results typically appearing after 6-12 months. We provide monthly reports to track your progress and rankings.',
      category: 'seo'
    },
    {
      id: 15,
      question: 'What SEO services do you provide?',
      answer: 'Our SEO services include keyword research, on-page optimization, technical SEO, link building, content optimization, and monthly reporting. We focus on sustainable, white-hat techniques that improve your long-term rankings.',
      category: 'seo'
    },
    {
      id: 16,
      question: 'Do you guarantee SEO rankings?',
      answer: 'While we cannot guarantee specific rankings due to search engine algorithm changes, we guarantee our best efforts using proven SEO strategies. We focus on improving your overall online visibility and organic traffic.',
      category: 'seo'
    },
    {
      id: 17,
      question: 'What type of content do you write?',
      answer: 'We create blog articles, website copy, product descriptions, social media content, and email newsletters. All content is SEO-optimized, engaging, and tailored to your target audience and industry.',
      category: 'content'
    },
    {
      id: 18,
      question: 'Can I request specific topics for blog articles?',
      answer: 'Absolutely! You can suggest topics, or we can recommend content ideas based on your industry, target keywords, and business goals. We work collaboratively to ensure the content serves your marketing objectives.',
      category: 'content'
    },
    {
      id: 19,
      question: 'How do you ensure content quality?',
      answer: 'All our content goes through a rigorous quality process including research, writing, editing, and SEO optimization. We ensure every piece is original, engaging, and aligned with your brand voice and messaging.',
      category: 'content'
    },
    {
      id: 20,
      question: 'Which social media platforms do you manage?',
      answer: 'We manage Facebook, Instagram, LinkedIn, Twitter, and other platforms based on where your target audience is most active. We create platform-specific content that maximizes engagement on each channel.',
      category: 'social'
    },
    {
      id: 21,
      question: 'Do you create visual content for social media?',
      answer: 'Yes, we create custom graphics, images, and visual content for your social media posts. All visuals are designed to match your brand guidelines and optimize engagement on each platform.',
      category: 'social'
    },
    {
      id: 22,
      question: 'How do you measure social media success?',
      answer: 'We track engagement rates, follower growth, reach, impressions, and click-through rates. Monthly reports show your social media performance and how it contributes to your overall marketing goals.',
      category: 'social'
    },
    {
      id: 23,
      question: 'What email marketing platforms do you use?',
      answer: 'We work with popular platforms like Mailchimp, Constant Contact, and others. We can integrate with your existing platform or recommend the best solution based on your needs and budget.',
      category: 'email'
    },
    {
      id: 24,
      question: 'Do you design email templates?',
      answer: 'Yes, we create custom email templates that are mobile-responsive and branded to match your company. Our designs focus on maximizing open rates, click-through rates, and conversions.',
      category: 'email'
    },
    {
      id: 25,
      question: 'Can you set up automated email sequences?',
      answer: 'Absolutely! We can set up welcome sequences, abandoned cart emails, nurture campaigns, and other automated email workflows to help you engage customers and drive sales automatically.',
      category: 'email'
    }
  ];

  const filteredFAQs = faqItems.filter(item => item.category === activeCategory);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 gradient-bg rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            our clients ask about our services and plans.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenItems([]);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                  activeCategory === category.id
                    ? 'gradient-bg text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>
        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset transition-all duration-200 hover:bg-emerald-50"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 pr-8">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(item.id) ? (
                      <Minus className="w-6 h-6 text-emerald-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Our team is here to help! Schedule a free consultation to discuss 
              your specific needs and get personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="gradient-bg text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-block text-center"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;