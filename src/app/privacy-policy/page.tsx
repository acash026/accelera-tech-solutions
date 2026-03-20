"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-400 text-lg">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    1. Information We Collect
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We collect information you provide directly to us, such as
                    when you contact us for services, subscribe to our
                    newsletter, or communicate with us. This may include your
                    name, email address, phone number, company information, and
                    project requirements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    2. How We Use Your Information
                  </h2>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>To provide, maintain, and improve our services</li>
                    <li>
                      To process transactions and send related information
                    </li>
                    <li>To send you technical notices and support messages</li>
                    <li>
                      To communicate with you about products, services, and
                      promotional offers
                    </li>
                    <li>To monitor and analyze trends and usage</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    3. Information Sharing
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties without your consent, except as
                    described in this policy. We may share your information with
                    trusted service providers who assist us in operating our
                    business, provided they agree to keep this information
                    confidential.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    4. Data Security
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We implement appropriate technical and organizational
                    security measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or
                    destruction. However, no method of transmission over the
                    internet is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    5. Cookies and Tracking
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our website may use cookies and similar tracking
                    technologies to enhance your browsing experience. You can
                    set your browser to refuse all cookies or to indicate when a
                    cookie is being sent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    6. Data Retention
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We retain your personal information only for as long as
                    necessary to fulfill the purposes outlined in this privacy
                    policy, unless a longer retention period is required or
                    permitted by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    7. Your Rights
                  </h2>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to processing of your personal information</li>
                    <li>Request transfer of your personal information</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    8. Third-Party Links
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our website may contain links to third-party websites. We
                    are not responsible for the privacy practices or content of
                    these external sites. We encourage you to review their
                    privacy policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    9. Contact Us
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about this Privacy Policy, please
                    contact us through our{" "}
                    <Link
                      href="/contact"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      contact page
                    </Link>
                    .
                  </p>
                </section>
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="text-center mt-12">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
