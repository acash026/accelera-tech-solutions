"use client";
import appScreen from "../assets/images/products-showcase.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section
      id="product-showcase"
      className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24"
    >
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter">
          Product Showcase
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-white/70 text-center mt-5 ">
            Explore our innovative product features and see how they can benefit
            you.
          </p>
        </div>
        <div className="flex justify-center">
          <motion.div
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "800px",
            }}
          >
            <Image
              src={appScreen}
              ref={appImage}
              alt="app screen"
              className="mt-14"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
