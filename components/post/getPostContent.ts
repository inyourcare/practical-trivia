import fs from 'fs'
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder = "data/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export default getPostContent;