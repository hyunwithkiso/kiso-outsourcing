"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavItem {
  name: string;
  href: string;
}

interface HeaderNavMobileProps {
  navItems: NavItem[];
  handleMobileMenuClick: (href: string) => void;
}

const HeaderNavMobile = ({
  navItems,
  handleMobileMenuClick,
}: HeaderNavMobileProps) => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="w-8 h-8 flex flex-col justify-center items-center space-y-1.5 relative z-[51]"
            aria-label="메뉴 열기"
          >
            {/* 햄버거 메뉴 아이콘 */}
            <span className="block w-5 h-px bg-gray-900"></span>
            <span className="block w-5 h-px bg-gray-900"></span>
            {/* 필요시 motion으로 아이콘 애니메이션 추가 가능 */}
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[80%] max-w-xs p-0 flex flex-col"
        >
          <SheetHeader className="px-6 pt-6 pb-4 border-b border-gray-100">
            <SheetTitle className="font-geist text-xl font-semibold text-gray-900">
              메뉴
            </SheetTitle>
          </SheetHeader>
          <div className="flex-grow p-6 overflow-y-auto">
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <SheetClose asChild>
                    <button
                      onClick={() => handleMobileMenuClick(item.href)}
                      className="w-full text-left text-lg font-medium text-gray-800 hover:text-gray-900 transition-colors duration-200 font-pretendard py-2"
                      aria-label={`${item.name} 섹션으로 이동`}
                    >
                      {/* 필요시 motion으로 텍스트 호버 효과 추가 가능 */}
                      {item.name}
                    </button>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </div>
          <SheetFooter className="p-6 border-t border-gray-100 mt-auto">
            <SheetClose asChild>
              <button
                onClick={() => handleMobileMenuClick("#closing")}
                className="w-full px-6 py-3 bg-gray-900 text-white text-base font-medium hover:bg-gray-700 transition-colors duration-300 rounded-md"
                aria-label="프로젝트 문의하기"
              >
                {/* 필요시 motion으로 버튼 호버 효과 추가 가능 */}
                프로젝트 문의
              </button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HeaderNavMobile;
