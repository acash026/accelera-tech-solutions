"use client";
import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricingdemo"; // <-- if you put the component in components/
// If you prefer this page to be fully self‑contained, paste your Pricing component code here
// and remove the import above.

import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white">
        {/* Hero: echoes your site’s gradient aesthetic */}
        <section
          className="relative isolate overflow-hidden
                     bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]
                     py-16 sm:py-24"
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-[100%] border border-[#B48CDE]
                       bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)]
                       w-[90vw] h-[46vh]
                       sm:w-[96vw] sm:h-[60vh]
                       lg:w-[1400px] lg:h-[720px]
                       xl:w-[1800px] xl:h-[820px]
                       2xl:w-[2200px] 2xl:h-[880px]
                       top-[calc(100%-88px)] sm:top-[calc(100%-120px)]"
          />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center font-bold tracking-tighter
                         text-[10.5vw] leading-[0.95]
                         sm:text-6xl sm:leading-[1]
                         md:text-7xl lg:text-8xl"
            >
              Simple Pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.6 }}
              className="mx-auto mt-6 max-w-2xl text-center text-white/85 text-base sm:text-lg"
            >
              One flexible engagement—customized for websites, apps, e‑commerce,
              and creative. No hidden fees. Start small and scale with
              confidence.
            </motion.p>
            <div className="mt-6 flex justify-center">
              <Link
                href="#pricing"
                className="rounded-lg bg-white px-5 py-3 font-medium text-black hover:bg-white/90"
              >
                Explore Plans
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Cards (your provided component) */}
        <Pricing />

        {/* Comparison snapshot */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-10">
          <div className="mt-14 rounded-2xl border border-white/10 bg-[#0b0b0f] p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              What’s included at a glance
            </h2>
            <p className="text-white/70 mt-2 text-sm sm:text-base">
              A quick side‑by‑side so you can pick with confidence.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-white/10 text-white/70">
                    <th className="py-3 pr-4">Feature</th>
                    <th className="py-3 pr-4">Launch Essentials</th>
                    <th className="py-3 pr-4">Growth Suite</th>
                    <th className="py-3">Creative Studio</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  {[
                    ["Delivery Speed", "2–4 weeks", "4–10 weeks", "1–2 weeks"],
                    [
                      "Scope",
                      "Website (≤5 pages)",
                      "Web/Mobile app or e‑com",
                      "Brand + content",
                    ],
                    ["Backend/API", "—", "Included", "—"],
                    ["Auth & Roles", "—", "Included", "—"],
                    ["Automations/Integrations", "Basic", "Advanced", "—"],
                    ["Design System", "Light", "Product‑grade", "Brand system"],
                    ["Analytics & SEO", "Included", "Included", "—"],
                    ["Support", "30 days", "90 days", "30 days"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-white/5">
                      <td className="py-3 pr-4 text-white/90">{row[0]}</td>
                      <td className="py-3 pr-4 text-white/80">{row[1]}</td>
                      <td className="py-3 pr-4 text-white/80">{row[2]}</td>
                      <td className="py-3 text-white/80">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-sm text-white/60">
              * Timelines are estimates and depend on finalized scope.
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-gradient-to-b from-black to-gray-900 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">
              Pricing FAQs
            </h2>
            <p className="text-white/70 text-center max-w-2xl mx-auto mt-3">
              Quick answers about scope, billing, and how we work.
            </p>
            <div className="mx-auto mt-8 max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#0b0b0f]">
              {[
                {
                  q: "Do you offer fixed quotes or hourly billing?",
                  a: "We prefer fixed‑scope quotes for predictability. For evolving products, we can run monthly retainers with clear deliverables.",
                },
                {
                  q: "What if I need something custom beyond the cards?",
                  a: "No problem. Use ‘Get a Quote’ and tell us your goals. We’ll shape a plan with scope options and an exact price.",
                },
                {
                  q: "Can you migrate my existing site or app?",
                  a: "Yes. We handle audits, migrations, and refactors. We’ll propose a safe, staged plan to minimize downtime.",
                },
                {
                  q: "Do you provide ongoing support?",
                  a: "All plans include launch support. We also offer SLA‑backed support and feature retainers.",
                },
              ].map((f, i) => (
                <details key={f.q} className="group open:bg-white/5 px-6 py-5">
                  <summary className="cursor-pointer list-none text-lg font-medium">
                    <span className="mr-2 text-white/90">{f.q}</span>
                  </summary>
                  <p className="mt-2 text-white/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Not sure where to start?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mt-3">
              Book a quick discovery call—we’ll map the fastest path to real
              impact.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-6 py-3 font-medium text-black hover:bg-white/90"
              >
                Talk to Us
              </Link>
              <Link
                href="#pricing"
                className="rounded-lg border border-white/30 px-6 py-3 font-medium text-white hover:border-white/60"
              >
                View Plans
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
