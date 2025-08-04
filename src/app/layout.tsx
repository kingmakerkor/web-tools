import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
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
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        <div className="d-flex flex-column min-vh-100">
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
              <div className="container">
                <Link href="/" className="navbar-brand font-bold text-2xl text-gray-700 hover:text-gray-900">
                  🛠️ 유용한 도구 모음
                </Link>
              </div>
            </nav>
          </header>
          <main className="flex-grow-1">
            {children}
          </main>
          <footer className="bg-white text-center p-4 mt-auto shadow-inner">
            <p className="text-muted mb-0">© {new Date().getFullYear()} 유용한 도구 모음. All Rights Reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
