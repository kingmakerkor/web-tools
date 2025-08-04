'use client';

import { useState, useRef } from 'react';
import ToolPageLayout from '@/components/ToolPageLayout';
import Image from 'next/image';

const conversionOptions = {
  'png-to-jpg': { from: 'PNG', to: 'JPG', mime: 'image/jpeg', quality: 0.9 },
  'jpg-to-png': { from: 'JPG', to: 'PNG', mime: 'image/png', quality: 1.0 },
  'webp-to-jpg': { from: 'WEBP', to: 'JPG', mime: 'image/jpeg', quality: 0.9 },
  'webp-to-png': { from: 'WEBP', to: 'PNG', mime: 'image/png', quality: 1.0 },
};

type ConversionType = keyof typeof conversionOptions;

export default function ImageConverter() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [conversionType, setConversionType] = useState<ConversionType>('png-to-jpg');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setConvertedUrl(null);
    }
  };

  const convertImage = () => {
    if (!selectedFile) return;

    setIsLoading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = document.createElement('img');
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          const { mime, quality } = conversionOptions[conversionType];
          const convertedDataUrl = canvas.toDataURL(mime, quality);
          setConvertedUrl(convertedDataUrl);
        }
        setIsLoading(false);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(selectedFile);
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const getAcceptType = () => {
    const { from } = conversionOptions[conversionType];
    if (from === 'JPG') return 'image/jpeg';
    if (from === 'PNG') return 'image/png';
    if (from === 'WEBP') return 'image/webp';
    return 'image/*';
  };

  const getDownloadFileName = () => {
    if (!selectedFile) return 'download';
    const name = selectedFile.name.split('.').slice(0, -1).join('.');
    const { to } = conversionOptions[conversionType];
    return `${name}.${to.toLowerCase()}`;
  };

  return (
    <ToolPageLayout
      title="이미지 포맷 변환기"
      description="브라우저에서 안전하고 빠르게 이미지를 변환하세요."
    >
      <div className="card shadow-lg">
        <div className="card-body p-5">
          <div className="row justify-content-center align-items-center g-3 mb-4">
            <div className="col-md-4">
              <select className="form-select form-select-lg" value={conversionType} onChange={(e) => setConversionType(e.target.value as ConversionType)}>
                {Object.entries(conversionOptions).map(([key, { from, to }]) => (
                  <option key={key} value={key}>{`${from} → ${to}`}</option>
                ))}
              </select>
            </div>
            <div className="col-md-8">
              <button className="btn btn-lg btn-primary w-100" onClick={triggerFileSelect}>
                {`변환할 ${conversionOptions[conversionType].from} 파일 선택`}
              </button>
              <input
                type="file"
                accept={getAcceptType()}
                onChange={handleFileChange}
                className="d-none"
                ref={fileInputRef}
              />
            </div>
          </div>

          {selectedFile && (
            <div className="text-center mt-4">
              <p className="font-semibold">선택된 파일: {selectedFile.name}</p>
              <Image src={URL.createObjectURL(selectedFile)} alt="Preview" className="img-fluid rounded mt-2 border" style={{ maxHeight: '200px' }} width={200} height={200} objectFit="contain" />
            </div>
          )}

          {selectedFile && (
            <div className="d-grid gap-2 col-md-6 mx-auto mt-4">
              <button className="btn btn-success btn-lg" onClick={convertImage} disabled={isLoading}>
                {isLoading ? '변환 중...' : `${conversionOptions[conversionType].to}로 변환하기`}
              </button>
            </div>
          )}

          {convertedUrl && (
            <div className="text-center mt-4 border-top pt-4">
              <h3 className="font-bold">변환 완료!</h3>
              <Image src={convertedUrl} alt={`Converted ${conversionOptions[conversionType].to}`} className="img-fluid rounded mt-2 border" style={{ maxHeight: '200px' }} width={200} height={200} objectFit="contain" />
              <a href={convertedUrl} download={getDownloadFileName()} className="btn btn-info btn-lg mt-3">
                다운로드
              </a>
            </div>
          )}
        </div>
      </div>
    </ToolPageLayout>
  );
}