
import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">서비스 소개</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">저희 웹사이트는...</h2>
        <p className="mb-2">다양한 웹 기반 도구들을 한 곳에 모아 사용자 여러분의 일상과 업무를 더욱 편리하게 만들고자 합니다.</p>
        <p className="mb-2">복잡한 소프트웨어 설치 없이, 언제 어디서든 웹 브라우저를 통해 필요한 기능을 손쉽게 이용하실 수 있습니다.</p>
        <p className="mb-2">저희는 사용자 경험을 최우선으로 생각하며, 직관적이고 사용하기 쉬운 인터페이스를 제공하기 위해 노력하고 있습니다.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
        <ul className="list-disc list-inside ml-4">
          <li>문자 수 세기 도구</li>
          <li>날짜 계산기</li>
          <li>이미지 변환기</li>
          <li>대출 계산기</li>
          <li>PDF JPG 변환기</li>
          <li>백분율 계산기</li>
          <li>QR 코드 생성기</li>
          <li>그리고 앞으로 추가될 더 많은 유용한 도구들!</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">저희의 목표</h2>
        <p className="mb-2">저희의 목표는 사용자 여러분이 필요로 하는 모든 웹 도구를 한 곳에서 제공하여, 시간과 노력을 절약하고 생산성을 높이는 것입니다.</p>
        <p className="mb-2">지속적인 업데이트와 개선을 통해 항상 최상의 서비스를 제공할 것을 약속드립니다.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">문의</h2>
        <p className="mb-2">서비스에 대한 문의나 제안이 있으시면 언제든지 <a href="/contact-us" className="text-blue-600 hover:underline">문의하기</a> 페이지를 통해 연락 주시기 바랍니다.</p>
      </section>
    </div>
  );
};

export default AboutUsPage;
