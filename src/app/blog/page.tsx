
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
  {
    slug: 'image-conversion-considerations',
    title: '이미지 변환 시 고려사항: 품질, 형식, 그리고 활용',
    description: '이미지 변환 시 품질, 형식, 투명도, 메타데이터 등 중요한 고려사항을 다룹니다.',
    date: '2025-08-08',
  },
  {
    slug: 'date-calculator-tips',
    title: '날짜 계산기 활용 팁: 일상과 업무에서 시간을 효율적으로 관리하는 방법',
    description: '날짜 계산기를 활용하여 프로젝트 마감일, 이벤트 카운트다운 등을 관리하는 팁을 제공합니다.',
    date: '2025-08-08',
  },
  {
    slug: 'loan-calculator-usage',
    title: '대출 계산기 사용법: 현명한 대출 계획을 위한 필수 도구',
    description: '대출 계산기의 주요 입력 요소와 활용 팁을 통해 현명한 재정 계획을 돕습니다.',
    date: '2025-08-08',
  },
  {
    slug: 'percentage-calculator-usage',
    title: '백분율 계산기 활용법: 일상생활과 비즈니스에서 유용하게 사용하는 방법',
    description: '백분율 계산기를 활용하여 할인율, 세금, 성장률 등을 계산하는 방법을 설명합니다.',
    date: '2025-08-08',
  },
  {
    slug: 'character-count-tool-usefulness',
    title: '글자 수 세기 도구의 유용성: 문서 작성부터 SEO까지',
    description: '글자 수 세기 도구의 다양한 활용법과 문서 작성, SEO에서의 중요성을 다룹니다.',
    date: '2025-08-08',
  },
  {
    slug: 'advanced-qr-code-usage',
    title: 'QR 코드 생성기의 고급 활용법: 마케팅부터 개인용까지',
    description: 'QR 코드의 동적 활용, 다양한 정보 연결, 디자인 커스터마이징 등 고급 활용법을 소개합니다.',
    date: '2025-08-08',
  },
  {
    slug: 'calculator-tools-comparison',
    title: '다양한 계산기 도구의 비교 분석: 나에게 맞는 도구는?',
    description: '일반 계산기, 날짜 계산기, 대출 계산기 등 다양한 계산기 도구의 용도와 장단점을 비교 분석합니다.',
    date: '2025-08-08',
  },
  {
    slug: 'boost-productivity-with-web-tools',
    title: '웹 도구 활용으로 생산성 높이기: 스마트한 작업의 시작',
    description: '다양한 웹 도구들을 활용하여 반복적인 작업 자동화, 정확한 계산, 정보 접근성 향상 등을 통해 생산성을 높이는 방법을 설명합니다.',
    date: '2025-08-08',
  },
  {
    slug: 'personal-data-protection-tips',
    title: '개인정보 보호를 위한 웹사이트 활용법: 안전한 온라인 활동을 위한 필수 가이드',
    description: '강력한 비밀번호 사용, 2단계 인증, 개인정보 제공 신중 등 안전한 온라인 활동을 위한 개인정보 보호 팁을 제공합니다.',
    date: '2025-08-08',
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
