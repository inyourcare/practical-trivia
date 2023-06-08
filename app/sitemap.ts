import { GetFilesFileType, getFiles } from "@/components/util/getFiles";
// import { getWawaFiles } from "@/components/util/wawa/WawaLinkList";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // const files = getWawaFiles();
  const wawas = getFiles(GetFilesFileType.wawa);
  const posts = getFiles(GetFilesFileType.post);

  return wawas
    .map((wawa) => {
      return { url: `${process.env.HOST_BASE_URL}/intro/wawa/${wawa}` }; //wawa
    })
    .concat(
      { url: `${process.env.HOST_BASE_URL}/about` }, //about
      posts.map((post) => {
        return { url: `${process.env.HOST_BASE_URL}/post/${post}` }; //post
      })
    );
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
