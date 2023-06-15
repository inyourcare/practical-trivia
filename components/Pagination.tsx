"use client";
import React, { useState } from "react";
import Link from "next/link";

function Pagination({ postPreviews }: { postPreviews: JSX.Element[] }) {
  const splitCnt = 5;
  const idx = 0;
  const initialState = {
    splitCnt: splitCnt,
    idx: idx,
  };
  const [state, setState] = useState(initialState);

  return (
    <>
      {postPreviews.slice(state.idx, state.idx + state.splitCnt)}
      {postPreviews.length > 0 && (
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center w-5/6 sm:w-5/6 md:w-4/6 lg:w-4/6 xl:w-4/6 2xl:w-3/6 justify-evenly mx-auto">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {state.idx + 1}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {Math.min(state.idx + state.splitCnt, postPreviews.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {postPreviews.length}
            </span>{" "}
            Entries
          </span>

          {/* <div className="inline-flex justify-evenly w-5/6 sm:w-5/6 md:w-3/6 lg:w-3/6 xl:w-4/6 2xl:w-2/6"> */}
          <div className="inline-flex justify-evenly w-7/12 sm:w-7/12 md:w-5/12 lg:w-5/12 xl:w-6/12 2xl:w-4/12">
            <button
              // href={"/"}
              className="h-10 mx-auto  w-[100px] my-14 gap-2.5 inline-flex flex-col justify-center items-center rounded-lg text-center font-medium bg-[rgba(235,242,254,1)] text-[rgba(35,46,82,1)]"
              onClick={() =>
                setState({ ...state, idx: state.idx - state.splitCnt })
              }
              disabled={state.idx <= 0}
            >
              Prev
            </button>

            <button
              // href={"/"}
              className="h-10 mx-auto  w-[100px] my-14 gap-2.5 inline-flex flex-col justify-center items-center rounded-lg text-center font-medium bg-[rgba(235,242,254,1)] text-[rgba(35,46,82,1)]"
              onClick={() =>
                setState({ ...state, idx: state.idx + state.splitCnt })
              }
              disabled={state.idx + state.splitCnt >= postPreviews.length}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Pagination;
