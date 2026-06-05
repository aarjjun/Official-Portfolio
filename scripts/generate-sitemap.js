import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const domain = 'https://imarjunofficial.onrender.com';

const routes = [
  '/',
  '/about',
  '/services',
  '/projects',
  '/knowledge',
  '/contact',
  '/faqs',
];

const blogsDir = path.join(__dirname, '../src/content/blogs');

let blogRoutes = [];

if (fs.existsSync(blogsDir)) {
  const files = fs.readdirSync(blogsDir);
  files.forEach(file => {
    if (file.endsWith('.md')) {
      const slug = file.replace('.md', '');
      blogRoutes.push(`/knowledge/${slug}`);
    }
  });
}

const allRoutes = [...routes, ...blogRoutes];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : (route.startsWith('/knowledge/') ? '0.7' : '0.8')}</priority>
  </url>`).join('\n')}
</urlset>
`;

const robotsContent = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;

const publicDir = path.join(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);

console.log('✅ sitemap.xml and robots.txt generated successfully!');
