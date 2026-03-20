"use client";
import { useState } from "react";
import { QuoteModal } from "./QuoteModal";
import Image from "next/image";
import { motion } from "framer-motion";

import CursorImage from "../assets/images/website.png";
import MessageImage from "../assets/images/mobile.png";
import ArrowIcon from "../assets/icons/arrow-w.svg"; // (kept import in case you use it)
import { AnimatedGradientTextDemo } from "./animatedtext";

export const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleQuoteClick = (type?: string) => {
    setOpen(true);
  };
  return (
    <section
      className="relative isolate overflow-hidden bg-black text-white
                 bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]
                 py-16 sm:py-24"
    >
      {/* radial/ellipse base — responsive width/height so it doesn’t collide on phones */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 rounded-[100%] border border-[#B48CDE]
          bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)]
          w-[90vw] h-[46vh]
          sm:w-[96vw] sm:h-[60vh]
          lg:w-[1400px] lg:h-[720px]
          xl:w-[1800px] xl:h-[820px]
          2xl:w-[2200px] 2xl:h-[880px]
          top-[calc(100%-88px)] sm:top-[calc(100%-120px)]
        "
      />

      <div className="container relative px-4 sm:px-6 lg:px-8">
        {/* Top tag/animated text */}
        <div className="flex items-center justify-center -mt-6 sm:-mt-10">
          <AnimatedGradientTextDemo />
        </div>

        {/* Headline + floating images */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="relative inline-flex">
            <h1
              className="
                text-center font-bold tracking-tightner
                text-[11vw] leading-[0.95]  /* mobile fluid size */
                sm:text-7xl sm:leading-[1]
                md:text-8xl
                lg:text-9xl
              "
            >
              Accelera <br /> Tech Solution
            </h1>

            {/* Cursor image (right side) — hidden on phones, responsive offsets on larger screens */}
            <motion.div
              className="
                absolute hidden sm:block
                /* position tuned per breakpoint to avoid overlap with h1 */
                sm:-right-6  sm:top-24
                md:-right-10 md:top-16
                lg:-right-16 lg:top-12
                xl:-right-24 xl:top-10
              "
              drag
              dragSnapToOrigin
            >
              <Image
                src={CursorImage}
                alt="cursor"
                height={200}
                width={200}
                className="max-w-none select-none"
                draggable="false"
                priority
              />
            </motion.div>

            {/* Message image (left side) */}
            <motion.div
              className="
                absolute hidden sm:block
                sm:-left-8   sm:-top-6
                md:-left-12  md:-top-8
                lg:-left-16  lg:-top-10
                xl:-left-24  xl:-top-12
              "
              drag
              dragSnapToOrigin
            >
              <Image
                src={MessageImage}
                alt="message"
                height={200}
                width={200}
                className="max-w-none select-none"
                draggable="false"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Subcopy */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <p className="max-w-md text-center text-base sm:text-lg md:text-xl text-white/90">
            We are a leading tech solution provider, dedicated to delivering
            innovative and efficient solutions for your business needs. Our team
            of experts is here to help you accelerate your success with
            cutting-edge technology and unparalleled support.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <button
            className="bg-white text-black py-3 px-5 rounded-lg font-medium"
            onClick={() => handleQuoteClick()}
          >
            Get Started
          </button>
        </div>
      </div>
      <QuoteModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={() => {}}
      />
    </section>
  );
};
