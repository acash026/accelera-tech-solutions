"use client";
import React, { useEffect, useRef, useState } from "react";

import { toast } from "react-toastify";
import {
  X,
  Send,
  Loader2,
  Phone,
  Mail,
  User,
  CalendarDays,
  FileText,
} from "lucide-react";

export type QuoteData = {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  timeline?: string;
  details?: string;
};

const REQUIREMENT_CHIPS = [
  "Website Development",
  "Mobile App",
  "E-commerce Platform",
  "Custom Software",
  "Branding & Logo",
  "Video Editing",
  "Photo Editing",
  "SEO & Marketing",
];

export function QuoteModal({
  open,
  onClose,
  onSubmit,
  defaultType,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: QuoteData) => void;
  defaultType?: string;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [details, setDetails] = useState("");
  const [projectType, setProjectType] = useState(defaultType || "");
  const [showAllChips, setShowAllChips] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => setProjectType(defaultType || ""), [defaultType]);

  if (!open) return null;

  const doneWithError = (msg: string) => {
    setError(msg);
    setIsSubmitting(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const fd = new FormData(e.currentTarget);
    const data: QuoteData = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      projectType: String(fd.get("projectType") || projectType || "").trim(),
      timeline: String(fd.get("timeline") || "").trim(),
      details: String(fd.get("details") || details || "").trim(),
    };

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
    if (!data.name) return doneWithError("Please enter your name.");
    if (!emailOk) return doneWithError("Please enter a valid email.");
    if (!data.projectType)
      return doneWithError("Please select a requirement type.");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok || !result.success)
        throw new Error(result.error || "Failed to send quote request");

      onSubmit(data);
      onClose();

      // Show success toast
      // Show success toast
      toast.success(
        `Thanks ${data.name}! We've received your request and will respond soon.`,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      // Navigate to thank you page
      setTimeout(() => {
        window.location.href = "/thankyou";
      }, 1500);
    } catch (err) {
      doneWithError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 outline-none placeholder:text-white/40 " +
    "focus:border-[#7C4DFF] focus:ring-2 focus:ring-[#7C4DFF]/20 disabled:opacity-50 transition-all";

  // keep the whole modal compact and within viewport (no inner scroll)
  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-md p-2"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* subtle glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-24 h-60 w-60 rounded-full bg-[#5D2CA8]/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-pink-600/20 blur-3xl" />
      </div>

      <div
        ref={dialogRef}
        className="relative w-[94vw] max-w-sm sm:max-w-lg rounded-2xl p-[1px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,77,255,.55), rgba(236,72,153,.28))",
        }}
      >
        <div
          className="relative rounded-2xl bg-[#0b0b0f]/95 p-3.5 sm:p-5 text-white"
          style={{
            boxShadow:
              "0 24px 60px -20px rgba(0,0,0,.85), inset 0 0 0 1px rgba(255,255,255,.06)",
          }}
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-2 top-2 sm:right-2.5 sm:top-2.5 inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* header */}
          <div className="mb-3">
            <h3
              id="quote-title"
              className="text-lg sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            >
              Get a Custom Quote
            </h3>
            <p className="mt-1 text-[11px] sm:text-xs text-white/70">
              Websites, apps, e-commerce, and creative edits — one team for
              everything.
            </p>

            {/* chips ENABLED on mobile: 2-column grid */}
            <div className="mt-2 grid grid-cols-2 sm:flex sm:flex-wrap gap-1.5">
              {(showAllChips
                ? REQUIREMENT_CHIPS
                : REQUIREMENT_CHIPS.slice(0, 6)
              ).map((chip) => {
                const active = projectType === chip;
                return (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setProjectType(chip)}
                    className={
                      "truncate rounded-full border px-2.5 py-1 text-[11px] sm:text-xs transition " +
                      (active
                        ? "border-[#7C4DFF] bg-[#7C4DFF]/20 text-white"
                        : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10")
                    }
                    title={chip}
                  >
                    {chip}
                  </button>
                );
              })}
              {REQUIREMENT_CHIPS.length > 6 && (
                <button
                  type="button"
                  onClick={() => setShowAllChips((v) => !v)}
                  className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] sm:text-xs text-white/80 hover:bg-white/10"
                >
                  {showAllChips ? "Less" : "More"}
                </button>
              )}
            </div>
          </div>

          {error && (
            <div className="mb-3 rounded-md bg-red-500/10 border border-red-500/30 p-2.5 text-red-300 text-xs">
              {error}
            </div>
          )}

          {/* form — 2 columns on MOBILE too */}
          <form
            className="grid grid-cols-2 gap-2 sm:gap-3"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <label className="flex flex-col gap-1">
              <span className="text-[10px] sm:text-[11px] text-white/60">
                Name *
              </span>
              <div className="relative">
                <User className="pointer-events-none absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-white/40" />
                <input
                  name="name"
                  required
                  disabled={isSubmitting}
                  className={`${fieldClass} pl-7 sm:pl-9 text-xs sm:text-sm py-2 sm:py-2.5`}
                  placeholder="Your name"
                />
              </div>
            </label>

            {/* Email */}
            <label className="flex flex-col gap-1">
              <span className="text-[10px] sm:text-[11px] text-white/60">
                Email *
              </span>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-white/40" />
                <input
                  name="email"
                  type="email"
                  required
                  disabled={isSubmitting}
                  className={`${fieldClass} pl-7 sm:pl-9 text-xs sm:text-sm py-2 sm:py-2.5`}
                  placeholder="you@company.com"
                />
              </div>
            </label>

            {/* Phone */}
            <label className="flex flex-col gap-1">
              <span className="text-[10px] sm:text-[11px] text-white/60">
                Phone
              </span>
              <div className="relative">
                <Phone className="pointer-events-none absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-white/40" />
                <input
                  name="phone"
                  disabled={isSubmitting}
                  className={`${fieldClass} pl-7 sm:pl-9 text-xs sm:text-sm py-2 sm:py-2.5`}
                  placeholder="(123) 456-7890"
                />
              </div>
            </label>

            {/* Type */}
            <label className="flex flex-col gap-1">
              <span className="text-[10px] sm:text-[11px] text-white/60">
                Type *
              </span>
              <select
                name="projectType"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                required
                disabled={isSubmitting}
                className={`${fieldClass} text-xs  sm:text-sm py-2 sm:py-2.5`}
              >
                <option value="" className="bg-black text-white" disabled>
                  Select type
                </option>
                <option className="bg-black text-white">
                  Website Development
                </option>
                <option className="bg-black text-white">Mobile App</option>
                <option className="bg-black text-white">
                  E-commerce Platform
                </option>
                <option className="bg-black text-white">Custom Software</option>
                <option className="bg-black text-white">UI/UX Design</option>
                <option className="bg-black text-white">Branding & Logo</option>
                <option className="bg-black text-white">Video Editing</option>
                <option className="bg-black text-white">Photo Editing</option>
                <option className="bg-black text-white">SEO & Marketing</option>
                <option className="bg-black text-white">Other</option>
              </select>
            </label>

            {/* Timeline (full width on mobile? keep 2-col but allow wrap) */}
            <label className="col-span-2 sm:col-span-2 flex flex-col gap-1">
              <span className="text-[10px] sm:text-[11px] text-white/60">
                Timeline
              </span>
              <div className="relative">
                <CalendarDays className="pointer-events-none absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-white/40" />
                <select
                  name="timeline"
                  disabled={isSubmitting}
                  className={`${fieldClass} pl-7 sm:pl-9 text-xs sm:text-sm py-2 sm:py-2.5`}
                >
                  <option value="" className="bg-black text-white" disabled>
                    Select timeline
                  </option>
                  <option className="bg-black text-white">
                    ASAP (Rush Job)
                  </option>
                  <option className="bg-black text-white">1–2 weeks</option>
                  <option className="bg-black text-white">2–4 weeks</option>
                  <option className="bg-black text-white">1–3 months</option>
                  <option className="bg-black text-white">3+ months</option>
                  <option className="bg-black text-white">Flexible</option>
                </select>
              </div>
            </label>

            {/* Details (full width) */}
            <label className="col-span-2 flex flex-col gap-1">
              <span className="text-[10px] sm:text-[11px] text-white/60">
                Project Details
              </span>
              <div className="relative">
                <FileText className="pointer-events-none absolute left-2 sm:left-3 top-2 sm:top-2.5 h-3 w-3 sm:h-4 sm:w-4 text-white/40" />
                <textarea
                  name="details"
                  rows={2}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  disabled={isSubmitting}
                  className={`${fieldClass} pl-7 sm:pl-9 text-xs sm:text-sm resize-none py-2 sm:py-2.5`}
                  placeholder="Goals, features..."
                  maxLength={600}
                />
                <span className="absolute right-2 bottom-1 sm:bottom-2 text-[9px] sm:text-[10px] text-white/40">
                  {details.length}/600
                </span>
              </div>
            </label>

            {/* actions */}
            <div className="col-span-2 mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="text-[9px] sm:text-[11px] text-white/50">
                We never share your info. You’ll get a reply within 24–48 hrs.
              </p>
              <div className="flex items-center gap-2 justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="rounded-lg border border-white/15 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium hover:bg-white/10 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg bg-gradient-to-r from-[#7C4DFF] to-pink-600 px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white hover:from-[#6f43ee] hover:to-pink-700 disabled:opacity-50 shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                      Submit
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
