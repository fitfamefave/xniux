import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BackToTop from '../components/BackToTop';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

const CareersPage: React.FC = () => {
  const jobPositions: JobPosition[] = [
    {
      id: 'website-developer',
      title: 'Website Developer',
      department: 'Development',
      location: 'WFA / Remote',
      type: 'Full-time',
      description: 'Join our development team to create stunning, responsive websites that drive business results. You\'ll work with modern technologies and collaborate with designers and marketers to deliver exceptional digital experiences.',
      responsibilities: [
        'Develop responsive websites using HTML, CSS, JavaScript, and modern frameworks',
        'Collaborate with design team to implement pixel-perfect UI/UX designs',
        'Optimize websites for performance, SEO, and accessibility',
        'Integrate third-party APIs and services',
        'Maintain and update existing client websites',
        'Participate in code reviews and follow best practices',
        'Stay updated with latest web development trends and technologies'
      ],
      requirements: [
        '2+ years of experience in web development',
        'Proficiency in HTML5, CSS3, JavaScript (ES6+)',
        'Experience with React, Vue.js, or similar frameworks',
        'Knowledge of responsive design and mobile-first development',
        'Familiarity with version control systems (Git)',
        'Understanding of SEO principles and web performance optimization',
        'Strong problem-solving skills and attention to detail',
        'Good communication skills and ability to work in a team'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Flexible working hours and remote work options',
        'Professional development opportunities',
        'Collaborative and creative work environment',
        'Opportunity to work on diverse projects across industries'
      ]
    },
    {
      id: 'seo-specialist',
      title: 'SEO Specialist',
      department: 'Development',
      location: 'WFA / Remote',
      type: 'Full-time',
      description: 'Drive organic growth for our clients through strategic SEO initiatives. You\'ll develop and execute comprehensive SEO strategies that improve search rankings and increase organic traffic for businesses across various industries.',
      responsibilities: [
        'Conduct comprehensive SEO audits and competitor analysis',
        'Develop and implement SEO strategies for client websites',
        'Perform keyword research and optimize content for search engines',
        'Build high-quality backlinks through outreach and relationship building',
        'Monitor and analyze SEO performance using various tools',
        'Create detailed SEO reports and present findings to clients',
        'Stay updated with search engine algorithm changes and industry trends',
        'Collaborate with content and development teams for SEO optimization'
      ],
      requirements: [
        '2+ years of experience in SEO and digital marketing',
        'Proficiency with SEO tools (Ahrefs, SEMrush, Google Analytics, Search Console)',
        'Strong understanding of on-page and off-page SEO techniques',
        'Experience with technical SEO and website optimization',
        'Knowledge of content marketing and link building strategies',
        'Analytical mindset with ability to interpret data and metrics',
        'Excellent written and verbal communication skills',
        'Experience with WordPress and basic HTML/CSS knowledge'
      ],
      benefits: [
        'Competitive salary with performance-based incentives',
        'Access to premium SEO tools and software',
        'Continuous learning opportunities and certifications',
        'Flexible work arrangements',
        'Career advancement opportunities in digital marketing'
      ]
    },
    {
      id: 'social-media-trainee',
      title: 'Social Media Trainee',
      department: 'Development',
      location: 'WFA / Remote',
      type: 'Full-time (Entry Level)',
      description: 'Start your career in digital marketing with our comprehensive social media training program. You\'ll learn to create engaging content, manage social media accounts, and develop strategies that build brand awareness and drive engagement.',
      responsibilities: [
        'Create engaging social media content for various platforms',
        'Schedule and publish posts using social media management tools',
        'Monitor social media accounts and respond to comments and messages',
        'Assist in developing social media strategies and campaigns',
        'Analyze social media metrics and prepare performance reports',
        'Research industry trends and competitor activities',
        'Support influencer outreach and partnership initiatives',
        'Participate in brainstorming sessions for creative campaigns'
      ],
      requirements: [
        'Bachelor\'s degree in Marketing, Communications, or related field',
        'Strong understanding of major social media platforms',
        'Creative mindset with good visual and written communication skills',
        'Basic knowledge of graphic design tools (Canva, Photoshop) is a plus',
        'Analytical thinking and attention to detail',
        'Enthusiasm for learning and staying updated with social media trends',
        'Ability to work in a fast-paced environment',
        'Fresh graduates are welcome to apply'
      ],
      benefits: [
        'Comprehensive training program with experienced mentors',
        'Competitive entry-level salary with growth potential',
        'Hands-on experience with real client projects',
        'Access to design tools and social media management platforms',
        'Regular feedback and performance reviews',
        'Opportunity for rapid career advancement',
        'Fun and supportive work environment',
        'Learning budget for courses and certifications'
      ]
    }
  ];

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
                Join Our{' '}
                <span className="gradient-text">Amazing Team</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Build your career with <span className="gradient-text">xniux</span> and help businesses transform their digital presence.
                We're looking for passionate individuals who want to make impact.
              </p>
            </motion.div>

            {/* Company Culture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8 mb-16"
            >
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Collaborative Team</h3>
                <p className="text-gray-600">Work with talented professionals who support each other's growth and success.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Work-Life Balance</h3>
                <p className="text-gray-600">Flexible hours and remote work options to help you maintain a healthy balance.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Growth Opportunities</h3>
                <p className="text-gray-600">Continuous learning and career advancement in the fast-growing digital industry.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Job Positions */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">Open Positions</span>
              </h2>
              <p className="text-lg text-gray-600">Discover exciting career opportunities with xniux</p>
            </motion.div>

            <div className="space-y-8">
              {jobPositions.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`rounded-2xl shadow-xl p-8 lg:p-12 ${
                    job.id === 'seo-specialist' 
                      ? 'bg-gradient-to-br from-emerald-50 to-cyan-50' 
                      : 'bg-white'
                  }`}
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Job Header */}
                    <div className="lg:col-span-1">
                      <h3 className="text-2xl font-bold mb-4">
                        <span className="gradient-text">{job.title}</span>
                      </h3>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{job.description}</p>
                      <a
                        href="mailto:careers@xniux.com"
                        className="gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 text-decoration-none"
                      >
                        <Send className="w-4 h-4" />
                        <span>Apply Now</span>
                      </a>
                    </div>

                    {/* Job Details */}
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-4">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-start">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-4">Requirements</h4>
                        <ul className="space-y-2 mb-6">
                          {job.requirements.map((requirement, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-start">
                              <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {requirement}
                            </li>
                          ))}
                        </ul>

                        {/* Benefits */}
                        <h4 className="text-lg font-bold text-gray-800 mb-4">Benefits</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-start">
                              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section id="application-process" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Application Process</h2>
              <p className="text-lg text-gray-600">Here's how our hiring process works</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Apply', description: 'Submit your application with resume and portfolio' },
                { step: '2', title: 'Review', description: 'We review your application and assess fit' },
                { step: '3', title: 'Interview', description: 'Video interview with our team members' },
                { step: '4', title: 'Welcome', description: 'Join the xniux team and start your journey' }
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Join Us?</h3>
                <p className="text-gray-600 mb-6">
                  Send your best resume and portfolio to <span className="gradient-text">xniux</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:careers@xniux.com"
                    className="gradient-bg text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Application</span>
                  </a>
                </div>
              </div>
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

export default CareersPage;