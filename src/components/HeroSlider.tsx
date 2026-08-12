"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div
        className={
          containerClass ??
          "relative w-full aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        }
      >
        {slides.map((slide, i) => {
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
                priority={priority && i === 0}
                loading={i === 0 ? "eager" : "lazy"}
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
