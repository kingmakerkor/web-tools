
import React from 'react';
import Link from 'next/link';
import ToolPageLayout from '@/components/ToolPageLayout';

// 임시 블로그 게시물 데이터
const blogPosts = [
  {
    slug: 'how-to-use-qr-code',
    title: 'QR 코드, 어떻게 활용해야 할까요?',
    description: 'QR 코드의 다양한 활용 사례와 생성 팁을 알아봅니다.',
    date: '2025-08-08',
  },
  {
    slug: 'image-optimization-tips',
    title: '웹사이트 이미지 최적화, 왜 중요할까요?',
    description: '웹 성능 향상을 위한 이미지 최적화의 중요성과 방법을 소개합니다.',
    date: '2025-08-01',
  },
];

export default function BlogPage() {
  return (
    <ToolPageLayout
      title="블로그"
      description="유용한 도구들과 관련된 다양한 정보와 팁을 만나보세요."
    >
      <div className="container my-5">
        <div className="row gy-4">
          {blogPosts.map((post) => (
            <div className="col-lg-6" key={post.slug}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold mb-2">
                    <Link href={`/blog/${post.slug}`} className="text-decoration-none text-primary hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="card-text text-muted mb-3">{post.description}</p>
                  <p className="text-sm text-gray-500">작성일: {post.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ToolPageLayout>
  );
}
