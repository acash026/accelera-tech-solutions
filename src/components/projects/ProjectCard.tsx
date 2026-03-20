"use client";
import React from "react";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  category: string;
  liveUrl: string;
  status: "Live" | "Beta" | string;
};

export const ProjectCard = ({ project }: { project: Project }) => {
  const handleViewProject = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="group relative overflow-hidden cursor-pointer"
      onClick={handleViewProject}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90 backdrop-blur-xl rounded-3xl transform transition-all duration-700 group-hover:scale-[1.02]" />

      {/* Dynamic Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-blue-500/20 blur-xl transition-all duration-700" />

      <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 group-hover:border-gray-600/70 transition-all duration-500">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transform transition-all duration-700 group-hover:scale-110"
          />

          {/* Overlay CTA */}
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

          {/* Status */}
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
            {project.tech.map((t, idx) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 bg-gray-800/80 text-gray-200 rounded-lg border border-gray-700/50 font-medium hover:bg-gray-700/80 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {t}
              </span>
            ))}
          </div>

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

        {/* Hover indicator */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};
