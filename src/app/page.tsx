'use client';

import Link from 'next/link';

const tools = [
  {
    title: 'QR 코드 생성기',
    description: 'URL이나 텍스트를 입력하여 즉시 QR 코드를 만듭니다.',
    path: '/qr-code-generator',
    icon: 'bi-qr-code',
  },
  {
    title: '이미지 포맷 변환기',
    description: 'PNG, JPG, WEBP 등 다양한 이미지 포맷을 변환합니다.',
    path: '/image-converter',
    icon: 'bi-images',
  },
  {
    title: '글자 수 계산기',
    description: '텍스트의 글자, 단어, 줄 수를 계산합니다.',
    path: '/character-count',
    icon: 'bi-textarea-t',
  },
  {
    title: '퍼센트 계산기',
    description: '다양한 비율 및 퍼센트 계산을 손쉽게 합니다.',
    path: '/percentage-calculator',
    icon: 'bi-percent',
  },
  {
    title: '날짜 계산기',
    description: 'D-day, 기념일, 두 날짜 사이의 차이를 계산합니다.',
    path: '/date-calculator',
    icon: 'bi-calendar-event',
  },
  {
    title: '대출 이자 계산기',
    description: '원리금균등, 원금균등 방식의 대출 이자를 계산합니다.',
    path: '/loan-calculator',
    icon: 'bi-bank',
  },
];

export default function Home() {
  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="text-5xl font-bold text-gray-800">매우 유용한 일상 도구 모음</h1>
        <p className="text-muted mt-3 text-xl">일상과 업무에 필요한 다양한 도구들을 만나보세요.</p>
      </header>

      <div className="row gy-4">
        {tools.map((tool) => (
          <div className="col-lg-4 col-md-6" key={tool.path}>
            <Link href={tool.path} className="card h-100 text-decoration-none text-dark shadow-sm transition-transform hover:scale-105 hover:shadow-xl">
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex align-items-start mb-3">
                    <i className={`bi ${tool.icon} fs-2 text-primary me-3`}></i>
                    <h5 className="card-title font-bold text-xl mb-0">{tool.title}</h5>
                  </div>
                  <p className="card-text flex-grow-1 text-muted">{tool.description}</p>
                </div>
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
