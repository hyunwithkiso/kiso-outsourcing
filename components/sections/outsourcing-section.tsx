"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const processes = [
  {
    number: "01",
    title: "요구사항 분석 및 이해",
    description:
      "프로젝트의 목표와 요구사항을 철저히 이해합니다. 명확한 소통으로 프로젝트 방향을 설정합니다.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        ></path>
      </svg>
    ),
  },
  {
    number: "02",
    title: "디자인 및 프로토타입",
    description:
      "본질에 집중한 디자인을 제안합니다. 사용자 경험을 최우선으로 고려한 프로토타입을 개발합니다.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        ></path>
      </svg>
    ),
  },
  {
    number: "03",
    title: "개발 및 구현",
    description:
      "최적화된 코드로 기능을 구현합니다. 지속적인 테스트와 품질 관리로 완성도를 높입니다.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        ></path>
      </svg>
    ),
  },
  {
    number: "04",
    title: "테스트 및 최적화",
    description:
      "다양한 환경에서 철저한 테스트를 진행합니다. 성능 최적화와 사용성 개선을 지속적으로 수행합니다.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        ></path>
      </svg>
    ),
  },
  {
    number: "05",
    title: "배포 및 지원",
    description:
      "안정적인 배포를 통해 서비스를 시작합니다. 지속적인 유지보수와 기술 지원을 제공합니다.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        ></path>
      </svg>
    ),
  },
];

const OutsourcingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const setItemRef = (el: HTMLDivElement | null, index: number) => {
    itemRefs.current[index] = el;
  };

  return (
    <section
      id="outsourcing"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden"
      ref={sectionRef}
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute -right-40 -top-40 w-80 h-80 bg-gray-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 top-1/4 w-40 h-40 bg-gray-900/5 rounded-full blur-2xl"></div>
        <div className="absolute right-10 bottom-20 w-60 h-60 bg-gray-900/8 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        {/* 섹션 헤더 */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 text-xs font-medium bg-gray-900 text-white rounded-full font-geistMono">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span>OUTSOURCING</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl font-geist text-gray-900">
            프로젝트 진행 과정
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-pretendard leading-relaxed">
            본질에 집중한 명확한 프로세스로 프로젝트의 성공적인 결과를 만듭니다.
            각 단계마다 목표와 결과물이 명확하게 정의됩니다.
          </p>
        </div>

        {/* 프로세스 스텝 - 모바일 */}
        <div className="md:hidden space-y-6">
          {processes.map((process, idx) => (
            <div
              key={process.number}
              className="group bg-white border border-gray-100 rounded-xl p-6 transition-all duration-500 ease-out transform hover:border-gray-200 hover:shadow-lg"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? 0 : 48}px)`,
                transitionDelay: `${idx * 150}ms`,
              }}
              ref={(el) => setItemRef(el, idx)}
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 mr-4 text-white bg-gray-900 rounded-full font-geistMono text-sm transition-colors duration-300 group-hover:bg-blue-600">
                  {process.number}
                </div>
                <h3 className="text-xl font-bold font-geist text-gray-900">
                  {process.title}
                </h3>
              </div>
              <p className="pl-14 text-gray-600 font-pretendard">
                {process.description}
              </p>
            </div>
          ))}
        </div>

        {/* 프로세스 타임라인 - 데스크탑 */}
        <div className="relative hidden md:block max-w-5xl mx-auto">
          {/* 중앙 라인 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-200 via-gray-900 to-gray-200 rounded-full"></div>

          {/* 프로세스 아이템 */}
          <div className="relative">
            {processes.map((process, idx) => (
              <div
                key={process.number}
                className={`relative mb-24 flex items-center ${
                  idx % 2 === 0 ? "justify-end" : "justify-start"
                }`}
                ref={(el) => setItemRef(el, idx)}
              >
                {/* 중앙 원형 아이콘 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center z-10 transition-colors duration-300 hover:border-blue-600">
                  <div className="w-4 h-4 bg-gray-900 rounded-full transition-colors duration-300 hover:bg-blue-600"></div>
                </div>

                {/* 컨텐츠 카드 */}
                <div
                  className={`w-5/12 group bg-white border border-gray-100 rounded-xl p-6 transition-all duration-500 hover:border-gray-200 hover:shadow-lg ${
                    idx % 2 === 0 ? "mr-10 text-right" : "ml-10 text-left"
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: `translateY(${isVisible ? 0 : 48}px)`,
                    transitionDelay: `${idx * 150}ms`,
                  }}
                >
                  <div
                    className={`flex items-center mb-4 ${
                      idx % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex items-center ${
                        idx % 2 === 0 ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div className="flex items-center justify-center w-12 h-12 text-gray-900 bg-gray-100 rounded-lg transition-colors duration-300 group-hover:bg-gray-900 group-hover:text-white">
                        {process.icon}
                      </div>
                      <h3
                        className={`text-xl font-bold font-geist text-gray-900 ${
                          idx % 2 === 0 ? "mr-4" : "ml-4"
                        }`}
                      >
                        {process.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 font-pretendard">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 섹션 구분선 */}
        <div className="section-divider my-16"></div>

        {/* CTA 섹션 */}
        <div className="max-w-3xl mx-auto">
          <div
            className={`bg-white border border-kiso-light-gray rounded-xl p-10 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "500ms" }}
            ref={(el) => setItemRef(el, processes.length)}
          >
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-10">
                <h3 className="mb-4 text-2xl md:text-3xl font-bold font-geist text-kiso-black">
                  지금 프로젝트를 시작하세요
                </h3>
                <p className="text-kiso-dark-gray font-pretendard leading-relaxed">
                  본질에 집중한 프로젝트로 비즈니스의 가치를 높이세요. 첫
                  상담부터 프로젝트 완료까지 전문적인 팀이 함께합니다.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <Link
                  href="#contact"
                  className="button-hover-effect inline-flex items-center px-8 py-4 text-base font-medium bg-kiso-black border border-kiso-black rounded-md hover:bg-kiso-black/90 transition-all duration-300 font-pretendard group"
                  aria-label="프로젝트 문의하기"
                >
                  <span className="relative z-10 flex items-center">
                    문의하기
                    <svg
                      className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutsourcingSection;
