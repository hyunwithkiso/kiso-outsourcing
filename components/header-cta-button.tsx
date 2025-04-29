"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface HeaderCtaButtonProps {
  handleLinkClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
}

const HeaderCtaButton = ({ handleLinkClick }: HeaderCtaButtonProps) => {
  return (
    <motion.div
      className="hidden md:block"
      whileHover={{ scale: 1.05 }} // 약간 확대되는 효과
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Link
        href="https://open.kakao.com/o/snCUhGth"
        className="block px-6 py-2 border border-gray-900 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200 ease-in-out rounded-md"
        aria-label="프로젝트 문의하기"
        // 호버 시 색상 전환은 Tailwind CSS 클래스로 처리하고, motion.div에서 스케일만 제어
      >
        프로젝트 문의
      </Link>
    </motion.div>
  );
};

export default HeaderCtaButton;
