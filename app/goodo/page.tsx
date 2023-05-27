"use client";

export default function GoodoHome() {
  // const router = useRouter()
  // const { menu, submenu, detail } = router.query
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {[
        [1, 720 / 1100],
        [2, 1507 / 1100],
        [3, 529 / 1100],
        [4, 712 / 1079],
        [5, 2022 / 1100],
        [6, 1096 / 1100],
        [7, 817 / 1100],
        [8, 603 / 1048],
        [9, 621 / 1100],
        [10, 873 / 1100],
        [11, 756 / 1100],
      ].map((order) => {
        return (
          <div
            key={order.at(0)}
            style={{
              backgroundImage:
                `url('/images/business/goodo/` + order.at(0) + `.png')`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `center`,
              backgroundSize: "100% 100%",
              maxWidth: "1100px",
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
