import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, Users, Globe, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Success stories and case studies from enterprises using Ethos Solutions payment infrastructure. See how we help businesses scale.",
};

const caseStudies = [
  {
    company: "Global E-Commerce Platform",
    industry: "E-Commerce",
    challenge:
      "Processing millions of transactions daily across 50+ countries with high cart abandonment rates due to payment friction.",
    solution:
      "Implemented our unified payment gateway with local payment methods, dynamic currency conversion, and optimized checkout flows.",
    results: [
      { label: "Cart Abandonment", value: "32% reduction" },
      { label: "Processing Speed", value: "2.5x faster" },
      { label: "Global Coverage", value: "47 new markets" },
      { label: "Revenue Growth", value: "+$45M annually" },
    ],
    icon: Globe,
  },
  {
    company: "Enterprise SaaS Provider",
    industry: "Software as a Service",
    challenge:
      "Complex subscription billing with multiple tiers, currencies, and compliance requirements across different regions.",
    solution:
      "Deployed our recurring billing engine with automated invoicing, revenue recognition, and multi-currency support.",
    results: [
      { label: "Billing Accuracy", value: "99.98%" },
      { label: "Manual Work", value: "85% reduction" },
      { label: "Customer Satisfaction", value: "94% rating" },
      { label: "Churn Rate", value: "18% decrease" },
    ],
    icon: TrendingUp,
  },
  {
    company: "Digital Marketplace",
    industry: "Marketplace",
    challenge:
      "Managing split payments between multiple vendors while handling fraud and maintaining rapid settlement cycles.",
    solution:
      "Integrated our marketplace solution with AI-powered fraud detection, automated splits, and next-day settlements.",
    results: [
      { label: "Fraud Prevention", value: "99.7% accuracy" },
      { label: "Settlement Time", value: "Next-day" },
      { label: "Vendor Satisfaction", value: "4.8/5 stars" },
      { label: "Transaction Volume", value: "+210%" },
    ],
    icon: Users,
  },
];

const metrics = [
  { value: "$10B+", label: "Transaction Volume Annually" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "150+", label: "Countries Supported" },
  { value: "99.99%", label: "Platform Uptime" },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex justify-center mb-6">
                <Award className="h-16 w-16 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                Success Stories
              </h1>
              <p className="text-lg leading-8 text-gray-600">
                See how leading enterprises trust Ethos Solutions to power their
                payment infrastructure and drive business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">
                    {metric.value}
                  </p>
                  <p className="text-sm text-gray-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-20">
              {caseStudies.map((study, index) => (
                <div
                  key={study.company}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      <study.icon className="h-4 w-4" />
                      {study.industry}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {study.company}
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Challenge
                        </h3>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Solution
                        </h3>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                      <h3 className="text-xl font-bold mb-6">
                        Results Achieved
                      </h3>
                      <div className="grid grid-cols-2 gap-6">
                        {study.results.map((result) => (
                          <div key={result.label}>
                            <p className="text-3xl font-bold mb-1">
                              {result.value}
                            </p>
                            <p className="text-sm text-gray-100">
                              {result.label}
                            </p>
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

        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Ready to write your success story?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join hundreds of enterprises achieving exceptional results with
                Ethos Solutions.
              </p>
              <a
                href="/contact"
                className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-dark transition-colors inline-block"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
