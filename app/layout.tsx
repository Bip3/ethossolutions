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
    default: "Ethos Solutions - Enterprise Payment Solutions",
    template: "%s | Ethos Solutions",
  },
  description:
    "Leading provider of innovative payment solutions for businesses. Secure, scalable, and reliable payment processing technology.",
  keywords: [
    "payment solutions",
    "payment processing",
    "enterprise payments",
    "fintech",
    "secure payments",
    "payment gateway",
    "payment technology",
  ],
  authors: [{ name: "Ethos Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ethossolutions.tech",
    title: "Ethos Solutions - Enterprise Payment Solutions",
    description:
      "Leading provider of innovative payment solutions for businesses. Secure, scalable, and reliable payment processing technology.",
    siteName: "Ethos Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethos Solutions - Enterprise Payment Solutions",
    description:
      "Leading provider of innovative payment solutions for businesses.",
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
