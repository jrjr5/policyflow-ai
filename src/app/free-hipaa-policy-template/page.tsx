import { Metadata } from 'next';
import LeadMagnetLayout from '@/components/LeadMagnetLayout';

export const metadata: Metadata = {
  title: 'Free HIPAA Policy Template | Clinical Compliance Resource',
  description: 'Download a professional HIPAA privacy and security policy template for your clinic. Ensure patient data protection and regulatory compliance.',
  alternates: { canonical: '/free-hipaa-policy-template' },
};

export default function FreeHipaaTemplate() {
  return (
    <LeadMagnetLayout
      title="Free HIPAA Compliance Template"
      subtitle="Establish the foundation for patient data protection with our professional HIPAA policy draft."
      description="HIPAA compliance is the cornerstone of any modern medical practice. This template provides the essential framework for Privacy and Security Rule implementation, covering PHI safeguards, workforce training, and incident response basics. While it provides a strong starting point, we recommend using our AI generator for a state-specific, practice-tailored version."
      benefits={[
        "Covers HIPAA Privacy & Security basics",
        "Includes PHI safeguard sections",
        "Staff responsibility framework",
        "Professional formatting",
        "Instant PDF download"
      ]}
      previewTitle="HIPAA Privacy & Security Protocol"
      previewContent="This policy establishes the protocols for safeguarding Protected Health Information (PHI) within the clinical environment. Workforce members must adhere to strict data access controls and report any unauthorized disclosure immediately to the Privacy Officer..."
    />
  );
}
