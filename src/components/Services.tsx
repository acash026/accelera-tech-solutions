"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { OptimizedImage } from "./OptimizedImage";
import { LazyLoader } from "./LazyLoader";
import { ProjectCardSkeleton } from "./Skeleton";

const services = [
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

const projects = [
  {
    title: "Study Sphere",
    description:
      "A comprehensive learning platform offering a wide range of courses and resources.",
    tech: ["React.js", "Node.js", "Firebase", "Razorpay"],
    image:
      "https://ik.imagekit.io/charanraj/UI/Screenshot_18.png?updatedAt=1725720063363",
    category: "Web Development",
    liveUrl: "https://study-sphere-beryl.vercel.app/",
    status: "Live",
  },
  {
    title: "Webhooks Studio",
    description:
      "A platform for managing the clients projects with features they need.",
    tech: ["React Native", "Firebase", "WebRTC", "Push Notifications"],
    image:
      "https://ik.imagekit.io/charanraj/UI/Screenshot_16.png?updatedAt=1725711625408",
    category: "Web Development",
    liveUrl: "https://webhooksstudio.vercel.app/",
    status: "Live",
  },
 
  {
    title: "Accelera Auto Parts",
    description:
      "An e-commerce platform for automotive parts with advanced search and filtering.",
    tech: ["Next.js", "Prisma", "Tailwind CSS", "Stripe"],
    image:
      "https://ik.imagekit.io/charanraj/UI/Acceleraautoparts?updatedAt=1755002601101",
    category: "Web Development",
    liveUrl: "https://acceleraautoparts.com/",
    status: "Beta",
  },
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-3xl transform transition-all duration-700 group-hover:scale-105" />

      {/* Glow Effect */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`}
      />

      {/* Border Animation */}
      <div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-gray-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `conic-gradient(from 0deg, transparent, ${
            isHovered ? "#3b82f6" : "transparent"
          }, transparent)`,
        }}
      />

      <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 group-hover:border-gray-600/70 transition-all duration-500 h-full">
        {/* Icon with enhanced animation */}
        <div className={`relative w-20 h-20 mb-8 mx-auto sm:mx-0`}>
          <div
            className={`absolute inset-0 bg-gradient-to-r ${
              isHovered ? service.hoverGradient : service.gradient
            } rounded-2xl transform transition-all duration-500 ${
              isHovered ? "rotate-12 scale-110" : ""
            }`}
          />
          <div className="relative w-full h-full bg-gray-900/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">
            {service.icon}
          </div>
        </div>

        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-4 text-center sm:text-left">
          {service.title}
        </h3>

        <p className="text-gray-300 mb-6 leading-relaxed text-center sm:text-left">
          {service.description}
        </p>

        <div className="space-y-3">
          {service.features.map(
            (
              feature:
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | Promise<React.AwaitedReactNode>
                | React.Key
                | null
                | undefined,
              idx: number
            ) => (
              <div
                key={idx}
                className="flex items-center justify-center sm:justify-start text-sm text-gray-200 transform transition-all duration-300"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0 shadow-lg`}
                />
                <span className="font-medium">{feature}</span>
              </div>
            )
          )}
        </div>

        {/* Floating particles effect */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000 transform group-hover:translate-x-2 group-hover:-translate-y-2" />
        <div className="absolute bottom-8 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-1200 transform group-hover:-translate-x-1 group-hover:translate-y-1" />
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleViewProject = () => {
    window.open(project.liveUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="group relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleViewProject}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl rounded-3xl transform transition-all duration-700 group-hover:scale-[1.02]" />

      {/* Dynamic Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-blue-500/20 blur-xl transition-all duration-700" />

      <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 group-hover:border-gray-600/70 transition-all duration-500">
        {/* Image Container with Overlay */}
        <div className="relative w-full h-64 md:h-72 lg:h-64 overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10">
          <OptimizedImage
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transform transition-all duration-700 group-hover:scale-110"
          />

          {/* Image Overlay with View Button */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute bottom-4 left-4 right-4 flex justify-center">
              <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 group/btn">
                <svg
                  className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span className="font-medium">View Project</span>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 text-xs font-bold rounded-full ${
                project.status === "Live"
                  ? "bg-green-500/20 text-green-300 border border-green-500/50"
                  : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/50"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-500">
              {project.title}
            </h3>
            <span className="text-xs px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full border border-blue-500/30 whitespace-nowrap ml-4">
              {project.category}
            </span>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech: string, idx: number) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 bg-gray-800/80 text-gray-200 rounded-lg border border-gray-700/50 font-medium hover:bg-gray-700/80 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Single Action Button */}
          <div className="pt-4 border-t border-gray-700/50">
            <button
              onClick={handleViewProject}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 group/link font-medium"
            >
              <svg
                className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span>View Project</span>
            </button>
          </div>
        </div>

        {/* Hover Effect Indicator */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <section className="relative min-h-screen py-20 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Services Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 tracking-tight">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full" />
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive technology solutions to accelerate your
              business growth and digital transformation with cutting-edge
              innovation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 tracking-tight">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full" />
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Take a look at some of our recent work and see how we've helped
              businesses transform their digital presence with innovative
              solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center mt-20">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl" />

              <div className="relative bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/50">
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-6">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your requirements and turn your ideas into a
                  powerful digital solution that drives results.
                </p>

                <a
                  href="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 transform hover:scale-105 hover:rotate-1 shadow-2xl hover:shadow-blue-500/25"
                >
                  <span>Get Started Today</span>
                  <svg
                    className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300"
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

                {/* Floating Elements */}
                <div
                  className="absolute top-8 right-8 w-4 h-4 bg-blue-400/60 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute bottom-8 left-8 w-3 h-3 bg-purple-400/60 rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
