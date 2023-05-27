"use client";

export default function HowcodingHome() {
  // const router = useRouter()
  // const { menu, submenu, detail } = router.query
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {[
        [1, 1540 / 1920],
        [2, 1400 / 1920],
        [3, 1260 / 1920],
        [4, 740 / 1920],
        [5, 1500 / 1920],
        [6, 1750 / 1920],
        [7, 1137 / 1920],
        [8, 1550 / 1920],
        [9, 1281 / 1920],
        [10, 1772 / 1920],
        [11, 1141 / 1920],
        [12, 4917 / 1920],
      ].map((order) => {
        return (
          <div
            key={order.at(0)}
            style={{
              backgroundImage:
                `url('/images/business/howcoding/` + order.at(0) + `.png')`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `center`,
              backgroundSize: "100% 100%",
              maxWidth: "1920px",
              width: "100%",
              height: "0px",
              paddingTop: `${Math.round(Number(order.at(1))) * 100}%`,
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
