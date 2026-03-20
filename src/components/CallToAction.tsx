"use client";
import HelixImage from "../assets/images/contactus.png";
import EmojiImage from "../assets/images/getquote.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import type { QuoteData } from "./QuoteModal"; // or wherever you export it
import { QuoteModal } from "./QuoteModal";

interface SubscriptionResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  // When the modal submits, reuse the SAME email route:
  // Sends only the email so your /api/subscribe flow remains unchanged
  const handleQuoteSubmit = async (data: QuoteData) => {
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });
      const json: SubscriptionResponse = await res.json();
      if (res.ok && json.success) {
        setStatus({
          type: "success",
          message:
            json.message ||
            "Successfully subscribed! Check your email for confirmation.",
        });
      } else {
        setStatus({
          type: "error",
          message: json.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="bg-black text-white py-[72px] sm:py-24 relative overflow-hidden"
      ref={containerRef}
    >
      <div className="container max-w-xl relative mx-auto px-4">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 blur-3xl"></div>

        <motion.div style={{ translateY }}>
          <Image
            src={HelixImage}
            alt="helix"
            className="absolute top-6 left-[calc(100%+36px)] w-72 h-72"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={EmojiImage}
            alt="emoji"
            className="absolute -top-[120px] right-[calc(100%+30px)] w-52 h-72"
          />
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tighter text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
              Get Instant Access
            </h2>
          </motion.div>

          <motion.p
            className="text-xl text-white/70 mt-5 text-center max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of users who are already experiencing the future. Get
            started today and unlock premium features instantly.
          </motion.p>

          {/* Replace inline form with button that opens the modal */}
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              type="button"
              onClick={() => setModalOpen(true)}
              disabled={isSubmitting}
              className="bg-white text-black h-12 rounded-lg px-8 font-semibold hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Get Access
            </motion.button>
          </motion.div>

          {/* Status Messages */}
          {status.type && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-3 rounded-lg text-center max-w-sm mx-auto ${
                status.type === "success"
                  ? "bg-green-500/20 border border-green-500/40 text-green-400"
                  : "bg-red-500/20 border border-red-500/40 text-red-400"
              }`}
            >
              {status.message}
            </motion.div>
          )}

          <motion.p
            className="text-sm text-white/50 text-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            No spam, unsubscribe at any time.
          </motion.p>
        </div>
      </div>

      {/* Modal lives at root so it overlays properly */}
      <QuoteModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleQuoteSubmit}
        defaultType="Website Development"
      />
    </div>
  );
};
