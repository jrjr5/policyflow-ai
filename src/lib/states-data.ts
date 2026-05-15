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
  {
    id: 'telehealth-policies',
    title: 'Telehealth Policies',
    industry: 'Telehealth',
    slugSuffix: 'telehealth-policies'
  },
  {
    id: 'medspa-sop',
    title: 'MedSpa SOP Generator',
    industry: 'MedSpa',
    slugSuffix: 'medspa-sop-generator'
  },
  {
    id: 'clinic-compliance',
    title: 'Clinic Compliance',
    industry: 'Clinic',
    slugSuffix: 'clinic-compliance'
  },
  {
    id: 'weight-loss-policies',
    title: 'Weight Loss Clinic Policies',
    industry: 'Weight Loss',
    slugSuffix: 'weight-loss-clinic-policies'
  },
  {
    id: 'hipaa-generator',
    title: 'HIPAA Policy Generator',
    industry: 'HIPAA',
    slugSuffix: 'hipaa-policy-generator'
  }
];

export function slugify(text: string) {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}
