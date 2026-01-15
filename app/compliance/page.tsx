import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Shield,
  FileCheck,
  Lock,
  CheckCircle,
  ArrowRight,
  Users,
  BarChart3,
  Code,
  DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance & Risk - Built for Audit & Regulatory Requirements",
  description:
    "Compliance, risk, and audit readiness built into the stack. Designed for teams that answer to boards, banks, and regulators.",
};

const complianceFeatures = [
  {
    title: "Configurable KYC/KYB workflows",
    description: "Clear approval paths with automated verification and documentation.",
    icon: Users,
  },
  {
    title: "Integrated AML screening",
    description: "Ongoing monitoring with configurable scenarios and alerts.",
    icon: Shield,
  },
  {
    title: "PCI DSS-aligned tokenization",
    description: "Level 1 PCI DSS compliance with secure vaulting and data protection.",
    icon: Lock,
  },
  {
    title: "Dispute & chargeback automation",
    description: "SLA tracking and evidence management for disputes and chargebacks.",
    icon: FileCheck,
  },
  {
    title: "Evidence-ready data exports",
    description: "Audit-ready reports and documentation for banks and regulatory reviews.",
    icon: BarChart3,
  },
];

const stakeholders = [
  {
    role: "CFO",
    needs: "Margin & fee analysis, forecasting inputs",
    icon: DollarSign,
    description:
      "Get complete visibility into payment economics with detailed cost breakdowns, trend analysis, and forecasting data to inform strategic decisions.",
  },
  {
    role: "Controller",
    needs: "Reconciliation-friendly reporting",
    icon: BarChart3,
    description:
      "Streamlined reconciliation with detailed transaction-level data, automated matching, and accounting-ready exports.",
  },
  {
    role: "Risk",
    needs: "Policy, workflow, and evidence consistency",
    icon: Shield,
    description:
      "Configure risk policies, monitor compliance workflows, and maintain audit trails with consistent documentation for all stakeholders.",
  },
  {
    role: "Technology",
    needs: "Modern APIs, sandbox, documentation",
    icon: Code,
    description:
      "RESTful APIs, comprehensive documentation, sandbox environment, and webhooks for seamless integration and testing.",
  },
];

export default function Compliance() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Compliance, risk, and audit readiness built into the stack
              </h1>
              <p className="text-lg leading-8 text-gray-100">
                Ethos is designed for teams that answer to boards, banks, and
                regulators. We provide the data, documentation, and controls your
                internal stakeholders expect.
              </p>
            </div>
          </div>
        </section>

        {/* Risk & Compliance Features */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Risk & compliance features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Built-in compliance tools that give your risk and audit teams the
                confidence they need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stakeholder Views */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Designed for finance, operations & risk leaders
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Give each stakeholder the visibility they need without
                sacrificing control.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {stakeholders.map((stakeholder, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                        <stakeholder.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {stakeholder.role}
                      </h3>
                      <p className="text-sm text-accent font-semibold mb-4">
                        {stakeholder.needs}
                      </p>
                      <p className="text-gray-600">{stakeholder.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Built to meet the highest standards
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-50 rounded-xl border border-gray-200">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  PCI DSS Level 1
                </h3>
                <p className="text-gray-600">
                  Highest level of payment card security compliance with annual
                  audits and continuous monitoring.
                </p>
              </div>

              <div className="text-center p-8 bg-gray-50 rounded-xl border border-gray-200">
                <FileCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AML/KYC Compliance
                </h3>
                <p className="text-gray-600">
                  Automated screening against OFAC, sanctions lists, and PEP
                  databases with ongoing monitoring.
                </p>
              </div>

              <div className="text-center p-8 bg-gray-50 rounded-xl border border-gray-200">
                <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  SOC 2 Type II
                </h3>
                <p className="text-gray-600">
                  Independently audited controls for security, availability, and
                  confidentiality of customer data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Security-first architecture
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "End-to-end encryption for all payment data",
                "Tokenization with secure vault storage",
                "Multi-factor authentication and role-based access",
                "Real-time fraud detection and prevention",
                "Automated security patches and updates",
                "Regular penetration testing and security audits",
                "DDoS protection and rate limiting",
                "Secure webhook delivery with signature verification",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Talk to our compliance team
              </h2>
              <p className="text-lg leading-8 text-gray-100 mb-10">
                Schedule a call to discuss your specific compliance requirements
                and see how Ethos can help your team meet regulatory obligations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-50 transition-colors"
              >
                Schedule a compliance review
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
