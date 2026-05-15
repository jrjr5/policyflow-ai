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
  title: {
    default: "PolicyFlow AI - Audit-Ready Clinic Policies in Minutes",
    template: "%s | PolicyFlow AI"
  },
  description: "Generate professional policies and SOPs for telehealth, wellness, and med spa clinics using AI. Audit-ready HIPAA, Telehealth, and clinical compliance templates.",
  keywords: ["HIPAA policy generator", "telehealth SOP generator", "med spa policy templates", "clinic compliance policies", "healthcare SOP AI"],
  authors: [{ name: "PolicyFlow AI Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://policyflow-ai.vercel.app",
    siteName: "PolicyFlow AI",
    images: [
      {
        url: "https://policyflow-ai.vercel.app/og-image.png",
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
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
