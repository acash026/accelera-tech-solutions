"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
const ThankYouPage = () => {
  const [countdown, setCountdown] = useState(30);
  const router = useRouter();

  // Google Tag Manager script injection
  useEffect(() => {
    // GTM script
    (function (
      w: Window & { [key: string]: any },
      d: Document,
      s: string,
      l: string,
      i: string
    ) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s) as HTMLScriptElement,
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      if (f.parentNode) {
        f.parentNode.insertBefore(j, f);
      }
    })(
      window as Window & { [key: string]: any },
      document,
      "script",
      "dataLayer",
      "AW-17500545200" // Replace with your GTM ID
    );

    // GTM noscript fallback
    const noscriptIframe = document.createElement("iframe");
    noscriptIframe.src =
      "https://www.googletagmanager.com/ns.html?id=GTM-5CLPR3VR"; // Replace with your GTM ID
    noscriptIframe.height = "0";
    noscriptIframe.width = "0";
    noscriptIframe.style.display = "none";
    noscriptIframe.style.visibility = "hidden";
    document.body.appendChild(noscriptIframe);

    return () => {
      if (document.body.contains(noscriptIframe)) {
        document.body.removeChild(noscriptIframe);
      }
    };
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const handleBackToHome = () => {
    router.push("/");
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background radial gradient */}
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

        <div className="max-w-4xl w-full relative z-10">
          {/* Main Thank You Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-md border border-[#B48CDE]/30 rounded-2xl shadow-2xl p-8 sm:p-12 text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
              className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-[#4F21A1] to-[#A46EDB] rounded-full flex items-center justify-center"
            >
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
            >
              Thank You!
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg sm:text-xl text-white/80 mb-8"
            >
              Your request has been submitted successfully
            </motion.p>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-r from-[#4F21A1]/20 to-[#A46EDB]/20 border border-[#B48CDE]/30 rounded-xl p-6 sm:p-8 mb-8"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#4F21A1] to-[#A46EDB] rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#A46EDB]">
                  Check Your Email
                </h3>
              </div>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                We've sent you a confirmation email with your request details.
                Our team of experts will review your requirements and get back
                to you with innovative tech solutions tailored for your business
                needs.
              </p>
            </motion.div>

            {/* What's Next Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-black/30 border border-[#B48CDE]/20 rounded-xl p-6 sm:p-8 mb-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                What happens next?
              </h3>
              <div className="space-y-4 text-left">
                {[
                  "Our tech experts will analyze your requirements within 24 hours",
                  "We'll design a custom solution strategy for your business",
                  "You'll receive a detailed proposal with cutting-edge recommendations",
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 + index * 0.2 }}
                    className="flex items-start"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-[#4F21A1] to-[#A46EDB] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <span className="text-base text-white/80 leading-relaxed">
                      {step}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center bg-[#4F21A1]/20 border border-[#B48CDE]/30 rounded-lg px-6 py-3">
                <svg
                  className="w-5 h-5 text-[#A46EDB] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-base text-white/90">
                  Redirecting in{" "}
                  <span className="font-bold text-[#A46EDB]">{countdown}</span>{" "}
                  seconds...
                </span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBackToHome}
                className="px-8 py-4 bg-white text-black rounded-lg font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Back to Home
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGoBack}
                className="px-8 py-4 bg-transparent border-2 border-[#B48CDE] hover:bg-[#B48CDE]/10 text-white rounded-lg font-semibold text-base transition-all duration-200"
              >
                Go Back
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Additional Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9 }}
            className="mt-8 bg-black/30 backdrop-blur-sm border border-[#B48CDE]/20 rounded-xl p-6 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#4F21A1] to-[#A46EDB] rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Need Immediate Help?
              </h3>
            </div>
            <p className="text-base text-white/70 mb-6 leading-relaxed">
              Our tech solution experts are available to assist you with any
              questions about your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center bg-[#4F21A1]/20 border border-[#B48CDE]/30 rounded-lg px-4 py-3"
              >
                <svg
                  className="w-4 h-4 text-[#A46EDB] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+12019845730"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  (201) 984-5730
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center bg-[#4F21A1]/20 border border-[#B48CDE]/30 rounded-lg px-4 py-3"
              >
                <svg
                  className="w-4 h-4 text-[#A46EDB] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@acceleratechsolutions.com"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  info@acceleratechsolutions.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYouPage;
