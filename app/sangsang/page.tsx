"use client";
import Image from "next/image";
import Link from "next/link";

export default function SangSangHome() {
  // const router = useRouter()
  // const { menu, submenu, detail } = router.query
  return (
    <div>
      {[[1,1863/1920], [2,1392/1920], [3,1392/1920], [4,1144/1920], [5,1863/2139]].map((order) => {
        return (
          <div
            key={order.at(0)}
            style={{
              backgroundImage:
                `url('/images/business/sangsang/` + order.at(0) + `.png')`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `center`,
              backgroundSize: "100% 100%",
              maxWidth: '1920px',
              width: "100%",
              height: "0px",
              paddingTop: `${Math.round(Number(order.at(1)))*100}%`,
              // paddingTop: `100%`,
            }}
          >
            {/* <Image
              key={order}
              src={`/images/business/sangsang/` + order + `.png`}
              fill
              style={{ visibility: "hidden" }}
              alt=""
            /> */}
          </div>
        );
      })}
    </div>
  );
}
