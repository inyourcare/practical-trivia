"use client";

import { useEffect } from "react";
import { RestaurantInterface } from "../util/type";
import Kakaomap from "./Kakaomap";

function KakaoRestaurant({
  width,
  height,
  restaurant,
}: {
  width: number;
  height: number;
  restaurant: RestaurantInterface;
}) {
  return (
    <Kakaomap
      width={width}
      height={height}
      lat={Number(restaurant.y)}
      lon={Number(restaurant.x)}
      title={restaurant.place_name}
    />
  );
}
export default KakaoRestaurant;
