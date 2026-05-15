import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'PolicyFlow AI | Audit-Ready Clinic Policies & SOPs in Minutes',
  description: 'Generate professional, audit-ready clinical policies and SOPs for telehealth, med spas, and wellness clinics using AI. Start your free trial today.',
  openGraph: {
    title: 'PolicyFlow AI | Clinical Policy Generator',
    description: 'Generate professional, audit-ready clinical policies and SOPs for telehealth, med spas, and wellness clinics using AI.',
    url: 'https://policyflow-ai.vercel.app',
    siteName: 'PolicyFlow AI',
    images: [
      {
        url: 'https://policyflow-ai.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PolicyFlow AI - Clinical Policy Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return <HomeClient />;
}
