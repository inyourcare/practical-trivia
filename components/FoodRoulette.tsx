"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import Draggable from "react-draggable";
import { BiTrash, BiMove } from "react-icons/bi";
import select from "./util/select/select";

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

// class MyDraggable extends Draggable {
//   onDragEnter:DraggableEventHandler
// }
export default function FoodRoulette() {
  const query = "음식점";
  const initialState = {
    lat: 0.0,
    lng: 0.0,
    radius: 100,
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
        // setRestaurants(restaurants.documents);
        setRestaurants(restaurants);
      })
      .catch((e) => {
        alert(`${query} 데이터를 가져오는 중에 문제가 발생했습다.`);
      })
      .finally(() => {
        setRestaurantsLoading(false);
      });
  }, [state.lat, state.lng, state.radius]);

  useEffect(() => {
    const listItem = document.getElementById("list_item");
    console.log("rendering list item sorted");
    new window.Sortable(listItem, {
      animation: 350,
      // chosenClass: "sortable-chosen",
      // dragClass: "sortable-drag",
      handle: ".handle", // handle's class
      ghostClass: "bg-gray-100", // 배경 색
      filter: ".filtered",
    });
  }, []);

  function mingle() {
    const listItem = document.getElementById("list_item");
    console.log("mingling");
    if (listItem && listItem?.children.length > 0) {
      const itemLen = listItem.children.length;
      for (let i = 0; i < 100; i++) {
        const min = 0;
        const max = itemLen - 1;
        const ranSeed = Math.random();
        const randomIndex = Math.floor(ranSeed * (max - min + 1) + min);
        const backward = ranSeed > 0.5;

        if (backward)
          listItem.insertBefore(
            listItem.children[randomIndex],
            listItem.children[randomIndex].previousElementSibling
          );
        else
          listItem.insertBefore(
            listItem.children[randomIndex],
            listItem.children[randomIndex].nextElementSibling
              ?.nextElementSibling as Element
          );
      }
    }
  }
  function reduce() {
    const listItem = document.getElementById("list_item");
    console.log("mingling");
    if (listItem && listItem?.children.length > 0) {
      const arr = new Array<Element>();
      for (var i = 0; i < listItem?.children.length; i++) {
        const item = listItem?.children[i];
        arr.push(item);
      }
      arr.forEach((elem, i) => i > 1 && elem.remove());
    }
  }
  function selectOne() {
    setState({ ...state, lsLoading: true });
    const listItem = document.getElementById("list_item");
    console.log("selectOne");
    if (listItem && listItem?.children.length > 0) {
      const arr = new Array<Element>();
      for (var i = 0; i < listItem?.children.length; i++) {
        const item = listItem?.children[i];
        if (!item.classList.contains("filtered")) arr.push(item);
      }
      const selectingClass = "bg-gray-300";
      select(arr, selectingClass, () => {
        setState({ ...state, lsLoading: false });
        // arr.filter((item) => item.classList.contains(selectingClass)).pop()?.scrollIntoView()
        const top = arr
          .filter((item) => item.classList.contains(selectingClass))
          .pop()
          ?.getBoundingClientRect().top;
        if (top) {
          const y = top + window.scrollY;
          window.scroll({
            top: y,
            behavior: "smooth",
          });
        }
        // ( as HTMLElement).scrollIntoView();
      });
    }
  }
  return (
    <div className="w-full flex justify-center flex-col">
      {/* <div className="w-full flex justify-center">
        lat {state.lat} / lng {state.lng} / lsLoading {state.lsLoading}
      </div> */}

      <div className="flex flex-row justify-center items-center">
        {`지금 위치로 부터 반경 `}
        <select
          onChange={(e) =>
            setState({ ...state, radius: Number(e.target.value) })
          }
          value={state.radius}
          className="border"
        >
          <option value={100}>100m</option>
          <option value={200}>200m</option>
          <option value={500}>500m</option>
          <option value={1000}>1km</option>
          <option value={2000}>2km</option>
        </select>
        {"에서 "}
        <button
          disabled={restaurantsLoading || state.lsLoading}
          onClick={() => fetchingRestaurants()}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 border border-gray-400 rounded shadow disabled:cursor-not-allowed"
        >
          찾기
        </button>
        {restaurants.length > 0 && (
          <>
            {`total: ${restaurants.length}`}
            <button
              disabled={restaurantsLoading || state.lsLoading}
              onClick={() => selectOne()}
              className="border ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded disabled:cursor-not-allowed"
            >
              골라줘
            </button>
            <button
              disabled={restaurantsLoading || state.lsLoading}
              onClick={() => mingle()}
              className="border ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded disabled:cursor-not-allowed"
            >
              섞기
            </button>
            {/* <button
              disabled={restaurantsLoading}
              onClick={() => reduce()}
              className="border ml-1"
            >
              줄이기
            </button> */}
          </>
        )}
      </div>

      <div id={"list_item"} className="relative border">
        {restaurantsLoading ? (
          <>Now loading</>
        ) : (
          restaurants.map((restaurant, i) => (
            <div
              // draggable
              key={i}
              className="border border-gray-300 p-4 w-full mx-auto"
            >
              {/* <div className="animate-pulse flex space-x-4"> */}
              <div className="w-full flex space-x-4">
                <div
                  className={`${
                    state.lsLoading === false ? "handle" : ""
                  } hover:cursor-move hover:bg-gray-100 rounded-full h-12 w-12 flex justify-center items-center`}
                >
                  <BiMove />
                </div>
                <div className="flex-1 space-y-4 py-1 overflow-hidden text-ellipsis whitespace-nowrap">
                  {/* <div className="h-4 bg-gray-400 rounded w-3/4">{title}</div> */}
                  {/* <div className="h-4 w-3/4 cursor-auto hover:pointer-events-none"> */}
                  <div className="no-cursor cursor-auto h-4 w-3/4 ">
                    <strong>
                      {restaurant.place_name}({restaurant.category_name})
                    </strong>
                  </div>
                  <div className="space-y-2">
                    {/* <div className="h-4 bg-gray-400 rounded">{script1}</div> */}
                    <div className="no-cursor cursor-auto h-4 rounded">
                      {restaurant.road_address_name}
                      {/* / ( {restaurant.x} , {restaurant.y} ) */}
                    </div>
                    {/* <div className="h-4 bg-gray-400 rounded w-5/6">{script2}</div> */}
                    <div className="no-cursor cursor-auto h-4 rounded w-5/6">
                      거리: {restaurant.distance}m / 번호: {restaurant.phone} /
                      url: {restaurant.place_url}
                    </div>
                  </div>
                </div>
                <div
                  className="rounded-full hover:bg-gray-200 h-12 w-12 flex justify-center items-center hover:cursor-pointer"
                  onClick={(e) => {
                    if (state.lsLoading === false) {
                      e.currentTarget.parentElement?.parentElement?.classList.add(
                        "filtered"
                      );
                      e.currentTarget.parentElement?.parentElement?.classList.add(
                        "bg-gray-400"
                      );
                    }
                  }}
                >
                  <BiTrash />
                </div>
              </div>

              {/* <li>{restaurant.category_group_code}</li> */}
              {/* <li>{restaurant.x}</li> */}
              {/* <li>{restaurant.y}</li> */}
              {/* <li>{restaurant.id}</li> */}
            </div>
          ))
        )}
      </div>
      {/* / restaurants {restaurants} */}
      {/* <div
        className="w-full flex justify-center"
        dangerouslySetInnerHTML={{ __html: restaurants }}
      ></div> */}
    </div>
  );
}
