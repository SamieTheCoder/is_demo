import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trusted & Recommended online school in UAE",
  description:
    "Trusted & Recommended online school in UAE offering the American Curriculum for KG - Grade 12. Enroll now and experience quality online schooling!",
  robots: "index, follow",
  openGraph: {
    title: "Trusted & Recommended online school in UAE",
    description:
      "Trusted & Recommended online school in UAE offering the American Curriculum for KG - Grade 12. Enroll now and experience quality online schooling!",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
