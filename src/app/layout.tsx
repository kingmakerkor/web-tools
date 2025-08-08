import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
import Script from 'next/script'; // Script 컴포넌트 임포트
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "매우 유용한 일상 도구 모음",
  description: "일상과 업무에 필요한 다양한 도구들을 만나보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google AdSense 자동 광고 스크립트 */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1542451375735648"
          crossOrigin="anonymous"
          strategy="beforeInteractive" // AdSense 오류 해결을 위해 변경
        />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        <div className="d-flex flex-column min-vh-100">
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
              <div className="container">
                <Link href="/" className="navbar-brand font-bold text-2xl text-gray-700 hover:text-gray-900">
                  🛠️ 유용한 도구 모음
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown">
                      <Link href="/tools" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        도구
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link href="/character-count" className="dropdown-item">글자 수 계산기</Link></li>
                        <li><Link href="/date-calculator" className="dropdown-item">날짜 계산기</Link></li>
                        <li><Link href="/image-converter" className="dropdown-item">이미지 변환기</Link></li>
                        <li><Link href="/loan-calculator" className="dropdown-item">대출 계산기</Link></li>
                        <li><Link href="/percentage-calculator" className="dropdown-item">백분율 계산기</Link></li>
                        <li><Link href="/qr-code-generator" className="dropdown-item">QR 코드 생성기</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="/blog" className="nav-link">블로그</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about-us" className="nav-link">서비스 소개</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact-us" className="nav-link">문의하기</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/privacy-policy" className="nav-link">개인정보처리방침</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <main className="flex-grow-1">
            {children}
          </main>
          <footer className="bg-white text-center p-4 mt-auto shadow-inner">
            <div className="container mx-auto">
              <p className="text-muted mb-2">
                <Link href="/privacy-policy" className="text-blue-600 hover:underline mx-2">개인정보처리방침</Link> |
                <Link href="/contact-us" className="text-blue-600 hover:underline mx-2">문의하기</Link> |
                <Link href="/about-us" className="text-blue-600 hover:underline mx-2">서비스 소개</Link>
              </p>
              <p className="text-muted mb-0">© {new Date().getFullYear()} 유용한 도구 모음. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
