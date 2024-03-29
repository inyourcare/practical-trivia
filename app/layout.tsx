import "./globals.css";
import { Noto_Serif_KR } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";

// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// });
// const inter = Inter({ subsets: ["latin"] });
const notoSerifKr = Noto_Serif_KR({ weight: "400", subsets: ["latin"] });

declare global {
  interface Window {
    Kakao: any;
    kakao: any;
    YT: any;
    naver: any;
    dataLayer: any;
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
        {/* 카카오 */}
        <script
          defer
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
        ></script>
        {/* <script
          defer
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_JAVASCRIPT_KEY}`}
        ></script> */}
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_JAVASCRIPT_KEY}&libraries=services,clusterer&autoload=false`}
          // src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_JAVASCRIPT_KEY}`}
          // strategy="beforeInteractive"
          strategy="lazyOnload"
        />
        {/* 네이버 */}
        <script
          defer
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_CLIENT_ID}`}
        />
        <meta
          name="naver-site-verification"
          content="2bcce2baa1fc6bf384c15035f653a7c768d5e6bc"
        />
        {/* 구글 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8425397323378076"
          // crossorigin="anonymous"
          crossOrigin="anonymous"
        ></script>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-08E5CNK7PL"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
        </Script>

        {/* 드래그위한 Sortable */}
        <script defer src="/js/sortable/Sortable.min.js"></script>
      </head>
      {/* </Head> */}

      {/* <body className={inter.className}> */}
      <body className={notoSerifKr.className}>
        {/* <Drawer /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
