"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Mail, MapPin, Clock, Instagram, Twitter, Github } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/hyunwithkiso",
    icon: <Github className="w-5 h-5" />,
  },
];

const footerLinks = [
  { name: "철학", href: "#philosophy" },
  { name: "서비스", href: "#principles" },
  { name: "프로세스", href: "#outsourcing" },
  { name: "포트폴리오", href: "#portfolio" },
  { name: "문의", href: "#contact" },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-white text-kiso-black py-16 border-t border-kiso-light-gray"
    >
      <div className="container px-6 mx-auto max-w-7xl">
        {/* 상단부 - 로고와 링크 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* 로고 및 정보 */}
          <div className="col-span-1 lg:col-span-2">
            <Link
              href="/"
              className="inline-block mb-6"
              aria-label="Kiso 홈으로 이동"
            >
              <Image src={logo} alt="Kiso 로고" width={110} height={45} />
            </Link>
            <p className="text-kiso-dark-gray mb-8 max-w-md font-pretendard">
              불필요한 요소를 제거하고 본질에만 집중합니다.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-kiso-dark-gray hover:text-kiso-black transition-colors duration-300"
                  aria-label={`${link.name} 방문하기`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 링크 */}
          <div>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-kiso-dark-gray hover:text-kiso-black transition-colors duration-300 font-pretendard"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="font-geist text-lg font-semibold mb-6 text-kiso-black">
              Contact
            </h3>
            <ul className="space-y-4 text-kiso-dark-gray font-pretendard">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-kiso-dark-gray mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@kiso.design"
                  className="hover:text-kiso-black transition-colors duration-300 inline-block"
                >
                  work@kiso.dev
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-kiso-dark-gray mt-0.5 flex-shrink-0" />
                <span>월-토: 11:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 디바이더 */}
        <div className="h-px w-full bg-kiso-light-gray my-10"></div>

        {/* 하단부 - 저작권 및 정책 */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-kiso-dark-gray text-sm font-pretendard mb-6 md:mb-0">
            &copy; {new Date().getFullYear()} Kiso. All rights reserved.
          </p>

          <div className="flex items-center space-x-8">
            {/* <a
              href="#"
              className="text-kiso-dark-gray text-sm hover:text-kiso-black transition-colors duration-300 font-pretendard"
            >
              개인정보 처리방침
            </a>
            <a
              href="#"
              className="text-kiso-dark-gray text-sm hover:text-kiso-black transition-colors duration-300 font-pretendard"
            >
              이용약관
            </a> */}

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center text-kiso-dark-gray hover:text-kiso-black transition-colors duration-300"
              aria-label="맨 위로 이동"
            >
              <span className="mr-1 text-sm">TOP</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
