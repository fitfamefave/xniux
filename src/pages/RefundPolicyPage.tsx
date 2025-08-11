import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BackToTop from '../components/BackToTop';

const RefundPolicyPage: React.FC = () => {
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
            <h1 className="text-4xl font-bold gradient-text mb-8">Refund Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: January 2025</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Overview</h2>
                <div className="space-y-4 text-gray-600">
                  <p>At xniux, we stand behind the quality of our digital services. This Refund Policy outlines the conditions under which refunds may be requested for our website design, hosting, SEO, content writing, social media management, and email marketing services.</p>
                  <p>We encourage clients to communicate any concerns early so we can address issues and ensure satisfaction with our services.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Refund Eligibility</h2>
                <div className="space-y-4 text-gray-600">
                  <p>Refunds may be considered under the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Non-Delivery:</strong> If we fail to deliver agreed-upon services within the specified timeframe without valid reason</li>
                    <li><strong>Material Breach:</strong> If we materially breach our service agreement and fail to remedy within 30 days of written notice</li>
                    <li><strong>Technical Failures:</strong> If hosting services experience downtime exceeding our 99.9% uptime guarantee for more than 30 consecutive days</li>
                    <li><strong>Cancellation Within Grace Period:</strong> Requests made within 7 days of initial payment for services not yet commenced</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Non-Refundable Services</h2>
                <div className="space-y-4 text-gray-600">
                  <p>The following services and circumstances are not eligible for refunds:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Completed Work:</strong> Any deliverables that have been completed and delivered according to specifications</li>
                    <li><strong>Third-Party Costs:</strong> Domain registrations, third-party software licenses, advertising spend, and external service fees</li>
                    <li><strong>Change of Mind:</strong> Refunds due to change in business direction, budget constraints, or personal preferences</li>
                    <li><strong>Performance Results:</strong> SEO rankings, social media engagement, or marketing campaign performance outcomes</li>
                    <li><strong>Partial Service Use:</strong> Services that have been partially delivered or utilized</li>
                    <li><strong>Custom Development:</strong> Bespoke development work that has been specifically created for your requirements</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Refund Process</h2>
                <div className="space-y-4 text-gray-600">
                  <p>To request a refund, please follow these steps:</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li><strong>Contact Us:</strong> Email refunds@xniux.com with your refund request and detailed explanation</li>
                    <li><strong>Provide Documentation:</strong> Include relevant project details, communications, and supporting evidence</li>
                    <li><strong>Review Period:</strong> We will review your request within 5-7 business days</li>
                    <li><strong>Resolution Discussion:</strong> We may propose alternative solutions before processing a refund</li>
                    <li><strong>Decision Notification:</strong> You will receive written notification of our decision</li>
                    <li><strong>Processing Time:</strong> Approved refunds will be processed within 10-15 business days</li>
                  </ol>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Partial Refunds</h2>
                <div className="space-y-4 text-gray-600">
                  <p>In certain circumstances, partial refunds may be considered:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Interruption:</strong> Prorated refunds for hosting downtime exceeding SLA guarantees</li>
                    <li><strong>Early Termination:</strong> Unused portions of annual plans terminated early (subject to minimum commitment periods)</li>
                    <li><strong>Service Reduction:</strong> When service scope is reduced by mutual agreement</li>
                    <li><strong>Quality Issues:</strong> When deliverables partially meet specifications despite revision attempts</li>
                  </ul>
                  <p>Partial refund amounts will be calculated based on the unused portion of services and time remaining in the service period.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Service-Specific Refund Terms</h2>
                <div className="space-y-4 text-gray-600">
                  <h3 className="text-lg font-semibold text-gray-800">Website Design</h3>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Refunds available if initial design concepts are rejected after 3 revision rounds</li>
                    <li>No refunds once final design is approved and development begins</li>
                    <li>Scope changes may affect refund eligibility</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800">Hosting Services</h3>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Prorated refunds for unused hosting periods if cancelled within first 30 days</li>
                    <li>No refunds for hosting after 30 days unless SLA violations occur</li>
                    <li>Setup fees are non-refundable</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800">SEO Services</h3>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>No refunds based on ranking performance or traffic results</li>
                    <li>Refunds available if agreed-upon SEO tasks are not completed</li>
                    <li>Minimum 90-day commitment period for all SEO services</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800">Content and Social Media</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Refunds available for undelivered content within agreed timeframes</li>
                    <li>No refunds for content performance or engagement results</li>
                    <li>Completed content is non-refundable</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Refund Methods</h2>
                <div className="space-y-4 text-gray-600">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Refunds will be processed using the same payment method used for the original transaction</li>
                    <li>Bank transfer refunds may take 5-10 business days to appear in your account</li>
                    <li>Credit card refunds typically appear within 3-5 business days</li>
                    <li>PayPal refunds are usually immediate but may take up to 24 hours</li>
                    <li>Processing fees and transaction costs are non-refundable</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Dispute Resolution</h2>
                <div className="space-y-4 text-gray-600">
                  <p>If you disagree with our refund decision:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You may request a review by our senior management team</li>
                    <li>Provide additional documentation or clarification as requested</li>
                    <li>We will conduct a final review within 10 business days</li>
                    <li>Our final decision will be communicated in writing</li>
                    <li>Unresolved disputes may be subject to arbitration as outlined in our Terms of Service</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Satisfaction Guarantee</h2>
                <div className="space-y-4 text-gray-600">
                  <p>While we cannot guarantee specific results, we are committed to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Delivering services according to agreed specifications and timelines</li>
                    <li>Providing unlimited revisions within scope for design projects</li>
                    <li>Offering alternative solutions when initial approaches don't meet expectations</li>
                    <li>Maintaining open communication throughout all projects</li>
                    <li>Standing behind our work with ongoing support and maintenance</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Policy Updates</h2>
                <div className="space-y-4 text-gray-600">
                  <p>This Refund Policy may be updated periodically to reflect changes in our services or legal requirements. Updates will be posted on our website with the revised date. Continued use of our services after policy changes constitutes acceptance of the updated terms.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Information</h2>
                <div className="space-y-4 text-gray-600">
                  <p>For refund requests or questions about this policy, please contact us:</p>
                  <ul className="list-none space-y-2">
                    <li><strong>Email:</strong> refunds@xniux.com</li>
                    <li><strong>Phone:</strong> +6282228503355</li>
                    <li><strong>Address:</strong> U Coworking Space, Jakarta</li>
                    <li><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM (GMT +7)</li>
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

export default RefundPolicyPage;