"use client";
import React, { useEffect, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import {
  SunMedium,
  SunDim,
  Table2 as Table,
  Search,
  Mic as Microphone,
  Moon,
  SkipBack,
  SkipForward,
  ChevronUp,
  Volume,
  Volume1,
  Volume2,
  Globe as World,
  Command,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  // gentler transforms for small screens
  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.08, isMobile ? 1.25 : 1.35]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [isMobile ? 0.85 : 0.72, isMobile ? 1.25 : 1.35]
  );
  const translate = useTransform(scrollYProgress, [0, 3], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="
        flex w-full transform flex-col items-center justify-start
        min-h-[120vh] sm:min-h-[140vh] md:min-h-[160vh]
        py-12 sm:py-16 md:py-24
        [perspective:800px]
      "
    >
      <motion.h2
        style={{ translateY: textTransform, opacity: textOpacity }}
        className="mb-8 sm:mb-12 md:mb-20 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white"
      >
        {title || (
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        )}
      </motion.h2>

      {/* Lid (screen) and Base */}
      <Lid
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
      />

      <div
        className="
          relative -z-10 overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]
          h-[16rem] w-[22rem]
          sm:h-[20rem] sm:w-[28rem]
          md:h-[22rem] md:w-[32rem]
          mt-6 sm:mt-8
        "
      >
        {/* above keyboard bar */}
        <div className="relative h-10 w-full">
          <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" />
        </div>

        <div className="relative flex">
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
          <div className="mx-auto h-full w-[80%]  overflow-hidden">
            <Keypad />
          </div>
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
        </div>

        <Trackpad />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />

        {showGradient && (
          <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black" />
        )}
        {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
      </div>
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="
          relative rounded-2xl bg-[#010101] p-2
          h-[9rem]  w-[22rem]
          sm:h-[10rem] sm:w-[28rem]
          md:h-[12rem] md:w-[32rem]
        "
      >
        <div
          style={{ boxShadow: "0px 2px 0px 2px #171717 inset" }}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
        >
          <span className="text-white">
            <AceternityLogo />
          </span>
        </div>
      </div>

      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="
          absolute inset-0 rounded-2xl bg-[#010101] p-2
          h-[14rem] w-[22rem]
          sm:h-[16rem] sm:w-[28rem]
          md:h-96   md:w-[32rem]
        "
      >
        <div className="absolute inset-0 rounded-lg bg-[#272729]" />
        <img
          src={src as string}
          alt="showcase logo"
          className="absolute inset-0 h-full w-full rounded-lg object-cover"
        />
      </motion.div>
    </div>
  );
};

export const Trackpad = () => (
  <div
    className="mx-auto my-1 h-20 sm:h-28 md:h-32 w-[42%] rounded-xl"
    style={{ boxShadow: "0px 0px 1px 1px #00000020 inset" }}
  />
);

export const Keypad = () => {
  return (
    <div className="mx-1 h-full [transform:translateZ(0)] rounded-md bg-[#050505] p-1 [will-change:transform]">
      {/* First Row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn
          className="w-6 sm:w-8 md:w-10 items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start text-[3px] sm:text-[4px] md:text-[5px]"
        >
          esc
        </KBtn>
        <KBtn>
          <SunDim className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[3px] sm:text-[4px] md:text-[5px]">
            F1
          </span>
        </KBtn>
        <KBtn>
          <SunMedium className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[3px] sm:text-[4px] md:text-[5px]">
            F2
          </span>
        </KBtn>
        <KBtn>
          <Table className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[3px] sm:text-[4px] md:text-[5px]">
            F3
          </span>
        </KBtn>
        <KBtn>
          <Search className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[3px] sm:text-[4px] md:text-[5px]">
            F4
          </span>
        </KBtn>
        <KBtn>
          <Microphone className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[3px] sm:text-[4px] md:text-[5px]">
            F5
          </span>
        </KBtn>
        <KBtn>
          <Moon className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[3px] sm:text-[4px] md:text-[5px]">
            F6
          </span>
        </KBtn>
        <KBtn>
          <SkipBack className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[3px] sm:text-[4px] md:text-[5px]">
            F7
          </span>
        </KBtn>
        <KBtn>
          <SkipForward className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[3px] sm:text-[4px] md:text-[5px]">
            F8
          </span>
        </KBtn>
        <KBtn>
          <SkipForward className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[3px] sm:text-[4px] md:text-[5px]">
            F9
          </span>
        </KBtn>
        <KBtn>
          <Volume2 className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[3px] sm:text-[4px] md:text-[5px]">
            F10
          </span>
        </KBtn>
        <KBtn>
          <Volume1 className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[3px] sm:text-[4px] md:text-[5px]">
            F11
          </span>
        </KBtn>
        <KBtn>
          <Volume className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          <span className="mt-1 inline-block text-[3px] sm:text-[4px] md:text-[5px]">
            F12
          </span>
        </KBtn>
        <KBtn>
          <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px">
            <div className="h-full w-full rounded-full bg-black" />
          </div>
        </KBtn>
      </div>

      {/* Second row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">~</span>
          <span className="mt-1 block">`</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">!</span>
          <span className="block">1</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">@</span>
          <span className="block">2</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">#</span>
          <span className="block">3</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">$</span>
          <span className="block">4</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">%</span>
          <span className="block">5</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">^</span>
          <span className="block">6</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">&</span>
          <span className="block">7</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">*</span>
          <span className="block">8</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">(</span>
          <span className="block">9</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">)</span>
          <span className="block">0</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">&mdash;</span>
          <span className="block">_</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">+</span>
          <span className="block"> = </span>
        </KBtn>
        <KBtn
          className="w-6 sm:w-8 md:w-10 items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end text-[3px] sm:text-[4px] md:text-[5px]"
        >
          delete
        </KBtn>
      </div>

      {/* Third row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn
          className="w-6 sm:w-8 md:w-10 items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start text-[3px] sm:text-[4px] md:text-[5px]"
        >
          tab
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">Q</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">W</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">E</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">R</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">T</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">Y</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">U</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">I</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">O</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">P</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">{`{`}</span>
          <span className="block">{`[`}</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">{`}`}</span>
          <span className="block">{`]`}</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">{`|`}</span>
          <span className="block">{`\\`}</span>
        </KBtn>
      </div>

      {/* Fourth Row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn
          className="w-8 sm:w-10 md:w-[2.8rem] items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start text-[3px] sm:text-[4px] md:text-[5px]"
        >
          caps lock
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">A</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">S</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">D</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">F</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">G</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">H</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">J</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">K</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">L</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">{`:`}</span>
          <span className="block">{`;`}</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">{`"`}</span>
          <span className="block">{`'`}</span>
        </KBtn>
        <KBtn
          className="w-8 sm:w-10 md:w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end text-[3px] sm:text-[4px] md:text-[5px]"
        >
          return
        </KBtn>
      </div>

      {/* Fifth Row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn
          className="w-10 sm:w-12 md:w-[3.65rem] items-end justify-start pb-[2px] pl-[4px]"
          childrenClassName="items-start text-[3px] sm:text-[4px] md:text-[5px]"
        >
          shift
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">Z</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">X</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">C</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">V</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">B</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">N</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">M</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">{`<`}</span>
          <span className="block">{`,`}</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">{`>`}</span>
          <span className="block">{`.`}</span>
        </KBtn>
        <KBtn childrenClassName="text-[3px] sm:text-[4px] md:text-[5px]">
          <span className="block">{`?`}</span>
          <span className="block">{`/`}</span>
        </KBtn>
        <KBtn
          className="w-10 sm:w-12 md:w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]"
          childrenClassName="items-end text-[3px] sm:text-[4px] md:text-[5px]"
        >
          shift
        </KBtn>
      </div>

      {/* Sixth Row */}
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        <KBtn
          className=""
          childrenClassName="h-full justify-between py-[4px] text-[3px] sm:text-[4px] md:text-[5px]"
        >
          <div className="flex w-full justify-end pr-1">
            <span className="block">fn</span>
          </div>
          <div className="flex w-full justify-start pl-1">
            <World className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          </div>
        </KBtn>
        <KBtn
          className=""
          childrenClassName="h-full justify-between py-[4px] text-[3px] sm:text-[4px] md:text-[5px]"
        >
          <div className="flex w-full justify-end pr-1">
            <ChevronUp className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block">control</span>
          </div>
        </KBtn>
        <KBtn childrenClassName="h-full justify-between py-[4px] text-[3px] sm:text-[4px] md:text-[5px]">
          <div className="flex w-full justify-end pr-1">
            <OptionKey className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block">option</span>
          </div>
        </KBtn>
        <KBtn
          className="w-6 sm:w-7 md:w-8"
          childrenClassName="h-full justify-between py-[4px] text-[3px] sm:text-[4px] md:text-[5px]"
        >
          <div className="flex w-full justify-end pr-1">
            <Command className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn className="w-16 sm:w-24 md:w-[8.2rem]" />
        <KBtn
          className="w-6 sm:w-7 md:w-8"
          childrenClassName="h-full justify-between py-[4px] text-[3px] sm:text-[4px] md:text-[5px]"
        >
          <div className="flex w-full justify-start pl-1">
            <Command className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block">command</span>
          </div>
        </KBtn>
        <KBtn
          className=""
          childrenClassName="h-full justify-between py-[4px] text-[3px] sm:text-[4px] md:text-[5px]"
        >
          <div className="flex w-full justify-start pl-1">
            <OptionKey className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          </div>
          <div className="flex w-full justify-start pl-1">
            <span className="block">option</span>
          </div>
        </KBtn>
        <div className="mt-[2px] flex h-5 w-12 sm:h-6 sm:w-16 md:h-6 md:w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px]">
          <KBtn className="h-2 w-4 sm:h-3 sm:w-5 md:h-3 md:w-6">
            <ChevronUp className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
          </KBtn>
          <div className="flex">
            <KBtn className="h-2 w-4 sm:h-3 sm:w-5 md:h-3 md:w-6">
              <ChevronLeft className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
            </KBtn>
            <KBtn className="h-2 w-4 sm:h-3 sm:w-5 md:h-3 md:w-6">
              <ChevronDown className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
            </KBtn>
            <KBtn className="h-2 w-4 sm:h-3 sm:w-5 md:h-3 md:w-6">
              <ChevronRight className="h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
            </KBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => {
  return (
    <div
      className={cn(
        "[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform]",
        backlit && "bg-white/[0.2] shadow-xl shadow-white"
      )}
    >
      <div
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]",
          className
        )}
        style={{
          boxShadow:
            "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center text-[5px] text-neutral-200",
            childrenClassName,
            backlit && "text-white"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const SpeakerGrid = () => (
  <div
    className="mt-2 flex h-36 sm:h-40 gap-[2px] px-[0.5px]"
    style={{
      backgroundImage:
        "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
      backgroundSize: "3px 3px",
    }}
  />
);

export const OptionKey = ({ className }: { className: string }) => (
  <svg
    fill="none"
    version="1.1"
    id="icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className={className}
  >
    <rect
      stroke="currentColor"
      strokeWidth={2}
      x="18"
      y="5"
      width="10"
      height="2"
    />
    <polygon
      stroke="currentColor"
      strokeWidth={2}
      points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
    />
    <rect
      id="_Transparent_Rectangle_"
      className="st0"
      width="32"
      height="32"
      stroke="none"
    />
  </svg>
);

const AceternityLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="49"
    viewBox="0 0 48 49"
    fill="none"
  >
    <g clipPath="url(#clip0_2447_4927)">
      <path
        d="M15.255 3.68348L2.745 16.1935C0.99 17.9485 0 20.3335 0 22.8235V45.1885C0 47.2585 1.68 48.9385 3.75 48.9385H26.115C28.605 48.9385 30.9825 47.9485 32.745 46.1935L45.255 33.6835C47.01 31.9285 48 29.5435 48 27.0535V4.68848C48 2.61848 46.32 0.938477 44.25 0.938477H21.885C19.395 0.938477 17.0175 1.92848 15.255 3.68348Z"
        fill="url(#paint0_linear_2447_4927)"
      ></path>
      <path d="M36 12.9385H6V42.9385H36V12.9385Z" fill="black"></path>
      <path d="M22.5 36.1885H9.75V39.1885H22.5V36.1885Z" fill="white"></path>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_2447_4927"
        x1="0.6375"
        y1="47.9785"
        x2="46.965"
        y2="2.29598"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F7AABE"></stop>
        <stop offset="0.43" stopColor="#B57CEC"></stop>
        <stop offset="0.99" stopColor="#E472D1"></stop>
      </linearGradient>
      <clipPath id="clip0_2447_4927">
        <rect
          width="48"
          height="48"
          fill="white"
          transform="translate(0 0.938477)"
        ></rect>
      </clipPath>
    </defs>
  </svg>
);
