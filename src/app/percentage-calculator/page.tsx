'use client';

import { useState } from 'react';
import ToolPageLayout from '@/components/ToolPageLayout';

export default function PercentageCalculator() {
  const [mode, setMode] = useState('percentageOf'); // percentageOf, valueIsWhatPercentageOf, whatIsPercentage
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    let res = null;

    if (isNaN(num1) || isNaN(num2)) {
      setResult('유효한 숫자를 입력하세요.');
      return;
    }

    switch (mode) {
      case 'percentageOf':
        res = (num2 / 100) * num1;
        setResult(`${num1}의 ${num2}%는 ${res}입니다.`);
        break;
      case 'valueIsWhatPercentageOf':
        res = (num1 / num2) * 100;
        setResult(`${num1}은(는) ${num2}의 ${res.toFixed(2)}%입니다.`);
        break;
      case 'whatIsPercentage':
        res = (num2 / num1) * 100;
        setResult(`${num1}에서 ${num2}로의 변화는 ${res.toFixed(2)}%입니다.`);
        break;
    }
  };

  const reset = () => {
    setValue1('');
    setValue2('');
    setResult(null);
  };

  const renderInputs = () => {
    const commonInputClass = "form-control form-control-lg";
    switch (mode) {
      case 'percentageOf':
        return (
          <div className="row g-2 align-items-center">
            <div className="col">
              <input type="number" className={commonInputClass} value={value1} onChange={(e) => setValue1(e.target.value)} placeholder="전체 값" />
            </div>
            <div className="col-auto">의</div>
            <div className="col">
              <input type="number" className={commonInputClass} value={value2} onChange={(e) => setValue2(e.target.value)} placeholder="비율 (%)" />
            </div>
            <div className="col-auto">는?</div>
          </div>
        );
      case 'valueIsWhatPercentageOf':
        return (
          <div className="row g-2 align-items-center">
            <div className="col">
              <input type="number" className={commonInputClass} value={value1} onChange={(e) => setValue1(e.target.value)} placeholder="일부 값" />
            </div>
            <div className="col-auto">은(는)</div>
            <div className="col">
              <input type="number" className={commonInputClass} value={value2} onChange={(e) => setValue2(e.target.value)} placeholder="전체 값" />
            </div>
            <div className="col-auto">의 몇 %?</div>
          </div>
        );
      case 'whatIsPercentage':
        return (
          <div className="row g-2 align-items-center">
            <div className="col">
              <input type="number" className={commonInputClass} value={value1} onChange={(e) => setValue1(e.target.value)} placeholder="이전 값" />
            </div>
            <div className="col-auto">에서</div>
            <div className="col">
              <input type="number" className={commonInputClass} value={value2} onChange={(e) => setValue2(e.target.value)} placeholder="이후 값" />
            </div>
            <div className="col-auto">으로 변하면 몇 %?</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <ToolPageLayout
      title="퍼센트 계산기"
      description="다양한 퍼센트 계산을 손쉽게 해결하세요."
    >
      <div className="card shadow-lg">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className={`nav-link ${mode === 'percentageOf' ? 'active' : ''}`} href="#" onClick={() => setMode('percentageOf')}>값의 % 계산</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${mode === 'valueIsWhatPercentageOf' ? 'active' : ''}`} href="#" onClick={() => setMode('valueIsWhatPercentageOf')}>A는 B의 몇 %?</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${mode === 'whatIsPercentage' ? 'active' : ''}`} href="#" onClick={() => setMode('whatIsPercentage')}>값의 변화율</a>
            </li>
          </ul>
        </div>
        <div className="card-body p-4">
          <div className="mb-3">
            {renderInputs()}
          </div>
          <div className="d-flex justify-content-center gap-2">
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
