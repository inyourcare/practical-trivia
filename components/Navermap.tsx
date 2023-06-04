"use client";

import { useEffect } from "react";

function Navermap({ width, height }: { width: number; height: number }) {
  useEffect(() => {
    // const location = new window.naver.maps.LatLng(126.8306231,37.309035);
    const location = new window.naver.maps.LatLng(37.309035, 126.8306231);
    //지도 그리기
    const map = new window.naver.maps.Map("map", {
      center: location,
      zoomControl: true, // 줌 설정
      zoom: 15,
      zoomControlOptions: {
        style: window.naver.maps.ZoomControlStyle.SMALL,
        position: window.naver.maps.Position.TOP_RIGHT,
      },
    });
    //마커 설정
    const marker = new window.naver.maps.Marker({
      map,
      position: location, //마커 좌표
    });
  }, []);
  return (
    <div id="map" className={`w-[${width}px] h-[${height}px]`}>
    {/* <div id="map" className={`w-[500px] h-[500px]`}> */}
      map
    </div>
  );
}
export default Navermap;
