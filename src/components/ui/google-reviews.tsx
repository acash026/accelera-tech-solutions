"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Star, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

type Review = {
  name: string;
  rating: number;
  text: string;
  timeAgo: string;
  avatar: string;
  position?: string;
  company?: string;
};

const AVG_RATING = 4.8;
const REVIEW_COUNT = 140;

const REVIEWS: Review[] = [
  {
    name: "Amit Verma",
    rating: 5,
    text: "Super quick delivery and very professional. They understood my brief in one call and shipped a clean build that exceeded expectations.",
    timeAgo: "a week ago",
    avatar: "https://avatar.iran.liara.run/public/5",
    position: "CTO",
    company: "TechStart Inc",
  },
  {
    name: "Samantha Lee",
    rating: 5,
    text: "Loved the communication and weekly updates. Our site loads fast and conversions are up 40% already. Best investment we made.",
    timeAgo: "2 weeks ago",
    avatar: "https://avatar.iran.liara.run/public/65",
    position: "Marketing Director",
    company: "GrowthCorp",
  },
  {
    name: "Rahul Mehta",
    rating: 4,
    text: "Great team with excellent technical skills. Minor delays on a UI tweak, but the final result is outstanding. Would definitely recommend.",
    timeAgo: "3 weeks ago",
    avatar: "https://avatar.iran.liara.run/public/46",
    position: "Product Manager",
    company: "InnovateLabs",
  },
  {
    name: "Emily Carter",
    rating: 5,
    text: "Pixel-perfect mobile app with smooth animations. The handoff was seamless and documentation was crystal clear. Exactly what we needed.",
    timeAgo: "4 days ago",
    avatar: "https://avatar.iran.liara.run/public/68",
    position: "Founder",
    company: "AppVenture",
  },
  {
    name: "Zoya Khan",
    rating: 5,
    text: "They set up analytics and conversion funnels that finally make sense. We can see exactly where our revenue is coming from now.",
    timeAgo: "a month ago",
    avatar: "https://avatar.iran.liara.run/public/79",
    position: "Growth Lead",
    company: "DataDriven",
  },
  {
    name: "Chris Morales",
    rating: 5,
    text: "Clean, maintainable code with great design sense. They hit our tight deadline without compromising quality. Couldn't ask for more.",
    timeAgo: "5 days ago",
    avatar: "https://avatar.iran.liara.run/public/29",
    position: "Lead Developer",
    company: "CodeCraft",
  },
  {
    name: "Ishita Roy",
    rating: 5,
    text: "Outstanding support throughout the project. Small change requests were handled the same day. Truly professional team.",
    timeAgo: "2 days ago",
    avatar: "https://avatar.iran.liara.run/public/12",
    position: "Operations Manager",
    company: "ServicePro",
  },
  {
    name: "Daniel Kim",
    rating: 4.5,
    text: "Solid experience from start to finish. The strategy session helped clarify scope and saved us significant development hours.",
    timeAgo: "3 days ago",
    avatar: "https://avatar.iran.liara.run/public/9",
    position: "VP Engineering",
    company: "ScaleUp",
  },
];

function StarRating({
  value,
  size = "sm",
}: {
  value: number;
  size?: "sm" | "md";
}) {
  const starSize = size === "md" ? "h-5 w-5" : "h-4 w-4";

  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const starValue = i + 1;
        const isFilled = value >= starValue;
        const isPartial = value > i && value < starValue;

        if (isFilled) {
          return (
            <Star
              key={i}
              className={`${starSize} fill-yellow-400 text-yellow-400 drop-shadow-sm`}
            />
          );
        } else if (isPartial) {
          const fillPercentage = (value - i) * 100;
          return (
            <div key={i} className="relative">
              <Star className={`${starSize} text-neutral-600`} />
              <div
                className="absolute top-0 left-0 overflow-hidden"
                style={{ width: `${fillPercentage}%` }}
              >
                <Star
                  className={`${starSize} fill-yellow-400 text-yellow-400 drop-shadow-sm`}
                />
              </div>
            </div>
          );
        } else {
          return <Star key={i} className={`${starSize} text-neutral-600`} />;
        }
      })}
    </div>
  );
}

