"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "KISO는 우리 비즈니스의 핵심 가치를 정확히 이해하고, 그것을 아름다운 디자인으로 표현해냈습니다.",
    name: "김준호",
    position: "스타트업 CEO",
    company: "테크노바",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "불필요한 요소를 제거하고 본질에 집중한 디자인으로 사용자 경험이 크게 개선되었습니다.",
    name: "이서현",
    position: "제품 책임자",
    company: "미니멀라이프",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "복잡한 요구사항에도 불구하고 명확하고 효율적인 솔루션을 제공해주셨습니다.",
    name: "박민재",
    position: "마케팅 디렉터",
    company: "브랜드스페이스",
    rating: 5,
  },
];

const ClosingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // 자동 슬라이드 기능
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="closing"
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* 백그라운드 효과 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-tr from-gray-500/10 to-transparent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-bl from-gray-600/10 to-transparent rounded-full filter blur-3xl"></div>
      </div>

      {/* 격자 패턴 */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white'/%3E%3C/svg%3E\")",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto">
          {/* 왼쪽 컬럼: 소개 및 CTA */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full font-geistMono border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/90">지금 시작하세요</span>
            </div>

            <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight md:text-5xl font-geist text-white">
              <span className="block">본질에 집중한</span>
              <span className="relative inline-block mt-2">
                가치 있는 여정
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-white/0 via-white to-white/0"></span>
              </span>
            </h2>

            <p className="mb-10 text-lg text-white/80 font-pretendard leading-relaxed">
              불필요한 요소를 덜어내고 진정한 가치에 집중하는 아름다운 결과물을
              함께 만들어보세요.
            </p>

            {/* 핵심 통계 */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-bold text-white font-geist">
                    98
                  </span>
                  <span className="text-xl text-white/90 font-geist">%</span>
                </div>
                <div className="mt-2 text-sm text-white/70">고객 만족도</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl font-bold text-white font-geist">
                    2시간
                  </span>
                  <span className="text-xl text-white/90 font-geist">이내</span>
                </div>
                <div className="mt-2 text-sm text-white/70">평균 응답 시간</div>
              </div>
            </div>

            {/* CTA 버튼 */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link
                href="https://open.kakao.com/o/snCUhGth"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-300 bg-white rounded-lg text-gray-900 hover:bg-white/90 transform hover:-translate-y-1"
              >
                문의하기
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-300 rounded-lg border border-white/20 text-white hover:bg-white/10 hover:border-white/40"
              >
                포트폴리오 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
