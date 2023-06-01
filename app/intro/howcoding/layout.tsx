export const metadata = {
  title: "실용주의 잡학사전의 공부 컨설팅::하우코딩",
  description:
    "하우코딩을 통해 코딩 실력 쑥쑥",
  keywords:
    "코딩, 하우코딩, 개발자, 개발공부",
};


export default function HowcodingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}