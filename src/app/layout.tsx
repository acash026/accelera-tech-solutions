import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import Script from "next/script";

// Optimize font loading with display swap for better performance
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Accelera Tech Solutions | Leading Technology Innovation Partner",
  description:
    "Transform your business with cutting-edge technology solutions. Expert software development, AI integration, cloud services, and digital transformation consulting.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple:
      "https://ik.imagekit.io/charanraj/UI/Accelera%20tech%20solution?updatedAt=1755002701411",
  },

  keywords: [
    "tech solutions",
    "software development",
    "AI integration",
    "cloud services",
    "digital transformation",
    "web development",
    "mobile app development",
    "technology consulting",
    "innovation",
    "automation",
    "cybersecurity",
    "data analytics",
    "machine learning",
    "enterprise solutions",
    "startup technology",
    "custom software",
    "API development",
    "DevOps",
    "cloud migration",
    "tech modernization",
  ],
  authors: [
    {
      name: "Accelera Tech Solutions",
      url: "https://www.acceleratechsolutions.com/",
    },
  ],
  creator: "Accelera Tech Solutions",
  publisher: "Accelera Tech Solutions",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.acceleratechsolutions.com/",
    title: "Accelera Tech Solutions | Leading Technology Innovation Partner",
    description:
      "Transform your business with cutting-edge technology solutions. Expert software development, AI integration, cloud services, and digital transformation consulting.",
    siteName: "Accelera Tech Solutions",
    images: [
      {
        url: "https://ik.imagekit.io/charanraj/UI/Accelera%20tech%20solution?updatedAt=1755002701411",
        width: 1200,
        height: 630,
        alt: "Accelera Tech Solutions - Your Technology Innovation Partner",
      },
      {
        url: "https://ik.imagekit.io/charanraj/UI/Accelera%20tech%20solution?updatedAt=1755002701411",
        width: 1200,
        height: 1200,
        alt: "Accelera Tech Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@acceleratech",
    creator: "@acceleratech",
    title: "Accelera Tech Solutions | Leading Technology Innovation Partner",
    description:
      "Transform your business with cutting-edge technology solutions. Expert software development, AI integration, cloud services, and digital transformation consulting.",
    images: [
      "https://ik.imagekit.io/charanraj/UI/Accelera%20tech%20solution?updatedAt=1755002701411",
    ],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://www.acceleratechsolutions.com/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://ik.imagekit.io" />

        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17500545200"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17500545200');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t1d7trxnbv");
          `}
        </Script>
      </head>
      <body className={clsx(dmSans.className, "antialiased")}>{children}</body>
    </html>
  );
}
