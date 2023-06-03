export const metadata = {
  title: "상상코칭:: 국어,영어,수학,과학 초등,중등,고등 과외",
  description:
    "자기주도적 학습법으로 나에게 딱 맞는 선생님과 학습법.",
  keywords:
    "국어,영어,수학,과학,초등,중등,고등,과외,선생님,맞춤",
};


export default function GoodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}