/**
 * Centralized JSON-LD Schema Generation Utilities
 * Used across all pages for consistent structured data.
 */

const SITE_URL = "https://jugaduji.com";
const SITE_NAME = "Jugaduji Digital Solutions";
const LOGO_URL = `${SITE_URL}/jugadujibrandlogo.png`;
const OG_IMAGE_URL = `${SITE_URL}/Hero.png`;

// ─── Contact Info (Single Source of Truth) ───
export const CONTACT = {
  phone: "+91-9519498159",
  email: "info@jugaduji.com",
  address: {
    street: "Front Of Hotel The Grand, Civil Line Road",
    locality: "Robertsganj",
    region: "Uttar Pradesh",
    postalCode: "231216",
    country: "IN",
  },
  hours: "Mo-Sa 10:00-18:00",
} as const;

// ─── Social Profiles ───
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/jugadujiofficial",
  linkedin: "https://www.linkedin.com/company/jugaduji",
  twitter: "https://x.com/jugaduji",
  instagram: "https://www.instagram.com/jugadujiofficial",
} as const;

export const FOUNDER_SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/ashutosh-jugaduji/",
  twitter: "https://x.com/swe_ashutosh",
} as const;

// ─── WebSite Schema with SearchAction ───
export function generateWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      "Premium digital agency offering website development, mobile apps, UI/UX design, SEO, and digital marketing solutions for modern businesses.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-IN",
  };
}

// ─── Organization Schema with sameAs ───
export function generateOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: LOGO_URL,
      contentUrl: LOGO_URL,
      caption: SITE_NAME,
    },
    image: OG_IMAGE_URL,
    description:
      "Jugaduji Digital Solutions is a premium digital agency based in Robertsganj, India. We build high-performance websites, mobile apps, SEO strategies, and digital marketing solutions for modern businesses.",
    email: CONTACT.email,
    telephone: CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.locality,
      addressRegion: CONTACT.address.region,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
    founder: { "@id": `${SITE_URL}/#founder` },
    foundingDate: "2026",
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.instagram,
    ],
  };
}

// ─── LocalBusiness Schema ───
export function generateLocalBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    description:
      "Premium digital agency offering website development, mobile apps, UI/UX design, SEO, and digital marketing. MSME registered. Serving businesses across India.",
    url: SITE_URL,
    logo: LOGO_URL,
    image: OG_IMAGE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.locality,
      addressRegion: CONTACT.address.region,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "24.6905",
      longitude: "83.0638",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "18:00",
    },
    priceRange: "₹3,000 - ₹50,000",
    currenciesAccepted: "INR",
    paymentAccepted: "UPI, Bank Transfer, Cash",
    founder: { "@id": `${SITE_URL}/#founder` },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

// ─── Founder / Person Schema ───
export function generateFounderSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    name: "Ashutosh Kushwaha",
    jobTitle: "Founder & Lead Architect",
    url: `${SITE_URL}/founder`,
    image: `${SITE_URL}/founderimage.png`,
    description:
      "Ashutosh Kushwaha is the Founder and Lead Architect of Jugaduji Digital Solutions. He specializes in full-stack development, system architecture, and building scalable web solutions for businesses.",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "JSPIDER Training Center, Rajajinagar, Bangalore",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "System Architecture",
      "SEO Optimization",
      "Cloudflare Workers",
      "UI/UX Design",
      "Digital Marketing",
      "Full-Stack Development",
    ],
    sameAs: [
      FOUNDER_SOCIAL_LINKS.linkedin,
      FOUNDER_SOCIAL_LINKS.twitter,
    ],
  };
}

// ─── BreadcrumbList Schema ───
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: item.url,
      })),
    ],
  };
}

// ─── FAQPage Schema ───
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Service Schema ───
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url?: string;
}) {
  return {
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: service.url || `${SITE_URL}/services`,
  };
}

// ─── Full Graph for Root Layout ───
export function generateRootSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generateWebsiteSchema(),
      generateOrganizationSchema(),
      generateLocalBusinessSchema(),
      generateFounderSchema(),
    ],
  };
}

// ─── Page Schema Helper ───
// Wraps page-specific schemas (breadcrumbs, FAQ, etc.) in a @graph
export function generatePageSchema(
  ...schemas: Record<string, unknown>[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}
