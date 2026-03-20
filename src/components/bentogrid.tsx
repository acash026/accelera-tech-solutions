"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

/* ----------------------- logos ----------------------- */
const logos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
];

/* ----------------------- helpers ----------------------- */
function useElementSize<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return { ref, size };
}

/* ----------------------- LogoBeam (responsive lines) ----------------------- */
const Beam = ({ reverse = false }: { reverse?: boolean }) => {
  const { ref, size } = useElementSize<HTMLDivElement>();
  const controls = useAnimation();

  useEffect(() => {
    const run = async () => {
      // width measured from the element itself
      const travel = size.width + 40; // 40px extra like your original
      await controls.start({
        x: reverse ? -travel : travel,
        transition: {
          repeat: Infinity,
          duration: 0.5,
          repeatDelay: reverse ? 3.5 : 2.5,
          ease: "linear",
        },
      });
    };
    run();
  }, [size.width, reverse, controls]);

  return (
    <div
      ref={ref}
      className="relative mx-2 shrink-0"
      style={{
        // responsive beam width: shorter on phones, longer on desktops
        width: "clamp(48px, 16vw, 96px)",
        height: "2px",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <motion.div
        className="absolute top-0 h-full w-10 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-75"
        initial={{ x: reverse ? 40 : -40 }}
        animate={controls}
        style={{
          left: reverse ? ("unset" as any) : 0,
          right: reverse ? 0 : ("unset" as any),
          willChange: "transform",
        }}
      />
    </div>
  );
};

const LogoTile = ({
  src,
  border = "border-white/30",
  shadow = "",
  size = "w-12 h-12 sm:w-14 sm:h-14",
  thick = false,
}: {
  src: string;
  border?: string;
  shadow?: string;
  size?: string;
  thick?: boolean;
}) => {
  return (
    <div
      className={[
        "relative rounded-2xl bg-black flex items-center justify-center overflow-hidden",
        thick ? "border-2 border-white/70" : `border ${border}`,
        shadow,
        size,
        "p-3 sm:p-3.5",
      ].join(" ")}
    >
      <img src={src} alt="" className="w-full h-full object-contain" />
      {thick && (
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          style={{ willChange: "transform" }}
        />
      )}
    </div>
  );
};

const LogoBeam = () => {
  return (
    <div className="flex items-center justify-center min-h-40">
      <div className="relative flex items-center">
        <LogoTile src={logos[0]} size="w-12 h-12 sm:w-14 sm:h-14" />
        <Beam />
        <LogoTile
          src={logos[1]}
          thick
          shadow="shadow-[0_0_12px_3px_#dbe0e2]"
          size="w-14 h-14 sm:w-16 sm:h-16"
        />
        <Beam reverse />
        <LogoTile src={logos[2]} size="w-12 h-12 sm:w-14 sm:h-14" />
      </div>
    </div>
  );
};

/* ----------------------- Card glow hover ----------------------- */
const CardWithEffect = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="relative bg-[#000] rounded-xl border border-white/30 p-4 sm:p-5 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: "transform" }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: 260,
            height: 260,
            top: mousePosition.y - 130,
            left: mousePosition.x - 130,
            background: "#5D2CA8",
            filter: "blur(90px)",
            zIndex: 10,
            willChange: "top,left",
          }}
        />
      )}
      {children}
    </div>
  );
};

/* ----------------------- Service Icons ----------------------- */
const ServiceIcons = () => {
  const services = [
    { icon: "💻", name: "Web Development", color: "#3B82F6" },
    { icon: "📱", name: "Mobile Apps", color: "#10B981" },
    { icon: "📊", name: "Digital Marketing", color: "#F59E0B" },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row gap-5 sm:gap-8 justify-center items-center">
        {services.map((s, i) => (
          <div
            key={i}
            className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 p-2 overflow-hidden shadow-[0_0_12px_3px_#dbe0e2]"
          >
            <span className="text-xl sm:text-2xl" aria-hidden>
              {s.icon}
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                delay: i * 0.4,
              }}
              style={{ willChange: "transform" }}
            />
          </div>
        ))}
      </div>

      <div className="text-left px-4 sm:px-6 mt-4">
        <h3 className="text-white text-xl sm:text-2xl font-bold mb-1.5">
          Complete Tech Solutions
        </h3>
        <p className="text-gray-400 text-sm sm:text-base">
          From websites to mobile apps and digital marketing — we&apos;ve got
          you covered.
        </p>
      </div>
    </div>
  );
};

