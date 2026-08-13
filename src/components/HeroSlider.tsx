"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HERO_BLUR } from "@/lib/hero-blur";

interface Slide {
  src: string;
  label: string;
}

const defaultSlides: Slide[] = [
  { src: "/new-img/1.webp", label: "Satisfied Parents Worldwide" },
  { src: "/new-img/2.webp", label: "Live Interactive Classes Daily" },
  { src: "/new-img/3.webp", label: "Fully Accredited & Globally Recognized" },
  { src: "/new-img/4.webp", label: "Happy Students & Satisfied Parents from UAE" },
];

export default function HeroSlider({
  priority = false,
  slides = defaultSlides,
  caption,
  containerClass,
  interval = 4000,
}: {
  priority?: boolean;
  slides?: Slide[];
  caption?: string;
  containerClass?: string;
  interval?: number;
}) {
  const [active, setActive] = useState(0);

  /**
   * Which slides are allowed to exist in the DOM (and therefore fetch).
   *
   * All slides share one absolutely-positioned, in-viewport container, so
   * `loading="lazy"` does NOT defer them - the browser treats every slide as
   * visible and fetches all of them immediately. Rendering all 4 up front meant
   * ~600KB competing for bandwidth with the LCP image, which is what pushed LCP
   * past 11s on throttled 4G.
   *
   * So we start with only slide 0 (the LCP) and admit each next slide one tick
   * before it is shown. Steady-state behaviour is identical; only the initial
   * critical path shrinks.
   */
  const [mounted, setMounted] = useState<number[]>([0]);

  useEffect(() => {
    if (slides.length <= 1) return;

    // Admit slide 1 only once the browser is idle, so it can never contend
    // with the LCP fetch.
    const admitSecond = window.setTimeout(() => {
      setMounted((m) => (m.includes(1) ? m : [...m, 1]));
    }, interval / 2);

    const timer = window.setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % slides.length;
        // Pre-admit the slide after next so it is decoded before its turn.
        const upcoming = (next + 1) % slides.length;
        setMounted((m) => (m.includes(upcoming) ? m : [...m, upcoming]));
        return next;
      });
    }, interval);

    return () => {
      window.clearTimeout(admitSecond);
      window.clearInterval(timer);
    };
  }, [slides.length, interval]);

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div
        className={
          containerClass ??
          "relative w-full aspect-video overflow-hidden border border-slate-200 bg-slate-100"
        }
      >
        {slides.map((slide, i) => {
          if (!mounted.includes(i)) return null;
          const isActive = i === active;
          return (
            <div
              key={slide.src}
              className="absolute inset-0 transition-opacity duration-700 ease-in-out"
              style={{ opacity: isActive ? 1 : 0, zIndex: isActive ? 1 : 0 }}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.src}
                alt={slide.label}
                fill
                sizes="(min-width: 1024px) 46vw, (min-width: 768px) 88vw, 92vw"
                className="object-cover object-center"
                placeholder={HERO_BLUR[slide.src] ? "blur" : "empty"}
                blurDataURL={HERO_BLUR[slide.src]}
                priority={priority && i === 0}
                fetchPriority={priority && i === 0 ? "high" : "auto"}
                loading={priority && i === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}
      </div>
      {caption && (
        <div className="px-3 py-2 text-center">
          <p className="text-gray-800 text-base font-semibold md:text-2xl">{caption}</p>
        </div>
      )}
    </div>
  );
}
