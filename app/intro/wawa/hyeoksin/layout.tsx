export const metadata = {
  title: "원주 혁신도시 학원::와와학습코칭센터 - 혁신점",
  description:
    "개인별 맞춤의 참여형 수업을 경험 해 보세요.",
  keywords:
    "국어,영어,수학,과학,초등,중등,고등,개인별,맞춤,학원,와와",
};


export default function GoodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}