import ConsultationDialog from "@/components/consultation/ConsultationDialog";

export default function IntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section> <ConsultationDialog />{children}</section>;
}