/* ----------------------- Responsive Chart ----------------------- */
const data = [20, 35, 65, 85, 120, 150, 180, 220, 280];
const maxData = Math.max(...data);

const ResponsiveChart = ({ animate }: { animate: boolean }) => {
  const { ref, size } = useElementSize<HTMLDivElement>();

  // pick height based on width breakpoints (mobile shorter)
  const height = useMemo(() => {
    if (size.width < 420) return 180;
    if (size.width < 640) return 220;
    if (size.width < 1024) return 280;
    return 340;
  }, [size.width]);

  const points = useMemo(() => {
    if (!size.width) return "";
    const w = size.width - 12; // tiny left padding
    const h = height;
    return data
      .map((v, i) => {
        const x = (i / (data.length - 1)) * w;
        const y = h - (v / maxData) * h;
        return `${x},${y}`;
      })
      .join(" ");
  }, [size.width, height]);

  const areaPoints = useMemo(() => {
    if (!size.width) return "";
    const w = size.width - 12;
    const h = height;
    const head = `0,${h}`;
    const tail = `${w},${h}`;
    return `${head} ${points} ${tail}`;
  }, [points, size.width, height]);

  return (
    <div ref={ref} className="relative w-full" style={{ height }}>
      <svg
        viewBox={`0 0 ${Math.max(size.width, 1)} ${height}`}
        className="w-full h-full pl-3"
      >
        <defs>
          <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#5D2CA8" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Area under line */}
        <polyline fill="url(#gradient)" stroke="none" points={areaPoints} />

        {/* Line */}
        <motion.polyline
          fill="none"
          stroke="#5D2CA8"
          strokeWidth="3"
          points={points}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: animate ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </svg>

      {/* Horizontal grid + labels */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 w-full flex items-center text-white/30 text-[10px] sm:text-xs"
            style={{ top: `${(100 / 5) * i}%` }}
          >
            <span className="mr-2 sm:mr-3">{`${50 + i * 50}`}</span>
            <div className="w-full border-t border-white/40" />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ----------------------- Main Bento ----------------------- */
const BentoBox1 = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = chartRef.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-[#000000] flex justify-center items-stretch min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] p-4 sm:p-5 rounded-lg">
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl">
        {/* Left: Chart card */}
        <CardWithEffect>
          <div className="flex flex-col h-full">
            <div className="mb-3 sm:mb-4 px-3 sm:px-5 mt-3 sm:mt-4">
              <div className="flex justify-between items-center mb-4 sm:mb-5 pb-1 sm:pb-2">
                <h2 className="text-white/70 text-base sm:text-lg">
                  Client Success
                </h2>
                <div className="flex items-center">
                  <div className="h-1 bg-purple-500 w-6 sm:w-8 rounded-lg" />
                  <span className="ml-2 text-white/70 text-xs sm:text-sm">
                    Projects
                  </span>
                </div>
              </div>
              <div ref={chartRef as any}>
                <ResponsiveChart animate={visible} />
              </div>
            </div>
            <div className="text-left px-3 sm:px-5 pb-3 sm:pb-5 mt-2">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1">
                Accelerating Success
              </h3>
              <p className="text-white/70 text-sm sm:text-base">
                Watch your business grow with our cutting-edge tech solutions
                and expert team.
              </p>
            </div>
          </div>
        </CardWithEffect>

        {/* Right: two stacked cards */}
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <CardWithEffect>
            <div className="flex flex-col justify-center">
              <LogoBeam />
              <div className="text-left px-4 sm:px-6 pb-4">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1.5">
                  Modern Technologies
                </h3>
                <p className="text-white/70 text-sm sm:text-base">
                  Building with the latest stack to deliver fast, scalable,
                  reliable solutions.
                </p>
              </div>
            </div>
          </CardWithEffect>

          <CardWithEffect>
            <ServiceIcons />
          </CardWithEffect>
        </div>
      </div>
    </div>
  );
};

function Bentodemo() {
  return (
    <div className="w-full py-8 sm:py-12 md:py-16">
      <BentoBox1 />
    </div>
  );
}

export default Bentodemo;
