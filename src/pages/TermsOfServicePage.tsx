import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BackToTop from '../components/BackToTop';

const TermsOfServicePage: React.FC = () => {
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
            <h1 className="text-4xl font-bold gradient-text mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: January 2025</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Agreement to Terms</h2>
                <div className="space-y-4 text-gray-600">
                  <p>By accessing and using xniux services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.</p>
                  <p>These terms apply to all users of our digital services including website design, hosting, SEO, content writing, social media management, and email marketing services.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Service Description</h2>
                <div className="space-y-4 text-gray-600">
                  <p><span className="gradient-text">xniux</span> provides comprehensive digital marketing and web development services including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Website Design:</strong> Custom website development, responsive design, and user experience optimization</li>
                    <li><strong>Lightning Hosting:</strong> Web hosting services with SSL certificates, CDN, and technical support</li>
                    <li><strong>Smart SEO Boost:</strong> Search engine optimization, keyword research, and link building</li>
                    <li><strong>Content Writing:</strong> Blog articles, website copy, and marketing content creation</li>
                    <li><strong>Social Media Pulse:</strong> Social media management, content creation, and engagement strategies</li>
                    <li><strong>Email Design Power:</strong> Email marketing campaigns, template design, and automation setup</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Service Plans and Pricing</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We offer three main service plans:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Essentials Plan:</strong> Basic package for startups and small businesses</li>
                    <li><strong>Growth Plan:</strong> Comprehensive package for growing businesses</li>
                    <li><strong>Boost Plan:</strong> Premium package for established brands</li>
                  </ul>
                  <p>All prices are quoted in USD and billed annually unless otherwise specified. Custom packages are available upon request with separate terms and pricing.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Payment Terms</h2>
                <div className="space-y-4 text-gray-600">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Payment is due in full before service commencement unless otherwise agreed</li>
                    <li>Annual plans require full payment upfront</li>
                    <li>Custom projects may require milestone-based payments</li>
                    <li>Late payments may result in service suspension after 15 days</li>
                    <li>All fees are non-refundable except as specified in our Refund Policy</li>
                    <li>Prices are subject to change with 30 days notice</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Client Responsibilities</h2>
                <div className="space-y-4 text-gray-600">
                  <p>As a client, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete information for service delivery</li>
                    <li>Respond to requests for information within reasonable timeframes</li>
                    <li>Provide necessary access to accounts, platforms, and systems</li>
                    <li>Review and approve deliverables within specified timeframes</li>
                    <li>Ensure all provided content complies with applicable laws and regulations</li>
                    <li>Maintain confidentiality of login credentials and account information</li>
                    <li>Notify us immediately of any unauthorized use of your accounts</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Intellectual Property Rights</h2>
                <div className="space-y-4 text-gray-600">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You retain ownership of all content and materials you provide</li>
                    <li>Upon full payment, you own the final deliverables created specifically for you</li>
                    <li>We retain rights to our methodologies, processes, and general knowledge</li>
                    <li>Third-party tools, plugins, and software remain property of their respective owners</li>
                    <li>We may use project examples in our portfolio and marketing materials unless otherwise agreed</li>
                    <li>You grant us license to use your content solely for service delivery purposes</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Service Level Agreements</h2>
                <div className="space-y-4 text-gray-600">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Website Hosting:</strong> 99.9% uptime guarantee with monitoring and support</li>
                    <li><strong>Response Times:</strong> Email support within 24 hours during business days</li>
                    <li><strong>Project Delivery:</strong> Timelines specified in individual project agreements</li>
                    <li><strong>Content Delivery:</strong> Monthly content delivered according to plan specifications</li>
                    <li><strong>SEO Reporting:</strong> Monthly reports provided for all SEO services</li>
                    <li><strong>Emergency Support:</strong> Available for critical hosting and security issues</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Limitations of Liability</h2>
                <div className="space-y-4 text-gray-600">
                  <p>To the maximum extent permitted by law:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Our total liability shall not exceed the amount paid for services in the 12 months preceding the claim</li>
                    <li>We are not liable for indirect, incidental, or consequential damages</li>
                    <li>We do not guarantee specific results from SEO, marketing, or advertising services</li>
                    <li>We are not responsible for third-party service failures or data breaches</li>
                    <li>Force majeure events excuse performance delays or failures</li>
                    <li>You agree to indemnify us against claims arising from your use of our services</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Termination</h2>
                <div className="space-y-4 text-gray-600">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Either party may terminate services with 30 days written notice</li>
                    <li>We may terminate immediately for breach of terms or non-payment</li>
                    <li>Upon termination, you retain ownership of completed deliverables</li>
                    <li>Hosting services will continue for 30 days after termination notice</li>
                    <li>Final invoices are due within 15 days of termination</li>
                    <li>Confidentiality obligations survive termination</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Privacy and Data Protection</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference. We comply with applicable data protection laws and implement appropriate security measures.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Dispute Resolution</h2>
                <div className="space-y-4 text-gray-600">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We encourage direct communication to resolve any issues</li>
                    <li>Formal disputes will be resolved through binding arbitration</li>
                    <li>Arbitration will be conducted under applicable arbitration rules</li>
                    <li>The prevailing party may recover reasonable attorney fees</li>
                    <li>These terms are governed by the laws of Indonesia</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Changes to Terms</h2>
                <div className="space-y-4 text-gray-600">
                  <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the new terms. We will notify clients of material changes via email.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Contact Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p>For questions about these Terms of Service, please contact us:</p>
                  <ul className="list-none space-y-2">
                    <li><strong>Email:</strong> legal@xniux.com</li>
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

export default TermsOfServicePage;