function ReviewCard({
  review,
  isActive = false,
}: {
  review: Review;
  isActive?: boolean;
}) {
  return (
    <div
      className={`
      w-full max-w-[300px] sm:max-w-[320px] lg:max-w-[380px] rounded-2xl sm:rounded-3xl border transition-all duration-500 p-4 sm:p-6
      ${
        isActive
          ? "border-white/20 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl scale-105 z-10"
          : "border-white/8 bg-white/4 hover:bg-white/6 hover:border-white/12"
      }
      backdrop-blur-lg relative overflow-hidden group
    `}
    >
      {/* Subtle glow effect for active card */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-2xl sm:rounded-3xl" />
      )}

      <div className="relative z-10">
        {/* Header with avatar and info */}
        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="relative flex-shrink-0">
            <img
              src={review.avatar}
              alt={review.name}
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-white/10 shadow-lg"
              draggable={false}
            />
            <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 h-3 w-3 sm:h-4 sm:w-4 bg-green-500 rounded-full border-2 border-black shadow-sm" />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-white font-semibold text-sm leading-tight truncate">
              {review.name}
            </h4>
            {review.position && review.company && (
              <p className="text-white/60 text-xs mt-0.5 truncate">
                {review.position} at {review.company}
              </p>
            )}
            <div className="flex items-center gap-2 sm:gap-3 mt-2">
              <StarRating value={review.rating} />
              <span className="text-xs text-white/50">{review.timeAgo}</span>
            </div>
          </div>
        </div>

        {/* Review text */}
        <blockquote className="text-white/85 text-sm leading-relaxed relative mb-3 sm:mb-4">
          <span className="text-white/30 text-xl sm:text-2xl absolute -top-1 sm:-top-2 -left-1 font-serif">
            "
          </span>
          <p className="relative z-10 pl-3 sm:pl-4">{review.text}</p>
        </blockquote>

        {/* Verified badge */}
        <div className="flex items-center gap-2 pt-2 sm:pt-3 border-t border-white/5">
          <div className="h-2 w-2 bg-green-400 rounded-full shadow-sm shadow-green-400/50 flex-shrink-0" />
          <span className="text-xs text-white/40 font-medium">
            Verified Google Review
          </span>
        </div>
      </div>
    </div>
  );
}

export default function EnhancedTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlay || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isPaused]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };

  // Get visible reviews (current and adjacent ones)
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + REVIEWS.length) % REVIEWS.length;
      visible.push({ review: REVIEWS[index], index, offset: i });
    }
    return visible;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/50 to-blue-900/30 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Google Rating Badge */}
          <div className="inline-flex items-center flex-wrap justify-center gap-2 sm:gap-3 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <StarRating value={AVG_RATING} size="md" />
              <span className="font-semibold text-white text-sm sm:text-base hidden sm:inline">
                Google Reviews
              </span>
              <span className="font-semibold text-white text-sm sm:hidden">
                Reviews
              </span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/20" />
            <span className="font-bold text-white text-base sm:text-lg">
              {AVG_RATING}
            </span>
            <span className="text-white/60 text-sm sm:text-base">
              ({REVIEW_COUNT})
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
            Loved by{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              founders
            </span>
            <br />&{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              teams
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed px-4">
            Real feedback from clients who've transformed their businesses with
            <span className="text-white font-semibold">
              {" "}
              Accelera Tech Solutions
            </span>
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-12 px-4">
          <button
            onClick={prevReview}
            className="group p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-white transition-colors" />
          </button>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Dot indicators */}
            <div className="flex gap-1.5 sm:gap-2">
              {REVIEWS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 sm:w-8 bg-white"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            {/* Play/Pause button */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 backdrop-blur-sm"
              aria-label={isAutoPlay ? "Pause autoplay" : "Start autoplay"}
            >
              {isAutoPlay ? (
                <Pause className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              ) : (
                <Play className="h-3 w-3 sm:h-4 sm:w-4 text-white ml-0.5" />
              )}
            </button>
          </div>

          <button
            onClick={nextReview}
            className="group p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Testimonials Display */}
        <div
          className="relative flex justify-center items-center px-2 sm:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Mobile: Single card view */}
          <div className="block md:hidden w-full max-w-sm mx-auto">
            <ReviewCard review={REVIEWS[currentIndex]} isActive={true} />
          </div>

          {/* Desktop: Multi-card carousel */}
          <div className="hidden md:flex items-center justify-center gap-4 lg:gap-6 w-full max-w-6xl">
            {visibleReviews.map(({ review, index, offset }) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-in-out ${
                  offset === 0 ? "z-20" : "z-10"
                } ${
                  offset === -1
                    ? "opacity-40 scale-90 -translate-x-2 lg:-translate-x-4"
                    : offset === 1
                    ? "opacity-40 scale-90 translate-x-2 lg:translate-x-4"
                    : "opacity-100 scale-100"
                }`}
                style={{
                  transform: `translateX(${offset * 15}px) scale(${
                    offset === 0 ? 1 : 0.9
                  })`,
                }}
              >
                <ReviewCard review={review} isActive={offset === 0} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mt-12 sm:mt-16 px-4">
          <div className="text-center px-4 sm:px-6 py-3 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-xl sm:text-2xl font-bold text-white">
              {REVIEW_COUNT}+
            </div>
            <div className="text-xs sm:text-sm text-white/60">
              Happy Clients
            </div>
          </div>
          <div className="text-center px-4 sm:px-6 py-3 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-xl sm:text-2xl font-bold text-white">
              {AVG_RATING}
            </div>
            <div className="text-xs sm:text-sm text-white/60">
              Average Rating
            </div>
          </div>
          <div className="text-center px-4 sm:px-6 py-3 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-xl sm:text-2xl font-bold text-white">98%</div>
            <div className="text-xs sm:text-sm text-white/60">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}
