import { Metadata } from 'next';
import LeadMagnetLayout from '@/components/LeadMagnetLayout';

export const metadata: Metadata = {
  title: 'Free Clinic Compliance Checklist | Clinical Operations Resource',
  description: 'Download a comprehensive compliance checklist for healthcare clinics. Audit-ready verification for SOPs, training, and HIPAA safeguards.',
  alternates: { canonical: '/free-clinic-compliance-checklist' },
};

export default function FreeChecklistTemplate() {
  return (
    <LeadMagnetLayout
      title="Free Clinic Compliance Checklist"
      subtitle="Ensure your practice has every essential policy and SOP in place with our audit-ready verification guide."
      description="Don't leave your clinical compliance to chance. This checklist provides a multi-category breakdown of the essential documentation every modern healthcare business needs. From HR handbooks to clinical waste disposal, track your progress as you build a robust operational manual that protects your license and your staff."
      benefits={[
        "25+ Essential policy categories",
        "Clinical vs Administrative breakdown",
        "Quarterly review schedule",
        "Audit-readiness score guide",
        "Staff training tracker"
      ]}
      previewTitle="Clinical Compliance Audit Checklist"
      previewContent="1. HIPAA Privacy Officer Designated [ ] \n2. Workforce HIPAA Training Completed [ ] \n3. Telehealth Informed Consent Active [ ] \n4. Emergency Medical Protocol Posted [ ] \n5. Medical Record Retention Policy Stored [ ] ..."
    />
  );
}
