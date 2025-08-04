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
      title="대출 이자 계산기"
      description="월 상환금과 총 이자를 계산하여 합리적인 금융 계획을 세워보세요."
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
    </ToolPageLayout>
  );
}
