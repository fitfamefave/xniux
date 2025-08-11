import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Tag, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BackToTop from '../components/BackToTop';

interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  technologies: string[];
  duration: string;
  teamSize: string;
  liveUrl?: string;
  githubUrl?: string;
  results: string;
  challenges: string[];
  solutions: string[];
  features: string[];
}

const PortfolioPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Portfolio projects data
  const projects: PortfolioProject[] = [
    {
      id: '1',
      title: 'MedCare Hospital Platform',
      category: 'Healthcare',
      shortDescription: 'Patient management system with appointment booking and telemedicine features.',
      fullDescription: 'A comprehensive healthcare management platform designed to streamline patient care and administrative processes. The system integrates appointment scheduling, patient records management, telemedicine capabilities, and billing systems into a unified, user-friendly interface. Built with modern web technologies and following HIPAA compliance standards, this platform serves both healthcare providers and patients with secure, efficient digital healthcare solutions.',
      images: [
        'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'Socket.io', 'AWS', 'Docker'],
      duration: '8 months',
      teamSize: '6 developers',
      liveUrl: 'https://medcare-demo.xniux.com',
      results: '85% patient satisfaction increase, 40% reduction in administrative overhead',
      challenges: [
        'HIPAA compliance requirements for patient data security',
        'Real-time video consultation implementation',
        'Integration with existing hospital management systems',
        'Scalability for multiple healthcare facilities'
      ],
      solutions: [
        'Implemented end-to-end encryption for all patient communications',
        'Built custom WebRTC solution with fallback options',
        'Created flexible API architecture for seamless integrations',
        'Designed microservices architecture for horizontal scaling'
      ],
      features: [
        'Patient portal with appointment scheduling',
        'Secure telemedicine video consultations',
        'Electronic health records (EHR) management',
        'Automated billing and insurance processing',
        'Real-time notifications and reminders',
        'Multi-language support',
        'Mobile-responsive design',
        'Advanced reporting and analytics'
      ]
    },
    {
      id: '2',
      title: 'HealthTech Analytics Dashboard',
      category: 'Healthcare',
      shortDescription: 'Real-time analytics platform for healthcare providers and administrators.',
      fullDescription: 'An advanced analytics dashboard that provides healthcare administrators and providers with real-time insights into patient care metrics, operational efficiency, and financial performance. The platform aggregates data from multiple sources to deliver actionable insights through intuitive visualizations and automated reporting systems.',
      images: [
        'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'MongoDB', 'Redis', 'Elasticsearch'],
      duration: '6 months',
      teamSize: '4 developers',
      liveUrl: 'https://healthtech-analytics.xniux.com',
      results: '40% efficiency improvement in decision-making processes',
      challenges: [
        'Processing large volumes of healthcare data in real-time',
        'Creating intuitive visualizations for complex medical metrics',
        'Ensuring data accuracy and consistency across multiple sources',
        'Meeting strict healthcare data privacy regulations'
      ],
      solutions: [
        'Implemented streaming data processing with Apache Kafka',
        'Designed custom visualization components using D3.js',
        'Built robust data validation and cleansing pipelines',
        'Created comprehensive audit trails and access controls'
      ],
      features: [
        'Real-time patient flow monitoring',
        'Financial performance tracking',
        'Staff productivity analytics',
        'Predictive modeling for resource planning',
        'Customizable dashboard widgets',
        'Automated alert systems',
        'Export capabilities for reports',
        'Role-based access control'
      ]
    },
    {
      id: '3',
      title: 'Clinic Management System',
      category: 'Healthcare',
      shortDescription: 'Comprehensive clinic management with patient records and billing.',
      fullDescription: 'A complete clinic management solution that streamlines daily operations for small to medium-sized medical practices. The system handles patient registration, appointment scheduling, medical records, billing, and inventory management in one integrated platform. Designed with healthcare workflows in mind, it reduces administrative burden while improving patient care quality.',
      images: [
        'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'JWT', 'Bootstrap', 'Chart.js'],
      duration: '5 months',
      teamSize: '3 developers',
      results: '60% administrative time saved, 95% appointment accuracy',
      challenges: [
        'Complex medical workflow requirements',
        'Integration with existing billing systems',
        'Multi-user role management',
        'Data backup and recovery protocols'
      ],
      solutions: [
        'Developed flexible workflow engine',
        'Created standardized API for billing integrations',
        'Implemented granular permission system',
        'Established automated backup procedures'
      ],
      features: [
        'Patient registration and demographics',
        'Appointment scheduling with conflicts detection',
        'Electronic medical records (EMR)',
        'Billing and insurance claims processing',
        'Inventory management for medical supplies',
        'Staff scheduling and payroll integration',
        'Reporting and analytics dashboard',
        'Mobile app for staff access'
      ]
    },
    {
      id: '4',
      title: 'PropertyHub Listing Platform',
      category: 'Real Estate',
      shortDescription: 'Advanced property search and listing platform with virtual tours.',
      fullDescription: 'A cutting-edge real estate platform that revolutionizes property discovery and viewing experiences. The platform combines advanced search capabilities, virtual tour technology, and comprehensive property management tools to serve both property seekers and real estate professionals. With AI-powered recommendations and immersive virtual experiences, users can explore properties remotely with unprecedented detail and accuracy.',
      images: [
        'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['React', 'Three.js', 'Node.js', 'MongoDB', 'AWS S3', 'Mapbox', 'Stripe'],
      duration: '10 months',
      teamSize: '8 developers',
      liveUrl: 'https://propertyhub.xniux.com',
      githubUrl: 'https://github.com/xniux/propertyhub',
      results: '300% user engagement increase, 45% faster property sales',
      challenges: [
        'Implementing high-quality 3D virtual tours',
        'Handling large property image and video files',
        'Creating accurate property search algorithms',
        'Integrating with multiple MLS systems'
      ],
      solutions: [
        'Built custom 3D rendering engine with Three.js',
        'Implemented progressive image loading and CDN optimization',
        'Developed machine learning-based search and recommendation system',
        'Created flexible API adapters for various MLS integrations'
      ],
      features: [
        '360-degree virtual property tours',
        'Advanced search with AI recommendations',
        'Interactive neighborhood maps',
        'Mortgage calculator integration',
        'Saved searches and alerts',
        'Agent communication tools',
        'Property comparison features',
        'Mobile app with AR capabilities'
      ]
    },
    {
      id: '5',
      title: 'RealEstate CRM Solution',
      category: 'Real Estate',
      shortDescription: 'Customer relationship management system for real estate agents.',
      fullDescription: 'A specialized CRM system built specifically for real estate professionals to manage leads, track client interactions, and automate follow-up processes. The platform integrates with popular real estate tools and provides comprehensive analytics to help agents close more deals and build stronger client relationships.',
      images: [
        'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Twilio', 'Mailgun', 'Zapier'],
      duration: '7 months',
      teamSize: '5 developers',
      results: '45% lead conversion increase, 30% more repeat clients',
      challenges: [
        'Complex lead scoring algorithms',
        'Multi-channel communication tracking',
        'Integration with various real estate platforms',
        'Automated workflow customization'
      ],
      solutions: [
        'Developed machine learning-based lead scoring',
        'Built unified communication hub',
        'Created flexible integration framework',
        'Implemented visual workflow builder'
      ],
      features: [
        'Lead capture and qualification',
        'Contact management with interaction history',
        'Automated email and SMS campaigns',
        'Task and appointment scheduling',
        'Deal pipeline management',
        'Commission tracking and reporting',
        'Mobile app for on-the-go access',
        'Integration with MLS and other tools'
      ]
    },
    {
      id: '6',
      title: 'Property Investment Portal',
      category: 'Real Estate',
      shortDescription: 'Investment analysis platform with market insights and ROI calculators.',
      fullDescription: 'A comprehensive platform for real estate investors to analyze potential investments, track portfolio performance, and make data-driven decisions. The system provides market insights, financial modeling tools, and automated reporting to help investors maximize their returns while minimizing risks.',
      images: [
        'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'Pandas', 'Plotly', 'AWS'],
      duration: '9 months',
      teamSize: '6 developers',
      results: '200% investor sign-ups, 85% user retention rate',
      challenges: [
        'Complex financial calculations and modeling',
        'Real-time market data integration',
        'Scalable data processing for large datasets',
        'User-friendly interface for complex data'
      ],
      solutions: [
        'Built robust financial calculation engine',
        'Integrated multiple real estate data APIs',
        'Implemented efficient data processing pipelines',
        'Designed intuitive dashboard with interactive charts'
      ],
      features: [
        'Property investment analysis tools',
        'ROI and cash flow calculators',
        'Market trend analysis and forecasting',
        'Portfolio performance tracking',
        'Automated property alerts and notifications',
        'Comparative market analysis (CMA)',
        'Tax calculation and reporting tools',
        'Investment strategy recommendations'
      ]
    },
    {
      id: '7',
      title: 'FinanceTracker Pro',
      category: 'Financials',
      shortDescription: 'Personal finance management with budgeting and investment tracking.',
      fullDescription: 'A comprehensive personal finance management application that empowers users to take control of their financial future. The platform combines budgeting tools, investment tracking, expense categorization, and financial goal setting into an intuitive interface. With bank-level security and real-time synchronization across devices, users can monitor their financial health and make informed decisions about their money.',
      images: [
        'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Plaid API', 'Chart.js', 'Firebase'],
      duration: '7 months',
      teamSize: '5 developers',
      liveUrl: 'https://financetracker.xniux.com',
      results: '90% user retention rate, 65% improvement in user savings',
      challenges: [
        'Secure integration with multiple banking institutions',
        'Real-time transaction categorization and analysis',
        'Creating intuitive financial visualization tools',
        'Ensuring data privacy and regulatory compliance'
      ],
      solutions: [
        'Integrated Plaid API for secure bank connections',
        'Implemented machine learning for automatic transaction categorization',
        'Built interactive charts and graphs with Chart.js',
        'Established comprehensive security protocols and encryption'
      ],
      features: [
        'Automatic bank account synchronization',
        'Smart expense categorization',
        'Budget creation and tracking',
        'Investment portfolio monitoring',
        'Bill reminder notifications',
        'Financial goal setting and progress tracking',
        'Detailed spending analytics',
        'Export capabilities for tax preparation'
      ]
    },
    {
      id: '8',
      title: 'Banking Dashboard System',
      category: 'Financials',
      shortDescription: 'Comprehensive banking dashboard with transaction monitoring.',
      fullDescription: 'A modern banking dashboard designed for financial institutions to monitor transactions, manage customer accounts, and provide real-time insights into banking operations. The system features advanced security measures, compliance reporting, and intuitive interfaces for both bank staff and customers.',
      images: [
        'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['Angular', 'Java', 'Spring Security', 'Oracle DB', 'Kafka', 'Docker', 'Kubernetes'],
      duration: '12 months',
      teamSize: '10 developers',
      results: '50% faster transaction processing, 99.9% system uptime',
      challenges: [
        'High-frequency transaction processing',
        'Regulatory compliance requirements',
        'Multi-layered security implementation',
        'Real-time fraud detection'
      ],
      solutions: [
        'Implemented microservices architecture for scalability',
        'Built comprehensive audit and compliance modules',
        'Developed multi-factor authentication system',
        'Created AI-powered fraud detection algorithms'
      ],
      features: [
        'Real-time transaction monitoring',
        'Customer account management',
        'Fraud detection and prevention',
        'Compliance reporting and audit trails',
        'Multi-currency support',
        'Mobile banking integration',
        'Automated risk assessment',
        'Advanced analytics and reporting'
      ]
    },
    {
      id: '9',
      title: 'Investment Portfolio Manager',
      category: 'Financials',
      shortDescription: 'Advanced portfolio management with risk assessment tools.',
      fullDescription: 'A sophisticated investment management platform that helps financial advisors and individual investors track, analyze, and optimize their investment portfolios. The system provides comprehensive risk analysis, performance tracking, and automated rebalancing recommendations.',
      images: [
        'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'NumPy', 'Pandas', 'TradingView'],
      duration: '8 months',
      teamSize: '6 developers',
      results: '35% better investment returns, 80% client satisfaction',
      challenges: [
        'Complex financial calculations and modeling',
        'Real-time market data integration',
        'Risk assessment algorithms',
        'Regulatory compliance for investment advice'
      ],
      solutions: [
        'Developed advanced mathematical models for portfolio optimization',
        'Integrated multiple financial data providers',
        'Built comprehensive risk analysis engine',
        'Implemented compliance tracking and reporting'
      ],
      features: [
        'Portfolio performance tracking and analysis',
        'Risk assessment and diversification analysis',
        'Automated rebalancing recommendations',
        'Real-time market data and news integration',
        'Tax-loss harvesting optimization',
        'Client reporting and communication tools',
        'Goal-based investment planning',
        'Integration with brokerage accounts'
      ]
    },
    {
      id: '10',
      title: 'TechStart Cloud Platform',
      category: 'Technology',
      shortDescription: 'Scalable cloud infrastructure management platform.',
      fullDescription: 'An enterprise-grade cloud infrastructure management platform designed to simplify the deployment, monitoring, and scaling of cloud resources. The platform provides a unified interface for managing multi-cloud environments, automated deployment pipelines, and comprehensive monitoring solutions. Built for DevOps teams and system administrators, it streamlines cloud operations while maintaining security and cost optimization.',
      images: [
        'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['Angular', 'Go', 'Kubernetes', 'Docker', 'Terraform', 'Prometheus', 'Grafana'],
      duration: '12 months',
      teamSize: '10 developers',
      liveUrl: 'https://techstart-cloud.xniux.com',
      githubUrl: 'https://github.com/xniux/techstart-cloud',
      results: '99.9% uptime achieved, 60% reduction in deployment time',
      challenges: [
        'Managing complex multi-cloud environments',
        'Implementing auto-scaling and load balancing',
        'Creating comprehensive monitoring and alerting systems',
        'Ensuring security across distributed infrastructure'
      ],
      solutions: [
        'Built unified API layer for multiple cloud providers',
        'Implemented intelligent auto-scaling algorithms',
        'Integrated Prometheus and Grafana for comprehensive monitoring',
        'Established zero-trust security architecture'
      ],
      features: [
        'Multi-cloud resource management',
        'Automated CI/CD pipeline deployment',
        'Real-time infrastructure monitoring',
        'Cost optimization recommendations',
        'Security compliance scanning',
        'Disaster recovery automation',
        'Team collaboration tools',
        'API-first architecture'
      ]
    },
    {
      id: '11',
      title: 'DevOps Automation Suite',
      category: 'Technology',
      shortDescription: 'Complete DevOps automation with CI/CD pipeline management.',
      fullDescription: 'A comprehensive DevOps automation platform that streamlines software development and deployment processes. The suite provides tools for continuous integration, continuous deployment, infrastructure as code, and automated testing, enabling development teams to deliver software faster and more reliably.',
      images: [
        'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Ansible', 'Terraform', 'GitLab', 'Prometheus'],
      duration: '10 months',
      teamSize: '8 developers',
      results: '70% deployment time reduction, 95% deployment success rate',
      challenges: [
        'Complex multi-environment deployment workflows',
        'Integration with various development tools',
        'Automated testing and quality gates',
        'Rollback and disaster recovery procedures'
      ],
      solutions: [
        'Designed flexible pipeline templates',
        'Built comprehensive integration framework',
        'Implemented automated testing orchestration',
        'Created robust rollback mechanisms'
      ],
      features: [
        'Visual pipeline builder and editor',
        'Automated code quality checks',
        'Multi-environment deployment management',
        'Infrastructure as code templates',
        'Automated testing integration',
        'Release management and approvals',
        'Performance monitoring and alerting',
        'Audit trails and compliance reporting'
      ]
    },
    {
      id: '12',
      title: 'Cybersecurity Dashboard',
      category: 'Technology',
      shortDescription: 'Real-time security monitoring and threat detection system.',
      fullDescription: 'An advanced cybersecurity platform that provides real-time monitoring, threat detection, and incident response capabilities. The system aggregates security data from multiple sources, uses machine learning for anomaly detection, and provides actionable insights to security teams.',
      images: [
        'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['React', 'Python', 'Elasticsearch', 'Kibana', 'TensorFlow', 'Redis', 'PostgreSQL'],
      duration: '11 months',
      teamSize: '9 developers',
      results: '95% threat detection accuracy, 80% faster incident response',
      challenges: [
        'Processing massive volumes of security data',
        'Real-time threat detection and alerting',
        'False positive reduction',
        'Integration with existing security tools'
      ],
      solutions: [
        'Implemented distributed data processing architecture',
        'Developed machine learning-based threat detection',
        'Built intelligent alert correlation system',
        'Created flexible API framework for integrations'
      ],
      features: [
        'Real-time security event monitoring',
        'AI-powered threat detection and analysis',
        'Incident response workflow automation',
        'Vulnerability assessment and management',
        'Compliance reporting and audit trails',
        'Network traffic analysis and visualization',
        'User behavior analytics',
        'Integration with SIEM and other security tools'
      ]
    },
    {
      id: '13',
      title: 'RetailHub E-commerce',
      category: 'Consumer',
      shortDescription: 'Multi-vendor e-commerce platform with advanced analytics.',
      fullDescription: 'A sophisticated multi-vendor e-commerce platform that enables businesses to create their own online marketplaces. The platform supports multiple vendors, advanced product management, integrated payment processing, and comprehensive analytics. With features like AI-powered product recommendations, inventory management, and customer relationship tools, it provides everything needed to run a successful online marketplace.',
      images: [
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Redis', 'Elasticsearch', 'AWS'],
      duration: '9 months',
      teamSize: '7 developers',
      liveUrl: 'https://retailhub.xniux.com',
      results: '250% sales increase, 180% vendor adoption rate',
      challenges: [
        'Managing complex multi-vendor inventory systems',
        'Implementing fair commission and payment distribution',
        'Creating scalable search and recommendation engines',
        'Ensuring platform security for multiple stakeholders'
      ],
      solutions: [
        'Built distributed inventory management system',
        'Developed automated commission calculation and payout system',
        'Implemented Elasticsearch for fast product search',
        'Created comprehensive role-based access control system'
      ],
      features: [
        'Multi-vendor marketplace management',
        'Advanced product catalog system',
        'Integrated payment processing',
        'AI-powered product recommendations',
        'Inventory management and tracking',
        'Vendor analytics dashboard',
        'Customer review and rating system',
        'Mobile-responsive design'
      ]
    },
    {
      id: '14',
      title: 'FoodDelivery Mobile App',
      category: 'Consumer',
      shortDescription: 'On-demand food delivery app with real-time tracking.',
      fullDescription: 'A comprehensive food delivery mobile application that connects customers with local restaurants and delivery drivers. The app features real-time order tracking, multiple payment options, restaurant discovery, and an intuitive user interface designed for quick and easy food ordering.',
      images: [
        'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe', 'Google Maps API', 'Firebase'],
      duration: '6 months',
      teamSize: '5 developers',
      results: '180% order volume increase, 4.8/5 user rating',
      challenges: [
        'Real-time order tracking and updates',
        'Efficient delivery route optimization',
        'Managing peak hour traffic and orders',
        'Multi-platform mobile app development'
      ],
      solutions: [
        'Implemented WebSocket connections for real-time updates',
        'Built intelligent routing algorithms',
        'Created scalable backend architecture',
        'Developed shared codebase for iOS and Android'
      ],
      features: [
        'Restaurant discovery and browsing',
        'Menu customization and ordering',
        'Real-time order tracking with GPS',
        'Multiple payment methods integration',
        'Push notifications for order updates',
        'Rating and review system',
        'Loyalty programs and promotions',
        'Driver app for delivery management'
      ]
    },
    {
      id: '15',
      title: 'Fashion Brand Platform',
      category: 'Consumer',
      shortDescription: 'Fashion e-commerce with AR try-on and style recommendations.',
      fullDescription: 'An innovative fashion e-commerce platform that combines traditional online shopping with cutting-edge augmented reality technology. Customers can virtually try on clothes, receive personalized style recommendations, and enjoy a premium shopping experience with advanced features like size prediction and style matching.',
      images: [
        'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['Vue.js', 'Three.js', 'TensorFlow.js', 'Node.js', 'MongoDB', 'AWS', 'WebRTC'],
      duration: '8 months',
      teamSize: '6 developers',
      results: '320% engagement increase, 45% reduction in returns',
      challenges: [
        'Implementing accurate AR try-on technology',
        'Creating personalized recommendation algorithms',
        'Managing high-resolution product imagery',
        'Cross-platform AR compatibility'
      ],
      solutions: [
        'Developed custom AR engine using Three.js and WebRTC',
        'Built machine learning recommendation system',
        'Implemented progressive image loading and optimization',
        'Created responsive AR experience for all devices'
      ],
      features: [
        'AR virtual try-on for clothing and accessories',
        'AI-powered style recommendations',
        'Size prediction and fit analysis',
        'Social sharing and style inspiration',
        'Wishlist and favorites management',
        'Advanced product filtering and search',
        'Virtual styling consultation',
        'Mobile app with camera integration'
      ]
    },
    {
      id: '16',
      title: 'EduLearn LMS',
      category: 'Education',
      shortDescription: 'Comprehensive learning management system with interactive content.',
      fullDescription: 'A modern learning management system designed to facilitate online education and training programs. The platform supports course creation, student enrollment, progress tracking, and interactive learning experiences. With features like video streaming, quiz systems, discussion forums, and certification management, it provides a complete solution for educational institutions and corporate training programs.',
      images: [
        'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC', 'FFmpeg', 'Socket.io', 'AWS S3'],
      duration: '8 months',
      teamSize: '6 developers',
      liveUrl: 'https://edulearn.xniux.com',
      results: '95% course completion rate, 88% student satisfaction',
      challenges: [
        'Implementing reliable video streaming for courses',
        'Creating engaging interactive learning experiences',
        'Managing large file uploads and storage',
        'Ensuring accessibility for diverse learning needs'
      ],
      solutions: [
        'Built adaptive video streaming with multiple quality options',
        'Developed interactive quiz and assessment tools',
        'Implemented chunked file upload with progress tracking',
        'Created comprehensive accessibility features and WCAG compliance'
      ],
      features: [
        'Course creation and management tools',
        'Video streaming with adaptive quality',
        'Interactive quizzes and assessments',
        'Discussion forums and messaging',
        'Progress tracking and analytics',
        'Certificate generation and management',
        'Mobile learning app',
        'Integration with external tools'
      ]
    },
    {
      id: '17',
      title: 'Virtual Classroom Platform',
      category: 'Education',
      shortDescription: 'Real-time virtual classroom with whiteboard and breakout rooms.',
      fullDescription: 'An advanced virtual classroom platform that replicates the traditional classroom experience in a digital environment. The system supports live video sessions, interactive whiteboards, breakout rooms, and collaborative tools, making it ideal for schools, universities, and corporate training programs.',
      images: [
        'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['React', 'WebRTC', 'Socket.io', 'Node.js', 'MongoDB', 'Canvas API', 'WebGL'],
      duration: '7 months',
      teamSize: '5 developers',
      results: '90% student satisfaction, 85% attendance improvement',
      challenges: [
        'Low-latency video and audio streaming',
        'Real-time collaborative whiteboard functionality',
        'Managing multiple breakout rooms simultaneously',
        'Cross-platform compatibility and performance'
      ],
      solutions: [
        'Implemented optimized WebRTC connections with fallbacks',
        'Built custom canvas-based collaborative whiteboard',
        'Developed efficient room management system',
        'Created responsive design with performance optimizations'
      ],
      features: [
        'HD video conferencing with up to 100 participants',
        'Interactive whiteboard with drawing tools',
        'Breakout rooms for small group activities',
        'Screen sharing and presentation tools',
        'Real-time chat and messaging',
        'Recording and playback capabilities',
        'Attendance tracking and reporting',
        'Integration with learning management systems'
      ]
    },
    {
      id: '18',
      title: 'SkillTracker Assessment',
      category: 'Education',
      shortDescription: 'Skill assessment and certification platform with analytics.',
      fullDescription: 'A comprehensive skill assessment platform that helps organizations evaluate employee competencies, track skill development, and manage certification programs. The system provides detailed analytics, personalized learning paths, and automated certification management.',
      images: [
        'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Chart.js', 'JWT', 'Docker', 'Redis'],
      duration: '6 months',
      teamSize: '4 developers',
      results: '80% skill improvement rate, 95% certification accuracy',
      challenges: [
        'Creating adaptive assessment algorithms',
        'Preventing cheating and ensuring test integrity',
        'Generating meaningful skill analytics',
        'Scalable assessment delivery system'
      ],
      solutions: [
        'Developed intelligent question selection algorithms',
        'Implemented comprehensive anti-cheating measures',
        'Built advanced analytics and reporting engine',
        'Created cloud-based scalable architecture'
      ],
      features: [
        'Adaptive skill assessments and testing',
        'Automated certification management',
        'Detailed skill gap analysis and reporting',
        'Personalized learning recommendations',
        'Progress tracking and goal setting',
        'Integration with HR and learning systems',
        'Mobile app for on-the-go assessments',
        'Bulk assessment management for organizations'
      ]
    }
  ];

  const project = projects.find(p => p.id === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
            <Link
              to="/portfolio"
              className="gradient-bg text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link
                to="/portfolio"
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Portfolio</span>
              </Link>
            </motion.div>

            {/* Project Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="mb-4">
                  <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {project.fullDescription}
                </p>

                {/* Project Meta */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-emerald-500" />
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold text-gray-800">{project.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-emerald-500" />
                    <div>
                      <div className="text-sm text-gray-500">Team Size</div>
                      <div className="font-semibold text-gray-800">{project.teamSize}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-bg text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Main Image */}
              <div className="relative">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Project Gallery</h2>
              <p className="text-gray-600">Visual showcase of the project's key features and interfaces</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Technologies & Features */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-3 mb-12">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-emerald-100 text-emerald-600 px-4 py-2 rounded-lg font-semibold flex items-center space-x-2"
                    >
                      <Tag className="w-4 h-4" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges & Solutions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Challenges & Solutions</h3>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Challenges</h4>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                        <p className="text-gray-700">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Solutions</h4>
                  <div className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <div key={index} className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-r-lg">
                        <p className="text-gray-700">{solution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-gradient-to-r from-emerald-50 to-cyan-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Project Results</h3>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-4xl mb-4">📈</div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {project.results}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-4">More Projects</h3>
              <p className="text-gray-600">Explore other projects in our portfolio</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(p => p.id !== project.id && p.category === project.category)
                .slice(0, 3)
                .map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={relatedProject.images[0]}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                        {relatedProject.title}
                      </h4>
                      <p className="text-gray-600 mb-4 text-sm">
                        {relatedProject.shortDescription}
                      </p>
                      <Link
                        to={`/portfolio/${relatedProject.id}`}
                        className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center space-x-1"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/portfolio"
                className="gradient-bg text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
};

export default PortfolioPostPage;