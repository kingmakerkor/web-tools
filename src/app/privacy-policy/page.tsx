
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">개인정보처리방침</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. 개인정보의 수집 및 이용 목적</h2>
        <p className="mb-2">본 웹사이트는 서비스 제공을 위해 최소한의 개인정보를 수집 및 이용합니다. 수집된 정보는 다음의 목적을 위해서만 활용됩니다.</p>
        <ul className="list-disc list-inside ml-4">
          <li>서비스 제공 및 기능 개선</li>
          <li>이용자 문의 처리 및 불만 사항 해결</li>
          <li>통계 분석을 통한 서비스 최적화 (개인 식별 정보는 포함되지 않음)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. 수집하는 개인정보 항목</h2>
        <p className="mb-2">본 웹사이트는 원칙적으로 개인 식별이 가능한 정보를 직접 수집하지 않습니다. 다만, 서비스 이용 과정에서 다음과 같은 정보가 자동으로 생성 및 수집될 수 있습니다.</p>
        <ul className="list-disc list-inside ml-4">
          <li>접속 IP 주소, 쿠키, 서비스 이용 기록, 기기 정보 (브라우저 종류, OS 등)</li>
        </ul>
        <p className="mt-2">이 정보들은 서비스 개선 및 통계 분석을 위해서만 사용되며, 개인을 식별하는 데 사용되지 않습니다.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. 개인정보의 보유 및 이용 기간</h2>
        <p className="mb-2">수집된 개인정보는 서비스 제공 기간 동안 보유 및 이용되며, 서비스 종료 또는 이용 목적 달성 시 지체 없이 파기됩니다.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. 개인정보의 파기 절차 및 방법</h2>
        <p className="mb-2">이용 목적이 달성된 개인정보는 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 일정 기간 저장된 후 파기됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.</p>
        <ul className="list-disc list-inside ml-4">
          <li>전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</li>
          <li>종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. 개인정보의 제3자 제공</h2>
        <p className="mb-2">본 웹사이트는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.</p>
        <ul className="list-disc list-inside ml-4">
          <li>이용자들이 사전에 동의한 경우</li>
          <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항</h2>
        <p className="mb-2">본 웹사이트는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다. 쿠키 설정 거부 방법은 다음과 같습니다.</p>
        <p className="mb-2">이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</p>
        <p className="mb-2">설정 방법 예시 (인터넷 익스플로어의 경우): 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보 &gt; 고급 설정</p>
        <p className="mb-2">단, 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. 개인정보 보호 책임자</h2>
        <p className="mb-2">본 웹사이트는 개인정보 처리에 관한 업무를 총괄하고, 개인정보 처리와 관련한 이용자의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.</p>
        <ul className="list-disc list-inside ml-4">
          <li>이름: Peter</li>
          <li>이메일: peter_ever@outlook.com</li>
        </ul>
        <p className="mt-2">이용자는 본 웹사이트의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만 처리, 피해 구제 등에 관한 사항을 개인정보 보호 책임자 및 담당 부서로 문의하실 수 있습니다. 본 웹사이트는 이용자의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. 고지의 의무</h2>
        <p className="mb-2">현 개인정보처리방침은 2025년 8월 8일부터 적용됩니다. 내용의 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일 전부터 웹사이트의 공지사항을 통해 고지할 것입니다.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
