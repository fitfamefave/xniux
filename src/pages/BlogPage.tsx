import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BackToTop from '../components/BackToTop';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
 authorImage: string;
}

const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Complete Guide to Modern Website Design in 2024',
      excerpt: 'Discover the latest trends, best practices, and essential elements that make websites stand out in today\'s competitive digital landscape.',
      category: 'Website Design',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Sarah Design',
      authorImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      title: 'Email Marketing Automation: Boost Your Conversions by 300%',
      excerpt: 'Learn how to set up powerful email automation sequences that nurture leads and convert them into loyal customers on autopilot.',
      category: 'Email Marketing',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Mike Marketing',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      title: 'SEO Secrets: How to Rank #1 on Google in 2024',
      excerpt: 'Uncover the proven strategies and techniques that top-ranking websites use to dominate search results and drive organic traffic.',
      category: 'SEO',
      date: '2024-01-05',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Alex SEO',
      authorImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 4,
      title: 'Social Media Strategy That Actually Works in 2024',
      excerpt: 'Build a social media presence that drives real business results with these proven strategies and content frameworks.',
      category: 'Social Media',
      date: '2024-01-20',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Emma Social',
      authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 5,
      title: 'Content Marketing: Creating Content That Converts',
      excerpt: 'Master the art of content creation with strategies that turn readers into customers and build lasting brand loyalty.',
      category: 'Content Marketing',
      date: '2024-01-18',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'David Content',
      authorImage: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 6,
      title: 'Web Performance Optimization: Speed Up Your Site',
      excerpt: 'Learn how to optimize your website for lightning-fast loading times and better user experience.',
      category: 'Website Design',
      date: '2024-01-12',
      readTime: '11 min read',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Tech Team',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 7,
      title: 'Email Design Best Practices for Higher Engagement',
      excerpt: 'Create email campaigns that stand out in crowded inboxes and drive higher open and click-through rates.',
      category: 'Email Marketing',
      date: '2024-01-08',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Design Team',
      authorImage: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 8,
      title: 'Local SEO: Dominate Your Local Market',
      excerpt: 'Optimize your business for local search and attract more customers from your geographic area.',
      category: 'SEO',
      date: '2024-01-03',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Local SEO Pro',
      authorImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 9,
      title: 'Building Brand Authority Through Digital Marketing',
      excerpt: 'Establish your brand as an industry leader with strategic digital marketing approaches.',
      category: 'Branding',
      date: '2024-01-01',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Brand Expert',
      authorImage: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 10,
      title: 'Mobile-First Design: Why It Matters More Than Ever',
      excerpt: 'Understanding the importance of mobile-first design in today\'s mobile-dominated world.',
      category: 'Website Design',
      date: '2023-12-28',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Mobile Expert',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 11,
      title: 'Advanced Email Segmentation Strategies',
      excerpt: 'Take your email marketing to the next level with sophisticated segmentation techniques.',
      category: 'Email Marketing',
      date: '2023-12-25',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Email Specialist',
      authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 12,
      title: 'Technical SEO Checklist for 2024',
      excerpt: 'Ensure your website meets all technical SEO requirements with this comprehensive checklist.',
      category: 'SEO',
      date: '2023-12-22',
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Technical SEO',
      authorImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Website Design':
        return 'bg-purple-100 text-purple-600';
      case 'Email Marketing':
        return 'bg-blue-100 text-blue-600';
      case 'SEO':
        return 'bg-emerald-100 text-emerald-600';
      case 'Social Media':
        return 'bg-pink-100 text-pink-600';
      case 'Content Marketing':
        return 'bg-orange-100 text-orange-600';
      case 'Branding':
        return 'bg-indigo-100 text-indigo-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50">
      <Header />
      
      <div className="pt-20">
        {/* Header */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-20"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Our{' '}
                <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest digital marketing trends, tips, and strategies 
                that can help your business grow and succeed online.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
              {currentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {/* Featured Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                        <Tag className="w-3 h-3 inline mr-1" />
                        {post.category}
                      </span>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Information */}
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <Link 
                      to={`/blog/${post.id}`}
                      className="block"
                    >
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Author & Read More */}
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        by {post.author}
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex justify-center items-center space-x-4"
              >
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                        currentPage === page
                          ? 'gradient-bg text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 shadow-md hover:shadow-lg'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </div>

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
};

export default BlogPage;