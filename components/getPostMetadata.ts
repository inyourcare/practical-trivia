import fs from "fs";
import { PostMetadata } from "../components/PostMetadata";
import matter from "gray-matter";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "data/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`data/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      slug: fileName.replace(".md", ""),
      id: matterResult.data.id,
      tags: matterResult.data.tags,
      category: matterResult.data.category,
      image: matterResult.data.image,
    };
  });

  return posts;
};

export default getPostMetadata;
