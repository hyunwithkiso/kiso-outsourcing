"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"; // 로고 이미지 경로 확인 필요

const navItems = [
  { name: "철학", href: "#philosophy" },
  { name: "아웃소싱", href: "#outsourcing" },
  { name: "포트폴리오", href: "#portfolio" },
  { name: "문의하기", href: "#closing" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // 현재 활성화된 섹션 감지
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 모바일 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleMobileMenuClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="relative group" aria-label="Kiso 홈으로 이동">
          <div className="overflow-hidden">
            <Image
              src={logo}
              alt="Kiso 로고"
              width={90}
              height={30}
              priority
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 group-hover:w-full transition-all duration-500"></div>
          </div>
        </Link>

        <nav aria-label="메인 네비게이션" className="hidden md:block">
          <ul className="flex items-center space-x-10">
            {navItems.map((item) => {
              const isActive = `#${activeSection}` === item.href;
              return (
                <li key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className={`text-sm font-medium font-pretendard transition-colors duration-300 hover:text-gray-900 ${
                      isActive ? "text-gray-900" : "text-gray-600"
                    }`}
                    aria-label={`${item.name} 섹션으로 이동`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-px bg-gray-900 transition-all duration-300" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-8 h-8 flex flex-col justify-center items-center space-y-1.5 relative z-50"
            aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <span
              className={`w-5 h-px bg-gray-900 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-px bg-gray-900 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-0" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        <div
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="space-y-8">
              {navItems.map((item) => (
                <li key={item.name} className="text-center">
                  <button
                    onClick={() => handleMobileMenuClick(item.href)}
                    className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden md:block">
          <Link
            href="#closing"
            className="px-6 py-2 border border-gray-900 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300"
            aria-label="프로젝트 문의하기"
          >
            프로젝트 문의
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
