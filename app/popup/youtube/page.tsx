"use client";

import { useSearchParams } from "next/navigation";
export default function YoutubePopupHome() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("videoId");
  return (
    <>
      <div className="flex justify-center items-center">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
