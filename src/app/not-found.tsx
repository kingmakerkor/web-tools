import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold mb-4">페이지를 찾을 수 없습니다.</h2>
      <p className="text-lg mb-8">요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.</p>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
