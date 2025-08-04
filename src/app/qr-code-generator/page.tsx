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
      description="URL이나 텍스트를 입력하여 즉시 QR 코드를 만드세요."
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
    </ToolPageLayout>
  );
}
