# PRODUCT.md

## Product

**Name:** International Schooling
**Type:** Online K-12 school (landing page for UAE market)
**URL:** uae.internationalschooling.org
**Since:** 2014

## What it does

International Schooling is a fully accredited online school offering the American Curriculum for KG through Grade 12. Students attend daily live group classes (1 teacher : 10–15 students) from anywhere in the world. The school serves 15,000+ students across 190+ countries with 600+ teachers speaking 40+ languages and 80+ special educators. 

## Primary audience

Parents in the UAE looking for stable, flexible online schooling for their children — typically families who travel, relocate frequently, have children with special needs, or are dissatisfied with local schooling options. Decision-makers are parents; end-users are students aged 4–18.

## Core value proposition

A safe, stable, fully accredited (NEASC, WASC, Cognia USA) American-curriculum online school with live daily classes, international teachers, personalized learning, and inclusive education — operating since 2014 with proven outcomes (2,500+ students from UAE alone).

## Tone and personality

- Trustworthy and reassuring (parents are making a major decision about their child's education)
- Confident but not aggressive — evidence over hype
- Warm and human — real students, real teachers, real outcomes
- Professional with educational authority
- Urgency where appropriate (enrollment deadlines) but never desperate

## Brand

- **Logo:** `/assets/logo.webp` (horizontal wordmark)
- **Primary color:** Blue (#1d4ed8 / #2563eb range) — trust, education, stability
- **Secondary accent:** Emerald/green (#059669 range) — growth, success, positivity
- **Alert/urgency:** Red (#dc2626) — used sparingly for enrollment deadlines
- **Highlight:** Amber/orange — enrollment badges, sparkle moments
- **Background:** White with light blue tints (#f8fbff, blue-50)
- **Display font:** Space Grotesk (headings, nav)
- **Body font:** Plus Jakarta Sans (paragraphs, UI)
- **Serif:** Used for `<p>` tags via CSS override (`font-family: var(--font-serif)`)

## Tech stack

- Next.js 16.3 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript
- No component library — custom components
- No state management library
- Static assets in `/public`

## Platform

- **Target:** Web (desktop + mobile), responsive
- **Priority:** Mobile-first for UAE parents (WhatsApp-driven traffic)
- **No native apps** in scope for this surface

## Key sections (landing page)

1. Hero — problem statement + solution + CTA
2. Why Us — 5 trust pillars
3. Programs — curriculum offerings
4. Accreditation — NEASC, WASC, Cognia badges
5. Book Demo — calendar-based scheduling form (core conversion)
6. Parent Reviews / Testimonials
7. FAQ
8. Footer

## Conversion goal

Book a free 30-minute demo call with academic experts. The calendar form is the primary CTA.

## Constraints

- Must maintain all existing functionality — this is a live product
- Content accuracy is critical (accreditation claims, statistics)
- WhatsApp integration button present for direct contact
- University logos/crests used under fair-use for credibility
- SEO matters: existing meta tags, canonical URLs, structured data must be preserved
- Performance: images are already WebP/AVIF optimized, fonts self-hosted with `font-display: optional`
