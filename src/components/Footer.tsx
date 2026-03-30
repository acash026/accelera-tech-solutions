import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

// Facebook icon component
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
  </svg>
);

export const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    {
      href: "https://x.com/AcceleraTechHQ",
      label: "Follow us on X (Twitter)",
      Icon: Twitter,
    },
    {
      href: "https://www.linkedin.com/company/accelera-tech-solutions",
      label: "Connect with us on LinkedIn",
      Icon: Linkedin,
    },
    {
      href: "https://www.instagram.com/accelera_tech_solutions",
      label: "Follow us on Instagram",
      Icon: Instagram,
    },
    {
      href: "https://www.facebook.com/profile.php?id=61574331861086",
      label: "Follow us on Facebook",
      Icon: FacebookIcon,
    },
  ];

  const policyLinks = [
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/shipping-policy", label: "Shipping Policy" },
    { href: "/cancellation-and-refund-policy", label: "Cancellation & Refund" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="border-t border-white/15 bg-black text-white/70">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-10 lg:py-12">
          <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-base sm:text-lg font-medium">
                © {year}{" "}
                <span className="text-white/90 font-semibold">
                  Accelera Tech Solutions
                </span>
                . All rights reserved.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <span className="hidden sm:block text-xs text-white/50">
                Follow us
              </span>
              <ul className="flex items-center gap-2 sm:gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={label}
                      className="group inline-flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 ring-offset-black transition-all duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 motion-reduce:transition-none"
                    >
                      <Icon
                        className="size-5 transition-transform duration-200 group-hover:scale-110 motion-reduce:transition-none"
                        strokeWidth={1.75}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="my-6 border-t border-white/10" />

          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-white/80">
              Legal & Support
            </h3>

            <nav aria-label="Footer links" className="w-full">
              <ul className="grid grid-cols-1 gap-2 text-center xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 sm:gap-3 lg:gap-4">
                {policyLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-block rounded md:px-2 py-1 text-xs sm:text-sm text-white/70 transition-colors duration-200 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ring-offset-black"
                    >
                      <span className="underline-offset-2 group-hover:underline">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};