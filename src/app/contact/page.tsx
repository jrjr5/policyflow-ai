import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact PolicyFlow AI | Clinical Support & Inquiries',
  description: 'Get in touch with the PolicyFlow AI team for support, partnership inquiries, or questions about our clinical policy generation platform.',
};

export default function ContactPage() {
  return <ContactClient />;
}
