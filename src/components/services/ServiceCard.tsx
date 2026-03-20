"use client";
import React, { useState } from "react";

export type Service = {
  title: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
  hoverGradient: string;
};

export const ServiceCard = ({ service }: { service: Service }) => {
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
        {/* Icon */}
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
          {service.features.map((feature, idx) => (
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
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000 transform group-hover:translate-x-2 group-hover:-translate-y-2" />
        <div className="absolute bottom-8 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-1200 transform group-hover:-translate-x-1 group-hover:translate-y-1" />
      </div>
    </div>
  );
};
