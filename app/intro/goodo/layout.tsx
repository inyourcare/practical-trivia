export const metadata = {
  title: "공부9도:: 공부법 과외",
  description:
    "공부9도를 통해 나에게 딱 맞는 공부 방법을 찾아보세요",
  keywords:
    "공부법, 공부9도, 공부구도, 고교학점제, 공부 왜 해야하나요",
};


export default function GoodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}