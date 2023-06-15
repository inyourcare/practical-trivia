import fs from "fs";
import { PostMetadata } from "./PostMetadata";
import matter from "gray-matter";
import { GetFilesFileType, getFiles } from "../util/getFiles";

const getPostMetadata = (): PostMetadata[] => {
  const files = getFiles(GetFilesFileType.post);
  const markdownPosts = files.filter(
    (file) => file !== "about.md" && file.endsWith(".md")
  );

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
      imageAlt: matterResult.data.imageAlt,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export default getPostMetadata;
