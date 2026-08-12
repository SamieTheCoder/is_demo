import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
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
            <a href="#why-us" className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-blue-700">Why Us</a>
            <a href="#programs" className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-blue-700">Programs</a>
            <a href="#accreditation" className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-blue-700">Accreditation</a>
            <a href="#reviews" className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-blue-700">Parent Reviews</a>
            <a href="#faq" className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-blue-700">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#book-demo" className="bg-blue-800 text-white hover-fill-button-1 border border-blue-200 w-max hover:text-white rounded-full">
              <span className="hover-fill-button-label flex px-5 py-2.5 text-base">
                Book<span className="hidden md:block px-1">Free</span> Demo
              </span>
            </a>
            <MobileNav />
          </div>
        </div>
      </header>

      <main>
        <article id="top">
          {/* Hero Section */}
          <section aria-labelledby="home-hero-title" className="r-w py-8 pt-4 md:py-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-8">
            <article className="space-y-6 order-1 lg:order-1 mt-0 lg:mt-0">
              <header>
                <div className="hidden lg:flex md:relative mb-2 text-center border border-orange-200/80 bg-orange-50 px-4 md:px-6 py-2 rounded-full w-max mx-auto md:mx-0">
                  <div className="absolute -right-2 -top-2 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" strokeWidth="1" className="fill-orange-100 stroke-orange-400" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
                    </svg>
                  </div>
                  <div className="relative text-amber-950">
                    <p className="text-xl font-bold leading-tight tracking-tight">Now Enrolling for 2026–2027</p>
                  </div>
                </div>
                <div className="hidden md:block text-center mb-2 md:mb-0 md:text-left text-blue-600">
                  <p className="text-xl font-bold leading-tight tracking-tight pb-1">September Seats Filling Fast</p>
                </div>
                <h2 className="text-center md:text-start text-2xl md:text-[27px] text-red-700 block">
                  <span>Unstable Schooling in UAE? 🇦🇪</span>
                  <span className="block text-2xl md:text-4xl text-emerald-600 pt-4 pb-6 md:pt-0 md:pb-0">No More School Problems.</span>
                  <span className="text-black">Join Safe &amp; Stable Online School</span>
                </h2>
              </header>

              <div className="flex flex-col items-center md:w-max justify-center lg:justify-start font-medium">
                <div className="md:mx-0 mx-auto inline-flex w-max items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1 text-gray-800 md:px-4 lg:mx-0">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex size-3 rounded-full bg-red-500" />
                  </span>
                  <p className="text-xl md:text-lg">Daily Live Group Classes</p>
                </div>
                <p className="text-lg bg-blue-50 rounded-b-xl px-2 border-x border-b border-blue-200">1 Teacher | 10-15 Students</p>
              </div>

              <p className="text-center md:text-start text-slate-600 font-semibold">
                <span className="font-semibold text-blue-600">15,000+</span> Students from{" "}
                <span className="font-semibold text-blue-600">190+</span> Countries
                <br className="md:hidden" />{" "}
                <span className="font-semibold text-blue-600">600+</span> Teachers Speaking{" "}
                <span className="font-semibold text-blue-600"><br className="hidden md:block" />40+</span> Languages{" "}
                <span className="font-semibold text-blue-600 ps-1">80+</span> Special educators.
              </p>

              <p className="w-full max-w-max text-[3.2vw] md:text-lg leading-7 font-medium px-1 md:px-4 py-0.5 bg-green-800 text-white text-center rounded-xl mx-auto md:mx-0">
                Fully Accredited by <span className="font-medium">NEASC, WASC &amp; Cognia, USA</span>
              </p>

              <a href="#book-demo" className="mx-auto md:mx-0 flex w-max rounded-full px-4 py-1 text-sm font-semibold text-xl transition bg-blue-700 text-white hover:bg-blue-800">
                Book Free Demo
              </a>
            </article>

            {/* Mobile Hero Info */}
            <div className="md:hidden relative mb-2 text-center rounded-full w-max mx-auto">
              <p className="text-xl font-bold leading-tight tracking-tight text-amber-950">Trusted Online School Since 2014</p>
            </div>
            <div className="md:hidden text-center mb-0 text-blue-600">
              <p className="text-xl font-bold leading-tight tracking-tight pb-1">September Seats Filling Fast</p>
            </div>

            {/* Mobile Slider */}
            <div className="md:hidden mb-4">
              <div className="px-3 text-center">
                <p className="text-gray-800 text-md font-semibold">Thousands of Successful Students</p>
              </div>
              <HeroSlider priority caption="2500+ Students From UAE" />
            </div>

            {/* Desktop Slider */}
            <div className="md:space-y-4 order-2 lg:order-2">
              <p className="text-center font-semibold text-blue-800 text-2xl md:hidden my-4">Best Online School in UAE 🇦🇪</p>
              <p className="md:hidden text-amber-950 text-center text-xl font-semibold">Globally Recognized Curriculum</p>
              <p className="hidden md:flex md:w-max md:mx-auto text-amber-950 mb-3 md:mb-1 text-center md:text-lg font-semibold">Thousands of Successful Students</p>
              <div className="hidden md:block">
                <HeroSlider priority caption="2500+ Students From UAE" />
              </div>
              <img src="/nice-strip.avif" width={400} height={36} alt="Accreditation badges" loading="lazy" className="mx-auto pb-4 pt-4 md:pt-0" />
            </div>
          </section>

          {/* Why Us Section */}
          <section id="why-us" className="scroll-mt-28 border-y border-blue-100 bg-blue-50/35 py-12 md:py-16">
            <div className="r-w space-y-8">
              <div className="space-y-3 text-center">
                <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-4xl">
                  Why Do UAE Parents Trust <br className="md:hidden" />
                  <span className="text-blue-600">International Schooling</span>?
                </h2>
                <p className="mx-auto max-w-3xl text-sm leading-7 text-gray-800 md:text-base font-bold">
                  100% American Curriculum, Certified Teachers, and Flexible Schooling — All in One Place.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
                {[
                  { title: "Live Group Classes", desc: "Live teaching & Real-time feedback." },
                  { title: "International Teachers", desc: "600+ trained teachers, 40+ Languages." },
                  { title: "International Curriculum", desc: "KG-12 American curriculum" },
                  { title: "Personalized Learning", desc: "Choose what works best for your child" },
                  { title: "Inclusive education", desc: "80+ Special Educators" },
                ].map((card) => (
                  <article key={card.title} className="rounded-2xl border border-slate-200 bg-white shadow-sm text-center px-4 py-2 flex flex-col items-center gap-2">
                    <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
                    <div className="text-[13px] text-slate-800 leading-6">
                      <p>{card.desc}</p>
                    </div>
                    <div className="why-card-bar" />
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Book Demo Section */}
          <BookDemoSection />

          {/* Framework Section */}
          <FrameworkSection />

          {/* Programs Section */}
          <ProgramsSection />

          {/* Book Demo CTA */}
          <CTAButton />

          {/* Accreditation Section */}
          <section id="accreditation" className="border-y border-emerald-100 bg-[linear-gradient(180deg,#ffffff_0%,#f0fdf4_100%)] py-8 md:py-16 cv-auto">
            <div className="r-w space-y-6">
              <header className="mx-auto max-w-3xl space-y-3 text-center">
                <h2 className="text-[18px] font-semibold text-gray-800 md:text-4xl">
                  <span>Fully Accredited</span> &amp; <span>Globally Recognized</span>
                </h2>
              </header>
              <div className="mt-8 grid items-center gap-4 md:mt-10 md:gap-5 lg:grid-cols-2">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/new-strip.webp" width={720} height={60} alt="Accreditations including NEASC, WASC, and Cognia" className="mx-auto h-auto w-full max-w-[720px]" loading="lazy" />
                </div>
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/second-strip.webp" width={960} height={139} alt="Recognitions including NCAA, College Board, and CID" className="mx-auto h-auto w-full max-w-[880px] lg:mb-6" loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          <CTAButton />

          {/* Comparison Table */}
          <ComparisonTable />

          <CTAButton />

          {/* Video Reviews */}
          <VideoReviews />

          {/* University Marquee */}
          <UniversitySection />

          <CTAButton />

          {/* Graduation Ceremony */}
          <section className="border-y border-violet-100 bg-violet-50/25 py-12 md:py-16">
            <div className="r-w space-y-4">
              <header className="space-y-3 text-center">
                <h2 className="text-center text-2xl font-semibold text-slate-900 md:text-4xl">
                  Graduation Ceremony 2026 - <span className="text-violet-700">Dubai</span>
                </h2>
              </header>
              <div className="flex flex-col items-center gap-6">
                <div className="w-full max-w-3xl space-y-5">
                  <HeroSlider
                    slides={[
                      { src: "/new-img/1.webp", label: "Graduation ceremony 1" },
                      { src: "/new-img/2.webp", label: "Graduation ceremony 2" },
                      { src: "/new-img/3.webp", label: "Graduation ceremony 3" },
                      { src: "/new-img/4.webp", label: "Graduation ceremony 4" },
                    ]}
                    containerClass="relative w-full aspect-video overflow-hidden rounded-3xl"
                  />
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-900 text-center">
                    Next Graduation Ceremony
                    <span className="text-violet-700 block">Spain | Colombia</span>
                  </h2>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection />

          <CTAButton />

          {/* Final CTA */}
          <section className="r-w py-10 md:py-12">
            <div className="mx-auto max-w-3xl">
              <div className="relative overflow-hidden rounded-2xl bg-blue-600 p-8 md:p-10 text-center shadow-lg">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-red-600">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Enrolment Open · Limited Seats
                </span>
                <h2 className="mt-5 text-2xl font-semibold leading-snug text-white md:text-3xl">
                  Give Your Child the Education
                  <span className="block text-emerald-300">They Deserve.</span>
                </h2>
                <div className="mt-6 flex justify-center">
                  <a href="#book-demo" className="rounded-full px-4 py-1 text-sm font-semibold text-lg transition bg-white text-blue-800 hover:bg-blue-50">
                    Book Free Demo Today
                  </a>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="r-w flex flex-col gap-1 py-2 border-t border-gray-200 text-gray-500 md:flex-row items-center md:justify-between">
        <p>Copyright © 2026 - International Schooling</p>
        <p>All Rights Reserved.</p>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=17273902419"
        className="fixed bottom-24 right-2 border-none z-50"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/whatsapp-new.webp" alt="WhatsApp" width={60} height={60} loading="lazy" />
      </a>
    </>
  );
}

