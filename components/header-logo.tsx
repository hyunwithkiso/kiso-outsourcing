"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import logo from "@/assets/logo.png";

const HeaderLogo = () => {
  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
      <Link
        href="/"
        className="relative group shrink-0 block"
        aria-label="Kiso 홈으로 이동"
      >
        <div className="overflow-hidden">
          <Image
            src={logo}
            alt="Kiso 로고"
            width={90}
            height={30}
            priority
            className="block"
          />
          <motion.div
            className="absolute -bottom-1 left-0 h-px bg-gray-900"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default HeaderLogo;
