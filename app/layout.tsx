import "./globals.css";
import { Inter } from "next/font/google";
import Drawer from "@/components/drawer/drawer";
import Dialog from "@/components/consultation-dialog";

const inter = Inter({ subsets: ["latin"] });

declare global {
  interface Window {
    Kakao: any;
    YT:any;
  }
}

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
      {/* <Head> */}
      <head>
        <script defer src="https://developers.kakao.com/sdk/js/kakao.min.js"
        ></script>
        {/* <Script src="https://developers.kakao.com/sdk/js/kakao.min.js" />  */}
        {/* <script defer src="https://www.youtube.com/iframe_api"></script> */}
      </head>
      {/* </Head> */}

      {/* <body className={inter.className}> */}
      <body>
        {/* <Drawer /> */}
        <Dialog />
        {children}
      </body>
    </html>
  );
}
