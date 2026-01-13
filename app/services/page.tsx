import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CreditCard,
  Shield,
  BarChart3,
  Wallet,
  Globe,
  Lock,
  Zap,
  Server,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Payment Solutions & Services",
  description:
    "Comprehensive payment processing solutions including gateways, fraud prevention, analytics, and global payment infrastructure for enterprises.",
};

const services = [
  {
    id: "payment-processing",
    name: "Payment Processing",
    icon: CreditCard,
    description:
      "Accept all major payment methods with our robust processing infrastructure.",
    features: [
      "Credit & debit card processing",
      "ACH & bank transfers",
      "Digital wallets (Apple Pay, Google Pay)",
      "Buy now, pay later integrations",
    ],
  },
  {
    id: "payment-gateway",
    name: "Payment Gateway",
    icon: Server,
    description:
      "Secure gateway solution that seamlessly integrates with your systems.",
    features: [
      "RESTful API integration",
      "Multiple currency support",
      "Hosted checkout pages",
      "Customizable payment flows",
    ],
  },
  {
    id: "fraud-prevention",
    name: "Fraud Prevention",
    icon: Shield,
    description:
      "Advanced AI-powered fraud detection to protect your business.",
    features: [
      "Real-time transaction monitoring",
      "Machine learning risk scoring",
      "3D Secure 2.0 authentication",
      "Chargeback management",
    ],
  },
  {
    id: "analytics",
    name: "Analytics & Reporting",
    icon: BarChart3,
    description:
      "Comprehensive insights to optimize your payment operations.",
    features: [
      "Real-time dashboards",
      "Custom report generation",
      "Transaction analytics",
      "Settlement reconciliation",
    ],
  },
  {
    id: "global-payments",
    name: "Global Payments",
    icon: Globe,
    description:
      "Expand internationally with multi-currency and local payment methods.",
    features: [
      "150+ currencies supported",
      "Local payment methods",
      "Dynamic currency conversion",
      "Compliance & regulation support",
    ],
  },
  {
    id: "security",
    name: "Security & Compliance",
    icon: Lock,
    description: "Bank-grade security meeting the highest industry standards.",
    features: [
      "PCI DSS Level 1 certified",
      "End-to-end encryption",
      "Tokenization services",
      "SOC 2 Type II compliance",
    ],
  },
];

const additionalServices = [
  {
    name: "Recurring Billing",
    icon: Wallet,
    description: "Automate subscription and recurring payment management.",
  },
  {
    name: "Fast Settlements",
    icon: Zap,
    description: "Get paid faster with next-day settlement options.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                Payment Solutions for Modern Business
              </h1>
              <p className="text-lg leading-8 text-gray-600">
                Comprehensive suite of payment services designed to help your
                business grow, scale, and succeed in the global marketplace.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {service.name}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <ArrowRight className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Additional Services
              </h2>
              <p className="text-lg text-gray-600">
                More features to enhance your payment operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {additionalServices.map((service) => (
                <div
                  key={service.name}
                  className="p-6 bg-white rounded-xl border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Ready to transform your payments?
              </h2>
              <p className="text-lg text-gray-100 mb-8">
                Schedule a consultation with our payment experts to discuss your
                specific needs.
              </p>
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary shadow-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
              >
                Contact Us
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
