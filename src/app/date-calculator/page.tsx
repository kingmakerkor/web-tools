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
      description="특정 날짜로부터 며칠 후의 날짜를 계산하거나, 두 날짜 사이의 기간을 정확하게 계산해주는 온라인 날짜 계산기입니다. 기념일, D-day, 프로젝트 일정 관리 등 다양한 상황에서 유용하게 활용할 수 있습니다."
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

      <section className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">날짜 계산기 사용법</h2>
        <p className="mb-4">이 날짜 계산기는 두 가지 주요 기능을 제공합니다. 상단의 탭을 통해 원하는 계산 모드를 선택할 수 있습니다.</p>
        
        <h3 className="text-xl font-semibold mb-3">1. 특정일 계산:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
          <li><strong>시작 날짜 선택:</strong> 기준이 되는 날짜를 달력에서 선택합니다.</li>
          <li><strong>일수 입력:</strong> 시작 날짜로부터 계산하고자 하는 일수를 숫자로 입력합니다.</li>
          <li><strong>계산하기 버튼 클릭:</strong> 입력한 일수만큼 지난 날짜가 결과로 표시됩니다.</li>
          <li><strong>활용 예시:</strong> 100일 기념일, 출산 예정일, 프로젝트 마감일 등 특정 날짜로부터 며칠 후의 날짜를 알고 싶을 때 유용합니다.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">2. 날짜 차이 계산:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
          <li><strong>시작 날짜 선택:</strong> 첫 번째 날짜를 달력에서 선택합니다.</li>
          <li><strong>종료 날짜 선택:</strong> 두 번째 날짜를 달력에서 선택합니다.</li>
          <li><strong>계산하기 버튼 클릭:</strong> 두 날짜 사이의 총 일수가 결과로 표시됩니다.</li>
          <li><strong>활용 예시:</strong> 특정 이벤트까지 남은 D-day, 두 사건 사이의 경과 일수, 여행 기간 계산 등에 활용할 수 있습니다.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">날짜 계산기 활용 팁:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>기념일 관리:</strong> 중요한 기념일이나 약속 날짜를 잊지 않도록 미리 계산하여 준비할 수 있습니다.</li>
          <li><strong>프로젝트 일정:</strong> 프로젝트 시작일과 예상 소요 기간을 바탕으로 완료일을 예측하거나, 특정 단계까지 남은 기간을 파악할 수 있습니다.</li>
          <li><strong>건강 관리:</strong> 복용해야 하는 약의 주기나 운동 계획 등 날짜 기반의 스케줄 관리에 도움을 줍니다.</li>
          <li><strong>여행 계획:</strong> 여행 시작일과 종료일을 입력하여 총 여행 기간을 쉽게 파악할 수 있습니다.</li>
        </ul>
        
        <p className="mt-4">이 날짜 계산기를 통해 복잡한 날짜 계산을 손쉽게 해결하고, 여러분의 일상과 업무를 더욱 효율적으로 관리해보세요!</p>
      </section>
    </ToolPageLayout>
  );
}
