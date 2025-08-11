import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    title: string;
    icon: React.ElementType;
    description: string;
    features: string[];
  };
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  const getServiceContent = (serviceId: string) => {
    const content = {
      website: {
        whatIs: {
          title: "What is Website Design",
          content: "Website design is the process of creating visually appealing, user-friendly, and functional websites that effectively communicate your brand message and drive business results. It encompasses everything from visual aesthetics and user interface design to user experience optimization and conversion-focused layouts. Modern website design combines creativity with strategic thinking to create digital experiences that not only look stunning but also perform exceptionally well in terms of user engagement, search engine visibility, and business goal achievement."
        },
        whyNeed: {
          title: "Why you need Website Design",
          items: [
            "First impressions matter - users form opinions about websites within 50 milliseconds",
            "75% of users judge a company's credibility based on website design",
            "Professional design builds trust and differentiates you from competitors",
            "Well-designed websites improve search engine rankings",
            "Better user experience leads to higher conversion rates",
            "Provides better return on your marketing investments",
            "Mobile-responsive design reaches customers on all devices"
          ]
        },
        howHelp: {
          title: "How can Xniux help with Website Design",
          items: [
            "Comprehensive approach that goes beyond just visual appeal",
            "Work closely with you to understand business goals and target audience",
            "Create custom designs that reflect your unique brand identity",
            "Ensure optimal user experience across all devices",
            "Thorough research, wireframing, and prototyping process",
            "Integrate SEO best practices from the ground up",
            "Performance optimization for fast loading times",
            "Conversion rate optimization strategies built-in"
          ]
        },
        benefits: {
          title: "Benefits of our Website Design service",
          items: [
            "Mobile-responsive design that looks perfect on all devices",
            "Fast loading times for better user experience and SEO",
            "Conversion-optimized layouts and calls-to-action",
            "Unlimited revisions during the design phase",
            "Ongoing support and maintenance included",
            "Detailed analytics setup to track performance",
            "Scalable design that grows with your business",
            "Accessible, secure, and follows industry best practices"
          ]
        }
      },
      hosting: {
        whatIs: {
          title: "What is Lightning Hosting",
          content: "Lightning Hosting is our premium web hosting service designed to deliver exceptional speed, reliability, and security for your website. It combines cutting-edge server technology, global content delivery networks (CDN), and advanced caching mechanisms to ensure your website loads at lightning speed from anywhere in the world. Our hosting infrastructure is built on enterprise-grade servers with SSD storage, redundant systems, and 24/7 monitoring to guarantee maximum uptime and performance. Lightning Hosting isn't just about speed—it's about providing a robust foundation that supports your website's growth and success."
        },
        whyNeed: {
          title: "Why you need Lightning Hosting",
          items: [
            "Website speed directly impacts business success and conversions",
            "Slow websites lose visitors within seconds",
            "Google considers page speed as a ranking factor",
            "Users expect websites to load in under 3 seconds",
            "Poor hosting leads to frequent downtime and lost revenue",
            "Security vulnerabilities can damage your reputation",
            "Need scalable hosting that grows with your business",
            "Cyber threats require robust security measures"
          ]
        },
        howHelp: {
          title: "How can Xniux help with Lightning Hosting",
          items: [
            "Enterprise-level hosting with focus on speed and security",
            "Global CDN integration for worldwide fast loading",
            "Advanced caching systems and optimized server configurations",
            "Complete technical management including security updates",
            "Automated daily backups and performance monitoring",
            "24/7 proactive monitoring with immediate issue response",
            "Easy-to-use control panels and staging environments",
            "Seamless migration services from other hosts"
          ]
        },
        benefits: {
          title: "Benefits of our Lightning Hosting service",
          items: [
            "Significantly faster loading times improve user experience",
            "99.9% uptime guarantee keeps your website always accessible",
            "Advanced security protects against malware and DDoS attacks",
            "Automated daily backups provide complete peace of mind",
            "Global CDN ensures fast loading worldwide",
            "Free SSL certificates and unlimited bandwidth included",
            "Scalable resources that grow with your business",
            "24/7 expert support resolves issues quickly"
          ]
        }
      },
      seo: {
        whatIs: {
          title: "What is Smart SEO Boost",
          content: "Smart SEO Boost is our comprehensive search engine optimization service designed to improve your website's visibility in search results and drive qualified organic traffic to your business. It combines technical SEO, content optimization, keyword research, link building, and performance monitoring to create a holistic approach to search engine success. Our Smart SEO Boost service uses data-driven strategies, advanced analytics, and industry best practices to help your website rank higher for relevant keywords, attract more qualified visitors, and ultimately generate more leads and sales for your business."
        },
        whyNeed: {
          title: "Why you need Smart SEO Boost",
          items: [
            "Organic search drives 53% of all website traffic",
            "Without SEO, your website remains invisible to potential customers",
            "Competitors investing in SEO are gaining market share",
            "SEO provides long-term, sustainable results with higher ROI",
            "Users trust organic search results more than paid ads",
            "Local SEO attracts nearby customers to your business",
            "Technical SEO improves user experience and rankings",
            "SEO builds credibility and authority in your industry"
          ]
        },
        howHelp: {
          title: "How can Xniux help with Smart SEO Boost",
          items: [
            "Comprehensive, data-driven approach with measurable results",
            "Thorough keyword research and competitive analysis",
            "Technical foundation optimization and page speed improvements",
            "Mobile-friendliness and user experience optimization",
            "High-quality content creation targeting customer search queries",
            "Strategic link building to boost domain authority",
            "Detailed monthly reports showing progress and growth",
            "White-hat, sustainable strategies for long-term success"
          ]
        },
        benefits: {
          title: "Benefits of our Smart SEO Boost service",
          items: [
            "Increased organic traffic from qualified prospects",
            "Higher search rankings improve brand credibility",
            "Technical optimizations improve user experience and conversions",
            "Detailed monthly reports with rankings and ROI metrics",
            "Long-term investment that pays dividends over time",
            "Sustainable growth reducing dependence on paid ads",
            "Local SEO dominates local search results",
            "Attract nearby customers actively searching for your services"
          ]
        }
      },
      content: {
        whatIs: {
          title: "What is Content Writing",
          content: "Content Writing is the strategic creation of valuable, relevant, and engaging written material designed to attract, inform, and convert your target audience. It encompasses blog articles, website copy, product descriptions, email newsletters, social media posts, and other written content that supports your marketing goals. Professional content writing combines storytelling, SEO optimization, and persuasive copywriting techniques to create content that not only ranks well in search engines but also resonates with readers and drives them to take desired actions. It's about creating content that provides genuine value while supporting your business objectives."
        },
        whyNeed: {
          title: "Why you need Content Writing",
          items: [
            "Content marketing generates 3x more leads than traditional marketing",
            "Costs 62% less than traditional marketing methods",
            "Fresh content helps search engines rank your website higher",
            "Establishes your expertise and builds trust with customers",
            "Provides value that keeps visitors engaged on your site",
            "Supports SEO efforts by targeting relevant keywords",
            "Quality content earns valuable backlinks naturally",
            "Positions your business as an industry leader"
          ]
        },
        howHelp: {
          title: "How can Xniux help with Content Writing",
          items: [
            "Comprehensive content services aligned with business goals",
            "Experienced writers who research your industry thoroughly",
            "Content strategies based on keyword and competitor analysis",
            "SEO-optimized content that remains engaging for readers",
            "Full range: blog articles, website copy, emails, social media",
            "Quality assurance process ensures accuracy and readability",
            "Content that resonates with your ideal customers",
            "Consistent brand voice across all content pieces"
          ]
        },
        benefits: {
          title: "Benefits of our Content Writing service",
          items: [
            "SEO-optimized content improves search rankings and traffic",
            "High-quality content establishes industry authority",
            "Regular publication keeps website fresh and engaging",
            "Strategic calls-to-action generate qualified leads",
            "Addresses customer pain points and provides solutions",
            "Saves time while ensuring consistent, professional content",
            "Content suitable for social media and email marketing",
            "Maximizes content investment across multiple channels"
          ]
        }
      },
      social: {
        whatIs: {
          title: "What is Social Media Pulse",
          content: "Social Media Pulse is our comprehensive social media management service designed to build your brand presence, engage your audience, and drive business results across major social platforms. It includes content creation, posting schedules, community management, audience engagement, and performance analytics. Our Social Media Pulse service creates a consistent brand voice across platforms while adapting content to each platform's unique characteristics and audience preferences. We focus on building genuine connections with your audience, fostering community engagement, and converting social media followers into loyal customers and brand advocates."
        },
        whyNeed: {
          title: "Why you need Social Media Pulse",
          items: [
            "Average person spends 2.5 hours daily on social platforms",
            "Missing social presence means missing potential customers",
            "Social signals influence search engine rankings",
            "Customers expect businesses to be accessible on social media",
            "Provides valuable insights into customer preferences",
            "Strong social presence increases website traffic",
            "Higher conversion rates from social media engagement",
            "Improves customer loyalty and brand advocacy"
          ]
        },
        howHelp: {
          title: "How can Xniux help with Social Media Pulse",
          items: [
            "Strategic, results-focused approach to social media management",
            "Custom content calendars based on goals and audience preferences",
            "Engaging visual content and compelling captions",
            "Consistent posting across all chosen platforms",
            "Active audience engagement and community building",
            "Data-driven strategies using analytics optimization",
            "Integration with overall marketing strategy",
            "Consistent messaging for maximum impact"
          ]
        },
        benefits: {
          title: "Benefits of our Social Media Pulse service",
          items: [
            "Increased followers and higher engagement rates",
            "More website traffic from social platforms",
            "Consistent posting keeps brand top-of-mind",
            "Professional content ensures polished brand image",
            "Build community of engaged brand advocates",
            "Followers become referral sources for new business",
            "Supports SEO and content marketing strategies",
            "Detailed analytics showing ROI and growth metrics"
          ]
        }
      },
      email: {
        whatIs: {
          title: "What is Email Design Power",
          content: "Email Design Power is our specialized email marketing service that creates visually stunning, high-converting email campaigns designed to engage your audience and drive sales. It encompasses email template design, campaign strategy, automation setup, list management, and performance optimization. Our Email Design Power service combines compelling visual design with persuasive copywriting and strategic timing to maximize open rates, click-through rates, and conversions. We create email experiences that not only look professional but also guide recipients toward taking desired actions, whether that's making a purchase, booking a consultation, or engaging with your content."
        },
        whyNeed: {
          title: "Why you need Email Design Power",
          items: [
            "Email marketing generates $42 for every $1 spent (highest ROI)",
            "Poor design leads to emails ending up in spam folders",
            "Professional design improves brand credibility",
            "Allows nurturing leads over time effectively",
            "Maintains connection with existing customers",
            "Drives repeat business and customer retention",
            "You own the channel completely (unlike social media)",
            "Professional design makes emails stand out in crowded inboxes"
          ]
        },
        howHelp: {
          title: "How can Xniux help with Email Design Power",
          items: [
            "End-to-end email marketing services that drive results",
            "Custom email templates optimized for all devices",
            "Email strategies based on business goals and audience segments",
            "Automated sequences for welcome, cart recovery, and nurturing",
            "Compelling subject lines and content that drive engagement",
            "Complete list management and segmentation",
            "A/B testing for continuous performance improvement",
            "Performance optimization to maximize results"
          ]
        },
        benefits: {
          title: "Benefits of our Email Design Power service",
          items: [
            "Improved open rates, click-through rates, and conversions",
            "Mobile-responsive designs look perfect on all devices",
            "Automated sequences work 24/7 without manual effort",
            "Build stronger customer relationships through consistent communication",
            "Segmentation ensures right message reaches right audience",
            "Detailed analytics show performance and revenue generated",
            "Track marketing ROI precisely with comprehensive reporting",
            "Exceptional ROI and measurable business growth"
          ]
        }
      }
    };

    return content[serviceId as keyof typeof content] || content.website;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const serviceContent = getServiceContent(service.id);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header */}
              <div className="gradient-bg text-white p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                    <p className="text-white/90 text-lg">{service.description}</p>
                  </div>
                </div>
              </div>

              {/* Content Sections */}
              <div className="p-8 space-y-8">
                {/* What is Section */}
                <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    {serviceContent.whatIs.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {serviceContent.whatIs.content}
                  </p>
                </div>

                {/* Why you need Section */}
                <div className="bg-white border-2 border-emerald-100 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    {serviceContent.whyNeed.title}
                  </h3>
                  <div className="space-y-3">
                    {serviceContent.whyNeed.items.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* How can Xniux help Section */}
                <div className="bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    {serviceContent.howHelp.title}
                  </h3>
                  <div className="space-y-3">
                    {serviceContent.howHelp.items.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-white border-2 border-cyan-100 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    {serviceContent.benefits.title}
                  </h3>
                  <div className="space-y-3">
                    {serviceContent.benefits.items.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features Include:</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Let's discuss how our {service.title} service can help transform your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => {
                        onClose();
                        const element = document.querySelector('#pricing');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="gradient-bg text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      View Pricing Plans
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        window.location.href = '/contact';
                      }}
                      className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold border-2 border-gray-200 hover:border-emerald-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Get Free Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;