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
      description="다양한 퍼센트 계산을 손쉽게 해결해주는 온라인 백분율 계산기입니다. 특정 값의 퍼센트 계산, 한 값이 다른 값의 몇 퍼센트인지 계산, 그리고 값의 변화율 계산 등 다양한 상황에서 유용하게 활용할 수 있습니다."
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

      <section className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">백분율 계산기 사용법</h2>
        <p className="mb-4">이 백분율 계산기는 세 가지 주요 기능을 제공합니다. 상단의 탭을 통해 원하는 계산 모드를 선택할 수 있습니다.</p>
        
        <h3 className="text-xl font-semibold mb-3">1. 값의 % 계산:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
          <li><strong>사용 목적:</strong> 특정 숫자의 몇 퍼센트가 얼마인지 계산할 때 사용합니다. (예: 100의 20%는 얼마인가?)</li>
          <li><strong>입력:</strong> 첫 번째 입력란에 &#39;전체 값&#39;을, 두 번째 입력란에 &#39;비율 (%)&#39;을 입력합니다.</li>
          <li><strong>결과:</strong> &apos;계산하기&apos; 버튼을 누르면 해당 퍼센트에 해당하는 값이 나옵니다.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">2. A는 B의 몇 %?:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
          <li><strong>사용 목적:</strong> 한 값이 다른 값의 몇 퍼센트를 차지하는지 계산할 때 사용합니다. (예: 20은 100의 몇 %인가?)</li>
          <li><strong>입력:</strong> 첫 번째 입력란에 &apos;일부 값&apos;을, 두 번째 입력란에 &apos;전체 값&apos;을 입력합니다.</li>
          <li><strong>결과:</strong> &apos;계산하기&apos; 버튼을 누르면 &apos;일부 값&apos;이 &apos;전체 값&apos;의 몇 퍼센트인지 나옵니다.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">3. 값의 변화율:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
          <li><strong>사용 목적:</strong> 어떤 값이 다른 값으로 변했을 때의 변화율(증가 또는 감소율)을 계산할 때 사용합니다. (예: 100에서 120으로 변하면 몇 % 증가한 것인가?)</li>
          <li><strong>입력:</strong> 첫 번째 입력란에 &apos;이전 값&apos;을, 두 번째 입력란에 &apos;이후 값&apos;을 입력합니다.</li>
          <li><strong>결과:</strong> &apos;계산하기&apos; 버튼을 누르면 값의 변화율이 퍼센트로 나옵니다.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">백분율 계산기 활용 팁:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>할인율 계산:</strong> 쇼핑 시 할인된 가격이 원래 가격의 몇 퍼센트인지, 또는 특정 할인율 적용 시 최종 가격이 얼마인지 계산할 수 있습니다.</li>
          <li><strong>세금 계산:</strong> 부가가치세, 소득세 등 각종 세금을 계산할 때 유용합니다.</li>
          <li><strong>성장률/감소율 분석:</strong> 비즈니스 데이터, 투자 수익률, 인구 변화율 등 다양한 통계 데이터를 분석할 때 활용할 수 있습니다.</li>
          <li><strong>시험 점수 계산:</strong> 전체 점수 대비 특정 과목 점수의 비율을 계산하여 성적을 파악할 수 있습니다.</li>
        </ul>
        
        <p className="mt-4">이 백분율 계산기를 통해 복잡한 퍼센트 계산을 손쉽게 해결하고, 여러분의 일상과 업무를 더욱 효율적으로 관리해보세요!</p>
      </section>
    </ToolPageLayout>
  );
}
