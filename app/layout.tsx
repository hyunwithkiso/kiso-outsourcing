import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChannelWrapper from "@/components/channel-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Base URL 설정 (배포 환경에 맞게 환경 변수 등으로 관리하는 것을 권장)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kiso | 본질에 집중하는 아웃소싱", // 기본 제목
    template: "%s | Kiso", // 페이지별 제목 템플릿
  },
  description:
    "불필요한 요소를 제거하고 본질에만 집중하는 미니멀리즘 아웃소싱. Kiso와 함께 핵심 가치에 집중하세요.",
  openGraph: {
    title: "Kiso | 본질에 집중하는 아웃소싱",
    description:
      "불필요한 요소를 제거하고 본질에만 집중하는 미니멀리즘 아웃소싱.",
    url: siteUrl,
    siteName: "Kiso",
    images: [
      {
        url: "/og.png", // metadataBase 기준 상대 경로
        width: 1200, // OG 이미지 표준 너비 (실제 이미지에 맞게 조정 필요)
        height: 630, // OG 이미지 표준 높이 (실제 이미지에 맞게 조정 필요)
        alt: "Kiso 로고와 슬로건",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  // 트위터 카드 정보 (선택 사항)
  twitter: {
    card: "summary_large_image",
    title: "Kiso | 본질에 집중하는 아웃소싱",
    description:
      "불필요한 요소를 제거하고 본질에만 집중하는 미니멀리즘 아웃소싱.",
    images: ["/og.png"], // og:image와 동일하게 사용
  },
  // 추가적인 메타 태그 (선택 사항)
  icons: {
    icon: "/favicon.ico", // 파비콘 경로
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-white text-gray-900 font-pretendard`}
      >
        {children}
      </body>
    </html>
  );
}
