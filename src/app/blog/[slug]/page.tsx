
import React from 'react';
import { notFound } from 'next/navigation';
import ToolPageLayout from '@/components/ToolPageLayout';

// 임시 블로그 게시물 데이터 (실제 환경에서는 DB 또는 CMS에서 가져옴)
const posts = {
  'how-to-use-qr-code': {
    title: 'QR 코드, 어떻게 활용해야 할까요?',
    date: '2025-08-08',
    content: (
      <>
        <p className="mb-4">QR 코드는 단순한 흑백 격자무늬를 넘어, 다양한 정보를 담고 있는 강력한 도구입니다. 스마트폰으로 스캔하는 것만으로 웹사이트 접속, 연락처 저장, 결제 등 다양한 기능을 수행할 수 있습니다.</p>
        <h3 className="text-xl font-semibold mb-3">QR 코드의 주요 활용 사례:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
          <li><strong>마케팅 및 홍보:</strong> 제품 포장, 광고판, 명함 등에 QR 코드를 넣어 웹사이트, 이벤트 페이지, 소셜 미디어 등으로 고객을 유도할 수 있습니다.</li>
          <li><strong>정보 공유:</strong> 복잡한 URL, 긴 텍스트, Wi-Fi 비밀번호 등을 QR 코드로 만들어 쉽고 빠르게 공유할 수 있습니다.</li>
          <li><strong>결제 시스템:</strong> 모바일 결제 앱과 연동하여 간편하고 빠른 결제를 가능하게 합니다.</li>
          <li><strong>교육:</strong> 교재나 전시물에 QR 코드를 넣어 추가 정보, 동영상 자료 등으로 연결하여 학습 효과를 높일 수 있습니다.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-3">QR 코드 생성 팁:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>명확한 목적:</strong> QR 코드를 통해 사용자가 무엇을 얻을 수 있는지 명확하게 전달해야 합니다.</li>
          <li><strong>디자인 고려:</strong> 브랜드 이미지에 맞춰 색상이나 로고를 추가하여 시각적인 매력을 높일 수 있습니다.</li>
          <li><strong>테스트 필수:</strong> 생성된 QR 코드가 모든 기기에서 정상적으로 스캔되는지 반드시 테스트해야 합니다.</li>
          <li><strong>추적 및 분석:</strong> QR 코드 스캔 횟수 등을 추적하여 마케팅 효과를 분석할 수 있습니다.</li>
        </ul>
        <p className="mt-4">저희 웹사이트의 <Link href="/qr-code-generator" className="text-blue-600 hover:underline">QR 코드 생성기</Link>를 활용하여 여러분만의 독창적인 QR 코드를 만들어보세요!</p>
      </>
    ),
  },
  'image-optimization-tips': {
    title: '웹사이트 이미지 최적화, 왜 중요할까요?',
    date: '2025-08-01',
    content: (
      <>
        <p className="mb-4">웹사이트 이미지 최적화는 단순히 파일 크기를 줄이는 것을 넘어, 사용자 경험 개선, 검색 엔진 최적화(SEO) 향상, 서버 비용 절감 등 다양한 이점을 제공합니다.</p>
        <h3 className="text-xl font-semibold mb-3">이미지 최적화의 중요성:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
          <li><strong>페이지 로딩 속도 향상:</strong> 최적화된 이미지는 파일 크기가 작아 웹페이지 로딩 시간을 단축시킵니다. 이는 사용자 이탈률을 줄이고 긍정적인 사용자 경험을 제공합니다.</li>
          <li><strong>검색 엔진 최적화 (SEO):</strong> 구글과 같은 검색 엔진은 페이지 로딩 속도를 순위 결정 요소 중 하나로 사용합니다. 빠른 웹사이트는 검색 결과 상위에 노출될 가능성이 높습니다.</li>
          <li><strong>대역폭 및 서버 비용 절감:</strong> 이미지 파일 크기가 작아지면 서버에서 전송해야 하는 데이터 양이 줄어들어 대역폭 사용량을 줄이고 호스팅 비용을 절감할 수 있습니다.</li>
          <li><strong>모바일 사용자 경험 개선:</strong> 모바일 환경에서는 데이터 사용량과 네트워크 속도가 중요합니다. 최적화된 이미지는 모바일 사용자에게 더 나은 경험을 제공합니다.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-3">이미지 최적화 방법:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>올바른 파일 형식 선택:</strong> 사진에는 JPG, 투명 배경이 필요한 이미지에는 PNG, 애니메이션에는 GIF, 그리고 최신 웹 환경에서는 WEBP를 고려합니다.</li>
          <li><strong>이미지 크기 조정:</strong> 웹사이트에 필요한 실제 크기로 이미지를 조절합니다. 불필요하게 큰 이미지를 사용하지 않습니다.</li>
          <li><strong>압축:</strong> 이미지 품질을 크게 저하시키지 않으면서 파일 크기를 줄이는 압축 도구를 사용합니다.</li>
          <li><strong>지연 로딩 (Lazy Loading):</strong> 당장 화면에 보이지 않는 이미지는 나중에 로딩되도록 설정하여 초기 페이지 로딩 속도를 높입니다.</li>
        </ul>
        <p className="mt-4">저희 웹사이트의 <Link href="/image-converter" className="text-blue-600 hover:underline">이미지 포맷 변환기</Link>를 활용하여 이미지를 최적화하고 웹사이트 성능을 향상시켜보세요!</p>
      </>
    ),
  },
};

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <ToolPageLayout title={post.title} description={post.title}>
      <div className="container my-5">
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-4">작성일: {post.date}</p>
          <div className="prose prose-lg max-w-none">
            {post.content}
          </div>
        </article>
      </div>
    </ToolPageLayout>
  );
}
