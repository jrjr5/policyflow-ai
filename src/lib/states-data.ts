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
    title: 'Dental Clinics',
industry: 'Dentistry',
    painPoints: [
     { title: "Infection Control", desc: "Maintaining rigorous sterilization protocols for instruments and operatories." },
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
  slug: 'texas-telehealth-policy-generator',
  industrySlug: 'telehealth-clinics',
  type: 'generator',
  title: 'Texas Telehealth Policy Generator',
  description: 'Generate Texas telehealth SOPs, HIPAA templates, and clinic workflows using AI.'
},

{
  slug: 'florida-medspa-hipaa-policies',
  industrySlug: 'medical-spas',
  type: 'policies',
  title: 'Florida MedSpa HIPAA Policies',
  description: 'Create Florida medspa HIPAA policies, consent forms, and compliance templates using AI.'
},
{
  slug: 'dental-policies-sops',
  industrySlug: 'dentistry-clinics',
  type: 'policies',
  title: 'Dental Policies & SOPs',
  description: 'Professional infection control, patient intake, and clinical documentation for modern dental practices.'
},
{
  slug: 'dental-sop-generator',
  industrySlug: 'dentistry-clinics',
  type: 'generator',
  title: 'Dental SOP Generator',
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
  },
{
  slug: 'texas-telehealth-policy-generator',
  industrySlug: 'telehealth-clinics',
  type: 'generator',
  title: 'Texas Telehealth Policy Generator',
  description: 'Generate Texas telehealth SOPs, HIPAA policies, and healthcare compliance templates instantly using AI.'
},

{
  slug: 'florida-medspa-hipaa-policies',
  industrySlug: 'medical-spas',
  type: 'policies',
  title: 'Florida MedSpa HIPAA Policies',
  description: 'Create Florida medspa HIPAA policies, consent forms, and compliance templates using AI.'
},

{
  slug: 'california-clinic-compliance-manual',
  industrySlug: 'medical-clinics',
  type: 'compliance',
  title: 'California Clinic Compliance Manual',
  description: 'Generate California clinic compliance manuals, healthcare SOPs, and HIPAA workflows instantly.'
},

{
  slug: 'washington-behavioral-health-sops',
  industrySlug: 'behavioral-health',
  type: 'policies',
  title: 'Washington Behavioral Health SOPs',
  description: 'Create Washington behavioral health SOPs, intake workflows, and compliance templates using AI.'
},

