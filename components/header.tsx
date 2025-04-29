"use client";

import { useState, useEffect } from "react";
// import Image from 'next/image'; // 이제 사용 안 함
// import Link from 'next/link'; // 이제 사용 안 함
// import { Sheet, SheetClose, SheetContent, ... } from '@/components/ui/sheet'; // 하위 컴포넌트로 이동
// import logo from '@/assets/logo.png'; // 하위 컴포넌트로 이동
import HeaderLogo from "./header-logo";
import HeaderNavDesktop from "./header-nav-desktop";
import HeaderNavMobile from "./header-nav-mobile";
import HeaderCtaButton from "./header-cta-button";

const navItems = [
  { name: "철학", href: "#philosophy" },
  { name: "아웃소싱", href: "#outsourcing" },
  { name: "포트폴리오", href: "#portfolio" },
  { name: "문의하기", href: "https://open.kakao.com/o/snCUhGth" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      const sections = navItems.map((item) => item.href.substring(1));
      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = scrolled ? 80 : 100;
          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = section;
            break;
          }
        }
      }

      if (!currentSection && window.scrollY < 200) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleScrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = scrolled ? 60 : 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleDesktopLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    handleScrollToSection(href);
  };

  const handleMobileMenuClick = (href: string) => {
    handleScrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-14">
        <HeaderLogo />

        <HeaderNavDesktop
          navItems={navItems}
          activeSection={activeSection}
          handleLinkClick={handleDesktopLinkClick}
        />

        <HeaderNavMobile
          navItems={navItems}
          handleMobileMenuClick={handleMobileMenuClick}
        />

        <HeaderCtaButton handleLinkClick={handleDesktopLinkClick} />
      </div>
    </header>
  );
};

export default Header;
