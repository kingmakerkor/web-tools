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
      description="PNG, JPG, WEBP 등 다양한 이미지 포맷을 원하는 형식으로 빠르고 안전하게 변환해주는 온라인 도구입니다. 별도의 프로그램 설치 없이 웹 브라우저에서 직접 변환할 수 있습니다."
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

      <section className="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">이미지 변환기 사용법</h2>
        <p className="mb-4">이 이미지 변환기는 간단한 몇 단계만으로 이미지를 원하는 포맷으로 변환할 수 있습니다.</p>
        
        <h3 className="text-xl font-semibold mb-3">사용 단계:</h3>
        <ol className="list-decimal list-inside ml-4 space-y-2 mb-4">
          <li><strong>변환 형식 선택:</strong> 드롭다운 메뉴에서 변환하고자 하는 이미지 형식(예: PNG &rarr; JPG, JPG &rarr; PNG, WEBP &rarr; JPG 등)을 선택합니다.</li>
          <li><strong>파일 선택:</strong> &quot;변환할 파일 선택&quot; 버튼을 클릭하여 변환하고자 하는 이미지를 업로드합니다.</li>
          <li><strong>변환하기:</strong> &quot;[선택한 형식]로 변환하기&quot; 버튼을 클릭하면 이미지가 변환됩니다.</li>
          <li><strong>다운로드:</strong> 변환이 완료되면 "다운로드" 버튼을 클릭하여 변환된 이미지를 저장합니다.</li>
        </ol>

        <h3 className="text-xl font-semibold mb-3">이미지 변환기 활용 팁:</h3>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>개인 정보 보호:</strong> 모든 변환 작업은 사용자 브라우저 내에서 이루어지므로, 이미지가 서버로 전송되지 않아 개인 정보 유출 걱정 없이 안전하게 사용할 수 있습니다.</li>
          <li><strong>빠른 변환:</strong> 서버 통신 없이 즉시 변환되므로 매우 빠르고 효율적입니다.</li>
          <li><strong>웹 최적화:</strong> 웹사이트에 이미지를 업로드하기 전에 용량을 줄이거나 호환성을 높이기 위해 포맷을 변경할 때 유용합니다.</li>
          <li><strong>다양한 용도:</strong> 문서 작업, 프레젠테이션, 소셜 미디어 게시물 등 다양한 목적으로 이미지 포맷을 변경해야 할 때 활용할 수 있습니다.</li>
        </ul>
        
        <p className="mt-4">이 이미지 변환기를 통해 여러분의 이미지 작업을 더욱 쉽고 편리하게 관리해보세요!</p>
      </section>
    </ToolPageLayout>
  );
}