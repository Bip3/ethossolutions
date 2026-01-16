import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Award, Users, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ethos Solutions - our mission, values, and commitment to delivering world-class payment infrastructure for enterprises.",
};

const values = [
  {
    name: "Security First",
    description:
      "We prioritize the security and privacy of every transaction, ensuring your data is always protected.",
    icon: Shield,
  },
  {
    name: "Innovation",
    description:
      "Continuously evolving our technology to stay ahead of industry trends and customer needs.",
    icon: Zap,
  },
  {
    name: "Reliability",
    description:
      "Building robust, scalable infrastructure that businesses can depend on 24/7.",
    icon: Award,
  },
  {
    name: "Customer Success",
    description:
      "Your success is our success. We're committed to helping you achieve your goals.",
    icon: Users,
  },
];

const milestones = [
  {
    year: "2015",
    title: "Company Founded",
    description: "Started with a vision to revolutionize payment processing",
  },
  {
    year: "2017",
    title: "First $1B Processed",
    description: "Reached our first billion in transaction volume",
  },
  {
    year: "2019",
    title: "Global Expansion",
    description: "Expanded operations to 50+ countries worldwide",
  },
  {
    year: "2021",
    title: "PCI DSS Level 1",
    description: "Achieved highest level of payment security certification",
  },
  {
    year: "2024",
    title: "500+ Enterprise Clients",
    description: "Serving leading businesses across multiple industries",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Powering the Future of Payments
              </h1>
              <p className="text-lg leading-8 text-gray-100">
                We're on a mission to make payment processing seamless,
                and accessible for businesses of all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary rounded-xl">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower businesses with innovative payment solutions that
                  drive growth, enhance customer experiences, and enable global
                  commerce. We believe in making complex payment infrastructure
                  simple and accessible.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-secondary rounded-xl">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To become the world's most trusted payment infrastructure
                  provider, enabling frictionless commerce across borders and
                  creating opportunities for businesses to thrive in the digital
                  economy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.name}
                  className="p-6 bg-white rounded-xl border border-gray-200 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.name}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600">
                Key milestones in our growth story
              </p>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center ${
                      index % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <div className="inline-block p-6 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="text-2xl font-bold text-primary mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white" />
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gradient-to-br from-primary to-secondary py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ethos by the Numbers</h2>
              <p className="text-lg text-gray-100">
                Our impact in the payment industry
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">$10B+</p>
                <p className="text-gray-100">Annual Volume</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">500+</p>
                <p className="text-gray-100">Enterprise Clients</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">150+</p>
                <p className="text-gray-100">Countries</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold mb-2">99.99%</p>
                <p className="text-gray-100">Uptime SLA</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Join Us on Our Journey
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Partner with Ethos Solutions and be part of the future of
                payments.
              </p>
              <a
                href="/contact"
                className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-dark transition-colors inline-block"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
