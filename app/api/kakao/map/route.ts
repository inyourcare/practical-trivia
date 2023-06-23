import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const {lat, lng, radius} = body;
  console.log(`https://dapi.kakao.com/v2/local/search/keyword.json?y=${lat}&x=${lng}&radius=${radius}`);
  // const query = new URLSearchParams({
  //     query: "음식점",
  //   })
  
  const getRestaurants = async () => {
    return await fetch(
      `https://dapi.kakao.com/v2/local/search/keyword.json?y=${lat}&x=${lng}&radius=${radius}&query=음식점`,
      {
        method: "GET",
        headers: {
          // "Content-Type": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
        },
        // body: "query=카카오프렌즈",
        // body: new URLSearchParams({
        //   query: "음식점",
        // }),
      }
    )
      .then(async (response) => {
        // console.log("successfully getRestaurants", response.body);
        const restaurants = await response.json()
        console.log("successfully getRestaurants", restaurants);
        return restaurants;
      })
      .catch((e) => {
        console.log("error getRestaurants", e);
        return { error: "error getRestaurants" };
      });
  };
  // return NextResponse.json({ data: "hello" });
  return NextResponse.json({ data: await getRestaurants() });
}
