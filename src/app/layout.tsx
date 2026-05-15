import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://policyflow-ai.vercel.app'),
  title: {
    default: "PolicyFlow AI - Audit-Ready Clinic Policies in Minutes",
    template: "%s | PolicyFlow AI"
  },
  description: "Generate professional policies and SOPs for telehealth, wellness, and med spa clinics using AI. Audit-ready HIPAA, Telehealth, and clinical compliance templates.",
  keywords: ["HIPAA policy generator", "telehealth SOP generator", "med spa policy templates", "clinic compliance policies", "healthcare SOP AI", "clinic documentation templates"],
  authors: [{ name: "PolicyFlow AI Team" }],
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://policyflow-ai.vercel.app",
    siteName: "PolicyFlow AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PolicyFlow AI - Clinical Policy Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PolicyFlow AI - Audit-Ready Clinic Policies in Minutes",
    description: "Generate professional policies and SOPs for telehealth, wellness, and med spa clinics using AI.",
  },
  verification: {
    google: "_jDX6j00NZ_asZYUFd835etHvdpYEvQ6k8Cd4w4f_zo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PolicyFlow AI",
    "operatingSystem": "Web",
    "applicationCategory": "HealthApplication",
    "offers": {
      "@type": "Offer",
      "price": "149.00",
      "priceCurrency": "USD"
    },
    "description": "Generate professional, audit-ready clinical policies and SOPs for telehealth, med spas, and wellness clinics using AI."
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PolicyFlow AI",
    "url": "https://policyflow-ai.vercel.app",
    "logo": "https://policyflow-ai.vercel.app/logo.png",
    "sameAs": [
      "https://x.com/policyflow_ai",
      "https://linkedin.com/company/policyflow-ai"
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
