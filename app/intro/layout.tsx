import ConsultationDialog from "@/components/ConsultationDialog";

export default function IntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section> <ConsultationDialog />{children}</section>;
}