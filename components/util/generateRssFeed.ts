import RSS from "rss";
import { GetFilesFileType, getFiles } from "./getFiles";
import getPostContent from "../post/getPostContent";
import fs from "fs";

export default async function generateRssFeed() {
  //  const site_url = 'localhost:3000';
  const site_url = "practicaltrivia.com";

  const feedOptions = {
    title: "PracticalTrivia | RSS feed",
    description: "Welcome to this blog posts!",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/logo.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, 실용주의 잡학사전`,
  };

  const feed = new RSS(feedOptions);

  const files = getFiles(GetFilesFileType.post);
  files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const post = getPostContent(file);
      feed.item({
        title: post.data.title,
        description: post.data.description,
        url: `${site_url}/post/${post}`,
        date: post.data.date,
      });
    });

  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}