{
  slug: 'illinois-weight-loss-clinic-policies',
  industrySlug: 'weight-loss-clinics',
  type: 'policies',
  title: 'Illinois Weight Loss Clinic Policies',
  description: 'Generate Illinois weight loss clinic SOPs, GLP-1 compliance templates, and patient workflows instantly.' 
  },
{
  slug: 'california-telehealth-policy-generator',
  industrySlug: 'telehealth-clinics',
  type: 'generator',
  title: 'California Telehealth Policy Generator',
  description: 'Generate California telehealth SOPs, HIPAA policies, and clinic compliance workflows using AI.'
},
{
  slug: 'florida-telehealth-sop-generator',
  industrySlug: 'telehealth-clinics',
  type: 'generator',
  title: 'Florida Telehealth SOP Generator',
  description: 'Create Florida telehealth SOPs, HIPAA workflows, virtual care policies, and compliance templates using AI.'
},
{
  slug: 'new-york-telehealth-policies',
  industrySlug: 'telehealth-clinics',
  type: 'policies',
  title: 'New York Telehealth Policies',
  description: 'Generate New York telehealth policies, HIPAA documentation, consent workflows, and virtual care SOPs using AI.'
},
{
  slug: 'washington-telehealth-compliance',
  industrySlug: 'telehealth-clinics',
  type: 'compliance',
  title: 'Washington Telehealth Compliance Templates',
  description: 'Create Washington telehealth compliance templates, clinic SOPs, and HIPAA-ready workflows using AI.'
},
{
  slug: 'illinois-telehealth-policy-templates',
  industrySlug: 'telehealth-clinics',
  type: 'policies',
  title: 'Illinois Telehealth Policy Templates',
  description: 'Generate Illinois telehealth policies, virtual visit SOPs, HIPAA workflows, and clinic documentation using AI.'
},
{
  slug: 'texas-medspa-compliance-manual',
  industrySlug: 'medical-spas',
  type: 'compliance',
  title: 'Texas MedSpa Compliance Manual',
  description: 'Create Texas medspa compliance manuals, HIPAA policies, consent forms, and treatment SOPs using AI.'
},
{
  slug: 'california-medspa-sop-generator',
  industrySlug: 'medical-spas',
  type: 'generator',
  title: 'California MedSpa SOP Generator',
  description: 'Generate California medspa SOPs, treatment workflows, HIPAA policies, and compliance documentation using AI.'
},
{
  slug: 'arizona-medspa-hipaa-policies',
  industrySlug: 'medical-spas',
  type: 'policies',
  title: 'Arizona MedSpa HIPAA Policies',
  description: 'Create Arizona medspa HIPAA policies, patient consent templates, compliance workflows, and SOPs using AI.'
},
{
  slug: 'nevada-medspa-consent-forms',
  industrySlug: 'medical-spas',
  type: 'policies',
  title: 'Nevada MedSpa Consent Forms',
  description: 'Generate Nevada medspa consent forms, treatment policies, HIPAA templates, and operational SOPs using AI.'
},
{
  slug: 'georgia-medspa-policy-generator',
  industrySlug: 'medical-spas',
  type: 'generator',
  title: 'Georgia MedSpa Policy Generator',
  description: 'Create Georgia medspa policies, compliance SOPs, intake workflows, and HIPAA documentation using AI.'
},
{
  slug: 'texas-weight-loss-clinic-policies',
  industrySlug: 'weight-loss-clinics',
  type: 'policies',
  title: 'Texas Weight Loss Clinic Policies',
  description: 'Generate Texas weight loss clinic policies, GLP-1 SOPs, patient workflows, and compliance templates using AI.'
},
{
  slug: 'florida-glp1-sop-generator',
  industrySlug: 'weight-loss-clinics',
  type: 'generator',
  title: 'Florida GLP-1 SOP Generator',
  description: 'Create Florida GLP-1 clinic SOPs, weight loss workflows, medication documentation, and compliance templates using AI.'
},
{
  slug: 'california-semaglutide-clinic-policies',
  industrySlug: 'weight-loss-clinics',
  type: 'policies',
  title: 'California Semaglutide Clinic Policies',
  description: 'Generate California semaglutide clinic policies, GLP-1 SOPs, HIPAA workflows, and patient documentation using AI.'
},
{
  slug: 'wisconsin-weight-loss-compliance',
  industrySlug: 'weight-loss-clinics',
  type: 'compliance',
  title: 'Wisconsin Weight Loss Clinic Compliance',
  description: 'Create Wisconsin weight loss clinic SOPs, GLP-1 documentation, HIPAA policies, and compliance templates using AI.'
},
{
  slug: 'illinois-glp1-clinic-templates',
  industrySlug: 'weight-loss-clinics',
  type: 'policies',
  title: 'Illinois GLP-1 Clinic Templates',
  description: 'Generate Illinois GLP-1 clinic policies, weight loss SOPs, patient intake workflows, and compliance templates using AI.'
},
{
  slug: 'texas-mental-health-compliance',
  industrySlug: 'behavioral-health',
  type: 'compliance',
  title: 'Texas Mental Health Compliance Templates',
  description: 'Create Texas mental health clinic SOPs, intake workflows, HIPAA policies, and compliance documentation using AI.'
},
{
  slug: 'california-psychiatry-policies',
  industrySlug: 'psychiatry-clinics',
  type: 'policies',
  title: 'California Psychiatry Policies',
  description: 'Generate California psychiatry clinic HIPAA policies, intake workflows, crisis protocols, and compliance SOPs using AI.'
},
{
  slug: 'florida-behavioral-health-sops',
  industrySlug: 'behavioral-health',
  type: 'policies',
  title: 'Florida Behavioral Health SOPs',
  description: 'Create Florida behavioral health SOPs, patient intake documentation, HIPAA workflows, and compliance templates using AI.'
},
{
  slug: 'washington-therapy-clinic-policies',
  industrySlug: 'behavioral-health',
  type: 'policies',
  title: 'Washington Therapy Clinic Policies',
  description: 'Generate Washington therapy clinic policies, intake workflows, telehealth SOPs, and HIPAA documentation using AI.'
},
{
  slug: 'new-york-psychiatry-compliance-manual',
  industrySlug: 'psychiatry-clinics',
  type: 'compliance',
  title: 'New York Psychiatry Compliance Manual',
  description: 'Create New York psychiatry compliance manuals, HIPAA policies, telepsychiatry SOPs, and intake workflows using AI.'
},
];

export function slugify(text: string) {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}
