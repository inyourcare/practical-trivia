"use client";

import { useEffect, useState } from "react";

export default function FoodRoulette() {
  const initialState = {
    lat: 0.0,
    lng: 0.0,
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

    fetch(`/api/naver/restaurants`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(async (restaurants) => {
      // console.log((await restaurants.json()).data)
      setRestaurants((await restaurants.json()).data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center">
      lat {state.lat} / lng {state.lng} / lsLoading {state.lsLoading} 
      {/* / restaurants {restaurants} */}
      <div dangerouslySetInnerHTML={{ __html: restaurants }}></div>
    </div>
  );
}
