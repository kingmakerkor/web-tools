'use client';

import { useState } from 'react';
import ToolPageLayout from '@/components/ToolPageLayout';

interface MonthlyPayment {
  month: number;
  principal: number;
  interest: number;
  balance: number;
  payment: number;
}

interface LoanResult {
  totalInterest: number;
  totalRepayment: number;
  monthlyPayment?: number; // Optional for equalPrincipal
  monthlyPayments: MonthlyPayment[];
  error?: string;
}

export default function LoanCalculator() {
  const [principal, setPrincipal] = useState('10000000'); // 대출 원금
  const [interestRate, setInterestRate] = useState('5'); // 연 이자율
  const [loanTerm, setLoanTerm] = useState('36'); // 대출 기간 (개월)
  const [repaymentMethod, setRepaymentMethod] = useState('equalInstallment'); // 원리금균등, 원금균등
  const [result, setResult] = useState<LoanResult | null>(null);

  const calculate = () => {
    const P = parseFloat(principal);
    const annualRate = parseFloat(interestRate) / 100;
    const N = parseInt(loanTerm, 10);
    const monthlyRate = annualRate / 12;

    if (isNaN(P) || isNaN(annualRate) || isNaN(N) || P <= 0 || annualRate <= 0 || N <= 0) {
      setResult({ error: '유효한 대출 원금, 이자율, 기간을 입력하세요.', totalInterest: 0, totalRepayment: 0, monthlyPayments: [] });
      return;
    }

    let totalInterest = 0;
    let totalRepayment = 0;
    const monthlyPayments: MonthlyPayment[] = [];

    if (repaymentMethod === 'equalInstallment') {
      const M = P * (monthlyRate * Math.pow(1 + monthlyRate, N)) / (Math.pow(1 + monthlyRate, N) - 1);
      totalRepayment = M * N;
      totalInterest = totalRepayment - P;
      let balance = P;
      for (let i = 1; i <= N; i++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = M - interestPayment;
        balance -= principalPayment;
        monthlyPayments.push({ month: i, principal: principalPayment, interest: interestPayment, balance: balance > 0 ? balance : 0, payment: M });
      }
      setResult({ totalInterest, totalRepayment, monthlyPayment: M, monthlyPayments });
    } else { // equalPrincipal
      const principalPayment = P / N;
      let balance = P;
      for (let i = 1; i <= N; i++) {
        const interestPayment = balance * monthlyRate;
        const monthlyPayment = principalPayment + interestPayment;
        totalInterest += interestPayment;
        balance -= principalPayment;
        monthlyPayments.push({ month: i, principal: principalPayment, interest: interestPayment, balance: balance > 0 ? balance : 0, payment: monthlyPayment });
      }
      totalRepayment = P + totalInterest;
      setResult({ totalInterest, totalRepayment, monthlyPayments });
    }
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('ko-KR').format(Math.round(num)) + '원';
  };

  return (
    <ToolPageLayout
      description="대출 원금, 이자율, 기간, 상환 방식에 따른 월 상환금과 총 이자를 정확하게 계산해주는 온라인 대출 계산기입니다. 합리적인 금융 계획을 세우고 현명한 대출 결정을 내리는 데 도움을 드립니다."
    >
      <div className="card shadow-lg">
        <div className="card-body p-4">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-bold">대출 원금 (원)</label>
              <input type="number" className="form-control form-control-lg" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">연 이자율 (%)</label>
              <input type="number" className="form-control form-control-lg" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">대출 기간 (개월)</label>
              <input type="number" className="form-control form-control-lg" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">상환 방식</label>
              <select className="form-select form-select-lg" value={repaymentMethod} onChange={(e) => setRepaymentMethod(e.target.value)}>
                <option value="equalInstallment">원리금균등상환</option>
                <option value="equalPrincipal">원금균등상환</option>
              </select>
            </div>
          </div>
          <div className="d-grid mt-4">
            <button className="btn btn-primary btn-lg" onClick={calculate}>계산하기</button>
          </div>
        </div>
        {result && !result.error && (
          <div className="card-footer bg-light p-4">
            <h3 className="text-center font-bold mb-4">계산 결과</h3>
            <div className="row text-center gy-3">
              <div className="col-md-4"><h5>총 상환액: <span className="text-danger">{formatCurrency(result.totalRepayment)}</span></h5></div>
              <div className="col-md-4"><h5>총 이자: <span className="text-danger">{formatCurrency(result.totalInterest)}</span></h5></div>
              {result.monthlyPayment && <div className="col-md-4"><h5>첫 달 상환액: <span className="text-primary">{formatCurrency(result.monthlyPayment)}</span></h5></div>}
            </div>
            <div className="table-responsive mt-4" style={{maxHeight: '400px'}}>
              <table className="table table-striped table-bordered table-hover">
                <thead className="table-dark text-center sticky-top">
                  <tr><th>회차</th><th>월 상환금</th><th>월 상환 원금</th><th>월 상환 이자</th><th>잔금</th></tr>
                </thead>
                <tbody className="text-center">
                  {result.monthlyPayments.map((p: MonthlyPayment) => (
                    <tr key={p.month}>
                      <td>{p.month}</td>
                      <td>{formatCurrency(p.payment)}</td>
                      <td>{formatCurrency(p.principal)}</td>
                      <td>{formatCurrency(p.interest)}</td>
                      <td>{formatCurrency(p.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {result && result.error && (
            <div className="alert alert-danger mt-3" role="alert">{result.error}</div>
        )}
      </div>

      <section className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">대출 계산기 사용법</h2>
        <p className="mb-4">이 대출 계산기는 대출 원금, 이자율, 기간, 상환 방식에 따라 월별 상환액과 총 이자액을 계산해줍니다. 아래 단계를 따라 사용해보세요.</p>
        
        <h3 className="text-xl font-semibold mb-3">사용 단계:</h3>
        <ol className="list-decimal list-inside ml-4 space-y-2 mb-4">
          <li><strong>대출 원금 입력:</strong> 빌리고자 하는 대출의 총 금액을 원 단위로 입력합니다.</li>
          <li><strong>연 이자율 입력:</strong> 대출에 적용되는 연 이자율을 퍼센트(%) 단위로 입력합니다. (예: 5%는 5로 입력)</li>
          <li><strong>대출 기간 입력:</strong> 대출을 상환할 총 기간을 개월 단위로 입력합니다.</li>
          <li><strong>상환 방식 선택:</strong> &apos;원리금균등상환&apos; 또는 &apos;원금균등상환&apos; 중 원하는 상환 방식을 선택합니다.</li>
          <li><strong>계산하기 버튼 클릭:</strong> 모든 정보를 입력한 후 '계산하기' 버튼을 클릭하면 결과가 표시됩니다.</li>
        </ol>

        <h3 className="text-xl font-semibold mb-3">계산 결과 이해하기:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
          <li><strong>총 상환액:</strong> 대출 원금과 총 이자를 합한 금액입니다.</li>
          <li><strong>총 이자:</strong> 대출 기간 동안 지불하게 될 총 이자 금액입니다.</li>
          <li><strong>월 상환금:</strong> 매월 상환해야 하는 금액입니다. (원리금균등상환의 경우 고정, 원금균등상환의 경우 변동)</li>
          <li><strong>상환 스케줄:</strong> 월별 원금, 이자, 잔금 내역을 상세하게 확인할 수 있습니다.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">대출 계산기 활용 팁:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>대출 계획 수립:</strong> 다양한 대출 조건(원금, 이자율, 기간)을 시뮬레이션하여 자신에게 가장 유리한 대출 상품을 선택하는 데 도움을 받을 수 있습니다.</li>
          <li><strong>월별 예산 관리:</strong> 예상 월 상환금을 미리 파악하여 가계 재정 계획을 세우는 데 활용할 수 있습니다.</li>
          <li><strong>이자 부담 비교:</strong> 원리금균등상환과 원금균등상환 방식에 따른 총 이자액과 월별 상환액의 차이를 비교하여 자신에게 적합한 상환 방식을 결정할 수 있습니다.</li>
          <li><strong>조기 상환 계획:</strong> 월별 상환 스케줄을 통해 잔금을 확인하고, 조기 상환 시의 이점 등을 고려한 계획을 세울 수 있습니다.</li>
        </ul>
        
        <p className="mt-4">이 대출 계산기를 통해 현명한 금융 결정을 내리고, 안정적인 재정 관리를 시작해보세요!</p>
      </section>
    </ToolPageLayout>
  );
}
