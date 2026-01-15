import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ethossolutions.tech"),
  title: {
    default: "Ethos Solutions - Integrated Enterprise Software & Payments",
    template: "%s | Ethos Solutions",
  },
  description:
    "Integrated enterprise software and payments built for U.S. businesses with $10M+ in annual revenue. Lower costs, increase supply chain profits, and strengthen compliance with a dedicated implementation team.",
  keywords: [
    "enterprise payment solutions",
    "integrated enterprise software",
    "payment processing",
    "interchange optimization",
    "B2B payments",
    "enterprise software",
    "payment compliance",
    "supply chain software",
    "payment audit",
    "mid-market payments",
  ],
  authors: [{ name: "Ethos Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ethossolutions.tech",
    title: "Ethos Solutions - Integrated Enterprise Software & Payments",
    description:
      "Lower costs, increase supply chain profits, and strengthen compliance. Built for U.S. businesses with $10M+ in annual revenue.",
    siteName: "Ethos Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethos Solutions - Integrated Enterprise Software & Payments",
    description:
      "Enterprise payment solutions with 10-40% cost reduction for qualified clients.",
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
