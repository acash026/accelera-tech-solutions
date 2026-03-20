"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import EnhancedTestimonials from "@/components/ui/google-reviews";

export default function TestimonialsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/40 to-blue-950/30 overflow-hidden">
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
              Testimonials
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full" />
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Hear what our clients have to say about their experience working
              with us and how we've helped transform their business.
            </p>
          </div>

          {/* Testimonials Component */}
          <section className="relative z-10">
            <EnhancedTestimonials />
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