/* ─── CTA Button ─── */
function CTAButton() {
  return (
    <section className="py-4">
      <a href="#book-demo" className="mx-auto flex w-max rounded-full px-4 py-1 text-sm font-semibold text-xl transition bg-blue-700 text-white hover:bg-blue-800">
        Book Free Demo
      </a>
    </section>
  );
}

/* ─── Book Demo Section ─── */
function BookDemoSection() {
  return (
    <section id="book-demo" className="scroll-mt-20 border-y border-violet-100 bg-violet-50/25 py-12 pt-6 md:py-16">
      <div className="r-w space-y-8">
        <aside className="w-full text-center">
          <p className="uppercase text-xl px-3 py-1 rounded-xl bg-blue-100 mb-2 w-max mx-auto">Book Free Demo Now</p>
          <h3 className="text-2xl font-semibold text-emerald-800 md:text-4xl">Meet Our Academic Experts</h3>
          <div className="relative z-20 overflow-visible text-black">
            <div className="py-5 text-start sm:py-6">
              <div className="mx-4 sm:mx-0 rounded-3xl border border-slate-200 bg-white shadow-[0_24px_70px_-45px_rgba(15,23,42,0.55)]">
                <div className="grid md:grid-cols-[22rem_minmax(0,1fr)]">
                  <aside className="hidden md:block order-2 border-b border-slate-200 p-6 md:order-none md:border-b-0 md:border-r">
                    <div className="space-y-3">
                      <div className="text-sm font-semibold text-slate-800 md:text-start text-center">In Just 30 Mins Live Meeting, you will get:</div>
                      <ul className="mt-3 space-y-3 text-sm text-slate-700 w-max mx-auto md:mx-0">
                        {["School Accreditations & Recognition", "Right Learning Program", "Benefits of the international curriculum", "Transcript & High School Diploma", "Easy School Fee Options", "College & University Support"].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </aside>
                  <div className="order-1 scroll-mt-24 px-2 py-6 md:p-6 md:order-none">
                    <h3 className="text-center md:text-start text-xl font-semibold text-slate-900">Select a date</h3>
                    <div className="mt-6">
                      <CalendarPlaceholder />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ─── Calendar Placeholder (SSR-friendly) ─── */
function CalendarPlaceholder() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div>
      <div className="flex items-center justify-between">
        <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm" aria-label="Previous month">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <div className="text-sm font-semibold text-slate-900">August 2026</div>
        <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm" aria-label="Next month">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {days.map((d) => <div key={d} className="py-2">{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 5 }, (_, i) => <div key={`e${i}`} className="h-11" aria-hidden="true" />)}
        {Array.from({ length: 31 }, (_, i) => (
          <button key={i} type="button" disabled className="h-11 rounded-full text-sm font-semibold cursor-not-allowed text-slate-300">{i + 1}</button>
        ))}
      </div>
    </div>
  );
}

/* ─── Framework Section ─── */
function FrameworkSection() {
  const leftCards = [
    { name: "Fully Accredited WASC", color: "#e53e3e" },
    { name: "Fully Accredited NEASC", color: "#dd6b20" },
    { name: "Fully Accredited Cognia", color: "#285e61" },
    { name: "Students Athlete Support", color: "#d69e2e" },
    { name: "University Pathways", color: "#38a169" },
    { name: "Project-Based Learning", color: "#3182ce" },
    { name: "Clubs & engagement activities", color: "#6b46c1" },
    { name: "AP Courses", color: "#c53030" },
  ];
  const rightCards = [
    { name: "Special Education Needs", color: "#c05621" },
    { name: "Personalized Learning", color: "#b7791f" },
    { name: "American Curriculum", color: "#276749" },
    { name: "Flexible Learning", color: "#2b6cb0" },
    { name: "Personal & Career Counseling", color: "#553c9a" },
    { name: "EdTech Tools", color: "#3182ce" },
    { name: "Live Online Classes", color: "#38a169" },
    { name: "Future-Ready Skills", color: "#d69e2e" },
  ];
  const stats = [
    { n: "3.8", l: "Average GPA" },
    { n: "100%", l: "University Acceptance" },
    { n: "3%", l: "Ivy League Acceptance" },
    { n: "75%", l: "International Scholarships" },
  ];

  return (
    <div className="il-page cv-auto">
      <svg aria-hidden="true" style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0,overflow:"hidden"}} viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="1200" cy="80" rx="500" ry="380" fill="rgba(49,130,206,0.05)" />
        <ellipse cx="100" cy="820" rx="420" ry="320" fill="rgba(229,62,62,0.04)" />
        <ellipse cx="700" cy="900" rx="360" ry="240" fill="rgba(56,161,105,0.04)" />
      </svg>
      <div className="il-inner">
        <div className="il-head">
          <h2 className="il-h1">
            Traditional Schooling Doesn&apos;t Fit{" "}
            <em className="relative inline-block pl-2">
              Every Child Anymore
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5 Q50 0 100 4 Q150 8 200 3" stroke="#1e52e1" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </em>
          </h2>
          <p className="il-desc">
            Whether your family <span className="font-semibold">travels, relocates, or needs flexibility.</span>
          </p>
        </div>
        <div className="il-body">
          <div className="il-col">
            {leftCards.map((card) => (
              <div key={card.name} className="il-card" style={{ borderColor: `${card.color}33` }}>
                <div className="il-card-bar" style={{ background: card.color }} />
                <div className="il-card-info">
                  <div className="il-card-name">{card.name}</div>
                </div>
                <div className="il-dot" style={{ background: card.color }} />
              </div>
            ))}
          </div>
          <div className="il-diag w-full">
            <div className="il-tilt">
              <div className="il-tilt-inner">
                <svg className="il-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fff" stopOpacity=".4" />
                      <stop offset="50%" stopColor="#fff" stopOpacity="0" />
                      <stop offset="100%" stopColor="#fff" stopOpacity=".2" />
                    </linearGradient>
                  </defs>
                  <circle cx="300" cy="300" r="299" fill="none" stroke="#3182ce" strokeWidth="0.8" strokeDasharray="5 9" opacity="0.18" />
                  <circle cx="300" cy="300" r="310" fill="none" stroke="#3182ce" strokeWidth="0.5" strokeDasharray="2 14" opacity="0.10" />
                  <g>
                    {/* Ring 1 - Outer (clockwise) */}
                    <g className="r1">
                      <defs>
                        <path id="ap-r1-0" d="M 312.6 49.3 A 251 251 0 0 1 488.1 133.8" />
                        <path id="ap-r1-1" d="M 503.8 153.5 A 251 251 0 0 1 547.2 343.4" />
                        <path id="ap-r1-2" d="M 420.1 520.3 A 251 251 0 0 0 541.5 368.0" />
                        <path id="ap-r1-3" d="M 202.6 531.3 A 251 251 0 0 0 397.3 531.3" />
                        <path id="ap-r1-4" d="M 58.4 368.0 A 251 251 0 0 0 179.8 520.3" />
                        <path id="ap-r1-5" d="M 52.7 343.4 A 251 251 0 0 1 96.1 153.5" />
                        <path id="ap-r1-6" d="M 111.8 133.8 A 251 251 0 0 1 287.3 49.3" />
                      </defs>
                      {/* Segment 1 */}
                      <g><path d="M 304.5 10 A 290 290 0 0 1 523.8 115.6 L 469.8 160.1 A 220 220 0 0 0 303.4 80 Z" fill="#e53e3e" stroke="#fff" strokeWidth="2" /><text fontSize="10" fontWeight="500" fontFamily="system-ui, sans-serif" fill="#fff" letterSpacing="0.02em"><textPath href="#ap-r1-0" startOffset="50%" textAnchor="middle">FULLY ACCREDITED WASC</textPath></text></g>
                      {/* Segment 2 */}
                      <g><path d="M 529.5 122.7 A 290 290 0 0 1 583.7 360 L 515.2 345.5 A 220 220 0 0 0 474.1 165.5 Z" fill="#dd6b20" stroke="#fff" strokeWidth="2" /><text fontSize="10" fontWeight="500" fontFamily="system-ui, sans-serif" fill="#fff" letterSpacing="0.02em"><textPath href="#ap-r1-1" startOffset="50%" textAnchor="middle">FULLY ACCREDITED NEASC</textPath></text></g>
                      {/* Segment 3 */}
                      <g><path d="M 581.6 368.9 A 290 290 0 0 1 429.9 559.2 L 398.5 496.6 A 220 220 0 0 0 513.6 352.3 Z" fill="#285e61" stroke="#fff" strokeWidth="2" /><text fontSize="10" fontWeight="500" fontFamily="system-ui, sans-serif" fill="#fff" letterSpacing="0.02em"><textPath href="#ap-r1-2" startOffset="50%" textAnchor="middle">FULLY ACCREDITED COGNIA</textPath></text></g>
                      {/* Segment 4 */}
                      <g><path d="M 421.7 563.2 A 290 290 0 0 1 178.2 563.2 L 207.6 499.6 A 220 220 0 0 0 392.3 499.6 Z" fill="#d69e2e" stroke="#fff" strokeWidth="2" /><text fontSize="10" fontWeight="500" fontFamily="system-ui, sans-serif" fill="#fff" letterSpacing="0.02em"><textPath href="#ap-r1-3" startOffset="50%" textAnchor="middle">STUDENTS ATHLETE SUPPORT</textPath></text></g>
                      {/* Segment 5 */}
                      <g><path d="M 170 559.2 A 290 290 0 0 1 18.3 368.9 L 86.3 352.3 A 220 220 0 0 0 201.4 496.6 Z" fill="#38a169" stroke="#fff" strokeWidth="2" /><text fontSize="10" fontWeight="500" fontFamily="system-ui, sans-serif" fill="#fff" letterSpacing="0.02em"><textPath href="#ap-r1-4" startOffset="50%" textAnchor="middle">UNIVERSITY PATHWAYS</textPath></text></g>
                      {/* Segment 6 */}
                      <g><path d="M 16.2 360 A 290 290 0 0 1 70.4 122.7 L 125.8 165.5 A 220 220 0 0 0 84.7 345.5 Z" fill="#3182ce" stroke="#fff" strokeWidth="2" /><text fontSize="10" fontWeight="500" fontFamily="system-ui, sans-serif" fill="#fff" letterSpacing="0.02em"><textPath href="#ap-r1-5" startOffset="50%" textAnchor="middle">PROJECT-BASED LEARNING</textPath></text></g>
                      {/* Segment 7 */}
                      <g><path d="M 76.1 115.6 A 290 290 0 0 1 295.4 10 L 296.5 80 A 220 220 0 0 0 130.1 160.1 Z" fill="#6b46c1" stroke="#fff" strokeWidth="2" /><text fontSize="10" fontWeight="500" fontFamily="system-ui, sans-serif" fill="#fff" letterSpacing="0.02em"><textPath href="#ap-r1-6" startOffset="50%" textAnchor="middle">CLUBS &amp; ENGAGEMENT</textPath></text></g>
                      <circle cx="300" cy="300" r="290" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                      <circle cx="300" cy="300" r="220" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                    </g>
                    {/* Ring 2 - Middle (counter-clockwise) */}
                    <g className="r2">
                      <defs>
                        <path id="ap-r2-0" d="M 310.3 117.2 A 183 183 0 0 1 453 199.7" />
                        <path id="ap-r2-1" d="M 463.3 217.5 A 183 183 0 0 1 463.3 382.4" />
                        <path id="ap-r2-2" d="M 310.3 482.7 A 183 183 0 0 0 453 400.2" />
                        <path id="ap-r2-3" d="M 146.9 400.2 A 183 183 0 0 0 289.6 482.7" />
                        <path id="ap-r2-4" d="M 136.6 382.4 A 183 183 0 0 1 136.6 217.5" />
                        <path id="ap-r2-5" d="M 146.9 199.7 A 183 183 0 0 1 289.6 117.2" />
                      </defs>
                      <g><path d="M 303.3 84 A 216 216 0 0 1 485.3 189 L 433.8 219.8 A 156 156 0 0 0 302.4 144 Z" fill="#fff5f5" stroke="#c53030" strokeWidth="1.2" /><text fontSize="9" fontWeight="500" fontFamily="system-ui, sans-serif" fill="#c53030" letterSpacing="0.02em"><textPath href="#ap-r2-0" startOffset="50%" textAnchor="middle">AP COURSES</textPath></text></g>
                      <g><path d="M 488.7 194.9 A 216 216 0 0 1 488.7 405 L 436.3 375.8 A 156 156 0 0 0 436.3 224.1 Z" fill="#fffaf0" stroke="#c05621" strokeWidth="1.2" /><text fontSize="9" fontWeight="500" fontFamily="system-ui, sans-serif" fill="#c05621" letterSpacing="0.02em"><textPath href="#ap-r2-1" startOffset="50%" textAnchor="middle">SPECIAL EDUCATION NEEDS</textPath></text></g>
                      <g><path d="M 485.3 410.9 A 216 216 0 0 1 303.3 515.9 L 302.4 455.9 A 156 156 0 0 0 433.8 380.1 Z" fill="#fffff0" stroke="#b7791f" strokeWidth="1.2" /><text fontSize="9" fontWeight="500" fontFamily="system-ui, sans-serif" fill="#b7791f" letterSpacing="0.02em"><textPath href="#ap-r2-2" startOffset="50%" textAnchor="middle">PERSONALIZED LEARNING</textPath></text></g>
                      <g><path d="M 296.6 515.9 A 216 216 0 0 1 114.6 410.9 L 166.1 380.1 A 156 156 0 0 0 297.5 455.9 Z" fill="#f0fff4" stroke="#276749" strokeWidth="1.2" /><text fontSize="9" fontWeight="500" fontFamily="system-ui, sans-serif" fill="#276749" letterSpacing="0.02em"><textPath href="#ap-r2-3" startOffset="50%" textAnchor="middle">AMERICAN CURRICULUM</textPath></text></g>
                      <g><path d="M 111.2 405 A 216 216 0 0 1 111.2 194.9 L 163.6 224.1 A 156 156 0 0 0 163.6 375.8 Z" fill="#ebf8ff" stroke="#2b6cb0" strokeWidth="1.2" /><text fontSize="9" fontWeight="500" fontFamily="system-ui, sans-serif" fill="#2b6cb0" letterSpacing="0.02em"><textPath href="#ap-r2-4" startOffset="50%" textAnchor="middle">FLEXIBLE LEARNING</textPath></text></g>
                      <g><path d="M 114.6 189 A 216 216 0 0 1 296.6 84 L 297.5 144 A 156 156 0 0 0 166.1 219.8 Z" fill="#faf5ff" stroke="#553c9a" strokeWidth="1.2" /><text fontSize="9" fontWeight="500" fontFamily="system-ui, sans-serif" fill="#553c9a" letterSpacing="0.02em"><textPath href="#ap-r2-5" startOffset="50%" textAnchor="middle">CAREER COUNSELING</textPath></text></g>
                      <circle cx="300" cy="300" r="216" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                      <circle cx="300" cy="300" r="156" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                    </g>
                    {/* Ring 3 - Inner (clockwise) */}
                    <g className="r3">
                      <defs>
                        <path id="ap-r3-0" d="M 312 177.5 A 123 123 0 0 1 412 350.7" />
                        <path id="ap-r3-1" d="M 200 371.6 A 123 123 0 0 0 399.9 371.6" />
                        <path id="ap-r3-2" d="M 187.9 350.7 A 123 123 0 0 1 287.9 177.5" />
                      </defs>
                      <g><path d="M 302.3 148 A 152 152 0 0 1 432.8 373.9 L 385.6 347.6 A 98 98 0 0 0 301.5 202 Z" fill="#3182ce" stroke="#fff" strokeWidth="2" /><text fontSize="13" fontWeight="500" fontFamily="system-ui, sans-serif" fill="#fff" letterSpacing="0.02em"><textPath href="#ap-r3-0" startOffset="50%" textAnchor="middle">EDTECH TOOLS</textPath></text></g>
                      <g><path d="M 430.4 378 A 152 152 0 0 1 169.5 378 L 215.9 350.3 A 98 98 0 0 0 384 350.3 Z" fill="#38a169" stroke="#fff" strokeWidth="2" /><text fontSize="13" fontWeight="500" fontFamily="system-ui, sans-serif" fill="#fff" letterSpacing="0.02em"><textPath href="#ap-r3-1" startOffset="50%" textAnchor="middle">LIVE ONLINE CLASSES</textPath></text></g>
                      <g><path d="M 167.1 373.9 A 152 152 0 0 1 297.6 148 L 298.4 202 A 98 98 0 0 0 214.3 347.6 Z" fill="#d69e2e" stroke="#fff" strokeWidth="2" /><text fontSize="13" fontWeight="500" fontFamily="system-ui, sans-serif" fill="#fff" letterSpacing="0.02em"><textPath href="#ap-r3-2" startOffset="50%" textAnchor="middle">FUTURE-READY SKILLS</textPath></text></g>
                      <circle cx="300" cy="300" r="152" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                      <circle cx="300" cy="300" r="98" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                    </g>
                  </g>
                  <circle cx="300" cy="300" r="96" fill="#eff6ff" stroke="rgba(49,130,206,0.3)" strokeWidth="1.5" />
                  <circle cx="300" cy="300" r="84" fill="none" stroke="rgba(49,130,206,0.10)" strokeWidth="10" />
                </svg>
              </div>
              <div className="il-core">
                <div className="il-core-circle">
                  <div className="il-core-icon">💡</div>
                  <div className="il-core-title">Framework</div>
                </div>
              </div>
            </div>
          </div>
          <div className="il-col right">
            {rightCards.map((card) => (
              <div key={card.name} className="il-card" style={{ borderColor: `${card.color}33` }}>
                <div className="il-card-bar" style={{ background: card.color }} />
                <div className="il-card-info">
                  <div className="il-card-name">{card.name}</div>
                </div>
                <div className="il-dot" style={{ background: card.color }} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 py-6 px-2 flex flex-col items-center justify-center">
          <h2 className="mt-2 mb-4 text-center font-semibold text-2xl">School Results</h2>
          <div className="il-stats">
            {stats.map((s) => (
              <div key={s.l} className="il-stat">
                <div className="il-stat-n">{s.n}</div>
                <div className="il-stat-l font-semibold">{s.l}</div>
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
    "Group Live Classes", "Fixed Timings", "Each Class is 60 Minutes",
    "Fixed Dates for Assessments and Assignments", "Compulsory Collaborative Assignments",
    "3 Student Counseling Sessions", "3 Career Counseling Sessions",
    "3 Parent Teacher Meetings", "Fixed Start Date for Enrollment",
    "Academic Year Duration is 42–45 Weeks", "Fixed Schedule for Holidays",
  ];
  const oneToOneFeatures = [
    "One-To-One Live Classes", "Flexible Timings", "Each Class of 50 Minutes",
    "Flexible Dates for Assessments and Assignments", "Exemption from Collaborative Assignments",
    "6 Student Counseling Sessions", "6 Career Counseling Sessions",
    "6 Parent Teacher Meetings", "Flexible Start Date for Enrollment",
    "Academic Year Duration is 42 Weeks", "Flexible Schedule of Holidays",
  ];

  return (
    <section id="programs" className="relative scroll-mt-28 overflow-hidden bg-white py-10 md:py-12">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-14">
        <header className="text-center md:mb-14 mb-8">
          <h2 className="text-[2rem] sm:text-[2.6rem] md:text-[2.9rem] font-extrabold leading-tight text-slate-900">
            One School. Multiple{" "}
            <span className="text-[#1e52e1] ps-2">Learning Paths.</span>
          </h2>
          <p className="text-[1.05rem] text-slate-800 mt-4 max-w-xl mx-auto">
            Perfect for <span className="font-semibold">Athletes, Traveling Families, Gifted Learners</span>, and students who need flexible, personalized education.
          </p>
        </header>

        <div className="grid md:grid-cols-2 md:divide-x divide-slate-200 text-center gap-10 md:gap-0">
          <ProgramCard title="Group Learning" subtitle="10-15 STUDENTS | 1 TEACHER" features={groupFeatures} desc="Group learning offers a dynamic classroom experience with fixed timings and collaborative projects." image="/programs/gl.webp" />
          <ProgramCard title="One-To-One Learning" subtitle="1 STUDENT | 1 TEACHER" features={oneToOneFeatures} desc="Our one-to-one learning offers personalized live classes designed to fit your schedule." image="/programs/one.webp" />
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ title, subtitle, features, desc, image }: { title: string; subtitle: string; features: string[]; desc: string; image?: string }) {
  return (
    <div className="px-4 md:px-10 first:pl-0 last:pr-0">
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={title} loading="lazy" className="border border-blue-200 rounded-3xl mb-4" />
      )}
      <p className="text-[14px] font-bold tracking-[0.13em] uppercase mb-3 text-[#0e7490]">{subtitle}</p>
      <h3 className="text-[1.3rem] sm:text-[1.6rem] font-extrabold leading-tight mb-4 text-[#0e7490]">{title}</h3>
      <p className="text-[0.92rem] text-slate-700 font-medium leading-relaxed mb-8">{desc}</p>
      <ul className="space-y-4 text-left">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#0e749015]">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0e7490" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </span>
            <span className="text-[0.88rem] text-slate-700 leading-snug">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Comparison Table ─── */
function ComparisonTable() {
  const rows = [
    { need: "Curriculum", is: "100% International curriculum", other: "Old traditional methods" },
    { need: "Teachers", is: "600+ Certified International Teachers", other: "Limited and unverified" },
    { need: "Learning approach", is: "Personalized For Every Child", other: "One-size-fits-all" },
    { need: "Class format", is: "Live and Interactive In Real Time", other: "Pre-recorded videos only" },
    { need: "Assessments", is: "Continuous and Ongoing", other: "No structured assessments" },
    { need: "Environment", is: "Safe and Comfortable From Home", other: "Unmonitored online spaces" },
    { need: "Skills", is: "Future-ready: AI, Global, Digital", other: "Outdated skill sets" },
    { need: "Schedule", is: "Fully Flexible, Learn Anytime", other: "Fixed rigid timings" },
    { need: "Personal Counseling", is: "Career Counseling", other: "No personalized guidance" },
    { need: "On-Demand PTMs", is: "Regular Parent-Teacher Meetings", other: "PTMs restricted to term ends" },
    { need: "Transfer Without Academic Gap", is: "Seamless Credit Transfer", other: "No credit transfer, academic gap" },
    { need: "Students Clubs & Activities", is: "Student engagement & global peer networking", other: "Limited or no extracurricular interactions" },
    { need: "Community", is: "Global Student Network", other: "No community support" },
  ];

  return (
    <section className="border-y border-emerald-100 bg-[linear-gradient(180deg,#ffffff_0%,#f0fdf4_100%)] py-8 md:py-16 cv-auto">
      <div className="r-w space-y-6">
        <header className="space-y-3 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-4xl">
            Why Parents Choose <span className="text-blue-700">International Schooling</span>
          </h2>
        </header>
        <p className="mx-auto max-w-2xl text-center font-medium text-slate-700">
          A clearer side-by-side comparison of what your child actually gets with International Schooling compared with other online schools.
        </p>
        <div className="rounded-3xl border border-blue-100 bg-white shadow-[0_20px_50px_rgba(59,130,246,0.08)] relative">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-3xl">
              <caption className="sr-only">Comparison between International Schooling and other online schools</caption>
              <thead>
                <tr className="text-sm font-semibold md:text-base">
                  <th className="border-b border-r border-emerald-100 bg-emerald-50 p-4 text-left text-emerald-950 md:p-5">What your child needs</th>
                  <th className="border-x border-b border-blue-200 bg-blue-700 p-4 text-center text-white md:p-5">
                    <span>International Schooling</span>
                  </th>
                  <th className="border-b border-blue-100 bg-slate-50 p-4 text-center text-slate-700 md:p-5">Other Online Schools</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.need} className="text-sm md:text-base">
                    <th scope="row" className="border-r border-b border-emerald-100 bg-emerald-50/70 p-4 text-left font-semibold text-slate-900 md:p-5">{row.need}</th>
                    <td className="border-x border-b border-blue-100 bg-blue-50 p-4 text-center font-semibold text-blue-900 md:p-5">
                      <span className="mx-auto block max-w-[18rem]">{row.is}</span>
                    </td>
                    <td className="border-b border-blue-100 bg-white p-4 text-center font-medium text-slate-600 md:p-5">
                      <span className="mx-auto block max-w-[16rem]">{row.other}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Video Reviews ─── */
function VideoReviews() {
  const parentVideos = ["yc8Wyw2wFB0", "cmwTOV_KJt4", "UnycpGoKr9E", "j19zsD2Xydc", "fhr5DMtrOYo", "s18YrLpSiwo"];
  const studentVideos = [
    { id: "3C9m7VBvVv8", from: "UAE" },
    { id: "5xU9tclkHjc", from: "UAE" },
    { id: "PV7SccwjeFg", from: "UAE" },
    { id: "HzRydo9QyEs", from: "Mexico" },
    { id: "QK9V3L0srUo", from: "Israel" },
    { id: "SWK41iYZVsU", from: "Spain" },
  ];
  const teacherVideos = [
    { id: "mbsR8F94dHk", from: "USA" },
    { id: "EMyZ621UbA0", from: "USA" },
    { id: "ThcmIVJZ5F8", from: "Ecuador" },
  ];

  return (
    <section id="reviews" className="scroll-mt-20 space-y-6 md:space-y-8 border-y border-blue-100 bg-blue-50/35 cv-auto">
      <div className="r-w pb-5 pt-3 md:pt-6">
        <h2 className="text-center text-[5vw] md:text-4xl font-bold py-8 text-gray-600">Satisfied Parents from 190+ Countries</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {parentVideos.map((id) => (
            <VideoCard key={id} videoId={id} label="Parent from UAE" />
          ))}
        </div>

        <h2 className="text-center text-lg md:text-4xl font-semibold py-12 text-gray-600">Happy Students from 190+ Countries</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {studentVideos.map((v) => (
            <VideoCard key={v.id} videoId={v.id} label={`Student from ${v.from}`} />
          ))}
        </div>

        <h2 className="text-center text-4xl font-semibold py-12 pb-2 text-gray-600">How we Teach</h2>
        <p className="text-center text-xl pb-10">600+ Trained &amp; Experienced Teachers <br />from 80+ Countries</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teacherVideos.map((v) => (
            <VideoCard key={v.id} videoId={v.id} label={`Teacher from ${v.from}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ videoId, label }: { videoId: string; label: string }) {
  return (
    <article className="overflow-hidden">
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt={label}
          width={400}
          height={225}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border bg-white/90 text-3xl text-red-600 shadow-2xl">▶</span>
        </span>
      </div>
      <div className="bg-blue-600 w-max mx-auto rounded-b-2xl px-3 py-2 text-center">
        <p className="text-white text-sm font-semibold">{label}</p>
      </div>
    </article>
  );
}

/* ─── University Section ─── */
function UniversitySection() {
  const stats = [
    { n: "3.8", l: "Average GPA" },
    { n: "100%", l: "Universities Acceptance" },
    { n: "3%", l: "Acceptance in Ivy League Colleges" },
    { n: "75%", l: "International Scholarships" },
  ];

  const universities = [
    { src: "/colleges/brown.webp", alt: "brown-university", country: "USA" },
    { src: "/colleges/california.webp", alt: "california-university", country: "USA" },
    { src: "/colleges/caltech.webp", alt: "caltech-university", country: "USA" },
    { src: "/colleges/harvard.webp", alt: "harvard-university", country: "USA" },
    { src: "/colleges/michigan.webp", alt: "michigan-university", country: "USA" },
    { src: "/colleges/nortedame.webp", alt: "nortedame-university", country: "USA" },
    { src: "/colleges/princeton.webp", alt: "princeton-university", country: "USA" },
    { src: "/colleges/stanford.webp", alt: "stanford-university", country: "USA" },
    { src: "/University-of-Michigan.png", alt: "university-of-michigan", country: "USA" },
    { src: "/University_of_Pretoria_Coat_of_Arms.png", alt: "university-of-pretoria", country: "South Africa" },
    { src: "/Haarlem-University.png", alt: "haarlem-university", country: "Netherlands" },
    { src: "/UPenn_shield_with_banner.png", alt: "upenn", country: "USA" },
    { src: "/University_of_Sharjah.png", alt: "university-of-sharjah", country: "UAE" },
    { src: "/Seal_of_Colegio_de_San_Juan_de_Letran.png", alt: "san-juan-de-letran", country: "Philippines" },
    { src: "/Kentucky_State_University.png", alt: "kentucky-state-university", country: "USA" },
    { src: "/Bangor_Logo.webp", alt: "bangor-university", country: "United Kingdom" },
    { src: "/Augusta_University.png", alt: "augusta-university", country: "USA" },
  ];

  return (
    <section className="border-y border-sky-100 bg-sky-50/30 py-12 md:py-16 cv-auto">
      <div className="r-w">
        <header className="space-y-3 text-center">
          <h2 className="text-xl font-semibold text-gray-800 md:text-4xl">
            Your Path to <span>Top Universities &amp; Colleges</span>
          </h2>
        </header>
        <dl className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
              <dd className="text-2xl font-semibold text-blue-700 md:text-3xl">{s.n}</dd>
              <dt className="mt-1 font-semibold text-sm text-slate-900">{s.l}</dt>
            </div>
          ))}
        </dl>

        {/* University Logo Marquee */}
        <section aria-label="University logos" className="is-marquee mt-8">
          <div className="is-marquee__fade" aria-hidden="true" />
          <div className="is-marquee__track">
            <div className="is-marquee__content">
              {universities.map((uni) => (
                <div key={uni.alt} className="flex flex-col items-center justify-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img width={128} height={128} loading="lazy" src={uni.src} alt={uni.alt} className="h-auto w-24 md:w-32" />
                  <p className="text-center text-sm font-bold text-[#5D5D5D]">{uni.country}</p>
                </div>
              ))}
            </div>
            <div className="is-marquee__content" aria-hidden="true">
              {universities.map((uni) => (
                <div key={`dup-${uni.alt}`} className="flex flex-col items-center justify-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img width={128} height={128} loading="lazy" src={uni.src} alt="" className="h-auto w-24 md:w-32" />
                  <p className="text-center text-sm font-bold text-[#5D5D5D]">{uni.country}</p>
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
    { q: "Is the school accredited internationally?", a: "Yes, International Schooling is accredited by the NEASC, WASC, and Cognia." },
    { q: "Is the curriculum approved in the UAE?", a: "Yes, International Schooling offers the American Curriculum, and it is globally approved." },
    { q: "Will the diploma be accepted by universities in the UAE and worldwide?", a: "Yes, the American Diploma is accepted in the UAE and worldwide." },
    { q: "Is the school KHDA-approved or recognized?", a: "No, International Schooling is not KHDA-approved or recognized." },
    { q: "Which curriculum does the school follow?", a: "International Schooling follows the American Curriculum." },
    { q: "Do you offer American, British, IB, or another curriculum?", a: "International Schooling offers the American Curriculum." },
    { q: "Are AP courses or advanced academic programs available?", a: "Yes, AP courses or Advanced Academic programs are available." },
    { q: "How do you ensure academic quality and student performance?", a: "International Schooling ensures student performance and academic quality through constant tests, quizzes, accredited standards, certified teachers, and continuous academic monitoring." },
    { q: "How are exams and assessments conducted?", a: "All exams and assessments are conducted through online mode, under constant monitoring from teachers." },
    { q: "Can students transfer credits from previous schools?", a: "Yes, students can transfer credits from previous schools." },
    { q: "Are classes live, recorded, or both?", a: "All the classes are live." },
    { q: "Can my child study from the UAE while traveling internationally?", a: "Yes, your child can study while travelling." },
    { q: "Is the learning schedule flexible for UAE students?", a: "Yes, students can opt for a Learning schedule based on their availability." },
    { q: "How many live classes are conducted each week?", a: "Depends on the selected learning program." },
    { q: "What technology or devices are required for online learning?", a: "A computer/tablet with internet access." },
    { q: "Are teachers internationally certified and experienced?", a: "Yes, all our teachers are internationally certified and experienced." },
    { q: "How does the school offer academic and counseling support?", a: "International schooling offers academic, career, and personal counselling sessions throughout the academic year." },
    { q: "How do students interact with teachers and classmates?", a: "Students interact with teachers and classmates through live classes and by participating in different extracurricular activities." },
    { q: "Can students apply to universities in the UAE, USA, Canada, and Europe?", a: "International Schooling offers regular qualifications, including American High School Diploma and American transcripts, which are globally accepted for college and university applications." },
    { q: "Does the school help students prepare for college admissions and future careers?", a: "Yes, International Schooling offers academic counselling for college admissions and future careers." },
  ];

  return (
    <section id="faq" className="scroll-mt-28 border-y border-slate-200 bg-white py-12 md:py-16 relative overflow-hidden cv-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[3px] rounded-b-md bg-gradient-to-r from-blue-600 to-cyan-400" />
      <div className="r-w relative">
        <header className="space-y-3 text-center mb-12">
          <h2 className="text-2xl font-semibold text-slate-500 md:text-4xl tracking-tight">
            Frequently <span className="text-[#1e6afb]">Asked Questions</span>
          </h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto leading-7">
            Clear answers to help you understand our online schooling experience, accreditation, and student journey.
          </p>
        </header>
        <div className="flex flex-col gap-2.5">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-2xl overflow-hidden border border-[#e8edf5] open:border-[rgba(30,106,251,0.25)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] open:shadow-[0_4px_20px_rgba(30,106,251,0.08)] transition-all duration-200">
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 bg-white px-5 py-[18px] text-left">
                <div className="flex flex-1 items-center gap-3.5">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#f0f4ff] text-[11px] font-bold text-[#1e6afb] transition-colors duration-200 group-open:bg-[#1e6afb] group-open:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.88rem] font-semibold leading-snug text-slate-800">{faq.q}</span>
                </div>
                <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full bg-[#f0f4ff] transition-colors duration-200 group-open:bg-[#1e6afb]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1e6afb] transition-transform duration-300 group-open:rotate-180 group-open:text-white"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </summary>
              <div className="bg-white">
                <p className="px-5 pb-5 pl-[62px] text-[0.83rem] leading-7 text-slate-500">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
