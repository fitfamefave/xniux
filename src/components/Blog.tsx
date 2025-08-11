import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

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

const Blog: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <section id="blog" ref={ref} className="py-20 bg-gradient-to-br from-emerald-100/70 via-cyan-50/50 to-green-50/60 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic floating elements */}
        <motion.div
          animate={{
            y: [-18, 18, -18],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/5 w-10 h-10 bg-emerald-200/35 rounded-full blur-sm"
        ></motion.div>
        <motion.div
          animate={{
            x: [-12, 12, -12],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-cyan-200/40 rounded-lg blur-sm"
        ></motion.div>
        <motion.div
          animate={{
            rotate: [0, -90, -180, -270, -360],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-emerald-300/25 rounded-full blur-sm"
        ></motion.div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-emerald-200/25 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl opacity-20"></div>
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
            Latest from Our{' '}
            <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest digital marketing trends, tips, and strategies 
            that can help your business grow and succeed online.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
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
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
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

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link 
            to="/blog"
            className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-emerald-300 hover:shadow-lg hover:gradient-bg hover:text-white transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Read More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;