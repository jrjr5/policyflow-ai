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
  { id: 'iv-therapy', title: 'IV Therapy Protocols', industry: 'Infusion', slugSuffix: 'iv-therapy-protocols' },
  { id: 'psychiatry-sop', title: 'Psychiatry SOPs', industry: 'Mental Health', slugSuffix: 'psychiatry-sops' },
  { id: 'hormone-replacement', title: 'HRT Clinical Protocols', industry: 'Endocrinology', slugSuffix: 'hrt-clinical-protocols' }
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
  { slug: 'remote-monitoring-workflow', title: 'Remote Patient Monitoring Workflow', category: 'Clinical' },
  { slug: 'hipaa-staff-training', title: 'HIPAA Staff Training SOP', category: 'Compliance' },
  { slug: 'hipaa-breach-response', title: 'HIPAA Breach Response Policy', category: 'Compliance' },
  { slug: 'laser-safety-sop', title: 'Laser Safety SOP', category: 'Aesthetics' },
  { slug: 'injectable-safety-sop', title: 'Injectable Treatment SOP', category: 'Aesthetics' }
];

export const SPECIALTIES = [
  { 
    slug: 'telehealth-clinics', 
    title: 'Telehealth Clinics', 
    industry: 'Virtual Care',
    painPoints: [
      { title: "Virtual Compliance", desc: "Navigating cross-state licensure and telehealth-specific HIPAA rules." },
      { title: "Digital Triage", desc: "Ensuring safe patient screening without a physical examination." },
      { title: "Remote Prescribing", desc: "Maintaining compliance with Ryan Haight and state-level prescribing rules." }
    ],
    faqs: [
      { question: "What is a telehealth consent policy?", answer: "A document where patients acknowledge the risks and limitations of virtual care before treatment begins." },
      { question: "Do I need a BAA for Zoom?", answer: "Yes, you must have a Business Associate Agreement with any platform that handles patient data." }
    ]
  },
  { 
    slug: 'med-spas', 
    title: 'Medical Spas', 
    industry: 'Aesthetics',
    painPoints: [
      { title: "Medical Oversight", desc: "Defining the relationship between the Medical Director and nurses/aestheticians." },
      { title: "Good Faith Exams", desc: "Ensuring every patient is evaluated by a prescriber before medical treatments." },
      { title: "Injectable Safety", desc: "Standardizing aseptic technique and complication management for neurotoxins and fillers." }
    ]
  },
  { 
    slug: 'wellness-clinics', 
    title: 'Wellness Clinics', 
    industry: 'Preventative Care',
    painPoints: [
      { title: "Intake Workflows", desc: "Standardizing how new members are onboarded for holistic treatments." },
      { title: "Supplement Documentation", desc: "Ensuring clinical justification for recommended vitamins and minerals." },
      { title: "Membership Policies", desc: "Clear communication of billing, cancellations, and clinical scope." }
    ]
  },
  { 
    slug: 'weight-loss-clinics', 
    title: 'Weight Loss Clinics', 
    industry: 'Metabolic Health' 
  },
  { 
    slug: 'psychiatry-clinics', 
    title: 'Psychiatry Clinics', 
    industry: 'Mental Health',
    painPoints: [
      { title: "Crisis Workflows", desc: "Documented procedures for handling psychiatric emergencies and suicide risk." },
      { title: "Telepsychiatry SOPs", desc: "Ensuring compliance during remote psychiatric evaluations and therapy." },
      { title: "Medication Follow-up", desc: "Rigorous standards for tracking side effects and titration schedules." }
    ]
  },
  { 
    slug: 'chiropractic-clinics', 
    title: 'Chiropractic Clinics', 
    industry: 'Physical Medicine',
    painPoints: [
      { title: "Treatment Documentation", desc: "Ensuring every adjustment and manipulation is clinically justified." },
      { title: "Consent Workflows", desc: "Managing the specific risks of cervical and spinal manipulations." },
      { title: "Scheduling SOPs", desc: "Optimizing high-volume patient flow while maintaining clinical quality." }
    ]
  },
  { 
    slug: 'iv-therapy-clinics', 
    title: 'IV Therapy Clinics', 
    industry: 'Infusion Care',
    painPoints: [
      { title: "Infusion SOPs", desc: "Step-by-step clinical protocols for sterile preparation and administration." },
      { title: "Patient Observation", desc: "Monitoring for adverse reactions during and after the infusion process." },
      { title: "Hydration Workflows", desc: "Standardizing intake and screening for hydration-focused treatments." }
    ]
  },
  { 
    slug: 'hormone-replacement-clinics', 
    title: 'Hormone Replacement Clinics', 
    industry: 'Endocrinology',
    painPoints: [
      { title: "Follow-up SOPs", desc: "Ensuring regular lab reviews and titration adjustments for HRT patients." },
      { title: "Consent Workflows", desc: "Comprehensive documentation of the risks and benefits of hormone therapy." },
      { title: "Monitoring Protocols", desc: "Standardized clinical checklists for tracking long-term patient progress." }
    ]
  },
  { 
    slug: 'primary-care-clinics', 
    title: 'Primary Care Clinics', 
    industry: 'General Medicine' 
  },
  { 
    slug: 'urgent-care-clinics', 
    title: 'Urgent Care Clinics', 
    industry: 'Emergency Medicine',
    painPoints: [
      { title: "Triage Workflows", desc: "Rapidly prioritizing patients based on clinical severity and urgency." },
      { title: "Walk-in SOPs", desc: "Managing the high-pressure workflow of unscheduled patient arrivals." },
      { title: "Charting Procedures", desc: "Maintaining high documentation quality in a fast-paced environment." }
    ]
  },
  {
    slug: 'dentistry-clinics',
    title: 'Disabled Clinics',
    industry: 'Disabled',
    painPoints: [
      { title: "Infection Control", desc: "Maintaining rigorous sterilization protocols for dental instruments and operatories." },
      { title: "Treatment Documentation", desc: "Ensuring accurate charting for restorative, surgical, and preventative care." },
      { title: "Scheduling Efficiency", desc: "Optimizing chair time and reducing no-shows in a high-volume practice." }
    ],
    faqs: [
      { question: "What is an infection control SOP in dentistry?", answer: "A set of protocols following CDC and OSHA guidelines for sterilization, PPE, and surface disinfection in the dental office." },
      { question: "Do dental clinics need a HIPAA privacy policy?", answer: "Yes, any dental practice that transmits health information electronically (like insurance claims) is a covered entity under HIPAA." }
    ]
  },
  {
    slug: 'pediatric-clinics',
    title: 'Pediatric Clinics',
    industry: 'Pediatrics',
    painPoints: [
      { title: "Immunization Workflows", desc: "Ensuring accurate tracking and administration of pediatric vaccines." },
      { title: "Parent Communication", desc: "Managing documentation and consent when treating minors." },
      { title: "Intake Policies", desc: "Standardizing the collection of developmental and social history." }
    ],
    faqs: [
      { question: "How do I handle consent for minors?", answer: "Our SOPs include specific protocols for identifying legal guardians and obtaining valid informed consent for pediatric patients." },
      { question: "Are vaccine records HIPAA protected?", answer: "Yes, immunization records are part of the protected health information (PHI) and must be handled with standard HIPAA safeguards." }
    ]
  },
  {
    slug: 'dermatology-clinics',
    title: 'Dermatology Clinics',
    industry: 'Dermatology',
    painPoints: [
      { title: "Procedure Workflows", desc: "SOPs for biopsies, excisions, and cosmetic dermatological treatments." },
      { title: "Intake Documentation", desc: "Capturing detailed skin history and previous dermatological exposures." },
      { title: "Cosmetic Standards", desc: "Maintaining high clinical standards for elective aesthetic procedures." }
    ],
    faqs: [
      { question: "Do I need separate SOPs for cosmetic procedures?", answer: "Yes, elective cosmetic procedures often have different risk profiles and consent requirements than medical dermatology." }
    ]
  }
];

