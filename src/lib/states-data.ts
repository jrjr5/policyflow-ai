export const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming"
];

export const NICHES = [
  { id: 'telehealth-policies', title: 'Telehealth Policies', industry: 'Telehealth', slugSuffix: 'telehealth-policies' },
  { id: 'medspa-sop', title: 'MedSpa SOP Generator', industry: 'MedSpa', slugSuffix: 'medspa-sop-generator' },
  { id: 'clinic-compliance', title: 'Clinic Compliance', industry: 'Clinic', slugSuffix: 'clinic-compliance' },
  { id: 'weight-loss-policies', title: 'Weight Loss Clinic Policies', industry: 'Weight Loss', slugSuffix: 'weight-loss-clinic-policies' },
  { id: 'hipaa-generator', title: 'HIPAA Policy Generator', industry: 'HIPAA', slugSuffix: 'hipaa-policy-generator' },
  { id: 'employee-handbook', title: 'Clinic Employee Handbook', industry: 'Healthcare HR', slugSuffix: 'employee-handbook-generator' },
  { id: 'medication-refill', title: 'Medication Refill Policy', industry: 'Pharmacy Ops', slugSuffix: 'medication-refill-policy' },
  { id: 'patient-intake', title: 'Patient Intake SOP', industry: 'Workflow', slugSuffix: 'patient-intake-sop' },
  { id: 'osha-compliance', title: 'OSHA Clinic Compliance', industry: 'Safety', slugSuffix: 'osha-compliance' },
  { id: 'iv-therapy', title: 'IV Therapy Protocols', industry: 'Infusion', slugSuffix: 'iv-therapy-protocols' }
];

export const POLICY_TYPES = [
  { slug: 'hipaa-privacy-policy', title: 'HIPAA Privacy Policy', category: 'Compliance' },
  { slug: 'hipaa-security-policy', title: 'HIPAA Security Policy', category: 'Compliance' },
  { slug: 'telehealth-consent-policy', title: 'Telehealth Consent Policy', category: 'Patient Care' },
  { slug: 'medication-refill-policy', title: 'Medication Refill Policy', category: 'Operations' },
  { slug: 'no-show-policy', title: 'No-Show and Cancellation Policy', category: 'Operations' },
  { slug: 'patient-intake-sop', title: 'Patient Intake SOP', category: 'Workflow' },
  { slug: 'osha-clinic-policy', title: 'OSHA Clinic Compliance Policy', category: 'Safety' },
  { slug: 'infection-control-sop', title: 'Infection Control SOP', category: 'Safety' },
  { slug: 'incident-reporting-policy', title: 'Clinical Incident Reporting Policy', category: 'Compliance' },
  { slug: 'medical-waste-disposal-sop', title: 'Medical Waste Disposal SOP', category: 'Safety' },
  { slug: 'documentation-retention-policy', title: 'Medical Record Retention Policy', category: 'Compliance' },
  { slug: 'nurse-triage-sop', title: 'Nurse Triage Workflow SOP', category: 'Clinical' },
  { slug: 'appointment-scheduling-sop', title: 'Appointment Scheduling SOP', category: 'Operations' },
  { slug: 'employee-onboarding-sop', title: 'Clinical Staff Onboarding SOP', category: 'HR' },
  { slug: 'patient-communication-policy', title: 'Patient Communication Policy', category: 'Patient Care' },
  { slug: 'charting-sop', title: 'Clinical Charting and Documentation SOP', category: 'Clinical' },
  { slug: 'remote-monitoring-workflow', title: 'Remote Patient Monitoring Workflow', category: 'Clinical' }
];

export const SPECIALTIES = [
  { slug: 'telehealth-clinics', title: 'Telehealth Clinics', industry: 'Virtual Care' },
  { slug: 'med-spas', title: 'Medical Spas', industry: 'Aesthetics' },
  { slug: 'wellness-clinics', title: 'Wellness Clinics', industry: 'Preventative Care' },
  { slug: 'weight-loss-clinics', title: 'Weight Loss Clinics', industry: 'Metabolic Health' },
  { slug: 'psychiatry-clinics', title: 'Psychiatry Clinics', industry: 'Mental Health' },
  { slug: 'chiropractic-clinics', title: 'Chiropractic Clinics', industry: 'Physical Medicine' },
  { slug: 'iv-therapy-clinics', title: 'IV Therapy Clinics', industry: 'Infusion Care' },
  { slug: 'hormone-replacement-clinics', title: 'Hormone Replacement Clinics', industry: 'Endocrinology' },
  { slug: 'primary-care-clinics', title: 'Primary Care Clinics', industry: 'General Medicine' },
  { slug: 'urgent-care-clinics', title: 'Urgent Care Clinics', industry: 'Emergency Medicine' }
];

export function slugify(text: string) {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}
