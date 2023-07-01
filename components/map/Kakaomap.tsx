"use client";

import { useEffect } from "react";

function Kakaomap({
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
    window.kakao.maps.load(() => {
      // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
      // console.log(window.kakao.maps, window.kakao.maps.LatLng);
      // console.log(window.Kakao);
      var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      var options = {
        // center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        center: new window.kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      }
      var map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    });
  }, [lat, lon]);
  return (
    <>
      <div
        id="map"
        className={`w-[300px] h-[300px] md:w-[${width}px] md:h-[${height}px]`}
      >
        map
      </div>
    </>
  );
}
export default Kakaomap;
