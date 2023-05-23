import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";


// 이런식으로 쓸수있다 저장용
export const useCurrentPath = () => {
  const pathname = usePathname();
  return pathname;
}

// export const useAsPAthChanged = (callbak:Function) => {
//   const { locale, locales, asPath, push } = useRouter();
//   useEffect(() => {
//       callbak()
//   }, [asPath])
// }