import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hazik Nabi | Portfolio",
  description:
    "Personal portfolio for Hazik Nabi, an AI and software developer based in Kuala Lumpur, Malaysia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-neutral-950 text-white">{children}</body>
    </html>
  );
}
