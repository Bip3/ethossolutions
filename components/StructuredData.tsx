export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ethos Solutions",
    url: "https://ethossolutions.tech",
    logo: "https://ethossolutions.tech/logo.png",
    description:
      "Leading provider of innovative payment solutions for businesses. Secure, scalable, and reliable payment processing technology.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business Ave, Suite 100",
      addressLocality: "City",
      addressRegion: "ST",
      postalCode: "12345",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-890",
      contactType: "sales",
      email: "info@ethossolutions.tech",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/ethossolutions",
      "https://twitter.com/ethossolutions",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function ServiceStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Payment Processing",
    provider: {
      "@type": "Organization",
      name: "Ethos Solutions",
      url: "https://ethossolutions.tech",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    description:
      "Enterprise payment processing solutions including payment gateways, fraud prevention, analytics, and global payment infrastructure.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
