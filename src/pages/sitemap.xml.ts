import type { APIRoute } from 'astro';
import { blogArticles } from '../data/blogArticles';

const SITE_URL = 'https://www.plombierarlon.be';

// Strategic priority-tiered sitemap configuration
const staticPages = [
  // Tier 1: Core Homepage
  { url: '/', changefreq: 'daily', priority: '1.0' },
  
  // Tier 2: Major Service & Content Hubs
  { url: '/services', changefreq: 'weekly', priority: '0.9' },
  { url: '/services/depannage-urgence', changefreq: 'weekly', priority: '0.9' },
  { url: '/locations', changefreq: 'weekly', priority: '0.9' },
  { url: '/blog', changefreq: 'daily', priority: '0.9' },

  // Tier 3: Core Service Specialties (high commercial intent)
  { url: '/services/debouchage', changefreq: 'weekly', priority: '0.85' },
  { url: '/services/detection-fuites', changefreq: 'weekly', priority: '0.85' },
  { url: '/services/chauffage-chaudieres', changefreq: 'weekly', priority: '0.85' },
  { url: '/services/installations-sanitaires', changefreq: 'weekly', priority: '0.85' },
  { url: '/services/traitement-eau', changefreq: 'weekly', priority: '0.85' },

  // Tier 4: Regional High-Value Commune Landing Pages
  { url: '/locations/messancy', changefreq: 'weekly', priority: '0.85' },
  { url: '/locations/habay', changefreq: 'weekly', priority: '0.85' },
  { url: '/locations/aubange-athus', changefreq: 'weekly', priority: '0.85' },
  { url: '/locations/etalle', changefreq: 'weekly', priority: '0.85' },
  { url: '/locations/attert', changefreq: 'weekly', priority: '0.85' },
  { url: '/locations/steinfort', changefreq: 'weekly', priority: '0.85' },

  // Tier 5: Direct Conversion & Institutional Pages
  { url: '/contact', changefreq: 'monthly', priority: '0.80' },
  { url: '/about', changefreq: 'monthly', priority: '0.70' },
];

// Key cornerstone blog articles get higher priority
const cornerstoneSlugs = new Set([
  'prix-plombier-arlon-2026',
  'quel-plombier-urgence-24h-arlon',
  'cout-depannage-urgence-soir-weekend-arlon',
  'prix-debouchage-canalisation-arlon',
  'prix-detection-fuite-eau-infiltree-arlon',
  'eau-calcaire-arlon-faut-il-adoucisseur',
]);

export const GET: APIRoute = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const staticXml = staticPages
    .map(
      (page) => `  <url>
    <loc>${page.url === '/' ? `${SITE_URL}/` : `${SITE_URL}${page.url}`}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('\n');

  const blogXml = blogArticles
    .map((article) => {
      const isCornerstone = cornerstoneSlugs.has(article.slug);
      const priority = isCornerstone ? '0.75' : '0.65';
      const lastmod = article.updatedDate || article.publishDate || currentDate;

      return `  <url>
    <loc>${SITE_URL}/blog/${article.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticXml}
${blogXml}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
