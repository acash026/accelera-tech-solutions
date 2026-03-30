"use client";

import { useState, useEffect, useRef } from "react";
import { QuoteModal } from "./QuoteModal";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

import CursorImage from "../assets/images/website.png";
import MessageImage from "../assets/images/mobile.png";
import { AnimatedGradientTextDemo } from "./animatedtext";

export const Hero = () => {
  const [open, setOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleQuoteClick = (type?: string) => {
    setOpen(true);
  };

  // Animated particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
    }> = [];

    const colors = ["#8B5CF6", "#A78BFA", "#C4B5FD", "#7C3AED", "#6D28D9", "#F472B6"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // Connect particles with lines
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 200)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-black text-white min-h-screen">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to bottom, #000000, #1a0b2e, #2d1b69, #1a0b2e)",
        }}
      />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-fuchsia-600/15 blur-[100px]"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient base */}
      <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-purple-900/30 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        {/* Top tag/animated text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-8"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2.5 text-sm text-white backdrop-blur-md transition-all hover:border-purple-500/50 hover:bg-purple-500/20 hover:scale-105"
          >
            <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
            <span className="bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent font-medium">
              Get Quote Now
            </span>
            <ArrowRight className="h-4 w-4 text-purple-400 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Headline + floating images */}
        <div className="flex justify-center mb-8">
          <div className="relative inline-flex">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center font-bold tracking-tighter text-[12vw] leading-[0.9] sm:text-7xl sm:leading-[1] md:text-8xl lg:text-9xl"
            >
              <span className="bg-gradient-to-b from-white via-purple-100 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                Accelera
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                Tech Solution
              </span>
            </motion.h1>

            {/* Cursor image with glow effect */}
            <motion.div
              className="absolute hidden sm:block sm:-right-6 sm:top-20 md:-right-10 md:top-16 lg:-right-16 lg:top-12 xl:-right-24 xl:top-10"
              drag
              dragSnapToOrigin
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/30 blur-2xl rounded-full" />
                <Image
                  src={CursorImage}
                  alt="cursor"
                  height={200}
                  width={200}
                  className="max-w-none select-none relative z-10 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                  draggable="false"
                  priority
                />
              </div>
            </motion.div>

            {/* Message image with glow effect */}
            <motion.div
              className="absolute hidden sm:block sm:-left-8 sm:-top-6 md:-left-12 md:-top-8 lg:-left-16 lg:-top-10 xl:-left-24 xl:-top-12"
              drag
              dragSnapToOrigin
              whileHover={{ scale: 1.1, rotate: -5 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-fuchsia-500/30 blur-2xl rounded-full" />
                <Image
                  src={MessageImage}
                  alt="message"
                  height={200}
                  width={200}
                  className="max-w-none select-none relative z-10 drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]"
                  draggable="false"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subcopy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-10"
        >
          <p className="max-w-2xl text-center text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
            We are a leading tech solution provider, dedicated to delivering
            innovative and efficient solutions for your business needs. Our team
            of experts is here to help you accelerate your success with
            cutting-edge technology and unparalleled support.
          </p>
        </motion.div>

        {/* CTA Button with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleQuoteClick()}
            className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <motion.div
              className="absolute inset-0 z-0 bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
        </motion.div>
      </div>

      <QuoteModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={() => {}}
      />
    </section>
  );
};