"use client";
import React from "react";
import { ProjectCard, Project } from "@/components/projects/ProjectCard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const projects: Project[] = [
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

export default function WorksPage() {
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
              Our Works
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full" />
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Take a look at some of our recent work and see how we've helped
              businesses transform their digital presence with innovative
              solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 transform hover:scale-105 hover:rotate-1 shadow-2xl hover:shadow-blue-500/25"
            >
              Work With Us
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
