"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface NavItem {
  name: string;
  href: string;
}

interface HeaderNavDesktopProps {
  navItems: NavItem[];
  activeSection: string;
  handleLinkClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
}

const HeaderNavDesktop = ({
  navItems,
  activeSection,
  handleLinkClick,
}: HeaderNavDesktopProps) => {
  return (
    <nav aria-label="메인 네비게이션" className="hidden md:block">
      <ul className="flex items-center space-x-10">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <li key={item.name} className="relative">
              <Link
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`relative text-sm font-medium font-pretendard transition-colors duration-200 ease-in-out ${
                  // 기본 transition 제거 또는 조정
                  isActive
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-current={isActive ? "page" : undefined}
                aria-label={`${item.name} 섹션으로 이동`}
              >
                {item.name}
                {/* 활성 상태 밑줄 - motion.div로 대체 */}
                {/* {isActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-px bg-gray-900 transition-all duration-300" />
                )} */}
                {/* 호버 효과 밑줄 (motion으로 제어) */}
                <motion.div
                  className="absolute -bottom-1.5 left-0 h-px bg-gray-900"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }} // 활성 상태에 따라 애니메이션
                  whileHover={{ scaleX: 1 }} // 호버 시에도 나타남
                  style={{ transformOrigin: "left" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNavDesktop;
