import { TranslatedWords } from "../type";

export const tagDict: TranslatedWords = {
  tutoring: "과외",
  sangsang: "상상코칭",
  programming: "프로그래밍",
  conversation: "회화",
  academy: "학원",
  about: "About",
  study_abroad: "유학",
  career: "진로상담",
  wawa: "와와",
  solute: "솔루트",
  goodo: "공부구도",
  mindfulness: "마음키움",
  ipsi: "입시컨설팅",
  howcoding: "하우코딩",
};

export const translateTagsToKr = (tags: string[]) => {
  return tags.map(tag=>tagDict[tag.toLowerCase()])
};
export const translateTagToKr = (tag: string) => {
  return tagDict[tag.trim()]
};
