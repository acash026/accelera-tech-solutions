import Link from "next/link";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    {
      href: "https://x.com/AcceleraTech" /* replace */,
      label: "Follow us on X (Twitter)",
      Icon: Twitter,
    },
    {
      href: "https://www.linkedin.com/company/acceleratechsolutions/" /* replace */,
      label: "Connect with us on LinkedIn",
      Icon: Linkedin,
    },
    {
      href: "https://instagram.com/acceleratechsolutions" /* replace */,
      label: "Follow us on Instagram",
      Icon: Instagram,
    },
    {
      href: "https://youtube.com/@acceleratechsolutions" /* replace */,
      label: "Subscribe to our YouTube channel",
      Icon: Youtube,
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
          {/* Top strip: brand + socials */}
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

          {/* Divider */}
          <div className="my-6 border-t border-white/10" />

          {/* Legal & Support */}
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
