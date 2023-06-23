// import { NextResponse } from "next/server";
// import puppeteer from 'puppeteer';

// ##### puppeteer 이용한 scraping 필요한 시점이 온다면 여길 봐라
// export async function POST(request: Request) {
// export async function GET() {

  // (async function scrape() {
  //   const browser = await puppeteer.launch({ headless: false });
  //   const page = await browser.newPage();
  //   // await page.goto('https://quotes.toscrape.com/search.aspx');
  //   await page.goto('https://map.naver.com/v5/search/%EB%A7%9B%EC%A7%91?c=14,0,0,0,dh');
  //   await page.waitForSelector('span[value=음식점]');
  //   await page.evaluate(() => {

  //     let restaurantsSpanElement = document.body.querySelectorAll('span[value=음식점]');
  //     console.log(restaurantsSpanElement);
  //     // let quotes = Object.values(restaurantsSpanElement).map(x => {
  //     //     return {
  //     //         author: x.querySelector('.author').textContent ?? null,
  //     //         quote: x.querySelector('.content').textContent ?? null,
  //     //         tag: x.querySelector('.tag').textContent ?? null,

  //     //     }
  //     // });
  //     return restaurantsSpanElement;
  // });
  //   await browser.close();
  // })();
  // return NextResponse.json({data:'hello'});

  // const getRestaurants = async () =>
  //   await fetch(
  //     `https://map.naver.com/v5/search/%EB%A7%9B%EC%A7%91?c=14,0,0,0,dh`,
  //     {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   )
  //     .then(async (response) => {
  //       console.log("successfully get restaurants", response.body);
  //       const htmlString = await response.text(); //jsdom 사용가능
  //       return { data: htmlString };
  //     })
  //     .catch((e) => {
  //       console.log("error getting restaurants", e);
  //       return { error: "error getting restaurants" };
  //     });
  // // return NextResponse.json({ data: await getRestaurants() });
  // return NextResponse.json(await getRestaurants());
// }
