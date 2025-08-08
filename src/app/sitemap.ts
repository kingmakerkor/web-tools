import { MetadataRoute } from 'next';

const posts = {
  'how-to-use-qr-code': {
    title: 'QR 코드, 어떻게 활용해야 할까요?',
    date: '2025-08-08',
  },
  'image-optimization-tips': {
    title: '웹사이트 이미지 최적화, 왜 중요할까요?',
    date: '2025-08-01',
  },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://web-tools-sandy.vercel.app'; // 실제 배포 시 도메인으로 변경 필요

  const blogPosts = Object.keys(posts).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: posts[slug as keyof typeof posts].date,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogPosts,
    {
      url: `${baseUrl}/character-count`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/date-calculator`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/image-converter`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/loan-calculator`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/percentage-calculator`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/qr-code-generator`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
