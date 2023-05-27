export const metadata = {
  title: "",
  description:
    "",
  keywords:
    "",
};


export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}