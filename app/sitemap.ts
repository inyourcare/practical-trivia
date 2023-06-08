import { getWawaFiles } from "@/components/util/wawa/WawaLinkList";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const files = getWawaFiles();
  return files.map(file=>{return {url:`${process.env.HOST_BASE_URL}/intro/wawa/${file}`}});
  // return [
  //   {
  //     url: "https://acme.com/about",
  //     lastModified: new Date(),
  //   } as {
  //     url: string;
  //     lastModified?: string | Date | undefined;
  //   },
  //   {
  //     url: "https://acme.com/about",
  //     lastModified: new Date(),
  //   },
  //   {
  //     url: "https://acme.com/blog",
  //     lastModified: new Date(),
  //   },
  // ];
}
