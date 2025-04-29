"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react"; // motion/react 에서 useInView도 제공하는지 확인 필요. 없다면 framer-motion 또는 react-intersection-observer 사용
// import { useInView } from 'react-intersection-observer'; // 만약 motion/react에 없다면 이쪽 사용

interface SectionWrapperProps {
  children: React.ReactNode;
  delay?: number; // 애니메이션 지연 시간 (옵션)
  className?: string; // 추가적인 스타일링을 위한 className (옵션)
}

const SectionWrapper = ({
  children,
  delay = 0,
  className,
}: SectionWrapperProps) => {
  const ref = useRef(null);
  // motion/react 의 useInView 사용 (만약 없다면 react-intersection-observer로 대체)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" }); // 한 번만 트리거, 뷰포트 상단 100px 전에 트리거

  /* react-intersection-observer 사용 시
  const { ref, inView } = useInView({
    triggerOnce: true, // 한 번만 애니메이션 실행
    threshold: 0.1, // 10% 보였을 때 트리거 (조정 가능)
    // rootMargin: '-100px 0px', // 뷰포트 상단 100px 전에 미리 로드 (옵션)
  });
  */

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // ref를 motion.section에 직접 연결
    <motion.section
      ref={ref}
      className={className} // 외부에서 전달된 className 적용
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // useInView 결과에 따라 애니메이션 상태 변경
      variants={variants}
      transition={{ duration: 0.6, delay: delay, ease: [0.25, 0.1, 0.25, 1.0] }} // ease 조정 가능
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
