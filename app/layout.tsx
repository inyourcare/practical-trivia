import Drawer from "@/components/drawer";
import "./globals.css";
import { Inter } from "next/font/google";
import DrawerCard from "@/components/drawer-card";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "실용주의 잡학사전의 공부 컨설팅",
  description: "과외 선생님 구하기 부터 입시 컨설팅까지, 초등,중등,고등 바른교육을 위한 컨설팅을 제공합니다.",
  keywords: "과외선생님, 온라인과외, 화상과외, 대학생과외, 과외구하기, 선생님찾기, 과외찾기",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Drawer
        header={
          <div>
            <span>교육 상담 리스트</span>
            {/* back to home */}
            <Link href={"/"}>
              <span
                className={`relative bg-gray-300 text-white rounded px-4 py-1 bg-opacity-25 hover:bg-opacity-100`}
                style={{
                  backgroundImage: `url('/images/icons/house.svg')`,
                  backgroundRepeat: `no-repeat`,
                  backgroundPosition: `center`,
                  width: `40px`,
                  height: `40px`,
                  left: '20px',
                }}
              ></span>
            </Link>
          </div>
        }
      >
        <DrawerCard
          icon={
            // Tailwind center -> flex flex-wrap justify-center items-center
            <button
              className={`h-12 w-12 flex flex-wrap justify-center items-center bg-green-600 text-white rounded px-4 py-1`}
            >
              Dream
            </button>
          }
          title={<p>상상코칭</p>}
          descrision={
            <p className="text-sm text-gray-900 dark:text-white">
              아이의 미래를 위한 선택 상상코칭입니다.
            </p>
          }
          subDescrision={
            <p className="text-xs text-gray-900 dark:text-white">
              학생 맞춤의 프리미엄 과외
            </p>
          }
          targetLink="/sangsang/"
        />
      </Drawer>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
