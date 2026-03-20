import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function ShowcaseWebsite() {
  return (
    <section
      id="works"
      className="hidden sm:block bg-black text-white bg-gradient-to-b from-[#0f041f] to-black py-16 sm:py-24 overflow-hidden"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <MacbookScroll
          title={
            <span>
              Our Famous Running Solution <br /> Till Now.
            </span>
          }
          src={"/assets/images/showcase-website.jpg"}
          showGradient={false}
        />
      </div>
    </section>
  );
}
