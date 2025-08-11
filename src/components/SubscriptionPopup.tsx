import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, CheckCircle, AlertCircle, Mail } from 'lucide-react';
import { subscribeToNewsletter } from '../utils/api';

interface SubscriptionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscriptionPopup: React.FC<SubscriptionPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      await subscribeToNewsletter({ email: email.trim() });
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setEmail('');
      }, 2000);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setEmail('');
      setError('');
      setIsSuccess(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              disabled={isSubmitting}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50"
              aria-label="Close subscription popup"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>

            <div className="relative p-8">
              {!isSuccess ? (
                <>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 gradient-bg rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      Stay Ahead of the{' '}
                      <span className="gradient-text">Digital Curve</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Get exclusive insights, industry trends, and actionable tips delivered to your inbox. 
                      Join 500+ business owners who trust our expertise.
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>Monthly digital marketing insights</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>Early Access to Exclusive Rates</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>Early access to new services and features</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span>Free resources and templates</span>
                      </li>
                    </ul>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="subscription-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="subscription-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className={`w-full px-4 py-3 rounded-lg border transition-all focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
                          error ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        disabled={isSubmitting}
                        autoComplete="email"
                        aria-describedby={error ? 'email-error' : undefined}
                      />
                      {error && (
                        <div id="email-error" className="mt-2 flex items-center space-x-2 text-red-600 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{error}</span>
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gradient-bg text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4" />
                          <span>Subscribe Now</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Privacy Note */}
                  <p className="text-xs text-gray-500 text-center mt-4">
                    We respect your privacy. Unsubscribe at any time.{' '}
                    <button 
                      onClick={() => window.open('/privacy-policy', '_blank')}
                      className="text-emerald-600 hover:text-emerald-700 underline"
                    >
                      Privacy Policy
                    </button>
                  </p>
                </>
              ) : (
                /* Success State */
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Welcome to the{' '}
                    <span className="gradient-text">xniux</span> Family!
                  </h2>
                  <p className="text-gray-600">
                    Thank you for subscribing! Check your inbox for a welcome email with exclusive resources.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubscriptionPopup;