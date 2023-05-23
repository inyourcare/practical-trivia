import "./globals.css";
import { Inter } from "next/font/google";
import Drawer from "@/components/drawer";
import DrawerCard from "@/components/drawer-card";
import Dialog from "@/components/dialog";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "실용주의 잡학사전의 공부 컨설팅",
  description:
    "과외 선생님 구하기 부터 입시 컨설팅까지, 초등,중등,고등 바른교육을 위한 컨설팅을 제공합니다.",
  keywords:
    "과외선생님, 온라인과외, 화상과외, 대학생과외, 과외구하기, 선생님찾기, 과외찾기",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      {/* <body className={inter.className}> */}
      <body>
        <Drawer>
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
        <Dialog
          btnTitle="문의하기"
          // header={<span className="text-3xl font-semibold">문의하기</span>}
        >
          {/* <div>
            <div>이름 <input/></div>
            <div>주소 <input/></div>
            <div>전화번호 <input/></div>
            <div>기타사항 <textarea/></div>
          </div> */}
          <form className="bg-gray-200 shadow-md rounded px-3 pt-3 pb-8 w-full text-xs">
            <label className="block text-black text-xs font-bold my-1">
              상담 받으실 분 성함
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
              placeholder="예) 이름:홍길동"
            />
            <label className="block text-black text-xs font-bold my-1">
              주소
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
            <label className="block text-black text-xs font-bold my-1">
              전화번호
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
              placeholder="예) 이름:010-1234-1234"
            />
            <label className="block text-black text-xs font-bold my-1">
              기타사항
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
              rows={4}
            />
          </form>
          <button className="absolute bottom-2 right-10 rounded-xl bg-gray-300 p-3">
            <p className="text-xs font-bold">상담예약</p>
          </button>
        </Dialog>
        {children}
      </body>
    </html>
  );
}
