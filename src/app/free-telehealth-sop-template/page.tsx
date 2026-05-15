import { Metadata } from 'next';
import LeadMagnetLayout from '@/components/LeadMagnetLayout';

export const metadata: Metadata = {
  title: 'Free Telehealth SOP Template | Virtual Care Documentation',
  description: 'Download a free telehealth standard operating procedure template. Coverage for virtual triage, informed consent, and technical protocols.',
  alternates: { canonical: '/free-telehealth-sop-template' },
};

export default function FreeTelehealthTemplate() {
  return (
    <LeadMagnetLayout
      title="Free Telehealth SOP Template"
      subtitle="Standardize your virtual care encounters with a professional clinical workflow template."
      description="Telehealth requires unique clinical workflows compared to in-person care. From technical failure protocols to remote prescribing rules, this SOP template covers the high-level requirements for running a safe and efficient virtual clinic. Perfect for startup telehealth practices looking to establish their first operational standards."
      benefits={[
        "Virtual visit triage steps",
        "Technical failure backup protocols",
        "Telehealth informed consent basics",
        "Remote patient identity verification",
        "Documentation best practices"
      ]}
      previewTitle="Telehealth Standard Operating Procedure"
      previewContent="All telehealth encounters must commence with the verification of the patient's identity and physical location. The practitioner must confirm that the patient has provided valid informed consent for virtual treatment and that the communication platform meets security standards..."
    />
  );
}
