"use client";
import { useEffect, useState } from "react";
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { OurExpertise } from "@/components/ourexpertise";
import Services from "@/components/Services";
import { LazyLoader } from "@/components/LazyLoader";
import {
  TestimonialSkeleton,
  FAQSkeleton,
  PricingCardSkeleton,
} from "@/components/Skeleton";
import { QuoteModal } from "@/components/QuoteModal";
import { ToastContainer } from "react-toastify";
import GlobalOverlay from "@/components/GlobalOverlay";
import Lenis from "@studio-freight/lenis";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";

// Only lazy load the heaviest components
const Pricing = dynamic(
  () =>
    import("@/components/Pricingdemo").then((mod) => ({
      default: mod.Pricing,
    })),
  {
    ssr: false,
    loading: () => (
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="h-12 w-64 mx-auto mb-16 bg-gray-800 rounded animate-pulse" />
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <PricingCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    ),
  }
);

const Testimonials = dynamic(
  () =>
    import("@/components/testimonials").then((mod) => ({
      default: mod.Testimonials,
    })),
  {
    ssr: false,
    loading: () => (
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="h-12 w-80 mx-auto mb-16 bg-gray-800 rounded animate-pulse" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <TestimonialSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    ),
  }
);

const ShowcaseWebsite = dynamic(
  () =>
    import("@/components/showcasewebsite").then((mod) => ({
      default: mod.ShowcaseWebsite,
    })),
  {
    ssr: false,
  }
);

const FAQs = dynamic(
  () => import("@/components/FAQs").then((mod) => ({ default: mod.FAQs })),
  {
    ssr: false,
    loading: () => (
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="h-12 w-80 mx-auto mb-16 bg-gray-800 rounded animate-pulse" />
          <div className="max-w-3xl mx-auto space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <FAQSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    ),
  }
);

export default function Home() {
  const [open, setOpen] = useState(false);
  const [lenisInitialized, setLenisInitialized] = useState(false);

  // Auto open modal after 5s on every page load
  useEffect(() => {
    const t = setTimeout(() => {
      setOpen(true);
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  // Initialize Lenis with optimization
  useEffect(() => {
    let lenis: Lenis | null = null;

    const initLenis = () => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        touchMultiplier: 2,
      });

      function raf(time: number) {
        if (lenis) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
      }

      requestAnimationFrame(raf);
      setLenisInitialized(true);
    };

    // Delay Lenis initialization to improve initial load
    const timeout = setTimeout(initLenis, 100);

    return () => {
      clearTimeout(timeout);
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="overflow-x-hidden">
        <GlobalOverlay />
        {/* Critical above-the-fold content */}
        <Banner />
        <Navbar />
        <Hero />
        <LogoTicker />
        <Features />

        {/* Load Services directly - no lazy loading for critical content */}
        <Services />

        <OurExpertise />

        {/* Load ShowcaseWebsite directly */}
        <ShowcaseWebsite />
        <ProductShowcase />

        {/* Only lazy load the bottom components */}
        <FAQs />

        <LazyLoader rootMargin="400px">
          <Pricing />
        </LazyLoader>

        <LazyLoader rootMargin="400px">
          <Testimonials />
        </LazyLoader>

        <CallToAction />
      </div>

      <Footer />

      <QuoteModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={() => {}}
      />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
