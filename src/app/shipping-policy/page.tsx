"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function ShippingPolicy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                Shipping Policy
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
                    1. Service Delivery
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    As a technology service provider, Accelera Tech Solution
                    primarily delivers digital services and solutions. Our
                    "shipping" refers to the delivery of completed projects,
                    software, and digital assets to our clients.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    2. Digital Delivery Methods
                  </h2>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>Secure file transfer via encrypted platforms</li>
                    <li>Cloud-based deployment and hosting</li>
                    <li>
                      Version control system access (GitHub, GitLab, etc.)
                    </li>
                    <li>Direct deployment to client servers or platforms</li>
                    <li>Email delivery for smaller files and documentation</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    3. Project Delivery Timeline
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Project delivery timelines are established in individual
                    project agreements. Typical delivery schedules include:
                  </p>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside mt-4">
                    <li>
                      Website Development: 2-8 weeks depending on complexity
                    </li>
                    <li>
                      Mobile App Development: 4-16 weeks depending on features
                    </li>
                    <li>Custom Software Solutions: Timeline varies by scope</li>
                    <li>Consultation and Strategy: 1-2 weeks</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    4. Physical Hardware Shipping
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    In cases where physical hardware or devices are part of the
                    project deliverables:
                  </p>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside mt-4">
                    <li>
                      Shipping costs will be calculated and communicated before
                      dispatch
                    </li>
                    <li>
                      We use reliable shipping carriers with tracking
                      capabilities
                    </li>
                    <li>
                      Insurance coverage is available for high-value items
                    </li>
                    <li>
                      Delivery times depend on location and shipping method
                      selected
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    5. International Delivery
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We provide services globally. For international clients:
                  </p>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside mt-4">
                    <li>
                      Digital deliveries are instant regardless of location
                    </li>
                    <li>
                      Time zone differences are considered for project timelines
                    </li>
                    <li>
                      Physical shipments may incur customs duties and taxes
                    </li>
                    <li>
                      Compliance with local regulations is the client's
                      responsibility
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    6. Delivery Confirmation
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Upon project completion and delivery:
                  </p>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside mt-4">
                    <li>Clients receive formal delivery notification</li>
                    <li>
                      Testing and approval period as specified in the agreement
                    </li>
                    <li>Documentation and training materials provided</li>
                    <li>
                      Support period begins as outlined in the service agreement
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    7. Delays and Force Majeure
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    While we strive to meet all delivery deadlines, delays may
                    occur due to:
                  </p>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside mt-4">
                    <li>Client feedback and revision cycles</li>
                    <li>Technical complexities or third-party dependencies</li>
                    <li>Force majeure events beyond our control</li>
                    <li>Changes in project scope or requirements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    8. Contact for Shipping Inquiries
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    For questions about delivery timelines or shipping
                    arrangements, please contact us through our{" "}
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
