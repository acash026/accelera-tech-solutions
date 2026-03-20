"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function CancellationRefundPolicy() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                Cancellation & Refund Policy
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
                    1. Cancellation Policy
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Clients may cancel their project at any time by providing
                    written notice. The cancellation terms depend on the project
                    stage and the amount of work completed.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    2. Project Phase Cancellations
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">
                        Discovery/Planning Phase (0-25% completion)
                      </h3>
                      <p className="text-gray-300">
                        Cancellation fee: 25% of total project cost. This covers
                        initial consultation, research, and planning efforts.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">
                        Development Phase (25-75% completion)
                      </h3>
                      <p className="text-gray-300">
                        Cancellation fee: 50% of total project cost. This covers
                        completed work, documentation, and development efforts.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white mb-2">
                        Final Phase (75%+ completion)
                      </h3>
                      <p className="text-gray-300">
                        Cancellation fee: 75% of total project cost. At this
                        stage, most development work is complete.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    3. Refund Eligibility
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Refunds are considered under the following circumstances:
                  </p>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside mt-4">
                    <li>
                      Failure to deliver services as specified in the contract
                    </li>
                    <li>
                      Technical impossibility of completing the project as
                      agreed
                    </li>
                    <li>Mutual agreement between both parties</li>
                    <li>Breach of contract by Accelera Tech Solution</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    4. Non-Refundable Services
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    The following services are non-refundable:
                  </p>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside mt-4">
                    <li>Completed consultation and strategy sessions</li>
                    <li>Domain registration and third-party service fees</li>
                    <li>Completed design work and approved deliverables</li>
                    <li>Training sessions already conducted</li>
                    <li>
                      Custom development work that has been delivered and
                      approved
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    5. Refund Process
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    To request a refund:
                  </p>
                  <ol className="text-gray-300 space-y-2 list-decimal list-inside mt-4">
                    <li>Submit a written refund request with justification</li>
                    <li>Allow 5-10 business days for review and response</li>
                    <li>
                      If approved, refunds are processed within 14 business days
                    </li>
                    <li>Refunds are issued to the original payment method</li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    6. Client Cancellation Rights
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Clients have the right to cancel within 14 days of signing
                    the contract if no work has commenced. A full refund minus
                    any third-party costs already incurred will be provided.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    7. Accelera Tech Solution Cancellation Rights
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We reserve the right to cancel a project under these
                    circumstances:
                  </p>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside mt-4">
                    <li>Non-payment or breach of payment terms</li>
                    <li>Client requests that violate our terms of service</li>
                    <li>Unethical or illegal project requirements</li>
                    <li>
                      Lack of client cooperation affecting project progress
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    8. Modification and Scope Changes
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Significant changes to project scope may affect cancellation
                    and refund terms. Additional work beyond the original scope
                    will be billed separately and is subject to separate
                    cancellation terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    9. Dispute Resolution
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Any disputes regarding cancellations or refunds will be
                    resolved through:
                  </p>
                  <ol className="text-gray-300 space-y-2 list-decimal list-inside mt-4">
                    <li>Direct negotiation between the parties</li>
                    <li>Mediation if direct negotiation fails</li>
                    <li>Arbitration as a final resort</li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    10. Contact Information
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    For cancellation requests or refund inquiries, please
                    contact us through our{" "}
                    <Link
                      href="/contact"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      contact page
                    </Link>{" "}
                    or email us directly.
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
