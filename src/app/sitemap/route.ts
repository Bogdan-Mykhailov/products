import { NextResponse } from 'next/server';
import products from '@/data/Products';

export async function GET() {
  const baseUrl = 'https://products-nt.vercel.app';

  const staticPages = [
    `${baseUrl}/`,
  ];

  const productPages = products.map((product) => `${baseUrl}/products/${product.id}`);

  const allPages = [...staticPages, ...productPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
    .map((url) => {
      return `<url>
            <loc>${url}</loc>
          </url>`;
    })
    .join('')}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
