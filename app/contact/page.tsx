"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle, Paperclip } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// File types handled separately since they're not directly in the form data
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/jpeg",
  "image/png",
  "text/csv",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@ethossolutions.tech",
    link: "mailto:info@ethossolutions.tech",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (949) 375-5861",
    link: "tel:+1234567890",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "3 Corporate Plaze, Suite 260, Newport Beach, CA 92660",
    link: null,
  },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFileError("");

    // Validate file size and type
    const validFiles: File[] = [];
    for (const file of files) {
      if (file.size > MAX_FILE_SIZE) {
        setFileError(`File "${file.name}" exceeds 10MB limit`);
        return;
      }
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        setFileError(`File "${file.name}" is not an accepted format`);
        return;
      }
      validFiles.push(file);
    }

    setAttachedFiles((prev) => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    console.log("Attached files:", attachedFiles);

    // Here you would typically upload files to a server or email service
    // For now, we're just logging them

    setIsSubmitted(true);
    reset();
    setAttachedFiles([]);
    setFileError("");

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                Get in Touch
              </h1>
              <p className="text-lg leading-8 text-gray-600">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Reach out to our team for sales inquiries, support, or
                    partnership opportunities.
                  </p>
                  <div className="space-y-6">
                    {contactInfo.map((info) => (
                      <div key={info.label} className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            {info.label}
                          </p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-gray-600 hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-600">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-primary rounded-xl text-white">
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-sm text-gray-100">
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                    </p>
                    <p className="text-sm text-gray-100">
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send us a Message
                  </h2>

                  {isSubmitted && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <p className="text-green-800">
                        Thank you! Your message has been sent successfully.
                        We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-900 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          {...register("name")}
                          type="text"
                          id="name"
                          className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-900 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          id="email"
                          className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-900 mb-2"
                        >
                          Company *
                        </label>
                        <input
                          {...register("company")}
                          type="text"
                          id="company"
                          className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                          placeholder="Company Name"
                        />
                        {errors.company && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.company.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-900 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          id="phone"
                          className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                          placeholder="+1 (234) 567-890"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        {...register("subject")}
                        type="text"
                        id="subject"
                        className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                        placeholder="How can we help you?"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        {...register("message")}
                        id="message"
                        rows={6}
                        className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                        placeholder="Tell us more about your needs..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* File Attachment Section */}
                    <div>
                      <label
                        htmlFor="attachments"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Attachments (Optional)
                      </label>
                      <p className="text-sm text-gray-600 mb-3">
                        For payment audits, you can attach relevant statements such as processor end of month statements, gateway statements, token library statements, ISO statements, or other cost component documents. Accepted formats: PDF, Excel, CSV, or images (max 10MB per file).
                      </p>

                      <div className="flex items-center gap-4">
                        <label
                          htmlFor="attachments"
                          className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                        >
                          <Paperclip className="h-4 w-4" />
                          Choose Files
                        </label>
                        <input
                          type="file"
                          id="attachments"
                          multiple
                          accept=".pdf,.xls,.xlsx,.csv,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </div>

                      {fileError && (
                        <p className="mt-2 text-sm text-red-600">{fileError}</p>
                      )}

                      {/* Display attached files */}
                      {attachedFiles.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {attachedFiles.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                            >
                              <div className="flex items-center gap-2">
                                <Paperclip className="h-4 w-4 text-gray-500" />
                                <span className="text-sm text-gray-700">
                                  {file.name}
                                </span>
                                <span className="text-xs text-gray-500">
                                  ({(file.size / 1024).toFixed(1)} KB)
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-red-600 hover:text-red-700 text-sm font-medium"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto rounded-md bg-primary px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map or Additional CTA */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Looking for Support?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                If you're an existing customer and need technical support,
                please visit our support portal.
              </p>
              <a
                href="#"
                className="rounded-md bg-secondary px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-secondary/90 transition-colors inline-block"
              >
                Visit Support Portal
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
