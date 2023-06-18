import { NextResponse } from "next/server";

// export async function POST(request: Request) {
export async function GET() {
  // const body = await request.json();
  // console.log("contactinfo list api - request body::", body);
  // const { page, limit, lastId, conditions } = body;
  // console.log("contactinfo list api - page,limit,conditions", page, limit, conditions);

  const getRestaurants = async () =>
    await fetch(
      `https://map.naver.com/v5/search/%EB%A7%9B%EC%A7%91?c=14,0,0,0,dh`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(async (response) => {
        // const data = await result.json();
        console.log("successfully get restaurants", response.body);
        // const reader = response.body?.getReader()
        // reader?.read().then(({ done, value }) => {
        //   if (done) {
        //     // Do something with last chunk of data then exit reader
        //     return;
        //   }
        //   // Otherwise do something here to process current chunk

        //   // Read some more, and call this function again
        //   return reader.read().then(pump);
        // });
        const html = await response.text(); //jsdom 사용가능
        console.log(html);
        return { data: html };
      })
      .catch((e) => {
        console.log("error getting restaurants", e);
        return { error: "error getting restaurants" };
      });
  // return NextResponse.json({ data: await getRestaurants() });
  return NextResponse.json(await getRestaurants());
}
