"use client";

import { useEffect, useRef, useState } from "react";
import { Lightbulb, Columns, TrendingUp } from "lucide-react";

const philosophyItems = [
  {
    number: "01",
    title: "심플함은 고민의 결과물",
    description:
      "무작정 비우지 않습니다. 깊은 이해를 통해 본질만을 남깁니다. 미니멀리즘은 기본값이 아닌, 신중한 선택의 결과입니다.",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    number: "02",
    title: "여백이 말하게 합니다",
    description:
      "적절한 여백은 그 자체로 메시지입니다. 신중하게 배치된 공간이 중요한 요소를 더욱 돋보이게 합니다. 공간은 비워지는 것이 아닌, 경험을 풍요롭게 하는 증류입니다.",
    icon: <Columns className="w-8 h-8" />,
  },
  {
    number: "03",
    title: "Practical Minimalism",
    description:
      "단순함을 위한 단순함이 아닌, 목적과 실용성에 기반한 미니멀리즘을 추구합니다. 명확하고 효율적인 사용성을 최우선으로 생각합니다.",
    icon: <TrendingUp className="w-8 h-8" />,
  },
];

const PhilosophySection = () => {
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
      { threshold: 0.15 }
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
      id="philosophy"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
      ref={sectionRef}
    >
      {/* 배경 장식 */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
        <div className="w-[800px] h-[800px] border border-gray-900 rounded-full"></div>
        <div className="absolute w-[600px] h-[600px] border border-gray-900 rounded-full"></div>
        <div className="absolute w-[400px] h-[400px] border border-gray-900 rounded-full"></div>
      </div>

      <div className="container relative px-6 mx-auto max-w-7xl">
        {/* 섹션 제목 */}
        <div className="max-w-3xl mx-auto mb-24 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-8 space-x-2 text-xs font-medium bg-gray-900 text-white rounded-full font-geistMono">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span>PHILOSOPHY</span>
          </div>
          <h2 className="mb-8 text-4xl font-bold sm:text-5xl font-geist text-gray-900">
            단순함은 결론이다
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-pretendard leading-relaxed">
            미니멀리즘은 무조건적인 비움이 아닌, 신중한 선택의 결과입니다.
            본질에 집중하여 의미있는 요소만 남김으로써 진정한 가치를 드러냅니다.
          </p>
        </div>

        {/* 철학 항목 카드 레이아웃 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-32">
          {philosophyItems.map((item, idx) => (
            <div
              key={item.number}
              className="group relative bg-white rounded-2xl p-8 md:p-10 transition-all duration-500"
              ref={(el) => setItemRef(el, idx)}
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center justify-center w-14 h-14 text-gray-900 bg-gray-50 rounded-xl transition-colors duration-300 group-hover:bg-gray-900 group-hover:text-white">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-bold text-gray-100 font-geist transition-colors duration-300 group-hover:text-gray-200">
                    {item.number}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold font-geist text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-pretendard text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 철학 인용구 */}
        <div
          className="max-w-4xl mx-auto text-center"
          ref={(el) => setItemRef(el, 3)}
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transitionDelay: "300ms",
          }}
        >
          <blockquote className="mb-16">
            <p className="mb-8 text-3xl font-medium leading-relaxed md:text-4xl text-gray-900 font-geist">
              남겨진 것은,
              <br />
              의미가 있다
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400">
                What stays, matters.
              </span>
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-900"></div>
              <span className="mx-4 text-sm font-medium tracking-wider uppercase text-gray-600 font-geistMono">
                Kiso Philosophy
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-900"></div>
            </div>
          </blockquote>

          {/* 부가 콘텐츠 - 비주얼 요소 */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-lg mx-auto">
            <div className="aspect-square relative overflow-hidden bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-900/10"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 8v8M8 12h8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
            <div className="aspect-square relative overflow-hidden bg-gray-100 rounded-2xl transition-all duration-300 hover:bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-900/10"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
            <div className="aspect-square relative overflow-hidden bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-900/10"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 4v16M4 12h16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
