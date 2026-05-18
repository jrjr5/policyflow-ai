import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    google: "t2l3OpZDIx3J3DwGi4d_E3D8W3jifde7eNf4R4LVJp8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PolicyFlow AI",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI tool for generating healthcare policies, SOPs, compliance workflows, and clinic documentation. Built for telehealth, med spas, and wellness clinics.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128"
    }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PolicyFlow AI",
    "url": "https://policyflow-ai.vercel.app",
    "logo": "https://policyflow-ai.vercel.app/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-0199",
      "contactType": "customer service"
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wrdhj3j1uh");
          `}
        </Script>
      </body>
    </html>
  );
}
