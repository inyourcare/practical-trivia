import { TranslatedWords } from "../type";

export const tagDict: TranslatedWords = {
  tutoring: "과외",
  sangsang: "상상코칭",
  programming: "프로그래밍",
  conversation: "회화",
  academy: "학원",
  about: "About",
  study_abroad: "유학",
  career: "진로",
  wawa: "와와학습센터",
  solute: "솔루트유학센터",
  goodo: "공부구도",
  mindfulness: "마음키움",
};

export const translateTagsToKr = (tags: string[]) => {
  return tags.map(tag=>tagDict[tag.toLowerCase()])
};
