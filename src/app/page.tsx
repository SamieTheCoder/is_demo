import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import HeroSlider from "@/components/HeroSlider";
import LeadCaptureForm from "@/components/LeadCaptureForm";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to content</a>

      {/* ═══ HEADER - Neo-brutal with thick bottom border ═══ */}
      <header className="sticky top-0 z-50 bg-white border-b-[3px] border-[#0f172a]">
        <div className="r-w flex min-h-[4.5rem] items-center justify-between gap-4 py-3">
          <a href="#top" className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo.webp"
              srcSet="/assets/logo-320.webp 320w, /assets/logo.webp 500w"
              alt="International Schooling Logo"
              width={500}
              height={62}
              sizes="(min-width: 1024px) 250px, (min-width: 640px) 190px, 160px"
              fetchPriority="high"
              decoding="async"
              className="h-auto w-[160px] sm:w-[190px] lg:w-[250px]"
            />
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {["Why Us", "Programs", "Accreditation", "Reviews", "FAQ"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="px-3 py-1.5 text-sm font-bold text-[#0f172a] border-2 border-transparent hover:border-[#0f172a] hover:bg-blue-50 transition-all">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#book-demo" className="neo-cta text-sm px-4 py-2">
              Book<span className="hidden md:inline"> Free</span> Demo
            </a>
            <MobileNav />
          </div>
        </div>
      </header>

      <main id="main-content">
        <article id="top">
          {/* ═══ HERO ═══ */}
          <section aria-labelledby="home-hero-title" className="r-w py-8 md:py-14 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
            <div className="space-y-4 md:space-y-5 order-2 lg:order-1">
              {/* Urgency - neo badge */}
              <div className="neo-badge bg-red-50 border-red-600 text-red-800 w-max mx-auto lg:mx-0 neo-animate">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                September Seats Filling Fast
              </div>

              <h1 id="home-hero-title" className="neo-animate neo-animate-delay-1 text-center lg:text-left text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] font-extrabold leading-[1.05] tracking-tighter text-[#0f172a]">
                The trusted online school for{" "}
                <span className="text-blue-700 border-b-4 border-blue-700 pb-0.5">UAE families</span>
              </h1>

              <p className="neo-animate neo-animate-delay-2 text-center lg:text-left text-sm md:text-base lg:text-lg text-slate-700 leading-relaxed mx-auto lg:mx-0 max-w-lg">
                American Curriculum, KG to Grade 12. Daily live classes with certified teachers from 50+ countries.
              </p>

              {/* Accreditation - neo card style */}
              <div className="neo-animate neo-animate-delay-2 mx-auto lg:mx-0 w-max max-w-full bg-emerald-50 border-[2px] border-[#0f172a] px-3 py-2 md:px-5 md:py-3 flex items-center gap-2 md:gap-3 shadow-[3px_3px_0_0_#059669]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700 shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <p className="text-[11px] sm:text-xs md:text-sm font-extrabold text-emerald-900">Fully Accredited by NEASC, WASC &amp; Cognia, USA</p>
              </div>

              {/* Live class badge */}
              <div className="neo-animate neo-animate-delay-3 mx-auto lg:mx-0 neo-badge bg-blue-50 border-blue-700 text-blue-900 w-max">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span className="hidden sm:inline">Daily Live Group Classes - 1 Teacher | 10-15 Students</span>
                <span className="sm:hidden">Live Classes - 1:10-15 Ratio</span>
              </div>

              {/* Trust signals - raw grid */}
              <div className="neo-animate neo-animate-delay-3 grid grid-cols-2 sm:grid-cols-4 gap-1.5 md:gap-2 max-w-md mx-auto lg:mx-0">
                {[
                  { n: "15,000+", l: "students" },
                  { n: "190+", l: "countries" },
                  { n: "600+", l: "teachers" },
                  { n: "Since 2014", l: "trusted" },
                ].map((s) => (
                  <div key={s.l} className="bg-white border-2 border-[#0f172a] p-1.5 md:p-2 text-center">
                    <div className="text-xs md:text-sm font-extrabold text-blue-700 tabular-nums">{s.n}</div>
                    <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-slate-600">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="neo-animate neo-animate-delay-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 pt-1">
                <a href="#book-demo" className="neo-cta w-full sm:w-auto text-center">
                  Book Free Demo
                </a>
                <a href="https://api.whatsapp.com/send?phone=17273902419" target="_blank" rel="noopener noreferrer" className="neo-cta neo-cta-secondary w-full sm:w-auto text-center">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="order-1 lg:order-2 space-y-3">
              <div className="border-[3px] border-[#0f172a] shadow-[6px_6px_0_0_#1d4ed8] overflow-hidden">
                <HeroSlider priority caption="2,500+ students from UAE" containerClass="relative w-full aspect-video overflow-hidden bg-white" />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/nice-strip.avif" width={400} height={36} alt="Accreditation badges - NEASC, WASC, Cognia" loading="eager" className="mx-auto h-auto max-w-[280px] sm:max-w-[340px] md:max-w-[380px]" />
            </div>
          </section>

          {/* ═══ WHY US ═══ */}
          <section id="why-us" className="scroll-mt-28 border-y-[3px] border-[#0f172a] bg-blue-50 py-16 md:py-20">
            <div className="r-w space-y-10">
              <header className="text-center max-w-2xl mx-auto space-y-3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-[#0f172a]">
                  Why UAE parents trust{" "}
                  <span className="text-blue-700 border-b-4 border-blue-700">International Schooling</span>
                </h2>
                <p className="text-base text-slate-700 leading-relaxed mx-auto">
                  100% American Curriculum, certified teachers, and flexible schooling - all in one place.
                </p>
              </header>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Live group classes", desc: "Real-time teaching with interactive feedback, not pre-recorded videos.", accent: "#1d4ed8" },
                  { title: "International teachers", desc: "600+ certified educators speaking 40+ languages from 50+ countries.", accent: "#059669" },
                  { title: "American curriculum", desc: "KG through Grade 12 aligned to Florida DOE standards.", accent: "#7c3aed" },
                  { title: "Personalized learning", desc: "Choose the pace, schedule, and format that works best for your child.", accent: "#ea580c" },
                  { title: "Inclusive education", desc: "80+ special educators trained to support diverse learning needs.", accent: "#16a34a" },
                  { title: "College-ready outcomes", desc: "AP courses, NCAA eligibility, and pathways to top universities.", accent: "#dc2626" },
                ].map((card) => (
                  <article key={card.title} className="neo-card p-5 relative">
                    <div className="absolute top-0 left-0 w-full h-[5px]" style={{ background: card.accent }} />
                    <h3 className="text-base font-extrabold text-[#0f172a] mb-2 mt-2">{card.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ═══ BOOK DEMO ═══ */}
          <BookDemoSection />

          {/* ═══ FRAMEWORK ═══ */}
          <FrameworkSection />

          {/* ═══ PROGRAMS ═══ */}
          <ProgramsSection />

          {/* ═══ ACCREDITATION ═══ */}
          <section id="accreditation" className="scroll-mt-28 border-y-[3px] border-[#0f172a] bg-emerald-50 py-16 md:py-20 cv-auto">
            <div className="r-w space-y-8">
              <header className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-[#0f172a]">
                  Fully accredited &amp; globally recognized
                </h2>
                <p className="mt-3 text-base text-slate-700">Triple-accredited by the most respected US accreditation bodies.</p>
              </header>
              <div className="grid items-center gap-6 lg:grid-cols-2">
                <div className="border-[2.5px] border-[#0f172a] bg-white p-4 shadow-[4px_4px_0_0_#059669]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/new-strip.webp" width={720} height={60} alt="Accreditations - NEASC, WASC, and Cognia" className="mx-auto h-auto w-full max-w-[680px]" loading="lazy" />
                </div>
                <div className="border-[2.5px] border-[#0f172a] bg-white p-4 shadow-[4px_4px_0_0_#1d4ed8]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/second-strip.webp" width={960} height={139} alt="Recognitions - NCAA, College Board, and UNESCO CID" className="mx-auto h-auto w-full max-w-[800px]" loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <CTAButton />

          {/* ═══ COMPARISON TABLE ═══ */}
          <ComparisonTable />

          {/* ═══ VIDEO REVIEWS ═══ */}
          <VideoReviews />

          {/* CTA */}
          <CTAButton />

          {/* ═══ UNIVERSITY MARQUEE ═══ */}
          <UniversitySection />

          {/* ═══ GRADUATION ═══ */}
          <section className="border-y-[3px] border-[#0f172a] bg-slate-50 py-16 md:py-20">
            <div className="r-w space-y-6">
              <header className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-[#0f172a]">
                  Graduation ceremony 2026 - <span className="text-blue-700">Dubai</span>
                </h2>
              </header>
              <div className="flex flex-col items-center gap-6">
                <div className="w-full max-w-3xl space-y-5">
                  <div className="border-[3px] border-[#0f172a] shadow-[6px_6px_0_0_#0f172a] overflow-hidden">
                    <HeroSlider
                      slides={[
                        { src: "/new-img/1.webp", label: "Graduation ceremony 1" },
                        { src: "/new-img/2.webp", label: "Graduation ceremony 2" },
                        { src: "/new-img/3.webp", label: "Graduation ceremony 3" },
                        { src: "/new-img/4.webp", label: "Graduation ceremony 4" },
                      ]}
                      containerClass="relative w-full aspect-video overflow-hidden"
                    />
                  </div>
                  <p className="text-xl md:text-2xl font-extrabold text-[#0f172a] text-center">
                    Next ceremony:{" "}
                    <span className="text-blue-700">Spain</span> | <span className="text-blue-700">Colombia</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ═══ FAQ ═══ */}
          <FAQSection />

          {/* ═══ FINAL CTA ═══ */}
          <section className="r-w py-12 md:py-16">
            <div className="mx-auto max-w-3xl">
              <div className="cta-gradient-bg p-10 md:p-14 text-center">
                <div className="neo-badge bg-white/20 border-white/40 text-white mb-6 mx-auto w-max">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Enrollment open - Limited seats
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-white tracking-tighter">
                  Give your child the education
                  <span className="block text-emerald-300 mt-1">they deserve.</span>
                </h2>
                <p className="mt-4 text-base text-white/80 max-w-md mx-auto">Book a free 30-minute meeting with our academic experts.</p>
                <div className="mt-8 flex justify-center">
                  <a href="#book-demo" className="neo-cta bg-white text-blue-800 border-white hover:bg-blue-50">
                    Book Free Demo Today
                  </a>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t-[3px] border-[#0f172a] bg-white">
        <div className="r-w flex flex-col gap-3 py-6 md:flex-row items-center md:justify-between text-sm text-slate-600 font-bold">
          <p>2026 International Schooling. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://internationalschooling.org/privacy-policy" className="hover:text-blue-700 transition-colors underline">Privacy policy</a>
            <a href="https://internationalschooling.org/terms" className="hover:text-blue-700 transition-colors underline">Terms of service</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=17273902419"
        className="fixed bottom-8 right-5 z-50 border-[2.5px] border-[#0f172a] rounded-full shadow-[3px_3px_0_0_#059669] bg-white p-1.5 transition-all duration-200 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#059669] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/whatsapp-new.webp" alt="WhatsApp" width={48} height={48} loading="lazy" className="rounded-full" />
      </a>
    </>
  );
}

/* ─── CTA Button ─── */
function CTAButton() {
  return (
    <section className="py-8 md:py-10 text-center">
      <a href="#book-demo" className="neo-cta">Book Free Demo</a>
    </section>
  );
}

/* ─── Book Demo Section ─── */
function BookDemoSection() {
  return (
    <section id="book-demo" className="scroll-mt-20 border-y-[3px] border-[#0f172a] bg-white py-16 md:py-20">
      <div className="r-w">
        <header className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-[#0f172a]">Meet our academic experts</h2>
          <p className="mt-3 text-base text-slate-600 mx-auto max-w-lg">Schedule a free 30-minute call to discuss your child&apos;s learning needs and enrollment.</p>
        </header>
        <div className="mx-auto max-w-4xl border-[3px] border-[#0f172a] bg-white shadow-[8px_8px_0_0_#1d4ed8]">
          <div className="grid md:grid-cols-[1fr_18rem]">
            <div className="p-5 md:p-8">
              <h3 className="text-lg font-extrabold text-[#0f172a] mb-1">Book your demo</h3>
              <p className="text-sm text-slate-500 mb-5">Fill in your details and we will schedule a call</p>
              <LeadCaptureForm />
            </div>
            <aside className="hidden md:block border-l-[3px] border-[#0f172a] p-6 bg-blue-50">
              <p className="text-sm font-extrabold text-[#0f172a] mb-4">In 30 minutes, you will learn:</p>
              <ul className="space-y-3 text-sm text-slate-700">
                {["School accreditations", "Right learning program", "American curriculum benefits", "Transcript & Diploma", "Affordable fee options", "University support"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-5 h-5 shrink-0 bg-emerald-100 border-2 border-[#0f172a] flex items-center justify-center text-xs font-bold text-emerald-800">&#10003;</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Calendar Placeholder ─── */
/* ─── Framework Section ─── */
function FrameworkSection() {
  const leftCards = [
    { name: "Fully Accredited WASC", color: "#dc2626" },
    { name: "Fully Accredited NEASC", color: "#ea580c" },
    { name: "Fully Accredited Cognia", color: "#0d9488" },
    { name: "Students Athlete Support", color: "#ca8a04" },
    { name: "University Pathways", color: "#16a34a" },
    { name: "Project-Based Learning", color: "#2563eb" },
    { name: "Clubs & engagement", color: "#7c3aed" },
    { name: "AP Courses", color: "#be123c" },
  ];
  const rightCards = [
    { name: "Special Education Needs", color: "#c2410c" },
    { name: "Personalized Learning", color: "#a16207" },
    { name: "American Curriculum", color: "#15803d" },
    { name: "Flexible Learning", color: "#1d4ed8" },
    { name: "Career Counseling", color: "#6d28d9" },
    { name: "EdTech Tools", color: "#2563eb" },
    { name: "Live Online Classes", color: "#16a34a" },
    { name: "Future-Ready Skills", color: "#ca8a04" },
  ];
  const stats = [
    { n: "3.8", l: "Average GPA" },
    { n: "100%", l: "University Acceptance" },
    { n: "3%", l: "Ivy League" },
    { n: "75%", l: "Scholarships" },
  ];

  return (
    <div className="il-page cv-auto">
      <div className="il-inner">
        <div className="il-head">
          <h2 className="il-h1">
            Traditional schooling doesn&apos;t fit{" "}
            <em className="relative inline-block">every child anymore</em>
          </h2>
          <p className="il-desc">
            Whether your family <span className="font-bold">travels, relocates, or needs flexibility</span> - we bring school to you.
          </p>
        </div>
        <div className="il-body">
          <div className="il-col">
            {leftCards.map((card) => (
              <div key={card.name} className="il-card">
                <div className="il-card-bar" style={{ background: card.color }} />
                <div className="il-card-info">
                  <div className="il-card-name">{card.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="il-diag w-full">
            <div className="il-tilt">
              <div className="il-tilt-inner">
                <svg className="il-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <path id="ap-r1-0" d="M 312.6 49.3 A 251 251 0 0 1 488.1 133.8" />
                    <path id="ap-r1-1" d="M 503.8 153.5 A 251 251 0 0 1 547.2 343.4" />
                    <path id="ap-r1-2" d="M 420.1 520.3 A 251 251 0 0 0 541.5 368.0" />
                    <path id="ap-r1-3" d="M 202.6 531.3 A 251 251 0 0 0 397.3 531.3" />
                    <path id="ap-r1-4" d="M 58.4 368.0 A 251 251 0 0 0 179.8 520.3" />
                    <path id="ap-r1-5" d="M 52.7 343.4 A 251 251 0 0 1 96.1 153.5" />
                    <path id="ap-r1-6" d="M 111.8 133.8 A 251 251 0 0 1 287.3 49.3" />
                    <path id="ap-r2-0" d="M 310.3 117.2 A 183 183 0 0 1 453 199.7" />
                    <path id="ap-r2-1" d="M 463.3 217.5 A 183 183 0 0 1 463.3 382.4" />
                    <path id="ap-r2-2" d="M 310.3 482.7 A 183 183 0 0 0 453 400.2" />
                    <path id="ap-r2-3" d="M 146.9 400.2 A 183 183 0 0 0 289.6 482.7" />
                    <path id="ap-r2-4" d="M 136.6 382.4 A 183 183 0 0 1 136.6 217.5" />
                    <path id="ap-r2-5" d="M 146.9 199.7 A 183 183 0 0 1 289.6 117.2" />
                    <path id="ap-r3-0" d="M 312 177.5 A 123 123 0 0 1 412 350.7" />
                    <path id="ap-r3-1" d="M 200 371.6 A 123 123 0 0 0 399.9 371.6" />
                    <path id="ap-r3-2" d="M 187.9 350.7 A 123 123 0 0 1 287.9 177.5" />
                  </defs>
                  <circle cx="300" cy="300" r="290" fill="none" stroke="#0f172a" strokeWidth="2" strokeDasharray="8 4" opacity="0.2" />
                  {/* Ring 1 - Outer */}
                  <g className="r1">
                    <g><path d="M 304.5 10 A 290 290 0 0 1 523.8 115.6 L 469.8 160.1 A 220 220 0 0 0 303.4 80 Z" fill="#dc2626" stroke="#0f172a" strokeWidth="2" /><text fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif" fill="#fff"><textPath href="#ap-r1-0" startOffset="50%" textAnchor="middle">ACCREDITED WASC</textPath></text></g>
                    <g><path d="M 529.5 122.7 A 290 290 0 0 1 583.7 360 L 515.2 345.5 A 220 220 0 0 0 474.1 165.5 Z" fill="#ea580c" stroke="#0f172a" strokeWidth="2" /><text fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif" fill="#fff"><textPath href="#ap-r1-1" startOffset="50%" textAnchor="middle">ACCREDITED NEASC</textPath></text></g>
                    <g><path d="M 581.6 368.9 A 290 290 0 0 1 429.9 559.2 L 398.5 496.6 A 220 220 0 0 0 513.6 352.3 Z" fill="#0d9488" stroke="#0f172a" strokeWidth="2" /><text fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif" fill="#fff"><textPath href="#ap-r1-2" startOffset="50%" textAnchor="middle">ACCREDITED COGNIA</textPath></text></g>
                    <g><path d="M 421.7 563.2 A 290 290 0 0 1 178.2 563.2 L 207.6 499.6 A 220 220 0 0 0 392.3 499.6 Z" fill="#ca8a04" stroke="#0f172a" strokeWidth="2" /><text fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif" fill="#fff"><textPath href="#ap-r1-3" startOffset="50%" textAnchor="middle">ATHLETE SUPPORT</textPath></text></g>
                    <g><path d="M 170 559.2 A 290 290 0 0 1 18.3 368.9 L 86.3 352.3 A 220 220 0 0 0 201.4 496.6 Z" fill="#16a34a" stroke="#0f172a" strokeWidth="2" /><text fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif" fill="#fff"><textPath href="#ap-r1-4" startOffset="50%" textAnchor="middle">UNIVERSITY PATHWAYS</textPath></text></g>
                    <g><path d="M 16.2 360 A 290 290 0 0 1 70.4 122.7 L 125.8 165.5 A 220 220 0 0 0 84.7 345.5 Z" fill="#2563eb" stroke="#0f172a" strokeWidth="2" /><text fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif" fill="#fff"><textPath href="#ap-r1-5" startOffset="50%" textAnchor="middle">PROJECT LEARNING</textPath></text></g>
                    <g><path d="M 76.1 115.6 A 290 290 0 0 1 295.4 10 L 296.5 80 A 220 220 0 0 0 130.1 160.1 Z" fill="#7c3aed" stroke="#0f172a" strokeWidth="2" /><text fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif" fill="#fff"><textPath href="#ap-r1-6" startOffset="50%" textAnchor="middle">CLUBS &amp; ACTIVITIES</textPath></text></g>
                  </g>
                  {/* Ring 2 - Middle */}
                  <g className="r2">
                    <g><path d="M 303.3 84 A 216 216 0 0 1 485.3 189 L 433.8 219.8 A 156 156 0 0 0 302.4 144 Z" fill="#fff" stroke="#be123c" strokeWidth="2.5" /><text fontSize="9" fontWeight="600" fontFamily="system-ui,sans-serif" fill="#be123c"><textPath href="#ap-r2-0" startOffset="50%" textAnchor="middle">AP COURSES</textPath></text></g>
                    <g><path d="M 488.7 194.9 A 216 216 0 0 1 488.7 405 L 436.3 375.8 A 156 156 0 0 0 436.3 224.1 Z" fill="#fff" stroke="#c2410c" strokeWidth="2.5" /><text fontSize="9" fontWeight="600" fontFamily="system-ui,sans-serif" fill="#c2410c"><textPath href="#ap-r2-1" startOffset="50%" textAnchor="middle">SPECIAL EDUCATION</textPath></text></g>
                    <g><path d="M 485.3 410.9 A 216 216 0 0 1 303.3 515.9 L 302.4 455.9 A 156 156 0 0 0 433.8 380.1 Z" fill="#fff" stroke="#a16207" strokeWidth="2.5" /><text fontSize="9" fontWeight="600" fontFamily="system-ui,sans-serif" fill="#a16207"><textPath href="#ap-r2-2" startOffset="50%" textAnchor="middle">PERSONALIZED</textPath></text></g>
                    <g><path d="M 296.6 515.9 A 216 216 0 0 1 114.6 410.9 L 166.1 380.1 A 156 156 0 0 0 297.5 455.9 Z" fill="#fff" stroke="#15803d" strokeWidth="2.5" /><text fontSize="9" fontWeight="600" fontFamily="system-ui,sans-serif" fill="#15803d"><textPath href="#ap-r2-3" startOffset="50%" textAnchor="middle">AMERICAN CURRICULUM</textPath></text></g>
                    <g><path d="M 111.2 405 A 216 216 0 0 1 111.2 194.9 L 163.6 224.1 A 156 156 0 0 0 163.6 375.8 Z" fill="#fff" stroke="#1d4ed8" strokeWidth="2.5" /><text fontSize="9" fontWeight="600" fontFamily="system-ui,sans-serif" fill="#1d4ed8"><textPath href="#ap-r2-4" startOffset="50%" textAnchor="middle">FLEXIBLE LEARNING</textPath></text></g>
                    <g><path d="M 114.6 189 A 216 216 0 0 1 296.6 84 L 297.5 144 A 156 156 0 0 0 166.1 219.8 Z" fill="#fff" stroke="#6d28d9" strokeWidth="2.5" /><text fontSize="9" fontWeight="600" fontFamily="system-ui,sans-serif" fill="#6d28d9"><textPath href="#ap-r2-5" startOffset="50%" textAnchor="middle">CAREER COUNSELING</textPath></text></g>
                  </g>
                  {/* Ring 3 - Inner */}
                  <g className="r3">
                    <g><path d="M 302.3 148 A 152 152 0 0 1 432.8 373.9 L 385.6 347.6 A 98 98 0 0 0 301.5 202 Z" fill="#2563eb" stroke="#0f172a" strokeWidth="2" /><text fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif" fill="#fff"><textPath href="#ap-r3-0" startOffset="50%" textAnchor="middle">EDTECH</textPath></text></g>
                    <g><path d="M 430.4 378 A 152 152 0 0 1 169.5 378 L 215.9 350.3 A 98 98 0 0 0 384 350.3 Z" fill="#16a34a" stroke="#0f172a" strokeWidth="2" /><text fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif" fill="#fff"><textPath href="#ap-r3-1" startOffset="50%" textAnchor="middle">LIVE CLASSES</textPath></text></g>
                    <g><path d="M 167.1 373.9 A 152 152 0 0 1 297.6 148 L 298.4 202 A 98 98 0 0 0 214.3 347.6 Z" fill="#ca8a04" stroke="#0f172a" strokeWidth="2" /><text fontSize="12" fontWeight="700" fontFamily="system-ui,sans-serif" fill="#fff"><textPath href="#ap-r3-2" startOffset="50%" textAnchor="middle">FUTURE SKILLS</textPath></text></g>
                  </g>
                  <circle cx="300" cy="300" r="96" fill="#eff6ff" stroke="#0f172a" strokeWidth="2.5" />
                </svg>
              </div>
              <div className="il-core">
                <div className="il-core-circle">
                  <div className="il-core-title">FRAMEWORK</div>
                </div>
              </div>
            </div>
          </div>
          <div className="il-col right">
            {rightCards.map((card) => (
              <div key={card.name} className="il-card">
                <div className="il-card-bar" style={{ background: card.color }} />
                <div className="il-card-info">
                  <div className="il-card-name">{card.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 py-6 flex flex-col items-center justify-center">
          <h3 className="mb-5 text-center font-extrabold text-xl text-[#0f172a]">School results</h3>
          <div className="il-stats">
            {stats.map((s) => (
              <div key={s.l} className="il-stat">
                <div className="il-stat-n">{s.n}</div>
                <div className="il-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Programs Section ─── */
function ProgramsSection() {
  const groupFeatures = [
    "Group Live Classes", "Fixed Timings", "60 Min Classes",
    "Fixed Assessment Dates", "Collaborative Assignments",
    "3 Student Counseling Sessions", "3 Career Sessions",
    "3 Parent-Teacher Meetings", "Fixed Enrollment Start",
    "42-45 Week Academic Year", "Fixed Holiday Schedule",
  ];
  const oneToOneFeatures = [
    "One-To-One Live Classes", "Flexible Timings", "50 Min Classes",
    "Flexible Assessment Dates", "No Collaborative Req.",
    "6 Student Counseling Sessions", "6 Career Sessions",
    "6 Parent-Teacher Meetings", "Flexible Enrollment",
    "42 Week Academic Year", "Flexible Holidays",
  ];

  return (
    <section id="programs" className="scroll-mt-28 border-y-[3px] border-[#0f172a] bg-white py-16 md:py-20">
      <div className="r-w">
        <header className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-[#0f172a]">
            One school. Multiple <span className="text-blue-700">learning paths.</span>
          </h2>
          <p className="text-base text-slate-600 mt-3 max-w-lg mx-auto">
            Perfect for athletes, traveling families, and students who need flexible education.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <ProgramCard title="Group Learning" subtitle="10-15 STUDENTS | 1 TEACHER" features={groupFeatures} desc="Dynamic classroom with fixed timings and collaborative projects." image="/programs/gl.webp" accent="#1d4ed8" />
          <ProgramCard title="One-to-One Learning" subtitle="1 STUDENT | 1 TEACHER" features={oneToOneFeatures} desc="Personalized live classes designed to fit your schedule." image="/programs/one.webp" accent="#059669" />
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ title, subtitle, features, desc, image, accent }: { title: string; subtitle: string; features: string[]; desc: string; image: string; accent: string }) {
  return (
    <div className="neo-card p-0 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} loading="lazy" className="w-full border-b-[2.5px] border-[#0f172a]" />
      <div className="p-5 md:p-6">
        <p className="text-[11px] font-extrabold tracking-wider uppercase mb-1" style={{ color: accent }}>{subtitle}</p>
        <h3 className="text-lg font-extrabold text-[#0f172a] mb-2">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-5">{desc}</p>
        <ul className="space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm">
              <span className="w-4 h-4 shrink-0 border-2 border-[#0f172a] flex items-center justify-center text-[9px] font-bold" style={{ background: `${accent}15`, color: accent }}>&#10140;</span>
              <span className="text-slate-700 font-medium">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Comparison Table ─── */
function ComparisonTable() {
  const rows = [
    { need: "Curriculum", is: "100% International American", other: "Old traditional methods" },
    { need: "Teachers", is: "600+ certified international", other: "Limited and unverified" },
    { need: "Learning", is: "Personalized for every child", other: "One-size-fits-all" },
    { need: "Classes", is: "Live and interactive", other: "Pre-recorded only" },
    { need: "Assessments", is: "Continuous and ongoing", other: "No structured tests" },
    { need: "Environment", is: "Safe from home", other: "Unmonitored online" },
    { need: "Skills", is: "Future-ready: AI, Digital", other: "Outdated skill sets" },
    { need: "Schedule", is: "Fully flexible", other: "Fixed rigid timings" },
    { need: "Counseling", is: "Career + personal", other: "No guidance" },
    { need: "PTMs", is: "Regular meetings", other: "Term-end only" },
    { need: "Transfer", is: "Seamless credits", other: "No transfer" },
    { need: "Activities", is: "Global clubs & networking", other: "None" },
  ];

  return (
    <section className="scroll-mt-20 border-y-[3px] border-[#0f172a] bg-slate-50 py-16 md:py-20 cv-auto">
      <div className="r-w space-y-8">
        <header className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-[#0f172a]">
            Why parents choose <span className="text-blue-700">International Schooling</span>
          </h2>
        </header>
        <div className="neo-table overflow-x-auto">
          <table className="w-full border-collapse">
            <caption className="sr-only">Comparison between International Schooling and other online schools</caption>
            <thead>
              <tr className="text-sm font-extrabold">
                <th className="neo-table-cell bg-emerald-50 text-left text-[#0f172a] p-4">Need</th>
                <th className="neo-table-cell bg-blue-700 text-center text-white p-4">International Schooling</th>
                <th className="neo-table-cell bg-slate-100 text-center text-slate-600 p-4">Other schools</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.need} className="text-sm">
                  <th scope="row" className="border-2 border-[#0f172a] bg-emerald-50/50 p-3 md:p-4 text-left font-bold text-[#0f172a]">{row.need}</th>
                  <td className="border-2 border-[#0f172a] bg-blue-50 p-3 md:p-4 text-center font-semibold text-blue-900">{row.is}</td>
                  <td className="border-2 border-[#0f172a] bg-white p-3 md:p-4 text-center text-slate-500">{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ─── Video Reviews ─── */
function VideoReviews() {
  const parentVideos = ["yc8Wyw2wFB0", "cmwTOV_KJt4", "UnycpGoKr9E", "j19zsD2Xydc", "fhr5DMtrOYo", "s18YrLpSiwo"];
  const studentVideos = [
    { id: "3C9m7VBvVv8", from: "UAE" }, { id: "5xU9tclkHjc", from: "UAE" },
    { id: "PV7SccwjeFg", from: "UAE" }, { id: "HzRydo9QyEs", from: "Mexico" },
    { id: "QK9V3L0srUo", from: "Israel" }, { id: "SWK41iYZVsU", from: "Spain" },
  ];
  const teacherVideos = [
    { id: "mbsR8F94dHk", from: "USA" }, { id: "EMyZ621UbA0", from: "USA" }, { id: "ThcmIVJZ5F8", from: "Ecuador" },
  ];

  return (
    <section id="reviews" className="scroll-mt-20 border-y-[3px] border-[#0f172a] bg-blue-50 py-16 md:py-20 cv-auto">
      <div className="r-w space-y-14">
        <div>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-[#0f172a] mb-8">Satisfied parents from 190+ countries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {parentVideos.map((id) => <VideoCard key={id} videoId={id} label="Parent from UAE" />)}
          </div>
        </div>
        <div>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-[#0f172a] mb-8">Happy students worldwide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {studentVideos.map((v) => <VideoCard key={v.id} videoId={v.id} label={`Student from ${v.from}`} />)}
          </div>
        </div>
        <div>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-[#0f172a] mb-2">How we teach</h2>
          <p className="text-center text-base text-slate-600 font-medium mb-8">600+ trained teachers from 80+ countries</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {teacherVideos.map((v) => <VideoCard key={v.id} videoId={v.id} label={`Teacher from ${v.from}`} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoCard({ videoId, label }: { videoId: string; label: string }) {
  return (
    <article className="group bg-white border-[2.5px] border-[#0f172a] rounded-xl overflow-hidden shadow-[4px_4px_0_0_#0f172a] transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#1d4ed8]">
      <div className="relative aspect-video bg-slate-100 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt={label} width={400} height={225} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        {/* Play button */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white border-[2.5px] border-[#0f172a] text-red-600 shadow-[2px_2px_0_0_#0f172a] transition-transform duration-200 group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </span>
        </span>
      </div>
      <div className="px-4 py-3 flex items-center gap-2 bg-slate-50 border-t-[2px] border-[#0f172a]">
        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
        <p className="text-sm font-bold text-[#0f172a]">{label}</p>
      </div>
    </article>
  );
}

/* ─── University Section ─── */
function UniversitySection() {
  const universities = [
    { src: "/colleges/brown.webp", alt: "Brown University" },
    { src: "/colleges/california.webp", alt: "UC" },
    { src: "/colleges/caltech.webp", alt: "Caltech" },
    { src: "/colleges/harvard.webp", alt: "Harvard" },
    { src: "/colleges/michigan.webp", alt: "Michigan" },
    { src: "/colleges/nortedame.webp", alt: "Notre Dame" },
    { src: "/colleges/princeton.webp", alt: "Princeton" },
    { src: "/colleges/stanford.webp", alt: "Stanford" },
    { src: "/University-of-Michigan.png", alt: "Michigan State" },
    { src: "/University_of_Pretoria_Coat_of_Arms.png", alt: "Pretoria" },
    { src: "/Haarlem-University.png", alt: "Haarlem" },
    { src: "/UPenn_shield_with_banner.png", alt: "UPenn" },
    { src: "/University_of_Sharjah.png", alt: "Sharjah" },
    { src: "/Kentucky_State_University.png", alt: "Kentucky State" },
    { src: "/Bangor_Logo.webp", alt: "Bangor" },
    { src: "/Augusta_University.png", alt: "Augusta" },
  ];

  return (
    <section className="border-y-[3px] border-[#0f172a] bg-white py-16 md:py-20 cv-auto">
      <div className="r-w">
        <header className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-[#0f172a]">
            Your path to top universities
          </h2>
        </header>

        <dl className="grid gap-3 grid-cols-2 md:grid-cols-4 mb-10">
          {[
            { n: "3.8", l: "Average GPA" },
            { n: "100%", l: "University acceptance" },
            { n: "3%", l: "Ivy League" },
            { n: "75%", l: "Scholarships" },
          ].map((s) => (
            <div key={s.l} className="border-[2.5px] border-[#0f172a] bg-white p-4 text-center shadow-[3px_3px_0_0_#1d4ed8]">
              <dd className="text-2xl font-extrabold text-blue-700 tabular-nums">{s.n}</dd>
              <dt className="mt-1 text-[10px] font-bold text-slate-600 uppercase tracking-wider">{s.l}</dt>
            </div>
          ))}
        </dl>

        <section aria-label="University logos" className="is-marquee">
          <div className="is-marquee__fade" aria-hidden="true" />
          <div className="is-marquee__track">
            <div className="is-marquee__content">
              {universities.map((uni) => (
                <div key={uni.alt} className="flex items-center justify-center px-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img width={80} height={80} loading="lazy" src={uni.src} alt={uni.alt} className="h-auto w-16 md:w-24 object-contain" />
                </div>
              ))}
            </div>
            <div className="is-marquee__content" aria-hidden="true">
              {universities.map((uni) => (
                <div key={`dup-${uni.alt}`} className="flex items-center justify-center px-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img width={80} height={80} loading="lazy" src={uni.src} alt="" className="h-auto w-16 md:w-24 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

/* ─── FAQ Section ─── */
function FAQSection() {
  const faqs = [
    { q: "Is the school accredited internationally?", a: "Yes. International Schooling holds triple accreditation from NEASC, WASC, and Cognia - all recognized by the U.S. Department of Education." },
    { q: "Is the curriculum approved in the UAE?", a: "International Schooling offers the American Curriculum, which is globally accepted. The diploma is recognized by universities in the UAE and worldwide." },
    { q: "Will the diploma be accepted by universities?", a: "Yes. The American High School Diploma is accepted by universities in the UAE, USA, Canada, UK, Europe, Australia, and Asia." },
    { q: "Which curriculum does the school follow?", a: "American Curriculum aligned to Florida Department of Education standards, for KG through Grade 12." },
    { q: "Are AP courses available?", a: "Yes. We offer 40+ Advanced Placement courses through our College Board partnership (CEEB Code: 687123)." },
    { q: "How are classes conducted?", a: "All classes are live and interactive with certified teachers. Group classes have 10-15 students; one-to-one is fully personalized." },
    { q: "Can my child study while traveling?", a: "Yes. Students can attend from anywhere with internet access. Our flexible scheduling supports globally mobile families." },
    { q: "Are teachers internationally certified?", a: "Yes. All 600+ teachers are internationally certified, coming from 50+ countries and speaking 40+ languages." },
    { q: "How does the school support college admissions?", a: "Academic counseling, AP preparation, NCAA eligibility support, and structured college readiness pathways for Grades 9-12." },
    { q: "Can students transfer credits?", a: "Yes. Credit transfer is seamless with no academic gap, thanks to our accredited American curriculum." },
  ];

  return (
    <section id="faq" className="scroll-mt-28 border-y-[3px] border-[#0f172a] bg-white py-16 md:py-20 cv-auto">
      <div className="r-w">
        <header className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter text-[#0f172a]">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm text-slate-500 max-w-md mx-auto">
            Clear answers about our online schooling, accreditation, and student journey.
          </p>
        </header>
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white overflow-hidden">
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left [&::-webkit-details-marker]:hidden">
                <div className="flex flex-1 items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center border-2 border-[#0f172a] bg-blue-50 text-[11px] font-extrabold text-blue-700 group-open:bg-blue-700 group-open:text-white transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-bold text-[#0f172a] leading-snug">{faq.q}</span>
                </div>
                <div className="flex h-7 w-7 shrink-0 items-center justify-center border-2 border-[#0f172a] bg-slate-50 group-open:bg-blue-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#0f172a] transition-transform duration-200 group-open:rotate-180 group-open:text-white"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </summary>
              <div className="bg-blue-50 border-t-2 border-[#0f172a]">
                <p className="px-5 py-4 pl-[52px] text-sm leading-relaxed text-slate-700">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
