'use client';

import { useState, useMemo } from 'react';
import ToolPageLayout from '@/components/ToolPageLayout';

export default function WordCount() {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const trimmedText = text.trim();
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const words = trimmedText ? trimmedText.split(/\s+/).length : 0;
    const lines = text.split(/\n/).length;

    return {
      characters,
      charactersNoSpaces,
      words,
      lines,
    };
  }, [text]);

  return (
    <ToolPageLayout
      title="글자 수 계산기"
      description="텍스트의 글자 수, 단어 수, 공백 포함/제외 글자 수, 줄 수 등을 정확하게 계산해주는 온라인 도구입니다. 블로그 포스팅, 에세이 작성, 소셜 미디어 게시물 등 다양한 상황에서 유용하게 활용할 수 있습니다."
    >
      <div className="card shadow-lg">
        <div className="card-body p-4">
          <textarea
            className="form-control w-100 p-3 text-lg border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="여기에 텍스트를 입력하세요..."
            rows={8}
          ></textarea>
        </div>
        <div className="card-footer bg-light d-flex justify-content-end p-3">
          <button className="btn btn-secondary" onClick={() => setText('')}>
            초기화
          </button>
        </div>
      </div>

      <div className="row mt-4 text-center">
        {[ 
          { title: '공백 포함', value: stats.characters },
          { title: '공백 제외', value: stats.charactersNoSpaces },
          { title: '단어 수', value: stats.words },
          { title: '줄 수', value: stats.lines },
        ].map(stat => (
          <div className="col-md-3 col-6 mb-3" key={stat.title}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-muted">{stat.title}</h5>
                <p className="card-text fs-4 font-bold text-primary">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">글자 수 계산기 사용법</h2>
        <p className="mb-4">이 글자 수 계산기는 매우 간단하게 사용할 수 있습니다. 텍스트 입력창에 계산하고자 하는 텍스트를 붙여넣거나 직접 입력하기만 하면 됩니다. 실시간으로 글자 수(공백 포함/제외), 단어 수, 줄 수가 자동으로 계산되어 표시됩니다.</p>
        
        <h3 className="text-xl font-semibold mb-3">주요 기능 및 활용 팁:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>실시간 계산:</strong> 텍스트를 입력하거나 수정할 때마다 결과가 즉시 업데이트됩니다.</li>
          <li><strong>다양한 통계:</strong> 공백을 포함하거나 제외한 글자 수, 단어 수, 그리고 줄 수를 정확하게 파악할 수 있습니다.</li>
          <li><strong>블로그 및 에세이 작성:</strong> 특정 글자 수 또는 단어 수 제한이 있는 글을 작성할 때 유용합니다.</li>
          <li><strong>소셜 미디어 게시물:</strong> 트위터(X)와 같이 글자 수 제한이 있는 플랫폼에 게시물을 올리기 전에 미리 확인하여 효율적인 메시지를 작성할 수 있습니다.</li>
          <li><strong>SEO 최적화:</strong> 웹 콘텐츠의 길이를 조절하여 검색 엔진 최적화(SEO)에 활용할 수 있습니다.</li>
          <li><strong>번역 및 편집:</strong> 번역 작업이나 문서 편집 시 분량을 파악하는 데 도움이 됩니다.</li>
        </ul>
        
        <p className="mt-4">이 도구를 활용하여 여러분의 글쓰기 작업을 더욱 효율적이고 정확하게 관리해보세요!</p>
      </section>
    </ToolPageLayout>
  );
}