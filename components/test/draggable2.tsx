"use client"

import { useEffect, useRef } from "react";

export default function DraggableTest2() {
  
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    // const items = containerRef.current?.getElementById('')
    // if (items){
    //   for (var i = 0; i < items.length; i++) {
    //     // console.log(items[i].id); //second console output
    //     items[i].draggable = true
    //     Array.from(items[i].getElementsByClassName('no-cursor')).map(e=>{
    //       (e as HTMLDivElement).draggable = false
    //       console.log('hi')
    //     })
    //   }
    // }
    
    const listItem = document.getElementById('list_item')
    new window.Sortable(listItem, {
      animation: 350,
      chosenClass: "sortable-chosen",
      dragClass: "sortable-drag"
  });
  },[])
  return (
    <section className="container mx-auto">
      <section className="p-10 h-screen">
        <div className="text-3xl font-extrabold top_songs">
          <h4 className="capitalize text-yellow-500 tracking-widest">
            top charts
          </h4>
        </div>
        <section className="my-10">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:px-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md bg-white rounded-lg" ref={containerRef}>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-md text-gray-500 capitalize tracking-wider"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-md text-gray-500 capitalize tracking-wider"
                        >
                          Track/artist
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-md text-gray-500 capitalize tracking-wider"
                        >
                          album
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-md text-gray-500 capitalize tracking-wider"
                        >
                          time
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-md text-gray-500 capitalize tracking-wider"
                        >
                          views
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white" id="list_item">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          01
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src="./img/the-weekend.jpg"
                                alt="the-weekend"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-700 capitalize">
                                Pray for me
                              </div>
                              <div className="text-xs text-gray-400 capitalize">
                                The Weekend
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700 capitalize">
                            Black Panther
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600 leading-5 px-2 inline-flex">
                            4:39
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-purple-700 capitalize">
                            1.8 Bilion
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          02
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src="./img/ed-shreen.jpg"
                                alt="ed-shreen"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-700 capitalize">
                                Perfect
                              </div>
                              <div className="text-xs text-gray-400 capitalize">
                                ed sheeran
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700 capitalize">
                            divide
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600 leading-5 px-2 inline-flex">
                            3:29
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-purple-700 capitalize">
                            2.7 Bilion
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          03
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src="./img/luis-fonsi.jpg"
                                alt="luis-fonsi"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-700 capitalize">
                                despacito
                              </div>
                              <div className="text-xs text-gray-400 capitalize">
                                luis fonsi
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700 capitalize">
                            vida
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600 leading-5 px-2 inline-flex">
                            4:41
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-purple-700 capitalize">
                            7.2 Bilion
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          04
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src="./img/marshmello.jpg"
                                alt="marshmello"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-700 capitalize">
                                alone
                              </div>
                              <div className="text-xs text-gray-400 capitalize">
                                marshmello
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700 capitalize">
                            alone (the remixes)
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600 leading-5 px-2 inline-flex">
                            3:39
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-purple-700 capitalize">
                            2.0 Bilion
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          05
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src="./img/jb.jpg"
                                alt="justin-bieber"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-700 capitalize">
                                sorry
                              </div>
                              <div className="text-xs text-gray-400 capitalize">
                                justin bieber
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700 capitalize">
                            purpose
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-600 leading-5 px-2 inline-flex">
                            3:25
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-purple-700 capitalize">
                            3.4 Bilion
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
