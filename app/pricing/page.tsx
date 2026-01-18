import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing - Transparent Enterprise Payment Solutions",
  description:
    "Transparent, enterprise-ready pricing models. Interchange++ transparency with clear margin disclosure.",
};

const pricingTiers = [
  {
    name: "Interchange++ Core",
    targetVolume: "For $10M-$50M annual volume",
    pricing: "IC + basis points",
    description:
      "Exact basis points sized to your card mix, risk, and vertical.",
    features: [
      "Transparent statement-level reporting",
      'No "mystery" downgrade fees',
      "Email + phone support from U.S. team",
    ],
    cta: "Get Started",
    ctaLink: "/contact",
    highlighted: false,
  },
  {
    name: "Enterprise Blend",
    targetVolume: "For $50M-$250M annual volume",
    pricing: "Custom blended model",
    description:
      "Combines interchange++ with negotiated enterprise schedules.",
    features: [
      "Dedicated account & success team",
      "Quarterly optimization & fee reviews",
      "Advanced fraud and chargeback tooling",
    ],
    cta: "Request enterprise proposal",
    ctaLink: "/contact",
    highlighted: true,
  },
  {
    name: "Platform & Marketplace",
    targetVolume: "For platforms, ISVs & aggregators",
    pricing: "Revenue-share aligned",
    description: "Programmatic margins aligned with your go to market.",
    features: [
      "Multi-merchant onboarding & KYB flows",
      "Flexible fee pass-through models",
      "Embedded reporting and reconciliation",
    ],
    cta: "Contact Sales",
    ctaLink: "/contact",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Transparent, enterprise-ready pricing models
              </h1>
              <p className="text-lg leading-8 text-gray-100">
                Ethos structures pricing to align with your payment mix, risk
                profile, and growth plans—always with interchange++ transparency
                and clear margin disclosure.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 flex flex-col ${
                    tier.highlighted
                      ? "bg-white border-2 border-primary shadow-2xl ring-2 ring-primary/20"
                      : "bg-white border border-gray-200 shadow-lg"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
                      <span className="inline-flex rounded-full bg-accent px-4 py-1 text-sm font-semibold text-white">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {tier.targetVolume}
                    </p>
                    <p className="text-3xl font-bold text-primary mb-2">
                      {tier.pricing}
                    </p>
                    <p className="text-sm text-gray-600">{tier.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.ctaLink}
                    className={`block w-full rounded-md px-6 py-3 text-center text-base font-semibold transition-colors ${
                      tier.highlighted
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                What's included in every plan
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                All Ethos pricing models include enterprise-grade features built
                for reliability, compliance, and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Interchange++ Transparency
                </h3>
                <p className="text-gray-600">
                  See exactly what you pay for interchange, assessments, and our
                  margin. No hidden fees or downgrades.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  99.99% Uptime SLA
                </h3>
                <p className="text-gray-600">
                  Multi-region, redundant processing infrastructure with
                  automatic failover and intelligent routing.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  PCI DSS Compliance
                </h3>
                <p className="text-gray-600">
                  Full Level 1 PCI DSS compliance with tokenization, vaulting,
                  and secure data handling built in.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Advanced Fraud Protection
                </h3>
                <p className="text-gray-600">
                  AI-powered fraud detection with configurable rules, velocity
                  checks, and real-time risk scoring.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Modern APIs & SDKs
                </h3>
                <p className="text-gray-600">
                  RESTful APIs, webhooks, and SDKs for all major languages.
                  Comprehensive documentation and sandbox environment.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  CFO-Ready Reporting
                </h3>
                <p className="text-gray-600">
                  Unified global platform transaction reporting, reconciliation tools, and
                  analytics dashboards for finance teams on one dashboard.
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
                Ready to see how much you can save?
              </h2>
              <p className="text-lg leading-8 text-gray-100 mb-10">
                Get a customized savings analysis based on your actual payment
                volume and mix. No obligation, no sales pressure.
              </p>
              <Link
                href="/payments-audit"
                className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-colors"
              >
                Request a payment audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <p className="text-sm text-gray-200 mt-6">
                We'll sign your NDA or we can you provide ours.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
