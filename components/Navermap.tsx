"use client";

import { useEffect } from "react";

function Navermap({
  width,
  height,
  lat,
  lon,
}: {
  width: number;
  height: number;
  lat: number;
  lon: number;
}) {
  useEffect(() => {
    // const location = new window.naver.maps.LatLng(126.8306231,37.309035);
    const location = new window.naver.maps.LatLng(lat, lon);
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
  }, [lat,lon]);
  return (
    <div id="map" className={`w-[300px] h-[300px] md:w-[${width}px] md:h-[${height}px]`}>
      map
    </div>
  );
}
export default Navermap;
