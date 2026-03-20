import { useEffect, useState } from "react";
import LogoImage from "../assets/icons/logo.svg";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  const [NavOpen, setNavOpen] = useState(false);
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (NavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [NavOpen]);

  return (
    <header className="bg-black">
      <div className="px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="container mx-auto">
          <div className="py-2 sm:py-4 flex items-center justify-between">
            {/* Brand */}
            <a href="/" className="relative flex items-center gap-2 sm:gap-3">
              <div className="absolute w-1/4 top-1 sm:top-2 bottom-0 bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-md"></div>
              <LogoImage className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 relative z-10" />
              <h1 className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold relative z-10">
                <span className="hidden sm:inline">Accelera Tech</span>
                <span className="sm:hidden">Accelera</span>
              </h1>
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setNavOpen((v) => !v)}
              aria-expanded={NavOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle menu"
              className="border border-white/30 h-8 w-8 sm:h-10 sm:w-10 inline-flex justify-center items-center rounded-lg md:hidden"
            >
              <MenuIcon className="text-white h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* Desktop nav */}
            <nav className="text-white gap-3 lg:gap-4 xl:gap-6 items-center hidden md:flex">
              <a
                href="/"
                className="text-white/60 hover:text-white transition text-sm lg:text-base"
              >
                Home
              </a>
              <a
                href="/about-us"
                className="text-white/60 hover:text-white transition text-sm lg:text-base"
              >
                About Us
              </a>
              <a
                href="/services"
                className="text-white/60 hover:text-white transition text-sm lg:text-base"
              >
                Services
              </a>
              <a
                href="/works"
                className="text-white/60 hover:text-white transition text-sm lg:text-base"
              >
                Our Works
              </a>
              <a
                href="/pricing"
                className="text-white/60 hover:text-white transition text-sm lg:text-base"
              >
                Pricing
              </a>
              <a
                href="/testimonials"
                className="text-white/60 hover:text-white transition text-sm lg:text-base"
              >
                Testimonials
              </a>
              <a
                href="/contact"
                className="bg-white py-1.5 px-3 lg:py-2 lg:px-4 xl:py-2.5 xl:px-5 cursor-pointer rounded-lg text-black text-sm lg:text-base font-medium"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        id="mobile-nav"
        className={[
          "fixed inset-0 z-50 md:hidden transition-opacity",
          NavOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Dim background */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setNavOpen(false)}
        />
        {/* Drawer */}
        <div
          className={[
            "absolute right-0 top-0 h-full w-[82%] xs:w-4/5 sm:w-2/3 max-w-xs",
            "bg-black border-l border-white/10",
            "transition-transform duration-300 ease-out",
            NavOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
            <a href="/" className="relative flex items-center gap-2">
              <div className="absolute w-1/4 top-1 bottom-0 bg-[linear-gradient(to_right,#F7AABE,#B57CEC,#E472D1)] blur-md"></div>
              <LogoImage className="h-8 w-8 relative z-10" />
              <span className="text-white text-base font-bold relative z-10">
                Accelera
              </span>
            </a>
            <button
              onClick={() => setNavOpen(false)}
              className="border border-white/30 h-9 w-9 inline-flex items-center justify-center rounded-lg text-white"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="px-4 sm:px-6 py-2 flex flex-col gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/works", label: "Our Works" },
              { href: "/pricing", label: "Pricing" },
              { href: "/testimonials", label: "Testimonials" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setNavOpen(false)}
                className="rounded-md px-3 py-3 text-white/80 hover:text-white transition text-base"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setNavOpen(false)}
              className="mt-2 bg-white py-2.5 px-4 rounded-lg text-black text-base font-medium"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
