"use client";

import { useEffect, useRef, useState } from "react";
import { FaPhone, FaFileInvoice } from "react-icons/fa";
import { ArrowUpToLine } from "lucide-react";
import { QuoteModal } from "./QuoteModal";

/**
 * GlobalOverlay
 * - Floating CTA cluster (desktop + mobile)
 * - Back-to-top button with smooth scroll + circular progress ring
 * - Respects prefers-reduced-motion for scrolling
 */
export default function GlobalOverlay() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  const phoneNumber = "+91 70223 86588";
  // const whatsappMessage = encodeURIComponent("Hello! I'm interested in Accelera Tech Solutions. Please share more details.");
  // const whatsappLink = `https://wa.me/12019845730?text=${whatsappMessage}`;

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const doc = document.documentElement;
          const scrollTop = window.scrollY || doc.scrollTop || 0;
          const scrollHeight = (doc.scrollHeight || 0) - window.innerHeight;
          const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

          setProgress(Math.min(100, Math.max(0, pct)));
          setShowTop(scrollTop > 240);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    onScroll(); // initialize on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const topEl = document.getElementById("top");
    if (topEl) {
      topEl.tabIndex = -1;
      topEl.focus({ preventScroll: true });
    }

    if (prefersReduced) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[60]">
        {/* Desktop vertical cluster (right center) */}
        <div className="pointer-events-auto fixed right-4 xl:right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 xl:gap-4 lg:flex">
          {/* Quote (modal) */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Get a quote"
            className="group inline-flex items-center justify-center rounded-full border border-white/15 bg-gradient-to-r from-pink-600 to-pink-600 p-3 text-white shadow-lg outline-none transition-all duration-300 hover:from-purple-700 hover:to-pink-700 focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <FaFileInvoice className="text-lg" />
          </button>

          {/* Phone */}
          <a
            href={`tel:${phoneNumber}`}
            aria-label="Call us"
            className="group inline-flex items-center justify-center rounded-full border border-white/15 bg-blue-600 p-3 text-white shadow-lg outline-none transition-all duration-300 hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <FaPhone className="text-lg" />
          </a>
        </div>

        {/* Mobile sticky bar (bottom center) */}
        <div className="pointer-events-auto fixed bottom-3 left-1/2 z-[61] -translate-x-1/2 rounded-full border border-black/10 bg-white/95 px-2 py-2 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/75 lg:hidden">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen(true)}
              aria-label="Get a quote"
              className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-xs font-semibold text-white shadow hover:from-purple-700 hover:to-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
            >
              <FaFileInvoice className="text-sm" />
              <span>Get a Quote</span>
            </button>

            <a
              href={`tel:${phoneNumber}`}
              aria-label="Call us"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 p-2 text-white shadow hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
            >
              <FaPhone className="text-base" />
            </a>
          </div>
        </div>

        {/* Back to Top with Enhanced Progress Ring (all viewports) */}
        <div className="pointer-events-auto fixed bottom-4 right-4 z-[62]">
          <div className="relative">
            {/* Enhanced Progress Ring */}
            <svg
              className={`absolute inset-0 h-12 w-12 -rotate-90 transition-all duration-300 ${
                showTop ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              viewBox="0 0 40 40"
              aria-hidden="true"
            >
              {/* Background ring */}
              <circle
                className="stroke-white/15"
                strokeWidth="3"
                fill="none"
                cx="20"
                cy="20"
                r="18"
              />
              {/* Progress ring with gradient */}
              <circle
                className="transition-all duration-300 ease-out"
                stroke="url(#progress-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                cx="20"
                cy="20"
                r="18"
                strokeDasharray="113.097" // 2 * π * 18
                strokeDashoffset={113.097 - (progress * 113.097) / 100}
                style={{
                  filter: "drop-shadow(0 0 4px rgba(249, 115, 22, 0.4))",
                }}
              />
              {/* Gradient definition */}
              <defs>
                <linearGradient
                  id="progress-gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#ea580c" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
              </defs>
            </svg>

            {/* Enhanced Button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className={`group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white shadow-xl backdrop-blur transition-all duration-500 ease-out hover:bg-black/90 hover:scale-110 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60 active:scale-95 ${
                showTop
                  ? "opacity-100 translate-y-0 scale-100"
                  : "pointer-events-none translate-y-6 opacity-0 scale-90"
              }`}
              style={{
                boxShadow: showTop
                  ? "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                  : undefined,
              }}
            >
              <ArrowUpToLine className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-active:translate-y-0" />

              {/* Rounded progress bar around the arrow */}
              <div className="absolute inset-0 rounded-full">
                <svg
                  className="h-full w-full -rotate-90"
                  viewBox="0 0 40 40"
                  aria-hidden="true"
                >
                  {/* Background circle */}
                  <circle
                    className="stroke-white/20"
                    strokeWidth="2"
                    fill="none"
                    cx="20"
                    cy="20"
                    r="16"
                  />
                  {/* Progress circle */}
                  <circle
                    className="transition-all duration-300 ease-out stroke-purple-400"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    cx="20"
                    cy="20"
                    r="16"
                    strokeDasharray="100.531" // 2 * π * 16
                    strokeDashoffset={100.531 - (progress * 100.531) / 100}
                    style={{
                      filter: "drop-shadow(0 0 2px rgba(249, 115, 22, 0.3))",
                    }}
                  />
                </svg>
              </div>

              {/* Enhanced shimmer effect on hover */}
              <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full animate-shimmer" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <QuoteModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={() => {}}
      />

      {/* Enhanced shimmer keyframes and additional styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        /* Additional glow effect for progress ring */
        @keyframes glow {
          0%,
          100% {
            filter: drop-shadow(0 0 4px rgba(249, 115, 22, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 8px rgba(249, 115, 22, 0.6));
          }
        }

        /* Pulse animation for the percentage indicator */
        @keyframes pulse-subtle {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </>
  );
}
