'use client';

import { useState } from 'react';
import { format, add, differenceInDays } from 'date-fns';
import ToolPageLayout from '@/components/ToolPageLayout';

export default function DateCalculator() {
  const [mode, setMode] = useState('calculateDate'); // calculateDate, calculateDaysBetween
  const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [days, setDays] = useState('100');
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    if (mode === 'calculateDate') {
      const date = new Date(startDate);
      const numDays = parseInt(days, 10);
      if (isNaN(date.getTime()) || isNaN(numDays)) {
        setResult('유효한 날짜와 일수를 입력하세요.');
        return;
      }
      const futureDate = add(date, { days: numDays });
      setResult(`${format(date, 'yyyy년 MM월 dd일')}부터 ${numDays}일 후는 ${format(futureDate, 'yyyy년 MM월 dd일')}입니다.`);
    } else {
      const date1 = new Date(startDate);
      const date2 = new Date(endDate);
      if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        setResult('유효한 날짜를 입력하세요.');
        return;
      }
      const diff = differenceInDays(date2, date1);
      setResult(`${format(date1, 'yyyy년 MM월 dd일')}부터 ${format(date2, 'yyyy년 MM월 dd일')}까지는 총 ${diff}일입니다.`);
    }
  };

  const reset = () => {
    setStartDate(format(new Date(), 'yyyy-MM-dd'));
    setEndDate(format(new Date(), 'yyyy-MM-dd'));
    setDays('100');
    setResult(null);
  };

  return (
    <ToolPageLayout
      title="날짜 계산기"
      description="기념일, D-day, 날짜 차이를 손쉽게 계산하세요."
    >
      <div className="card shadow-lg">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className={`nav-link ${mode === 'calculateDate' ? 'active' : ''}`} href="#" onClick={() => setMode('calculateDate')}>특정일 계산</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${mode === 'calculateDaysBetween' ? 'active' : ''}`} href="#" onClick={() => setMode('calculateDaysBetween')}>날짜 차이 계산</a>
            </li>
          </ul>
        </div>
        <div className="card-body p-4">
          {mode === 'calculateDate' ? (
            <div className="row g-3 align-items-center justify-content-center">
              <div className="col-auto">
                <input type="date" className="form-control form-control-lg" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              </div>
              <div className="col-auto">부터</div>
              <div className="col-auto">
                <input type="number" className="form-control form-control-lg" value={days} onChange={(e) => setDays(e.target.value)} style={{ width: '120px' }} />
              </div>
              <div className="col-auto">일 후</div>
            </div>
          ) : (
            <div className="row g-3 align-items-center justify-content-center">
              <div className="col-auto">
                <input type="date" className="form-control form-control-lg" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              </div>
              <div className="col-auto">부터</div>
              <div className="col-auto">
                <input type="date" className="form-control form-control-lg" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              </div>
              <div className="col-auto">까지</div>
            </div>
          )}
          <div className="d-flex justify-content-center gap-2 mt-4">
            <button className="btn btn-primary btn-lg" onClick={calculate}>계산하기</button>
            <button className="btn btn-secondary btn-lg" onClick={reset}>초기화</button>
          </div>
        </div>
        {result && (
          <div className="card-footer text-center bg-light p-3">
            <h3 className="font-bold text-primary">{result}</h3>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
}