export const INDUSTRY_PAGES = [
  {
    
    industrySlug: 'dentistry-clinics',
    type: 'policies',
    title: 'Disabled Policies & SOPs',
    description: 'Professional infection control, patient intake, and clinical documentation for modern dental practices.'
  },
  {
    
    industrySlug: 'dentistry-clinics',
    type: 'generator',
    title: 'Disabled SOP Generator',
    description: 'Generate audit-ready dental SOPs for sterilization, triage, and patient communication in seconds.'
  },
  {
    slug: 'psychiatry-clinic-policies',
    industrySlug: 'psychiatry-clinics',
    type: 'policies',
    title: 'Psychiatry Clinic Policies',
    description: 'Telepsychiatry workflows, crisis management protocols, and psychiatric intake documentation.'
  },
  {
    slug: 'psychiatry-sop-generator',
    industrySlug: 'psychiatry-clinics',
    type: 'generator',
    title: 'Psychiatry SOP Generator',
    description: 'Build comprehensive mental health SOPs for clinical follow-ups and medication management.'
  },
  {
    slug: 'chiropractic-compliance',
    industrySlug: 'chiropractic-clinics',
    type: 'compliance',
    title: 'Chiropractic Compliance & Policies',
    description: 'Treatment documentation, informed consent, and scheduling SOPs for chiropractic offices.'
  },
  {
    slug: 'urgent-care-workflows',
    industrySlug: 'urgent-care-clinics',
    type: 'policies',
    title: 'Urgent Care Workflows & SOPs',
    description: 'Triage protocols, walk-in management, and high-efficiency charting for urgent care centers.'
  },
  {
    slug: 'pediatric-clinic-sops',
    industrySlug: 'pediatric-clinics',
    type: 'policies',
    title: 'Pediatric Clinic SOPs',
    description: 'Pediatric intake, immunization workflows, and parent communication protocols.'
  },
  {
    slug: 'dermatology-policies',
    industrySlug: 'dermatology-clinics',
    type: 'policies',
    title: 'Dermatology Policies & SOPs',
    description: 'Clinical protocols for dermatological procedures, intake documentation, and cosmetic workflows.'
  },
  {
    slug: 'aesthetics-clinic-compliance',
    industrySlug: 'med-spas',
    type: 'compliance',
    title: 'Aesthetics Clinic Compliance',
    description: 'Injectable safety, laser protocols, and sanitation SOPs for aesthetic medical clinics.'
  },
  {
    slug: 'wellness-clinic-workflows',
    industrySlug: 'wellness-clinics',
    type: 'policies',
    title: 'Wellness Clinic Workflows',
    description: 'Operational SOPs for membership management, nutritional guidance, and intake workflows.'
  },
  {
    slug: 'hormone-therapy-policies',
    industrySlug: 'hormone-replacement-clinics',
    type: 'policies',
    title: 'Hormone Therapy Policies',
    description: 'Clinical protocols for HRT monitoring, titration, and patient follow-up.'
  },
  {
    slug: 'iv-therapy-sop-generator',
    industrySlug: 'iv-therapy-clinics',
    type: 'generator',
    title: 'IV Therapy SOP Generator',
    description: 'Generate hydration workflows, infusion protocols, and patient observation SOPs.'
  }
];

export function slugify(text: string) {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}
