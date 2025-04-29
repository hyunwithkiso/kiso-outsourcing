"use client";

import { useState } from "react";
import Image from "next/image";

// public 폴더의 이미지 파일 이름 배열
const imageFiles = ["1.png", "2.png", "3.png", "4.png"];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (fileName: string) => {
    setSelectedImage(`/${fileName}`);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // 모달 외부 클릭 시 닫기 (이미지 클릭은 제외)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 이벤트 버블링을 막기 위해 target과 currentTarget 비교
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* 반응형 그리드 레이아웃: 모바일 1열, md 이상 2열 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {imageFiles.map((fileName, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer group"
              onClick={() => handleImageClick(fileName)}
              onKeyDown={(e) => e.key === "Enter" && handleImageClick(fileName)} // 키보드 접근성
              role="button"
              tabIndex={0}
              aria-label={`갤러리 이미지 ${index + 1} 상세보기`}
            >
              <Image
                src={`/${fileName}`}
                alt={`갤러리 이미지 ${index + 1}`}
                fill
                blurDataURL={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                }
                sizes="(max-width: 768px) 100vw, 50vw" // 모바일 100%, md 이상 50%
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                placeholder="blur"
                // 로컬 이미지이므로 blurDataURL 자동 생성됨
              />
            </div>
          ))}
        </div>
      </div>

      {/* 이미지 확대 모달 */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={handleBackdropClick} // 배경 클릭 시 닫기
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-image-title"
        >
          <div
            className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center"
            // 이미지 영역 클릭 시 버블링 방지는 필요 없음 (handleBackdropClick에서 처리)
          >
            {/* 스크린 리더를 위한 숨겨진 제목 */}
            <h2 id="modal-image-title" className="sr-only">
              갤러리 이미지 상세보기
            </h2>
            <Image
              src={selectedImage}
              alt="확대된 갤러리 이미지"
              width={1200} // 최대 너비 설정
              height={800} // 최대 높이 설정
              style={{
                objectFit: "contain",
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
              }} // 비율 유지 및 컨테이너 맞춤
              priority // 모달 이미지는 중요하므로 우선 로드
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              }
              placeholder="blur"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-white bg-black/50 rounded-full p-1.5 md:p-2 hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 transition-colors"
              aria-label="이미지 닫기"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
