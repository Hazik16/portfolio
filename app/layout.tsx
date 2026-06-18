import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hazik Nabi | Portfolio",
  description:
    "Personal portfolio for Hazik Nabi, an AI and software developer based in Kuala Lumpur, Malaysia. Discover my projects, stack, and developer journey.",
  keywords: [
    "Hazik Nabi",
    "Hazik",
    "Nabi",
    "Hazik Nabi Portfolio",
    "AI Developer",
    "Software Developer Malaysia",
    "Kuala Lumpur",
    "Web Developer Portfolio",
    "Hazik16",
  ],
  authors: [{ name: "Hazik Nabi" }],
  creator: "Hazik Nabi",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-hazik16.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hazik Nabi | Portfolio",
    description:
      "Personal portfolio for Hazik Nabi, an AI and software developer based in Kuala Lumpur, Malaysia.",
    url: "/",
    siteName: "Hazik Nabi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hazik Nabi | Portfolio",
    description:
      "Personal portfolio for Hazik Nabi, an AI and software developer based in Kuala Lumpur, Malaysia.",
  },
  verification: {
    // Replace "YOUR_GOOGLE_VERIFICATION_CODE_HERE" with your actual token from Google Search Console when ready
    google: "YOUR_GOOGLE_VERIFICATION_CODE_HERE",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-hazik16.vercel.app";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hazik Nabi",
    url: baseUrl,
    sameAs: [
      "https://github.com/Hazik16",
      "https://www.linkedin.com/in/hazik-nabi",
    ],
    jobTitle: "AI & Software Developer",
    description:
      "AI & Software Developer based in Kuala Lumpur, Malaysia, specializing in machine learning, web development, and practical software systems.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuala Lumpur",
      addressCountry: "Malaysia",
    },
    email: "hazik123nabi@gmail.com",
  };

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full bg-neutral-950 font-sans text-white antialiased`}
      >
        {/* JSON-LD Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
