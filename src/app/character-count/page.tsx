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
      description="텍스트를 입력하면 글자 수, 단어 수 등을 실시간으로 계산해 드립니다."
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
    </ToolPageLayout>
  );
}