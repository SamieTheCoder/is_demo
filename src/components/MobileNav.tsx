"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-blue-200 hover:text-blue-700 lg:hidden"
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="relative flex h-5 w-5 flex-col items-center justify-center">
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              open ? "rotate-45 translate-y-0" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              open ? "-rotate-45 translate-y-0" : "translate-y-1.5"
            }`}
          />
        </span>
      </button>

      <div
        className={`fixed w-full overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ top: "4.5rem", left: 0 }}
      >
        <nav className="r-w flex flex-col py-4">
          {["Why Us", "Programs", "Accreditation", "Parent Reviews", "FAQ"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-").replace("parent-reviews", "reviews")}`}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-blue-700"
              >
                {item}
              </a>
            )
          )}
          <a
            href="#book-demo"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-3.5 font-semibold text-emerald-900 transition hover:bg-emerald-100"
          >
            Book Demo
          </a>
        </nav>
      </div>
    </>
  );
}
