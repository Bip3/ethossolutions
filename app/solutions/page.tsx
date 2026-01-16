import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ShoppingBag,
  Package,
  Truck,
  Building2,
  Hotel,
  Laptop,
  Sparkles,
  Heart,
  Dumbbell,
  Headphones,
  Mountain,
  Home,
  GraduationCap,
  Gem,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions - Industry-Specific Payment Solutions",
  description:
    "Tailored payment solutions for MLM, DTC brands, e-commerce, B2B, and more. Built for complex, high-volume businesses.",
};

const coreIndustries = [
  {
    name: "Enterprise E-commerce",
    description:
      "High-volume payment processing with advanced fraud protection and authorization optimization.",
    icon: ShoppingBag,
  },
  {
    name: "Wholesale & Distribution",
    description:
      "Large-ticket B2B payments with ACH optimization and net terms integration.",
    icon: Package,
  },
  {
    name: "Logistics & Freight",
    description:
      "Complex billing scenarios with automated invoice reconciliation.",
    icon: Truck,
  },
  {
    name: "Construction Suppliers",
    description:
      "Large-ticket optimization for $5k-$25k invoices using card + ACH blend.",
    icon: Building2,
  },
  {
    name: "Hospitality Groups",
    description:
      "Unified settlement and chargeback automation across multiple properties.",
    icon: Hotel,
  },
  {
    name: "B2B SaaS & Platforms",
    description:
      "Recurring billing, dunning, card updater tools, and subscription management.",
    icon: Laptop,
  },
];

const dtcVerticals = [
  {
    category: "Consumer Packaged Goods (CPG) - Premium & Branded",
    industries: [
      "Beauty & skincare",
      "Haircare",
      "Supplements & nutraceuticals",
      "Functional food & beverage",
      "Personal care & wellness",
    ],
    icon: Sparkles,
  },
  {
    category: "Apparel, Footwear & Fashion Brands",
    industries: [
      "Athletic & athleisure",
      "Streetwear",
      "Denim & lifestyle brands",
      "Footwear (performance + fashion)",
    ],
    icon: ShoppingBag,
  },
  {
    category: "Health, Fitness & Lifestyle Products",
    industries: [
      "Fitness equipment (home & portable)",
      "Recovery devices",
      "Wearables (non-medical)",
      "Sleep, posture, mobility products",
    ],
    icon: Dumbbell,
  },
  {
    category: "Consumer Electronics & Accessories",
    industries: [
      "Audio (headphones, speakers)",
      "Mobile accessories",
      "Gaming accessories",
      "Smart home peripherals",
    ],
    icon: Headphones,
  },
  {
    category: "Outdoor, Sporting Goods & Recreation",
    industries: [
      "Outdoor gear",
      "Cycling",
      "Surf / skate / snow",
      "Hunting & tactical (where permitted)",
    ],
    icon: Mountain,
  },
  {
    category: "Home, Furniture & Design Products",
    industries: [
      "Furniture",
      "Lighting",
      "Home décor",
      "Kitchen & home organization",
    ],
    icon: Home,
  },
  {
    category: "Personal Development & Education",
    industries: [
      "Language learning",
      "Skill-building platforms",
      "Coaching & self-improvement subscriptions",
      "Consumer-facing education brands",
    ],
    icon: GraduationCap,
  },
  {
    category: "Direct-to-Consumer Luxury & \"Masstige\" Brands",
    industries: [
      "Jewelry",
      "Watches",
      "Leather goods",
      "Premium lifestyle products",
    ],
    icon: Gem,
  },
  {
    category: "MLM (Multi Level Marketing)",
    industries: [
      "Network marketing platforms",
      "Direct sales organizations",
      "Commission-based distribution",
    ],
    icon: Heart,
  },
];

const features = [
  "Interchange+ optimization for transparent pricing",
  "Card & ACH routing for maximum cost savings",
  "Chargeback automation and dispute management",
  "Multi-region, redundant processing paths",
  "Real-time fraud detection and prevention",
  "Recurring billing and subscription management",
  "International processing in 170+ countries",
  "CFO-ready reporting and reconciliation",
];

export default function Solutions() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Solutions built for your industry
              </h1>
              <p className="text-lg leading-8 text-gray-100">
                Ethos specializes in payment environments where reliability,
                compliance, and nuanced pricing matter more than teaser rates.
                Supporting mid-market and enterprise teams across the U.S.
              </p>
            </div>
          </div>
        </section>

        {/* Core Industries */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Core industries we serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Purpose-built solutions for complex, high-volume businesses with
                $10M+ in annual revenue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreIndustries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary flex-shrink-0">
                      <industry.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {industry.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DTC & E-commerce Verticals */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                DTC & E-commerce verticals
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized payment solutions for direct-to-consumer brands
                across multiple categories.
              </p>
            </div>

            <div className="space-y-8">
              {dtcVerticals.map((vertical, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                        <vertical.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {vertical.category}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {vertical.industries.map((industry, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{industry}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Features for every industry
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Regardless of your vertical, you get access to enterprise-grade
                payment infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Our Partners
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Companies who use Adyen Processing, our payments partner
              </p>
            </div>

            <div className="flex items-center justify-center gap-8 flex-wrap max-w-6xl mx-auto">
              <div className="flex items-center justify-center h-16 px-8 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img
                  src="/images/adobe.svg"
                  alt="Adobe"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-16 px-8 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img
                  src="/images/visa.svg"
                  alt="Visa"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-16 px-8 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img
                  src="/images/spotify.svg"
                  alt="Spotify"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-16 px-8 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img
                  src="/images/ebay.svg"
                  alt="eBay"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-16 px-8 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img
                  src="/images/american-express.svg"
                  alt="American Express"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-16 px-8 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img
                  src="/images/uber.svg"
                  alt="Uber"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-primary rounded-xl p-8 text-center text-white">
                <p className="text-4xl font-bold mb-2">$10M-$500M+</p>
                <p className="text-sm">
                  Typical annual revenue range for Ethos clients
                </p>
              </div>
              <div className="bg-primary rounded-xl p-8 text-center text-white">
                <p className="text-4xl font-bold mb-2">$25M+</p>
                <p className="text-sm">
                  Average annual payment volume under management
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Ready to see how Ethos can help your business?
              </h2>
              <p className="text-lg leading-8 text-gray-100 mb-10">
                Schedule a call with our team to discuss your specific industry
                needs and payment challenges.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-colors"
              >
                Schedule a strategy call
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
