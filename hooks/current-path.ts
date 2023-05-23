import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

// const translatedWords = {
//   '/sangsang' : '상상코칭'
// }
// type TranslatedWords = {
//   [key: string]: string;
// };
// const dict: TranslatedWords = { "/sangsang": "상상코칭" };

// 이런식으로 쓸수있다 저장용
export const useCurrentPath = () => {
  const pathname = usePathname();
  // return dict[pathname];
  return pathname
};

// export const useAsPAthChanged = (callbak:Function) => {
//   const { locale, locales, asPath, push } = useRouter();
//   useEffect(() => {
//       callbak()
//   }, [asPath])
// }
