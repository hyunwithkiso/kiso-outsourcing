"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "FiveM 기반 게임 유저 커뮤니티",
    description: "게임 유저들을 위한 현대적이고 안전한 커뮤니티 플랫폼",
    year: 2025,
    tags: ["Next.js", "Clerk", "PostgreSQL", "Prisma"],
    status: "진행중",
  },
  {
    id: 2,
    title: "FiveM 기반 게임 어드민 대시보드",
    description: "게임 서버 관리자를 위한 직관적이고 강력한 대시보드 시스템",
    year: 2024,
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    status: "완료",
  },
  {
    id: 3,
    title: "병원 식단 관리 애플리케이션",
    description: "환자 맞춤형 식단 관리 및 영양 분석 시스템",
    year: 2023,
    tags: ["Flutter", "Next.js", "NestJS"],
    status: "완료",
  },
  {
    id: 4,
    title: "옷 리폼 서비스",
    description: "지속 가능한 패션을 위한 의류 리폼 중개 플랫폼",
    year: 2023,
    tags: ["Next.js", "NextAuth", "Prisma"],
    status: "완료",
  },
  {
    id: 5,
    title: "러시아권 관광 플랫폼",
    description: "러시아어권 관광객을 위한 맞춤형 여행 서비스",
    year: 2023,
    tags: ["Next.js", "NextAuth", "Prisma"],
    status: "완료",
  },
  {
    id: 6,
    title: "우파루 오딧세이 게임 정보 서비스",
    year: 2023,
    tags: ["Next.js", "shadcn-ui"],
    status: "완료",
  },
];

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white"
    >
      <div className="container px-4 mx-auto">
        {/* 섹션 헤더 */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-8 space-x-2 text-xs font-medium bg-gray-900 text-white rounded-full font-geistMono">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span>포트폴리오</span>
          </div>
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 font-geist md:text-5xl">
            프로젝트 둘러보기
          </h2>
          <p className="text-lg text-gray-600 font-pretendard leading-relaxed max-w-2xl mx-auto">
            최신 기술과 디자인 트렌드를 적용한 프로젝트
          </p>
        </div>

        {/* 포트폴리오 그리드 */}
        <div className="grid gap-8 max-w-4xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-3xl bg-white transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="p-8 md:p-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-900 font-geistMono tracking-tight">
                      {item.year}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full font-geistMono tracking-tight
                      ${
                        item.status === "완료"
                          ? "bg-green-100 text-green-900"
                          : item.status === "진행중"
                          ? "bg-blue-100 text-blue-900"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-geist mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-pretendard text-lg leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-full font-geistMono hover:bg-gray-100 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 다음 프로젝트 유도 카드 */}
          <div
            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{
              transitionDelay: `${portfolioItems.length * 100}ms`,
            }}
          >
            <div className="p-8 md:p-10">
              <div className="max-w-2xl space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white font-geist">
                  다음 프로젝트는...
                </h3>
                <p className="text-gray-300 font-pretendard text-lg leading-relaxed">
                  당신의 프로젝트가 될 수 있습니다. 지금 바로 문의하여 함께 멋진
                  결과물을 만들어보세요.
                </p>
                <div className="pt-4">
                  <Link
                    href="https://open.kakao.com/o/snCUhGth"
                    className="inline-flex items-center px-8 py-4 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-white/90 transition-colors font-geistMono tracking-tight"
                  >
                    프로젝트 문의하기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
