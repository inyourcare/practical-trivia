export const metadata = {
  title: "실용주의 잡학사전의 공부 컨설팅::공부구도",
  description:
    "공부구도를 통해 나에게 딱 맞는 공부 방법을 찾아보세요",
  keywords:
    "공부법, 공부구도, 고교학점제, 공부 왜 해야하나요",
};


export default function GoodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}