"use client";
import { useState } from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { QuoteModal } from "./QuoteModal";
export function OurExpertise() {
  const images = [
    "https://ik.imagekit.io/charanraj/UI/kalaakriti?updatedAt=1755002814044",
    "https://ik.imagekit.io/charanraj/UI/capture%20hub?updatedAt=1755002868017",
    "https://ik.imagekit.io/charanraj/UI/hen%20and%20heaven?updatedAt=1755002813494",
    "https://ik.imagekit.io/charanraj/UI/Acceleraautoparts?updatedAt=1755002601101",
    "https://ik.imagekit.io/charanraj/UI/anees-portfolio.png?updatedAt=1731665986722",
    "https://ik.imagekit.io/charanraj/UI/Screenshot_47.png?updatedAt=1730810839650",
    "https://ik.imagekit.io/charanraj/UI/Screenshot_19.png?updatedAt=1725737984150",
    "https://ik.imagekit.io/charanraj/UI/Screenshot_18.png?updatedAt=1725720063363",
    "https://ik.imagekit.io/charanraj/UI/Untitled%20design%20(25)%20(1).png?updatedAt=1725711643372",
    "https://ik.imagekit.io/charanraj/UI/image%20(9).png?updatedAt=1725711635706",
    "https://ik.imagekit.io/charanraj/UI/Screenshot_17.png?updatedAt=1725711633874",
    "https://ik.imagekit.io/charanraj/UI/image%20(8).png?updatedAt=1725711628231",
    "https://ik.imagekit.io/charanraj/UI/image%20(6).png?updatedAt=1725711622247",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://ik.imagekit.io/charanraj/UI/image%20(7).png?updatedAt=1725711623894",
    "https://ik.imagekit.io/charanraj/UI/Screenshot_16.png?updatedAt=1725711625408",
    "https://ik.imagekit.io/charanraj/UI/image.png?updatedAt=1725711628004",
    "https://ik.imagekit.io/charanraj/UI/image%20(11).png?updatedAt=1725711617805",
    "https://ik.imagekit.io/charanraj/UI/image%20(1).png?updatedAt=1725711619836",
    "https://ik.imagekit.io/charanraj/UI/image%20(10).png?updatedAt=1725711617648",
    "https://ik.imagekit.io/charanraj/UI/aavirbhav_landing%20(1).png?updatedAt=1725711615044",
    "https://ik.imagekit.io/charanraj/UI/image%20(4).png?updatedAt=1725711614639",
    "https://ik.imagekit.io/charanraj/UI/image%20(3).png?updatedAt=1725711614604",
    "https://ik.imagekit.io/charanraj/UI/image%20(11).png?updatedAt=1725711617805",
    "https://ik.imagekit.io/charanraj/UI/image%20(2).png?updatedAt=1725711618139",
    "https://ik.imagekit.io/charanraj/UI/capture%20hub?updatedAt=1755002868017",
    "https://ik.imagekit.io/charanraj/UI/hen%20and%20heaven?updatedAt=1755002813494",
    "https://ik.imagekit.io/charanraj/UI/Acceleraautoparts?updatedAt=1755002601101",
    "https://ik.imagekit.io/charanraj/UI/anees-portfolio.png?updatedAt=1731665986722",
    "https://ik.imagekit.io/charanraj/UI/Screenshot_47.png?updatedAt=1730810839650",
    "https://ik.imagekit.io/charanraj/UI/Screenshot_19.png?updatedAt=1725737984150",
  ];
  const [open, setOpen] = useState(false);

  const handleQuoteClick = (type?: string) => {
    setOpen(true);
  };
  return (
    <section
      id="expertise"
      className={[
        "relative isolate mx-auto w-full overflow-hidden",
        "bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8]",
        // Use min-heights that scale; avoid fixed h-screen on tiny phones
        "min-h-[68vh] sm:min-h-[72vh] md:min-h-[78vh] lg:min-h-[88vh] xl:min-h-screen",
        "py-16 sm:py-20 md:py-24",
      ].join(" ")}
    >
      {/* Marquee (behind) */}
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        images={images}
      />

      {/* Dark overlay for readability (above marquee, below content) */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/75 md:bg-black/65" />

      {/* Content */}
      <div className="relative z-20 container px-4 sm:px-6 lg:px-8">
        <h2
          className={[
            "mx-auto max-w-4xl text-center font-bold text-balance",
            "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
          ].join(" ")}
        >
          Accelerating your business with{" "}
          <span className="relative inline-block rounded-xl bg-blue-500/40 px-3 py-1 sm:px-4 sm:py-1.5 underline decoration-[#5D2CA8] decoration-[6px] underline-offset-[10px] sm:underline-offset-[14px] backdrop-blur-sm">
            innovative
          </span>{" "}
          tech solutions.
        </h2>

        <p className="mx-auto max-w-2xl pt-4 sm:pt-6 md:pt-8 text-center text-sm sm:text-base md:text-lg text-neutral-200">
          Transform your digital presence with cutting-edge web development,
          mobile applications, and enterprise solutions tailored to your
          business needs.
        </p>

        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            className="w-full sm:w-auto rounded-md bg-[#5D2CA8] px-6 py-2.5 text-sm sm:text-base font-medium text-white transition-colors hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black"
            onClick={() => handleQuoteClick()}
          >
            Get Started
          </button>
          <button
            className="w-full sm:w-auto rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm sm:text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black"
            onClick={() =>
              window.scrollTo({
                top:
                  document.getElementById("product-showcase")?.offsetTop || 0,
                behavior: "smooth",
              })
            }
          >
            Our Services
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
}
