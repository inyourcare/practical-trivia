export const metadata = {
  title: "",
  description:
    "",
  keywords:
    "",
};


export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}