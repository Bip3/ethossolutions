import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  DollarSign,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Globe,
  Zap,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Ethos - Strategic Finance Function, Not a Utility",
  description:
    "We treat integrated payments and supply chain software as a strategic finance function. Optimize your entire payment stack for real EBITDA gains.",
};

const valueProps = [
  {
    title: "Lower total cost of tech stack payments",
    description:
      "We benchmark your effective rates, then engineer a lower-cost structure using true interchange++, routing optimization, and program-level incentives.",
    icon: DollarSign,
    features: [
      "Statement and fee audit within 24-48 hours",
      "Interchange++ with transparent margin",
      "Enterprise ACH and large-ticket optimization",
      "International compliance through Adyen in 170+ countries including India, China, Mexico, Brazil, Indonesia, Australia, and all of Europe",
    ],
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Improve approvals & uptime",
    description:
      "Ethos reduces false declines and downtime using resilient infrastructure, intelligent retries, and issuer-informed routing.",
    icon: TrendingUp,
    features: [
      "Auth-rate improvements of 1-3 pts typical",
      "Multi-region, redundant processing paths",
      "Granular dashboards for finance & ops",
      "Intelligent retry logic and issuer optimization",
    ],
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Compliance-first by design",
    description:
      "AML, KYC/KYB, and PCI requirements are built into our workflows, giving your internal audit and risk teams the documentation they need.",
    icon: Shield,
    features: [
      "Full PCI DSS alignment and tokenization",
      "Configurable AML scenarios and alerts",
      "Evidence packs for auditors and banks",
      "SOC 2 Type II certified infrastructure",
    ],
    color: "from-purple-500 to-pink-600",
  },
];

const stats = [
  {
    value: "10-40%",
    label: "Average reduction in total processing cost",
    icon: TrendingUp,
  },
  {
    value: "99.99%",
    label: "Target uptime across enterprise-grade stack",
    icon: Zap,
  },
  {
    value: "<24 hrs",
    label: "Typical time to deliver payment audit",
    icon: BarChart3,
  },
  {
    value: "170+",
    label: "Countries supported for international payments",
    icon: Globe,
  },
];

const differentiators = [
  {
    title: "Strategic approach, not commodity pricing",
    description:
      "Most solutions compete on teaser rates. Ethos optimizes your entire payment stack—pricing, routing, authorization, risk, SaaS integration and reconciliations—so finance and operations leaders can unlock real EBITDA gains.",
  },
  {
    title: "Omni-channel global payments",
    description:
      "Omni Channel global payments on one stack allows customers to seamlessly engage with our clients' product or service without risk of international or sales channel <strong>data siloing</strong>.",
  },
  {
    title: "Dedicated implementation team",
    description:
      "Acquire a dedicated tech team for free. We provide a software strategy and implementation team by your side throughout your journey.",
  },
  {
    title: "Built for mid-market and enterprise",
    description:
      "Our solutions are purpose-built for U.S. businesses with $10M+ in annual revenue, where complexity, compliance, and reliability are non-negotiable.",
  },
  {
    title: "Transparent economics",
    description:
      "No mystery fees or downgrade categories. We provide statement-level reporting with clear interchange++ pricing and visible margins.",
  },
];

export default function WhyEthos() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Why Ethos
              </h1>
              <p className="text-xl leading-8 text-gray-100 mb-4">
                We treat integrated payments and supply chain software as a
                strategic finance function, not a utility
              </p>
              <p className="text-lg leading-8 text-gray-200">
                Most solutions compete on teaser rates. Ethos optimizes your
                entire payment stack—pricing, routing, authorization, risk, SaaS
                integration and reconciliations—so finance and operations leaders
                can unlock real EBITDA gains.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                How we deliver value
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Three pillars of our approach to payment optimization and
                enterprise software integration.
              </p>
            </div>

            <div className="space-y-12">
              {valueProps.map((prop, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div
                      className={`bg-gradient-to-br ${prop.color} p-8 lg:p-12 text-white flex flex-col justify-center`}
                    >
                      <prop.icon className="h-12 w-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-4">{prop.title}</h3>
                      <p className="text-white/90">{prop.description}</p>
                    </div>
                    <div className="lg:col-span-2 p-8 lg:p-12">
                      <ul className="space-y-4">
                        {prop.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-lg">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                What makes Ethos different
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((diff, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {diff.title}
                  </h3>
                  <p className="text-gray-600">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Customer */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  Built for mid-market and enterprise
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Ethos specializes in payment environments where reliability,
                  compliance, and nuanced pricing matter more than teaser rates.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-primary rounded-xl p-8 text-center text-white">
                  <p className="text-5xl font-bold mb-2">$10M-$500M+</p>
                  <p className="text-sm">
                    Typical annual revenue range for Ethos clients
                  </p>
                </div>
                <div className="bg-primary rounded-xl p-8 text-center text-white">
                  <p className="text-5xl font-bold mb-2">$25M+</p>
                  <p className="text-sm">
                    Average annual payment volume under management
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  See the industries we serve
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Experience the Ethos difference
              </h2>
              <p className="text-lg leading-8 text-gray-100 mb-10">
                Get a free payment audit and see exactly how we can optimize your
                payment stack for real EBITDA gains.
              </p>
              <Link
                href="/payments-audit"
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
