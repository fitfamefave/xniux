import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BackToTop from '../components/BackToTop';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-cyan-50">
      <Header />
      
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <h1 className="text-4xl font-bold gradient-text mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: January 2025</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
                <div className="space-y-4 text-gray-600">
                  <p>At <span className="gradient-text">xniux</span>, we collect information to provide better digital services to our clients:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, company details when you contact us or use our services</li>
                    <li><strong>Website Analytics:</strong> IP address, browser type, device information, pages visited, and time spent on our website</li>
                    <li><strong>Service Data:</strong> Content, images, and materials you provide for website development, SEO, content writing, and social media services</li>
                    <li><strong>Communication Records:</strong> Emails, chat messages, and phone call records for customer support and service delivery</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We use collected information for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Delivering digital services including website design, hosting, SEO, content writing, social media management, and email marketing</li>
                    <li>Communicating about your projects, providing updates, and customer support</li>
                    <li>Improving our services and developing new features</li>
                    <li>Sending service-related notifications and marketing communications (with your consent)</li>
                    <li>Complying with legal obligations and protecting our rights</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information Sharing and Disclosure</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We do not sell, trade, or rent your personal information. We may share information in these limited circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> Third-party tools and platforms necessary for service delivery (hosting providers, analytics tools, design software)</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of business assets</li>
                    <li><strong>With Your Consent:</strong> Any other sharing with your explicit permission</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We implement appropriate security measures to protect your information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure servers and regular security updates</li>
                    <li>Access controls and employee training</li>
                    <li>Regular backups and disaster recovery procedures</li>
                    <li>Compliance with industry security standards</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Your Rights</h2>
                <div className="space-y-4 text-gray-600">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Correct inaccurate or incomplete data</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Data portability for information you've provided</li>
                    <li>File a complaint with relevant data protection authorities</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Cookies and Tracking</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and user behavior</li>
                    <li>Provide personalized content and advertisements</li>
                    <li>Improve website functionality and user experience</li>
                  </ul>
                  <p>You can control cookie settings through your browser preferences.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Data Retention</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We retain your information for as long as necessary to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide ongoing services and support</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Improve our services and business operations</li>
                  </ul>
                  <p>Typically, we retain client data for 7 years after service completion, unless longer retention is required by law.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. International Data Transfers</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during international transfers, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Adequacy decisions by relevant authorities</li>
                    <li>Standard contractual clauses</li>
                    <li>Certification schemes and codes of conduct</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Changes to This Policy</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes through:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email notifications to registered users</li>
                    <li>Prominent notices on our website</li>
                    <li>Updates to the "Last updated" date above</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact Us</h2>
                <div className="space-y-4 text-gray-600">
                  <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
                  <ul className="list-none space-y-2">
                    <li><strong>Email:</strong> privacy@xniux.com</li>
                    <li><strong>Phone:</strong> +6282228503355</li>
                    <li><strong>Address:</strong> U Coworking Space, Jakarta</li>
                  </ul>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
};

export default PrivacyPolicyPage;