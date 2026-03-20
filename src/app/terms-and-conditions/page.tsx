"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                Terms and Conditions
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
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    By accessing and using Accelera Tech Solution's services,
                    you accept and agree to be bound by the terms and provision
                    of this agreement. These Terms and Conditions apply to all
                    visitors, users, and others who access or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    2. Services Description
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Accelera Tech Solution provides web development, mobile app
                    development, custom software solutions, and related
                    technology services. We reserve the right to modify,
                    suspend, or discontinue any aspect of our services at any
                    time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    3. User Responsibilities
                  </h2>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>
                      Provide accurate and complete information when engaging
                      our services
                    </li>
                    <li>
                      Maintain the confidentiality of any account credentials
                    </li>
                    <li>
                      Use our services in compliance with all applicable laws
                      and regulations
                    </li>
                    <li>
                      Not engage in any activity that interferes with or
                      disrupts our services
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    4. Intellectual Property
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    All content, features, and functionality of our services are
                    owned by Accelera Tech Solution and are protected by
                    international copyright, trademark, and other intellectual
                    property laws. Unless otherwise specified in a written
                    agreement, all custom work performed for clients becomes the
                    property of the client upon full payment.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    5. Payment Terms
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Payment terms are specified in individual project
                    agreements. Generally, we require a deposit before beginning
                    work and final payment upon project completion. Late
                    payments may incur additional charges as specified in the
                    project agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    6. Limitation of Liability
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    In no event shall Accelera Tech Solution be liable for any
                    indirect, incidental, special, consequential, or punitive
                    damages, including without limitation, loss of profits,
                    data, use, goodwill, or other intangible losses, resulting
                    from your use of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    7. Governing Law
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    These Terms shall be interpreted and governed by the laws of
                    the jurisdiction in which Accelera Tech Solution operates,
                    without regard to its conflict of law provisions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    8. Contact Information
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about these Terms and Conditions,
                    please contact us through our{" "}
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
