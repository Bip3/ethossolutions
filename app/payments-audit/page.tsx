"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileUp, CheckCircle, ArrowRight } from "lucide-react";

export default function PaymentsAudit() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    staffSize: "",
    documents: null as File[] | null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, documents: Array.from(e.target.files) });
    }
  };

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 py-20">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Thank you for your submission!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We've received your payment audit request. Our team will review
                your information and get back to you within 24-48 hours with a
                detailed analysis.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Return to Home
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Request a Payment Audit
              </h1>
              <p className="text-lg leading-8 text-gray-100">
                Get a comprehensive analysis of your payment processing costs
                and discover potential savings opportunities. Our expert team
                will review your statements and provide actionable
                recommendations within 24-48 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-gray-900 px-4 py-3 border"
                    placeholder="John Doe"
                  />
                </div>

                {/* Title */}
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    required
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-gray-900 px-4 py-3 border"
                    placeholder="CFO, VP Finance, etc."
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-gray-900 px-4 py-3 border"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Staff Size */}
                <div>
                  <label
                    htmlFor="staffSize"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Number of staff responsible for all things payments *
                  </label>
                  <select
                    id="staffSize"
                    required
                    value={formData.staffSize}
                    onChange={(e) =>
                      setFormData({ ...formData, staffSize: e.target.value })
                    }
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-gray-900 px-4 py-3 border"
                  >
                    <option value="">Select staff size</option>
                    <option value="1-5">1-5</option>
                    <option value="6-20">6-20</option>
                    <option value="20+">20+</option>
                  </select>
                </div>

                {/* Document Upload */}
                <div>
                  <label
                    htmlFor="documents"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Upload Documents
                  </label>
                  <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <FileUp className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                    <label
                      htmlFor="documents"
                      className="cursor-pointer text-primary hover:text-primary-dark font-semibold"
                    >
                      Click to upload
                      <input
                        type="file"
                        id="documents"
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.csv"
                      />
                    </label>
                    <p className="text-sm text-gray-500 mt-2">
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      PDF, DOC, XLS, CSV up to 10MB
                    </p>
                    {formData.documents && (
                      <div className="mt-4 text-left">
                        <p className="text-sm font-semibold text-gray-700 mb-2">
                          Selected files:
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {formData.documents.map((file, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              {file.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>We need any of the following information:</strong>
                  </p>
                  <ul className="text-sm text-gray-600 mt-2 ml-4 space-y-1">
                    <li>• Processor end of month statement</li>
                    <li>• Gateway statement</li>
                    <li>• Token library statement</li>
                    <li>• ISO statement</li>
                    <li>• Or other cost components with org</li>
                  </ul>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary px-6 py-4 text-lg font-semibold text-white hover:bg-primary-dark transition-colors shadow-lg"
                  >
                    Submit Audit Request
                  </button>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    We'll sign your NDA or provide ours. Your information is
                    kept confidential.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What you'll receive
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Cost Analysis
                </h3>
                <p className="text-gray-600">
                  Detailed breakdown of your current payment processing costs
                  and fee structure
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Savings Opportunities
                </h3>
                <p className="text-gray-600">
                  Identification of potential cost reductions and optimization
                  strategies
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Action Plan
                </h3>
                <p className="text-gray-600">
                  Step-by-step recommendations to improve your payment stack
                  performance
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
