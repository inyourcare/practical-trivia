export const metadata = {
  title: "하우코딩:: 코딩 과외",
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