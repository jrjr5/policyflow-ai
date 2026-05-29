import { MetadataRoute } from 'next';
import { INDUSTRY_PAGES, slugify, US_STATES, NICHES } from '@/lib/states-data';
import { generatePseoSlugs } from '@/lib/p-seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://policyflow-ai.vercel.app';

  const staticRoutes = [
    '',
    '/privacy',
    '/terms',
    '/contact',
    '/states',
    '/hipaa-policy-generator',
    '/telehealth-policy-generator',
    '/medspa-sop-generator',
    '/weight-loss-clinic-sop-generator',
    '/clinic-policy-generator',
    '/free-hipaa-policy-template',
    '/free-telehealth-sop-template',
    '/free-clinic-compliance-checklist',
  ];

  const industryRoutes = INDUSTRY_PAGES.map((page) => `/${page.slug}`);

  const pseoRoutes = generatePseoSlugs().map((slug) => `/${slug}`);

  const stateDirectoryRoutes = US_STATES.flatMap((state) =>
    NICHES.map((niche) => `/${slugify(state)}-${niche.slugSuffix}`)
  );

  const allRoutes = Array.from(
    new Set([
      ...staticRoutes,
      ...industryRoutes,
      ...pseoRoutes,
      ...stateDirectoryRoutes,
    ])
  );

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
