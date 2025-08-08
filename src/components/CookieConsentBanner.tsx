"use client";

import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';

const CookieConsentBanner: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="동의합니다"
      declineButtonText="거부합니다"
      cookieName="myWebsiteCookieConsent"
      style={{ background: "#2B373B", zIndex: 9999 }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px", background: "#fff" }}
      declineButtonStyle={{ color: "#fff", fontSize: "13px", background: "#777" }}
      contentStyle={{ flex: "1 0 auto" }}
      expires={150} // 150일 후 만료
      enableDeclineButton
      onAccept={() => {
        // 사용자가 동의했을 때 실행될 로직 (예: Google Analytics 활성화)
        console.log("사용자가 쿠키에 동의했습니다.");
      }}
      onDecline={() => {
        // 사용자가 거부했을 때 실행될 로직 (예: 비필수 쿠키 비활성화)
        console.log("사용자가 쿠키를 거부했습니다.");
        alert("쿠키 사용을 거부하셨습니다. 일부 기능이 제한될 수 있습니다.");
      }}
    >
      저희 웹사이트는 사용자 경험 개선, 트래픽 분석 및 광고 제공을 위해 쿠키를 사용합니다. 계속 탐색하시면 쿠키 사용에 동의하는 것으로 간주됩니다.{" "}
      <Link href="/privacy-policy" className="text-blue-300 hover:underline">
        개인정보처리방침
      </Link>에서 자세한 내용을 확인하세요.
    </CookieConsent>
  );
};

export default CookieConsentBanner;
