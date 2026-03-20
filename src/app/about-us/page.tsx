"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// If you already have these in your project, keep the imports.
// Otherwise, replace/remove as needed.
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuoteModal } from "@/components/QuoteModal";
import { AnimatedGradientTextDemo } from "@/components/animatedtext";

// Reuse your existing hero images to keep the brand vibe consistent.
import CursorImage from "@/assets/images/website.png";
import MessageImage from "@/assets/images/mobile.png";

export default function AboutPage() {
  const [open, setOpen] = useState(false);

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <Navbar />
      <main className="relative isolate overflow-hidden bg-black text-white">
        {/* Top gradient background echoing the Hero section */}
        <section
          className="relative isolate overflow-hidden
                     bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]
                     pt-16 sm:pt-24 pb-20"
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-[100%] border border-[#B48CDE]
                       bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)]
                       w-[90vw] h-[46vh]
                       sm:w-[96vw] sm:h-[60vh]
                       lg:w-[1400px] lg:h-[720px]
                       xl:w-[1800px] xl:h-[820px]
                       2xl:w-[2200px] 2xl:h-[880px]
                       top-[calc(100%-88px)] sm:top-[calc(100%-120px)]
          "
          />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center -mt-6 sm:-mt-10">
              <AnimatedGradientTextDemo />
            </div>

            <div className="mt-6 sm:mt-8 flex justify-center">
              <div className="relative inline-flex">
                <motion.h1
                  {...fadeUp}
                  className="text-center font-bold tracking-tightner
                             text-[10.5vw] leading-[0.95]
                             sm:text-6xl sm:leading-[1]
                             md:text-7xl lg:text-8xl"
                >
                  About <br /> Accelera Tech Solutions
                </motion.h1>

                {/* Floating brand images, draggable like in Hero */}
                <motion.div
                  className="absolute hidden sm:block sm:-right-6 sm:top-24 md:-right-10 md:top-16 lg:-right-16 lg:top-12 xl:-right-24 xl:top-10"
                  drag
                  dragSnapToOrigin
                  whileHover={{ scale: 1.04 }}
                >
                  <Image
                    src={CursorImage}
                    alt="Cursor graphic"
                    height={200}
                    width={200}
                    className="max-w-none select-none"
                    draggable={false}
                    priority
                  />
                </motion.div>
                <motion.div
                  className="absolute hidden sm:block sm:-left-8 sm:-top-6 md:-left-12 md:-top-8 lg:-left-16 lg:-top-10 xl:-left-24 xl:-top-12"
                  drag
                  dragSnapToOrigin
                  whileHover={{ scale: 1.04 }}
                >
                  <Image
                    src={MessageImage}
                    alt="Message graphic"
                    height={200}
                    width={200}
                    className="max-w-none select-none"
                    draggable={false}
                    priority
                  />
                </motion.div>
              </div>
            </div>

            <motion.p
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 sm:mt-8 mx-auto max-w-3xl text-center text-base sm:text-lg md:text-xl text-white/90"
            >
              We’re a product-minded engineering partner that ships modern web,
              mobile, and cloud solutions with speed and reliability. From
              discovery to launch and beyond, our team blends strategy, design,
              and development to accelerate your business outcomes.
            </motion.p>

            <div className="mt-8 sm:mt-10 flex justify-center gap-3">
              <button
                onClick={() => setOpen(true)}
                className="bg-white text-black py-3 px-5 rounded-lg font-medium hover:bg-white/90"
              >
                Get a Quote
              </button>
              <Link
                href="/contact"
                className="bg-transparent border border-white/30 py-3 px-5 rounded-lg font-medium hover:border-white/60"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div {...fadeUp} className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Our Story</h2>
              <p className="text-white/80 text-lg">
                Accelera Tech Solutions started with a simple idea: build tech
                that actually moves the needle. We’re obsessed with outcomes,
                not just outputs. Over the years, we’ve helped startups validate
                and scale, and we’ve modernized stacks for established
                enterprises—always with an eye on performance, security, and
                maintainability.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { k: "50+", v: "Projects Delivered" },
                  { k: "15+", v: "SaaS & Apps Launched" },
                  { k: "24/7", v: "Priority Support" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-5"
                  >
                    <div className="text-3xl font-bold">{s.k}</div>
                    <div className="text-white/70 text-sm mt-1">{s.v}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold mb-4">What We Do</h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-white/85">
                {[
                  "Custom Web Development",
                  "Mobile App Development",
                  "AI & Automation",
                  "API Design & Integrations",
                  "UI/UX Design Systems",
                  "Cloud & DevOps",
                  "E‑commerce & Headless CMS",
                  "Product Discovery & Prototyping",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-black/30 border border-white/10 px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-gradient-to-b from-black to-gray-900 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">
              Our Core Values
            </h2>
            <p className="text-white/70 text-center max-w-2xl mx-auto mt-3">
              The principles we bring to every engagement—big or small.
            </p>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Outcome‑Driven",
                  desc: "We ship with purpose. Every sprint ties back to measurable business goals.",
                },
                {
                  title: "Craft & Clarity",
                  desc: "Clean architecture, readable code, and thoughtful UX are non‑negotiable.",
                },
                {
                  title: "Speed with Safety",
                  desc: "Rapid delivery powered by CI/CD, testing, and secure defaults.",
                },
                {
                  title: "Ownership",
                  desc: "We act like partners, not vendors—proactive, transparent, accountable.",
                },
                {
                  title: "Long‑Term Thinking",
                  desc: "We build maintainable systems that are easy to scale and evolve.",
                },
                {
                  title: "Delight",
                  desc: "We sweat the details to create interfaces people love to use.",
                },
              ].map((v) => (
                <motion.div
                  key={v.title}
                  whileHover={{ y: -4 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="text-white/70 mt-2">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline / Milestones */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">
            Milestones
          </h2>
          <div className="mt-10 relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-white/10" />
            {[
              {
                year: "2021",
                title: "Founded",
                desc: "Started as a small crew focused on modern web apps and APIs.",
              },
              {
                year: "2022",
                title: "Mobile & Cloud",
                desc: "Expanded into React Native and cloud‑native deployments.",
              },
              {
                year: "2023",
                title: "AI Integrations",
                desc: "Shipped automation and GPT‑powered workflows for clients.",
              },
              {
                year: "2024‑25",
                title: "Scale",
                desc: "Grew our partner network and delivered enterprise rollouts.",
              },
            ].map((m, idx) => (
              <motion.div
                key={m.year}
                {...fadeUp}
                transition={{ delay: idx * 0.05 }}
                className={`relative grid md:grid-cols-2 gap-6 items-start py-8`}
              >
                <div
                  className={`md:text-right ${
                    idx % 2 === 0 ? "md:pr-10" : "md:order-2 md:pl-10"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 text-sm text-white/60">
                    <span className="h-2 w-2 rounded-full bg-violet-400" />
                    {m.year}
                  </div>
                  <h3 className="text-xl font-semibold mt-2">{m.title}</h3>
                </div>
                <div
                  className={`${
                    idx % 2 === 0 ? "md:pl-10" : "md:order-1 md:pr-10"
                  } text-white/75`}
                >
                  {m.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team (lightweight, optional avatars) */}
        <section className="bg-gradient-to-b from-gray-900 to-black py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">
              Leadership
            </h2>
            <p className="text-white/70 text-center max-w-2xl mx-auto mt-3">
              A small, senior team with experience across design, engineering,
              and product.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  profile: "https://avatar.iran.liara.run/public/5",
                  name: "Akash Suchitha",
                  role: "Founder & Solutions Lead",
                },
                {
                  profile: "https://avatar.iran.liara.run/public/6",
                  name: "Azad",
                  role: "Design Director",
                },
                {
                  profile: "https://avatar.iran.liara.run/public/7",
                  name: "Charanraj",
                  role: "Engineering Lead",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6"
                >
                  <div className="flex items-center">
                    <img
                      src={t.profile}
                      alt={t.name}
                      className="h-14 w-14 rounded-full bg-white/10"
                    />
                  </div>
                  <div className="mt-4 font-semibold">{t.name}</div>
                  <div className="text-white/60 text-sm">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech / Logos (placeholder row) */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold">Our Stack</h3>
            <p className="text-white/70 mt-2">
              We specialize in TypeScript, Next.js, React Native, Node.js,
              PostgreSQL, Prisma, Tailwind, AWS, Docker, and modern CI/CD. We’re
              happy to integrate with your existing systems and tools.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 opacity-90">
              {["Next.js", "React", "Node.js", "Postgres", "AWS", "Docker"].map(
                (logo) => (
                  <div
                    key={logo}
                    className="rounded-lg bg-black/30 border border-white/10 px-3 py-2 text-center text-sm"
                  >
                    {logo}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative isolate overflow-hidden py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to build something great?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mt-3">
              Tell us about your goals and we’ll propose a pragmatic path to
              launch.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => setOpen(true)}
                className="bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-white/90"
              >
                Get a Quote
              </button>
              <Link
                href="/contact"
                className="bg-transparent border border-white/30 py-3 px-6 rounded-lg font-medium hover:border-white/60"
              >
                Contact
              </Link>
            </div>
          </div>
        </section>
      </main>

      <QuoteModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={() => {}}
      />
      <Footer />
    </>
  );
}
