export const STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming"
];

export const INDUSTRIES = [
  { name: "Telehealth Clinics", slug: "telehealth", keywords: ["virtual care", "remote prescribing", "telemedicine"] },
  { name: "Med Spas", slug: "medspa", keywords: ["aesthetics", "injectables", "medical oversight"] },
  { name: "Wellness Clinics", slug: "wellness", keywords: ["holistic health", "preventative care", "integrative medicine"] },
  { name: "Weight Loss Clinics", slug: "weight-loss", keywords: ["metabolic health", "glp-1 prescribing", "nutrition"] },
  { name: "Psychiatry Clinics", slug: "psychiatry", keywords: ["mental health", "telepsychiatry", "crisis management"] },
  { name: "IV Therapy Clinics", slug: "iv-therapy", keywords: ["hydration", "infusion care", "vitamins"] },
  { name: "Hormone Therapy Clinics", slug: "hormone-therapy", keywords: ["hrt", "endocrinology", "testosterone"] },
  { name: "Urgent Care Clinics", slug: "urgent-care", keywords: ["emergency medicine", "triage", "walk-in care"] },
  { name: "Chiropractic Clinics", slug: "chiropractic", keywords: ["physical medicine", "adjustments", "spinal health"] },
  { name: "Pediatrics", slug: "pediatrics", keywords: ["child healthcare", "immunizations", "minor consent"] },
  { name: "Dentistry", slug: "dentistry", keywords: ["dental care", "infection control", "sterilization"] },
  { name: "Dermatology", slug: "dermatology", keywords: ["skin health", "biopsies", "aesthetic dermatology"] },
  { name: "Aesthetics Clinics", slug: "aesthetics", keywords: ["cosmetic procedures", "skin care", "rejuvenation"] }
];

export const POLICY_TYPES = [
  { name: "HIPAA Privacy Policy", slug: "hipaa-privacy-policy", template: "template", category: "Compliance" },
  { name: "HIPAA Security Policy", slug: "hipaa-security-policy", template: "template", category: "Compliance" },
  { name: "No-Show Policy", slug: "no-show-policy", template: "template", category: "Operations" },
  { name: "Patient Intake SOP", slug: "patient-intake-sop", template: "sop", category: "Workflow" },
  { name: "Employee Handbook", slug: "employee-handbook", template: "handbook", category: "HR" },
  { name: "Telehealth Consent Workflow", slug: "telehealth-consent", template: "workflow", category: "Patient Care" },
  { name: "Medication Refill Policy", slug: "medication-refill", template: "policy", category: "Operations" },
  { name: "Incident Reporting SOP", slug: "incident-reporting", template: "sop", category: "Compliance" },
  { name: "Charting Procedures", slug: "charting-procedures", template: "sop", category: "Clinical" },
  { name: "Patient Communication Workflow", slug: "patient-communication", template: "workflow", category: "Patient Care" },
  { name: "Scheduling SOP", slug: "scheduling-sop", template: "sop", category: "Operations" },
  { name: "Onboarding SOP", slug: "onboarding-sop", template: "sop", category: "HR" },
  { name: "Compliance Checklist", slug: "compliance-checklist", template: "checklist", category: "Compliance" },
  { name: "Audit Workflow", slug: "audit-workflow", template: "workflow", category: "Compliance" }
];

export const SUFFIXES = [
  "generator",
  "policies",
  "template",
  "sop",
  "workflow"
];

export function slugify(text: string) {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

export function generatePseoSlugs() {
  const slugs: string[] = [];
  
  // 1. State + Industry + Suffix (e.g. texas-telehealth-sop-generator)
  // 2. State + Industry + Policies (e.g. california-medspa-policies)
  // 3. State + Policy Type + Template (e.g. florida-hipaa-policy-template)
  
  STATES.forEach(state => {
    const s = slugify(state);
    
    // Combinations for Industry
    INDUSTRIES.forEach(industry => {
      const ind = industry.slug;
      slugs.push(`${s}-${ind}-policies`);
      slugs.push(`${s}-${ind}-sop-generator`);
      slugs.push(`${s}-${ind}-compliance-checklist`);
    });
    
    // Combinations for Policy Type
    POLICY_TYPES.forEach(policy => {
      const pol = policy.slug;
      slugs.push(`${s}-${pol}-template`);
      slugs.push(`${s}-${pol}-generator`);
    });
  });

  // Free Templates
  STATES.forEach(state => {
    const s = slugify(state);
    slugs.push(`free-${s}-telehealth-template`);
    slugs.push(`free-${s}-medspa-sop`);
  });
  
  slugs.push("free-hipaa-audit-checklist");
  slugs.push("free-weight-loss-clinic-workflow");

  return slugs;
}

export function parsePseoSlug(slug: string) {
  const parts = slug.split('-');
  
  let state = STATES.find(st => slug.includes(slugify(st)));
  let industry = INDUSTRIES.find(ind => slug.includes(ind.slug));
  let policy = POLICY_TYPES.find(pol => slug.includes(pol.slug));
  let isFree = slug.startsWith('free-');
  
  return {
    state,
    industry,
    policy,
    isFree
  };
}
