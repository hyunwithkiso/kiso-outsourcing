"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100/50 overflow-hidden pt-20 pb-12 md:pt-0 md:pb-0"
    >
      {/* 격자 배경 패턴 */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 L60 30 M30 0 L30 60' stroke='%23000000' stroke-width='0.5'/%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* 배경 액센트 */}
      <div className="absolute top-1/2 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-tr from-gray-900/5 to-transparent rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-bl from-gray-800/5 to-transparent rounded-full filter blur-3xl"></div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl mx-auto">
          {/* 텍스트 컨텐츠 */}
          <div
            className={`md:w-1/2 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 space-x-2 text-xs font-medium bg-gray-900 text-white rounded-full font-geistMono">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>아웃소싱 서비스</span>
              </div>
              <h1 className="mb-4 md:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 font-geist">
                <span className="block">남겨진 것은,</span>
                <span className="relative inline-block mt-1 md:mt-2">
                  의미가 있다
                  <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-gray-900/0 via-gray-900 to-gray-900/0"></span>
                </span>
              </h1>
              <p className="max-w-xl mb-8 md:mb-10 text-base md:text-lg lg:text-xl text-gray-600 font-pretendard leading-relaxed">
                본질을 위한 공간을 만듭니다. 불필요한 것을 덜어내고 의미 있는
                선택만 남겨 가치를 창조합니다.
              </p>
            </div>

            {/* 신뢰 지표 */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="p-4 md:p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-colors duration-300">
                <div className="flex items-baseline space-x-1">
                  <span className="text-2xl md:text-3xl font-bold text-gray-900 font-geist">
                    10
                  </span>
                  <span className="text-lg md:text-xl text-gray-600 font-geist">
                    +
                  </span>
                </div>
                <div className="mt-1 md:mt-2 text-xs md:text-sm text-gray-500">
                  2년 간 프로젝트 완료
                </div>
              </div>
              <div className="p-4 md:p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-colors duration-300">
                <div className="flex items-baseline space-x-1">
                  <span className="text-2xl md:text-3xl font-bold text-gray-900 font-geist">
                    98
                  </span>
                  <span className="text-lg md:text-xl text-gray-600 font-geist">
                    %
                  </span>
                </div>
                <div className="mt-1 md:mt-2 text-xs md:text-sm text-gray-500">
                  고객 만족도
                </div>
              </div>
            </div>
          </div>

          {/* 이미지/그래픽 요소 */}
          <div
            className={`md:w-1/2 mt-8 md:mt-0 transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-[4/3] md:aspect-square max-w-sm md:max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-8 md:h-12 bg-gray-50 border-b border-gray-200 flex items-center px-4">
                  <div className="flex space-x-1.5 md:space-x-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="absolute top-8 md:top-12 inset-x-0 bottom-0 bg-white p-4 md:p-6">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 md:w-6 md:h-6 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="h-3 md:h-4 w-1/3 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                    <div className="h-24 md:h-32 w-full bg-gray-50 rounded-lg border border-gray-100 p-3 md:p-4">
                      <div className="space-y-2">
                        <div className="h-3 md:h-4 w-3/4 bg-gray-100 rounded"></div>
                        <div className="h-3 md:h-4 w-1/2 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="h-6 md:h-8 w-20 md:w-24 bg-gray-900 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 다운 인디케이터 */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-6 h-10 md:w-8 md:h-12 rounded-full border-2 border-gray-400 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// CSS 추가 필요:
// .animate-in {
//   opacity: 1 !important;
//   transform: translateY(0) !important;
// }
