"use client";
import React from "react";
import { ServiceCard, Service } from "@/components/services/ServiceCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Performance",
      "Modern UI/UX",
    ],
    icon: "🌐",
    gradient: "from-blue-500 to-cyan-400",
    hoverGradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    features: [
      "Cross-Platform",
      "Native Performance",
      "App Store Ready",
      "Push Notifications",
    ],
    icon: "📱",
    gradient: "from-purple-500 to-pink-400",
    hoverGradient: "from-purple-600 to-pink-500",
  },
  {
    title: "Custom Software",
    description:
      "Tailored software solutions to streamline your business processes and boost productivity.",
    features: [
      "Custom Logic",
      "Database Design",
      "API Integration",
      "Scalable Architecture",
    ],
    icon: "⚙️",
    gradient: "from-green-500 to-emerald-400",
    hoverGradient: "from-green-600 to-emerald-500",
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs that enhance user experience and drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    icon: "🎨",
    gradient: "from-orange-500 to-red-400",
    hoverGradient: "from-orange-600 to-red-500",
  },
  {
    title: "SEO Optimization",
    description:
      "Comprehensive search engine optimization to improve your website's visibility and organic traffic.",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Content Strategy",
    ],
    icon: "🔍",
    gradient: "from-indigo-500 to-blue-400",
    hoverGradient: "from-indigo-600 to-blue-500",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic digital marketing campaigns to boost your online presence and drive conversions.",
    features: [
      "Social Media Marketing",
      "PPC Campaigns",
      "Email Marketing",
      "Analytics & Reporting",
    ],
    icon: "📈",
    gradient: "from-yellow-500 to-orange-400",
    hoverGradient: "from-yellow-600 to-orange-500",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden text-white">
        {/* Background glows */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin"
            style={{ animationDuration: "20s" }}
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 tracking-tight">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive technology solutions to accelerate your
              business growth and digital transformation with cutting-edge
              innovation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 transform hover:scale-105 hover:rotate-1 shadow-2xl hover:shadow-blue-500/25"
            >
              Start a Project
              <svg
                className="ml-3 w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
