import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FileText,
  Download,
  BookOpen,
  ArrowRight,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources - Guides, Reports & Customer Success Stories",
  description:
    "Give your team the data and playbooks to move faster. CFO-ready reporting, board-level summaries, and implementation guides.",
};

const testimonials = [
  {
    quote:
      "Ethos gave us a clean before/after view of our payment economics, then helped finance and ops align on which levers to pull. The savings are real, not theoretical.",
    author: "VP Finance",
    company: "Enterprise e-commerce brand",
    volume: "$80M+ annual card volume",
  },
  {
    quote:
      "Their team understood our audit requirements and provided documentation our bank partners were happy with. The compliance piece alone justified the switch.",
    author: "CFO",
    company: "Regional hospitality group",
    properties: "18 properties, mixed card/ACH",
  },
  {
    quote:
      "Integration was straightforward and the dashboards gave our ops team the visibility we were missing. Chargebacks and disputes are no longer fires to put out.",
    author: "COO",
    company: "B2B SaaS platform",
    model: "Subscription + usage billing",
  },
];

const resources = [
  {
    title: "Payment Optimization Guide",
    description:
      "Learn how to reduce payment processing costs by 10-40% with strategic optimization.",
    type: "Guide",
    icon: BookOpen,
  },
  {
    title: "Compliance Checklist for Finance Teams",
    description:
      "Essential compliance requirements for payment processing in regulated industries.",
    type: "Checklist",
    icon: FileText,
  },
  {
    title: "Enterprise Payment Stack Assessment",
    description:
      "Framework for evaluating your current payment infrastructure and identifying gaps.",
    type: "Template",
    icon: Download,
  },
  {
    title: "CFO's Guide to Payment Economics",
    description:
      "Understanding true payment costs beyond headline rates and teaser pricing.",
    type: "White Paper",
    icon: FileText,
  },
  {
    title: "Chargeback Management Playbook",
    description:
      "Best practices for preventing, managing, and winning payment disputes.",
    type: "Playbook",
    icon: BookOpen,
  },
  {
    title: "API Integration Guide",
    description:
      "Technical documentation and best practices for integrating Ethos payment APIs.",
    type: "Technical Guide",
    icon: FileText,
  },
];

export default function Resources() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Resources
              </h1>
              <p className="text-lg leading-8 text-gray-100">
                Give your team the data and playbooks to move faster. Ethos ships
                with CFO-ready reporting, board-level summaries, and
                implementation guides for finance, ops, and engineering teams.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                What our customers say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real results from finance, operations, and technology leaders who
                trust Ethos.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 relative"
                >
                  <Quote className="h-10 w-10 text-accent/20 absolute top-6 right-6" />
                  <div className="relative">
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-semibold text-gray-900">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.company}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {testimonial.volume ||
                          testimonial.properties ||
                          testimonial.model}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Library */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Guides & playbooks
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Actionable resources to help you optimize payments, ensure
                compliance, and accelerate implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary flex-shrink-0">
                      <resource.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-2 py-1 text-xs font-semibold text-accent bg-accent/10 rounded mb-2">
                        {resource.type}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors text-sm"
                  >
                    Request access
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Trusted by leading enterprises
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">$25M+</p>
                <p className="text-sm text-gray-600">
                  Average annual payment volume
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">10-40%</p>
                <p className="text-sm text-gray-600">Cost reduction achieved</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">99.99%</p>
                <p className="text-sm text-gray-600">Uptime SLA</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">&lt;24hrs</p>
                <p className="text-sm text-gray-600">Audit delivery time</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Ready to optimize your payment stack?
              </h2>
              <p className="text-lg leading-8 text-gray-100 mb-10">
                Get a free payment audit and see exactly how much you could save.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-colors"
              >
                Request a payment audit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <p className="text-sm text-gray-200 mt-6">
                No obligation. We'll sign your NDA or provide ours.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
