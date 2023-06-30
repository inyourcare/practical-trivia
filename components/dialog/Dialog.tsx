import { Dispatch, SetStateAction } from "react";

export default function Dialog({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  if (open === false) return <></>;
  else return <>{children}</>;
}
