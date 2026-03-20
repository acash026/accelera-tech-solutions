"use client";
import { ReactNode, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface LazyLoaderProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  rootMargin?: string;
}

export function LazyLoader({
  children,
  fallback,
  className = "",
  rootMargin = "300px", // Increased margin for earlier loading
}: LazyLoaderProps) {
  const { elementRef, isVisible } = useIntersectionObserver({
    rootMargin,
    threshold: 0.1, // Load when 10% visible
    freezeOnceVisible: true,
  });

  return (
    <div ref={elementRef} className={className}>
      {isVisible
        ? children
        : fallback || <div className="h-96 bg-transparent" />}
    </div>
  );
}
