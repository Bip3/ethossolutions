import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationStructuredData } from "@/components/StructuredData";
import {
  Shield,
  Zap,
  TrendingUp,
  Lock,
  Globe,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    name: "Secure Payments",
    description:
      "Bank-grade security with end-to-end encryption and PCI DSS compliance.",
    icon: Shield,
  },
  {
    name: "Fast Processing",
    description:
      "Lightning-fast transaction processing with 99.99% uptime guarantee.",
    icon: Zap,
  },
  {
    name: "Global Reach",
    description: "Accept payments from anywhere with multi-currency support.",
    icon: Globe,
  },
  {
    name: "Advanced Analytics",
    description:
      "Real-time insights and reporting to optimize your payment operations.",
    icon: BarChart3,
  },
  {
    name: "Fraud Prevention",
    description:
      "AI-powered fraud detection to protect your business and customers.",
    icon: Lock,
  },
  {
    name: "Scalable Solutions",
    description: "Grow your business without limits with our flexible platform.",
    icon: TrendingUp,
  },
];

const benefits = [
  "Reduce payment processing costs by up to 30%",
  "Increase conversion rates with optimized checkout flows",
  "24/7 dedicated support from payment experts",
  "Seamless integration with existing systems",
];

export default function Home() {
  return (
    <>
      <OrganizationStructuredData />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Transform Your Payment Infrastructure
              </h1>
              <p className="text-lg leading-8 text-gray-100 mb-10">
                Enterprise-grade payment solutions that scale with your
                business. Secure, reliable, and built for the future of
                commerce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="rounded-md bg-accent px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary shadow-lg hover:bg-gray-50 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        </section>

        {/* Features Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-accent">
                Complete Solution
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to process payments
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our comprehensive payment platform provides all the tools and
                services to manage your payment operations efficiently.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.name}
                    </h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-base font-semibold leading-7 text-accent mb-2">
                  Why Choose Ethos
                </h2>
                <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  Built for enterprise success
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Join thousands of businesses that trust Ethos Solutions for
                  their payment processing needs. We deliver reliability,
                  security, and innovation.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link
                    href="/about"
                    className="text-primary font-semibold hover:text-primary-dark inline-flex items-center gap-2"
                  >
                    Learn more about us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-secondary p-8 text-white shadow-2xl">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <p className="text-5xl font-bold mb-2">99.99%</p>
                      <p className="text-xl">Uptime SLA</p>
                    </div>
                    <div>
                      <p className="text-5xl font-bold mb-2">$10B+</p>
                      <p className="text-xl">Processed Annually</p>
                    </div>
                    <div>
                      <p className="text-5xl font-bold mb-2">500+</p>
                      <p className="text-xl">Enterprise Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
                Join the leading enterprises who trust Ethos Solutions for their
                payment infrastructure.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary shadow-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
                >
                  Contact Sales
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
