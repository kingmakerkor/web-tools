'use client';

import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import ToolPageLayout from '@/components/ToolPageLayout';
import Image from 'next/image';

export default function QrCodeGenerator() {
  const [text, setText] = useState('https://example.com');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    if (text.trim()) {
      QRCode.toDataURL(text, { width: 300, margin: 2, errorCorrectionLevel: 'H' }, (err, url) => {
        if (!err) {
          setQrCodeUrl(url);
        }
      });
    } else {
      setQrCodeUrl('');
    }
  }, [text]);

  return (
    <ToolPageLayout
      title="QR 코드 생성기"
      description="텍스트, URL, 이메일, 전화번호 등 다양한 정보를 QR 코드로 변환해주는 온라인 도구입니다. 빠르고 쉽게 QR 코드를 생성하고 다운로드하여 활용하세요."
    >
      <div className="card shadow-lg">
        <div className="card-body p-4 p-md-5">
          <div className="mb-4">
            <label htmlFor="qr-text" className="form-label fs-5 fw-bold">URL 또는 텍스트 입력</label>
            <textarea
              id="qr-text"
              className="form-control form-control-lg"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="여기에 URL 또는 텍스트를 입력하세요..."
              rows={3}
            />
          </div>

          {qrCodeUrl && (
            <div className="text-center mt-4">
              <h3 className="font-bold mb-3">생성된 QR 코드</h3>
              <div className="d-inline-block p-3 border rounded-lg bg-white">
                <Image src={qrCodeUrl} alt="Generated QR Code" width={300} height={300} />
              </div>
              <a href={qrCodeUrl} download="qrcode.png" className="btn btn-info btn-lg mt-4 d-block col-md-6 mx-auto">
                QR 코드 다운로드 (.png)
              </a>
            </div>
          )}
        </div>
      </div>

      <section className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">QR 코드 생성기 사용법</h2>
        <p className="mb-4">이 QR 코드 생성기는 매우 직관적이고 사용하기 쉽습니다. 아래 단계를 따라 원하는 QR 코드를 생성해보세요.</p>
        
        <h3 className="text-xl font-semibold mb-3">사용 단계:</h3>
        <ol className="list-decimal list-inside ml-4 space-y-2 mb-4">
          <li><strong>정보 입력:</strong> QR 코드로 변환하고자 하는 URL, 일반 텍스트, 이메일 주소, 전화번호 등 원하는 정보를 상단의 입력창에 입력합니다.</li>
          <li><strong>QR 코드 자동 생성:</strong> 정보를 입력하는 즉시 실시간으로 QR 코드가 자동으로 생성되어 화면에 표시됩니다.</li>
          <li><strong>QR 코드 다운로드:</strong> 생성된 QR 코드 이미지 아래에 있는 &quot;QR 코드 다운로드 (.png)&quot; 버튼을 클릭하여 이미지를 저장합니다.</li>
        </ol>

        <h3 className="text-xl font-semibold mb-3">QR 코드 활용 팁:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>웹사이트 링크 공유:</strong> 복잡한 URL을 QR 코드로 만들어 명함, 포스터, 전단지 등에 인쇄하여 쉽게 웹사이트로 유도할 수 있습니다.</li>
          <li><strong>Wi-Fi 정보 공유:</strong> Wi-Fi 이름(SSID)과 비밀번호를 QR 코드로 만들어 방문객이 쉽게 네트워크에 연결할 수 있도록 할 수 있습니다.</li>
          <li><strong>이벤트 홍보:</strong> 이벤트 등록 페이지, 설문조사 링크 등을 QR 코드로 만들어 오프라인 홍보물에 활용할 수 있습니다.</li>
          <li><strong>제품 정보 제공:</strong> 제품 포장이나 매장 내 디스플레이에 QR 코드를 넣어 상세 정보 페이지로 연결할 수 있습니다.</li>
          <li><strong>개인 연락처 공유:</strong> 전화번호, 이메일 주소 등을 QR 코드로 만들어 상대방이 쉽게 저장할 수 있도록 합니다.</li>
          <li><strong>결제 시스템:</strong> 모바일 결제 시스템과 연동하여 간편 결제를 유도할 수 있습니다.</li>
        </ul>
        
        <p className="mt-4">이 QR 코드 생성기를 통해 다양한 정보를 효율적으로 공유하고, 여러분의 비즈니스와 일상에 편리함을 더해보세요!</p>
      </section>
    </ToolPageLayout>
  );
}
