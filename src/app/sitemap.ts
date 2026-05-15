import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://policyflow-ai.vercel.app';
  
  const routes = [
    '',
    '/privacy',
    '/terms',
    '/contact',
    '/hipaa-policy-generator',
    '/telehealth-policy-generator',
    '/medspa-sop-generator',
    '/weight-loss-clinic-sop-generator',
    '/clinic-policy-generator',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
