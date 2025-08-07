'use client';

import Link from 'next/link';

const tools = [
  {
    title: 'QR 코드 생성기',
    description: '텍스트, URL, 이메일, 전화번호 등 다양한 정보를 QR 코드로 변환해주는 온라인 도구입니다. 빠르고 쉽게 QR 코드를 생성하고 다운로드하여 활용하세요.',
    path: '/qr-code-generator',
    icon: 'bi-qr-code',
  },
  {
    title: '이미지 포맷 변환기',
    description: 'PNG, JPG, WEBP 등 다양한 이미지 포맷을 원하는 형식으로 빠르고 안전하게 변환해주는 온라인 도구입니다. 별도의 프로그램 설치 없이 웹 브라우저에서 직접 변환할 수 있습니다.',
    path: '/image-converter',
    icon: 'bi-images',
  },
  {
    title: '글자 수 계산기',
    description: '텍스트의 글자 수, 단어 수, 공백 포함/제외 글자 수, 줄 수 등을 정확하게 계산해주는 온라인 도구입니다. 블로그 포스팅, 에세이 작성, 소셜 미디어 게시물 등 다양한 상황에서 유용하게 활용할 수 있습니다.',
    path: '/character-count',
    icon: 'bi-textarea-t',
  },
  {
    title: '퍼센트 계산기',
    description: '다양한 퍼센트 계산을 손쉽게 해결해주는 온라인 백분율 계산기입니다. 특정 값의 퍼센트 계산, 한 값이 다른 값의 몇 퍼센트인지 계산, 그리고 값의 변화율 계산 등 다양한 상황에서 유용하게 활용할 수 있습니다.',
    path: '/percentage-calculator',
    icon: 'bi-percent',
  },
  {
    title: '날짜 계산기',
    description: '특정 날짜로부터 며칠 후의 날짜를 계산하거나, 두 날짜 사이의 기간을 정확하게 계산해주는 온라인 날짜 계산기입니다. 기념일, D-day, 프로젝트 일정 관리 등 다양한 상황에서 유용하게 활용할 수 있습니다.',
    path: '/date-calculator',
    icon: 'bi-calendar-event',
  },
  {
    title: '대출 이자 계산기',
    description: '대출 원금, 이자율, 기간, 상환 방식에 따른 월 상환금과 총 이자를 정확하게 계산해주는 온라인 대출 계산기입니다. 합리적인 금융 계획을 세우고 현명한 대출 결정을 내리는 데 도움을 드립니다.',
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

      <section className="text-center mb-5 p-4 bg-light rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold mb-3 text-gray-700">왜 저희 도구를 사용해야 할까요?</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <div className="p-3 border rounded h-100">
              <i className="bi bi-lightning-charge-fill text-primary fs-3 mb-2"></i>
              <h4 className="font-semibold">빠르고 간편함</h4>
              <p className="text-muted">복잡한 설치 없이 웹에서 즉시 사용 가능합니다.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-3 border rounded h-100">
              <i className="bi bi-shield-lock-fill text-success fs-3 mb-2"></i>
              <h4 className="font-semibold">안전하고 신뢰할 수 있음</h4>
              <p className="text-muted">대부분의 작업이 브라우저 내에서 처리되어 개인 정보가 안전합니다.</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-3 border rounded h-100">
              <i className="bi bi-tools text-info fs-3 mb-2"></i>
              <h4 className="font-semibold">다양한 유용한 도구</h4>
              <p className="text-muted">일상과 업무에 필요한 다양한 도구들을 한 곳에서 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

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
