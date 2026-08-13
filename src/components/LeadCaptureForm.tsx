"use client";

import { useState, FormEvent } from "react";

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childGrade: "",
    country: "UAE",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission (replace with actual API endpoint)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");

      // Fire conversion events
      if (typeof window !== "undefined") {
        // GTM event
        (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer?.push({
          event: "form_submit",
          form_name: "book_demo",
          ...formData,
        });
        // FB Pixel
        (window as unknown as { fbq: (...args: unknown[]) => void }).fbq?.("track", "Lead", {
          content_name: "Book Demo",
          content_category: "lead_form",
        });
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10 px-4">
        <div className="w-14 h-14 mx-auto mb-4 border-[2.5px] border-[#0f172a] bg-emerald-50 flex items-center justify-center shadow-[3px_3px_0_0_#059669]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h3 className="text-xl font-extrabold text-[#0f172a] mb-2">Demo booked</h3>
        <p className="text-sm text-slate-600">Our academic team will contact you within 4 hours to confirm your slot.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Parent Name */}
      <div>
        <label htmlFor="parentName" className="block text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1.5">
          Parent name
        </label>
        <input
          id="parentName"
          type="text"
          required
          value={formData.parentName}
          onChange={(e) => setFormData((p) => ({ ...p, parentName: e.target.value }))}
          className="w-full border-2 border-[#0f172a] bg-white px-3 py-2.5 text-sm font-medium text-[#0f172a] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition"
          placeholder="Your full name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1.5">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
          className="w-full border-2 border-[#0f172a] bg-white px-3 py-2.5 text-sm font-medium text-[#0f172a] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition"
          placeholder="parent@email.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1.5">
          Phone (WhatsApp)
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
          className="w-full border-2 border-[#0f172a] bg-white px-3 py-2.5 text-sm font-medium text-[#0f172a] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition"
          placeholder="+971 50 123 4567"
        />
      </div>

      {/* Child Grade */}
      <div>
        <label htmlFor="childGrade" className="block text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1.5">
          Child&apos;s grade
        </label>
        <select
          id="childGrade"
          required
          value={formData.childGrade}
          onChange={(e) => setFormData((p) => ({ ...p, childGrade: e.target.value }))}
          className="w-full border-2 border-[#0f172a] bg-white px-3 py-2.5 text-sm font-medium text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition appearance-none"
        >
          <option value="" disabled>Select grade</option>
          <option value="KG">KG (Kindergarten)</option>
          <option value="1-3">Grade 1 - 3</option>
          <option value="4-5">Grade 4 - 5</option>
          <option value="6-8">Grade 6 - 8 (Middle School)</option>
          <option value="9-10">Grade 9 - 10</option>
          <option value="11-12">Grade 11 - 12 (High School)</option>
        </select>
      </div>

      {/* Country */}
      <div>
        <label htmlFor="country" className="block text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1.5">
          Country
        </label>
        <select
          id="country"
          value={formData.country}
          onChange={(e) => setFormData((p) => ({ ...p, country: e.target.value }))}
          className="w-full border-2 border-[#0f172a] bg-white px-3 py-2.5 text-sm font-medium text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition appearance-none"
        >
          <option value="UAE">United Arab Emirates</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Qatar">Qatar</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Oman">Oman</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="neo-cta w-full text-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Booking..." : "Book Free Demo"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-700 font-bold text-center">Something went wrong. Please try again.</p>
      )}

      <p className="text-[11px] text-slate-500 text-center leading-relaxed">
        By submitting, you agree to be contacted by our academic team. No spam.
      </p>
    </form>
  );
}
