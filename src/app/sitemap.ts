import { MetadataRoute } from 'next';
import { US_STATES, NICHES, POLICY_TYPES, SPECIALTIES, INDUSTRY_PAGES, slugify } from '@/lib/states-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://policyflow-ai.vercel.app';
  
  const staticRoutes = [
    '',
    '/privacy',
    '/terms',
    '/contact',
    '/hipaa-policy-generator',
    '/telehealth-policy-generator',
    '/medspa-sop-generator',
    '/weight-loss-clinic-sop-generator',
    '/clinic-policy-generator',
    '/free-hipaa-policy-template',
    '/free-telehealth-sop-template',
    '/free-clinic-compliance-checklist',
    '/launch',
    '/states',
    '/example-hipaa-policy',
    '/example-telehealth-sop',
    '/example-medspa-consent-policy',
    '/example-medication-refill-policy',
    '/telehealth-clinic-policies',
    '/weight-loss-clinic-compliance',
    '/clinic-employee-handbook-generator',
    '/healthcare-sop-generator',
    '/hipaa-compliance',
    '/telehealth-sops',
    '/medspa-compliance',
    '/clinic-compliance-policies',
    '/healthcare-workflows',
    '/clinic-documentation',
    '/weight-loss-clinic-policies',
    '/healthcare-sop-templates',
    ...INDUSTRY_PAGES.map(p => `/${p.slug}`)
  ];

  const stateRoutes: string[] = [];
  US_STATES.forEach(state => {
    NICHES.forEach(niche => {
      stateRoutes.push(`/states/${slugify(state)}-${niche.slugSuffix}`);
    });
  });

  const policyRoutes = POLICY_TYPES.map(p => `/policies/${p.slug}`);
  const specialtyRoutes = SPECIALTIES.map(s => `/specialties/${s.slug}`);

  const allRoutes = [...staticRoutes, ...stateRoutes, ...policyRoutes, ...specialtyRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
