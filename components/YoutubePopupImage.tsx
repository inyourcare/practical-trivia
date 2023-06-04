"use client";
import Image from "next/image";

export default function YoutubePopupImage({
  children,
}: {
  children: React.ReactNode;
}) {
  const openPopup = () =>
    window.open(
      "/popup/youtube?videoId=QykE0eswFH0",
      "popup",
      "top=100, left=300, width=600, height=600, status=no, menubar=no, toolbar=no, resizable=no"
    );
  return (
    <>
      <div onClick={()=>openPopup()} className="cursor-pointer">{children}</div>
    </>
  );
}
