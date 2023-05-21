"use client";
import Link from "next/link";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";

export default function Drawer({
  header,
  children,
}: {
  header?: ReactNode;
  children?: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className={`absolute top-0 left-0 bg-gray-300 text-white rounded px-4 py-1 bg-opacity-25 hover:bg-opacity-100`}
        style={{
          backgroundImage: `url('/images/icons/list.svg')`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
          width: `40px`,
          height: `40px`,
        }}
        onClick={() => setIsOpen(true)}
      ></button>

      <main
        className={
          "fixed inset-y-0 right-0 overflow-hidden transform ease-in-out bg-gray-600 bg-opacity-0 " +
          (isOpen
            ? "transition-all z-10 duration-500 bg-opacity-40"
            : "transition-all duration-500 -z-10 ")
        }
      >
        <section
          className={
            // " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            " w-screen max-w-lg right-full absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            // (isOpen ? " translate-x-0 " : " translate-x-full ")
            (isOpen ? " translate-x-full opacity:100" : " translate-x-0 ")
          }
        >
          <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
            <header className="p-4 font-bold text-lg">{header}</header>
            {children}
          </article>
        </section>
        <section
          className=" w-screen h-full cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    </>
  );
}
