"use client";

import { useCallback, useEffect, useState } from "react";

export default function FoodRoulette() {
  const initialState = {
    lat: 0.0,
    lng: 0.0,
    radius: 2000,
    lsLoading: false,
  };
  const [state, setState] = useState(initialState);
  const [restaurants, setRestaurants] = useState(null as any);
  useEffect(() => {
    const { geolocation } = navigator;

    geolocation.getCurrentPosition(
      (position) => {
        // success.
        console.log("success", state, position.coords);
        setState({
          ...state,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          lsLoading: false,
        });
        // setState({ ...state, lng: position.coords.longitude });
        // setState({ ...state, lsLoading: false });
      },
      (error) => {
        console.warn("Fail to fetch current location", error);
        setState({ ...state, lat: 37, lng: 127, lsLoading: false });
        // setState({ ...state, lng: 127 });
        // setState({ ...state, lsLoading: false });
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchingRestaurants = useCallback(() => {
    fetch(`/api/kakao/map`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lat: state.lat,
        lng: state.lng,
        radius: state.radius,
      }),
    }).then(async (response) => {
      // console.log((await restaurants.json()).data)
      const restaurants = (await response.json()).data;
      console.log(restaurants)
      setRestaurants(restaurants);
    });
  }, [state.lat, state.lng, state.radius]);

  return (
    <div className="w-full flex justify-center flex-col">
      <div className="w-full flex justify-center">
        lat {state.lat} / lng {state.lng} / lsLoading {state.lsLoading}
      </div>
      {/* / restaurants {restaurants} */}
      {/* <div
        className="w-full flex justify-center"
        dangerouslySetInnerHTML={{ __html: restaurants }}
      ></div> */}
      <button onClick={() => fetchingRestaurants()}>fetch</button>
    </div>
  );
}
