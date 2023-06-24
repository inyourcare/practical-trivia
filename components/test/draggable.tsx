"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { BiTrash } from "react-icons/bi";

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

export default function DraggableTest() {
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
        setState({
          ...state,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          lsLoading: false,
        });
      },
      (error) => {
        console.warn("Fail to fetch current location", error);
        setState({ ...state, lat: 37, lng: 127, lsLoading: false });
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    );
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

  // function slist (target:HTMLDivElement) {
  //   // (A) SET CSS + GET ALL LIST ITEMS
  //   target.classList.add("slist");
  //   let items = target.getElementsByTagName("li"), current = null;

  //   // (B) MAKE ITEMS DRAGGABLE + SORTABLE
  //   for (let i of items) {
  //     // (B1) ATTACH DRAGGABLE
  //     i.draggable = true;

  //     // (B2) DRAG START - YELLOW HIGHLIGHT DROPZONES
  //     i.ondragstart = e => {
  //       current = i;
  //       for (let it of items) {
  //         if (it != current) { it.classList.add("hint"); }
  //       }
  //     };

  //     // (B3) DRAG ENTER - RED HIGHLIGHT DROPZONE
  //     i.ondragenter = e => {
  //       if (i != current) { i.classList.add("active"); }
  //     };

  //     // (B4) DRAG LEAVE - REMOVE RED HIGHLIGHT
  //     i.ondragleave = () => i.classList.remove("active");

  //     // (B5) DRAG END - REMOVE ALL HIGHLIGHTS
  //     i.ondragend = () => { for (let it of items) {
  //         it.classList.remove("hint");
  //         it.classList.remove("active");
  //     }};

  //     // (B6) DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
  //     i.ondragover = e => e.preventDefault();

  //     // (B7) ON DROP - DO SOMETHING
  //     i.ondrop = e => {
  //       e.preventDefault();
  //       if (i != current) {
  //         let currentpos = 0, droppedpos = 0;
  //         for (let it=0; it<items.length; it++) {
  //           if (current == items[it]) { currentpos = it; }
  //           if (i == items[it]) { droppedpos = it; }
  //         }
  //         if (currentpos < droppedpos) {
  //           i.parentNode.insertBefore(current, i.nextSibling);
  //         } else {
  //           i.parentNode.insertBefore(current, i);
  //         }
  //       }
  //     };
  //   }
  // }

  const ulRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const listItem = document.getElementById("list_item");
    new window.Sortable(listItem, {
      animation: 350,
      chosenClass: "sortable-chosen",
      dragClass: "sortable-drag",
    });
  }, [restaurants.length]);

  return (
    <div className="w-full flex justify-center flex-col">
      <div className="w-full flex justify-center">
        lat {state.lat} / lng {state.lng} / lsLoading {state.lsLoading}
      </div>
      <div className="flex flex-row justify-center items-center">
        <button
          disabled={restaurantsLoading}
          onClick={() => fetchingRestaurants()}
          className="border"
        >
          fetch
        </button>
      </div>
      <ul id={'list_item'} ref={ulRef}>
        {restaurants.map((restaurant, i) => (
          <li
            // draggable
            className="border border-gray-300 p-4 w-full mx-auto hover:bg-gray-100 hover:cursor-move"
            // onDrag={() => {
            //   // console.log(`ondrag from ${i}`);
            // }}
            // onDragStart={() => {
            //   // console.log(`onDragStart from ${i}`);
            // }}
            // onDragEnd={() => {
            //   // console.log(`onDragEnd from ${i}`);
            // }}
            // onDragEnter={() => {
            //   console.log(`onDragEnter from ${i}`);
            // }}
            key={i}
          >
            {/* <div className="animate-pulse flex space-x-4"> */}
            <div className="w-full flex space-x-4">
              <div className="rounded-full bg-gray-400 h-12 w-12 overflow-auto">
                {/* {icon} */}
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
                  </div>
                  {/* <div className="h-4 bg-gray-400 rounded w-5/6">{script2}</div> */}
                  <div className="no-cursor cursor-auto h-4 rounded w-5/6">
                    거리: {restaurant.distance}m / 번호: {restaurant.phone} /
                    url: {restaurant.place_url}
                  </div>
                </div>
              </div>
              <div
                className="cursor-pointer rounded-full hover:bg-gray-200 h-12 w-12 flex justify-center items-center"
                onClick={() =>
                  setRestaurants(
                    restaurants.filter((r) => r.id != restaurant.id)
                  )
                }
              >
                <BiTrash />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
