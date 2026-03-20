"use client";
import { useEffect, useState } from "react";
import { QuoteModal } from "./QuoteModal";

type Card = {
  title: string;
  blurb: string;
  highlights: string[];
  defaultType?: string;
  badge?: string;
};

const CARDS: Card[] = [
  {
    title: "Launch Essentials",
    blurb:
      "Perfect for kickstarting your online presence with a clean, fast, conversion-ready site.",
    highlights: [
      "Modern responsive website (up to 5 pages)",
      "SEO-ready structure & analytics setup",
      "Contact form & lead capture",
      "Basic brand kit integration",
      "Performance & accessibility pass",
    ],
    defaultType: "Website",
  },
  {
    title: "Growth Suite",
    blurb:
      "Apps, e-commerce, or custom workflows—built for scale with robust architecture.",
    highlights: [
      "Web / Mobile App or E-commerce",
      "API / Backend with best practices",
      "Auth, roles & dashboard",
      "Automations & integrations",
      "Monitoring & deployment pipeline",
    ],
    defaultType: "Custom Software / Any Tech",
    badge: "Most Popular",
  },
  {
    title: "Creative Studio",
    blurb:
      "End-to-end creative—brand, logo, video edits, photo touch-ups, and content packs.",
    highlights: [
      "Logo & brand system",
      "Social kits & templates",
      "Video editing (shorts/ads/reels)",
      "Photo editing & retouching",
      "Delivery in web-ready formats",
    ],
    defaultType: "Branding / Logo",
  },
];

export const Pricing = () => {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState<string | undefined>(undefined);

  const handleQuoteClick = (type?: string) => {
    setPrefill(type);
    setOpen(true);
  };

  return (
    <section
      id="pricing"
      className="bg-black text-white bg-gradient-to-b from-black via-[#5D2CA8]/10 to-black py-16 sm:py-24"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-bold tracking-tighter text-4xl sm:text-5xl lg:text-6xl">
          One solution for all
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/70 text-base sm:text-lg">
          Websites, apps, e-commerce, custom tech, plus creative—video, photo,
          and logo. Tell us what you need and we’ll shape a plan around it.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="relative flex h-full flex-col rounded-2xl border border-white/20 bg-[#0b0b0f] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14)_inset] transition"
            >
              {c.badge && (
                <div className="absolute right-4 -top-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow">
                  {c.badge}
                </div>
              )}
              <h3 className="text-xl sm:text-2xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-white/70">
                {c.blurb}
              </p>

              <div className="mt-5 space-y-3 text-sm text-white/80">
                {c.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2">
                    <svg
                      className="mt-1 h-3 w-3 shrink-0 fill-emerald-500"
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex-1" />

              {/* No prices. CTA opens modal */}
              <button
                onClick={() => handleQuoteClick(c.defaultType)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[#5D2CA8] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#4b26a0] focus:outline-none focus:ring-2 focus:ring-[#5D2CA8]/40"
              >
                Get a Quote
              </button>
            </div>
          ))}
        </div>

        {/* Secondary CTA under cards */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => handleQuoteClick(undefined)}
            className="rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Not sure what to pick? Talk to us
          </button>
        </div>
      </div>

      {/* Reusable modal */}
      <QuoteModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={() => {}}
        defaultType={prefill}
      />
    </section>
  );
};
