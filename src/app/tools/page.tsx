import React from 'react';
import Link from 'next/link';
import ToolPageLayout from '@/components/ToolPageLayout';

const tools = [
  {
    path: '/character-count',
    title: '글자 수 계산기',
    description: '텍스트의 글자, 단어, 문장 수를 세어줍니다.',
  },
  {
    path: '/date-calculator',
    title: '날짜 계산기',
    description: '두 날짜 사이의 기간을 계산하거나 특정 날짜로부터 기간을 더하고 뺄 수 있습니다.',
  },
  {
    path: '/image-converter',
    title: '이미지 변환기',
    description: '다양한 이미지 포맷을 변환하고 최적화합니다.',
  },
  {
    path: '/loan-calculator',
    title: '대출 계산기',
    description: '대출 원금, 이자율, 기간을 바탕으로 월 상환액을 계산합니다.',
  },
  {
    path: '/percentage-calculator',
    title: '백분율 계산기',
    description: '다양한 백분율 계산을 쉽고 빠르게 수행합니다.',
  },
  {
    path: '/qr-code-generator',
    title: 'QR 코드 생성기',
    description: '텍스트, URL 등을 QR 코드로 변환합니다.',
  },
];

export default function ToolsPage() {
  return (
    <ToolPageLayout
      title="모든 유용한 도구"
      description="일상과 업무에 필요한 다양한 도구들을 한눈에 확인하고 사용해보세요."
    >
      <div className="container my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div key={tool.path} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link href={tool.path} className="block">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600">{tool.title}</h2>
                <p className="text-gray-600">{tool.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </ToolPageLayout>
  );
}
