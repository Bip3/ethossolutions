import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationStructuredData } from "@/components/StructuredData";
import {
  Shield,
  Zap,
  TrendingUp,
  TrendingDown,
  Lock,
  Globe,
  BarChart3,
  CheckCircle,
  ArrowRight,
  FileCheck,
  Users,
  DollarSign,
  Clock,
} from "lucide-react";

const stats = [
  {
    value: "10-40%",
    label: "Average reduction in TOTAL processing cost for qualified clients",
  },
  {
    value: "99.99%",
    label: "Target uptime across our enterprise-grade processing stack",
  },
  {
    value: "<24 hrs",
    label: "Typical time to deliver a detailed payment audit",
  },
];

const whyEthosFeatures = [
  {
    title: "Lower total cost of tech stack payments",
    description:
      "We benchmark your effective rates, then engineer a lower-cost structure using true interchange+, routing optimization, and program-level incentives.",
    features: [
      "Statement and fee audit within 24-48 hours",
      "Interchange+ with transparent margin",
      "Enterprise ACH and large-ticket optimization",
      "International compliance through Adyen in 170+ countries including India, China, Mexico, Brazil, Indonesia, Australia, and all of Europe",
    ],
    icon: DollarSign,
  },
  {
    title: "Improve approvals & uptime",
    description:
      "Ethos reduces false declines and downtime using resilient infrastructure, intelligent retries, and issuer-informed routing.",
    features: [
      "Auth-rate improvements of 1-3 pts typical",
      "Multi-region, redundant processing paths",
      "Granular dashboards for finance & ops",
    ],
    icon: TrendingUp,
  },
  {
    title: "Compliance-first by design",
    description:
      "AML, KYC/KYB, and PCI requirements are built into our workflows, giving your internal audit and risk teams the documentation they need.",
    features: [
      "Full PCI DSS alignment and tokenization",
      "Configurable AML scenarios and alerts",
      "Evidence packs for auditors and banks",
    ],
    icon: Shield,
  },
];

const industries = [
  "Enterprise e-commerce",
  "Wholesale & distribution",
  "Logistics & freight",
  "Construction suppliers",
  "Hospitality groups",
  "B2B SaaS & platforms",
];

const outcomes = [
  {
    vertical: "E-commerce apparel brand",
    result: "31% reduction in effective rate, auth-rate lift of 2.1 pts.",
  },
  {
    vertical: "Regional hospitality group",
    result:
      "Unified settlement and chargeback automation across 18 properties.",
  },
  {
    vertical: "Construction supplier",
    result:
      "Large-ticket optimization for $5k-$25k invoices using card + ACH blend.",
  },
  {
    vertical: "B2B SaaS platform",
    result: "Integrated recurring billing, dunning, and card updater tools.",
  },
];

const targetStats = [
  {
    value: "$10M-$500M+",
    label: "Typical annual revenue range for Ethos clients",
  },
  {
    value: "$25M+",
    label: "Average annual payment volume under management",
  },
];

export default function Home() {
  return (
    <>
      <OrganizationStructuredData />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6 leading-tight">
                Enterprise Integrated Software
              </h1>
              <p className="text-xl leading-8 text-gray-100 mb-4">
                Integrated Enterprise Software and Payments built for U.S.
                businesses with $10M+ in annual revenue.
              </p>
              <p className="text-lg leading-8 text-gray-200 mb-10">
                Ethos Solutions helps mid-market and enterprise teams lower
                costs, increase supply chain profits, and strengthen
                compliance—all with a dedicated software strategy and
                implementation team by your side.
              </p>
              <p className="text-lg font-semibold text-accent mb-8">
                Acquire a dedicated tech team for free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2"
                >
                  Schedule a 20-minute strategy call
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-md bg-white px-6 py-3.5 text-base font-semibold text-primary shadow-lg hover:bg-gray-50 transition-colors"
                >
                  Download pricing overview
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Performance Snapshot */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Payment performance snapshot
              </h2>
              <p className="text-lg text-gray-600">
                CFO / Finance leaders
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-white shadow-2xl max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Annualized savings</p>
                  <p className="text-3xl font-bold text-green-400 mb-4">
                    -27% cost
                  </p>
                  <p className="text-sm text-gray-300">
                    Modeled at $68M gross volume
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center gap-4 mb-2">
                      <div>
                        <p className="text-xs text-gray-400">Prior processor</p>
                        <p className="text-2xl font-bold">Baseline</p>
                      </div>
                      <TrendingDown className="h-8 w-8 text-green-400" />
                      <div>
                        <p className="text-xs text-gray-400">Ethos blended</p>
                        <p className="text-2xl font-bold text-green-400">-27%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-700">
                <div className="text-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-300">
                    Interchange+ optimization
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-300">Card & ACH routing</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-300">
                    Chargeback automation
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-300">MID & MCC tuning</p>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              Designed for finance, operations, and technology leaders.
            </p>
          </div>
        </section>

        {/* Why Ethos Section */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-accent mb-2">
                Why Ethos
              </h2>
              <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                We treat integrated payments and supply chain software as a
                strategic finance function, not a utility
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Most solutions compete on teaser rates. Ethos optimizes your
                entire payment stack—pricing, routing, authorization, risk, SaaS
                integration and reconciliations—so finance and operations leaders
                can unlock real EBITDA gains.
              </p>
            </div>

            <div className="space-y-16">
              {whyEthosFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                        <feature.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{feature.description}</p>
                      <ul className="space-y-3">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
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

        {/* Industries Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-accent mb-2">
                Industries
              </h2>
              <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Built for complex, high-volume businesses
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ethos specializes in payment environments where reliability,
                compliance, and nuanced pricing matter more than teaser
                rates—supporting mid-market and enterprise teams across the U.S.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Who we serve
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors border border-gray-200"
                  >
                    <p className="text-sm font-medium text-gray-900">
                      {industry}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {targetStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-primary rounded-xl p-8 text-center text-white"
                >
                  <p className="text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Example outcomes by vertical
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {outcome.vertical}:
                    </h4>
                    <p className="text-gray-600">{outcome.result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                See how much you could save on payments in 5 business days
              </h2>
              <p className="text-lg leading-8 text-gray-100 mb-10">
                Share three recent statements and we'll return a modeled savings
                report, recommended routing changes, and a compliance review
                tailored to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Request a payment audit
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <p className="text-sm text-gray-200">
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
