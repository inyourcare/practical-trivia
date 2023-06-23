"use client";

import { useCallback, useEffect, useState } from "react";

type RestaurantInterface = {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
};
export default function FoodRoulette() {
  const query = "음식점";
  const initialState = {
    lat: 0.0,
    lng: 0.0,
    radius: 2000,
    lsLoading: false,
  };
  const [state, setState] = useState(initialState);
  const [restaurants, setRestaurants] = useState(
    [] as Array<RestaurantInterface>
  );
  const [restaurantsLoading, setRestaurantsLoading] = useState(false);
  useEffect(() => {
    const { geolocation } = navigator;

    geolocation.getCurrentPosition(
      (position) => {
        // success.
        // console.log("success", state, position.coords);
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
    setRestaurantsLoading(true);
    fetch(`/api/kakao/map`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lat: state.lat,
        lng: state.lng,
        radius: state.radius,
        query: query,
      }),
    })
      .then(async (response) => {
        // console.log((await restaurants.json()).data)
        const restaurants = (await response.json()).data;
        // console.log(restaurants);
        setRestaurants(restaurants.documents);
      })
      .catch((e) => {
        alert(`${query} 데이터를 가져오는 중에 문제가 발생했습다.`);
      })
      .finally(() => {
        setRestaurantsLoading(false);
      });
  }, [state.lat, state.lng, state.radius]);

  return (
    <div className="w-full flex justify-center flex-col">
      <div className="w-full flex justify-center">
        lat {state.lat} / lng {state.lng} / lsLoading {state.lsLoading}
      </div>

      {restaurants.map((restaurant, i) => (
        <ul key={i}>
          <li>{restaurant.address_name}</li>
          <li>{restaurant.category_group_code}</li>
          <li>{restaurant.category_name}</li>
          <li>{restaurant.distance}</li>
          <li>{restaurant.id}</li>
          <li>{restaurant.phone}</li>
          <li>{restaurant.place_name}</li>
          <li>{restaurant.place_url}</li>
          <li>{restaurant.road_address_name}</li>
          <li>{restaurant.x}</li>
          <li>{restaurant.y}</li>
        </ul>
      ))}
      {/* / restaurants {restaurants} */}
      {/* <div
        className="w-full flex justify-center"
        dangerouslySetInnerHTML={{ __html: restaurants }}
      ></div> */}
      <button
        disabled={restaurantsLoading}
        onClick={() => fetchingRestaurants()}
      >
        fetch
      </button>
    </div>
  );
}
