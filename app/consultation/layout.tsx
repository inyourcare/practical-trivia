export const metadata = {
  title: "실용주의 잡학사전 교육 컨설팅 페이지",
  description:
    "실용주의 잡학사전 교육 컨설팅 페이지입니다.",
  keywords:
    "",
};


export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}