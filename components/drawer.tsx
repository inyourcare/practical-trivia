import { Dispatch, ReactNode, SetStateAction } from "react";

export default function Drawer({
  header,
  children,
  isOpen,
  setIsOpen,
}: {
  header?: ReactNode;
  children?: ReactNode;
  isOpen: Boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <main
      className={
        "fixed inset-y-0 right-0 overflow-hidden transform ease-in-out bg-gray-600 bg-opacity-0 " +
        (isOpen
          ? "transition-all z-10 duration-500 bg-opacity-40"
          : "transition-all duration-500 -z-10 ")
        // + (isOpen
        //   // ? " transition-opacity opacity-100 duration-500 translate-x-0  "
        //   ? " translate-x-0 transition-opacity duration-500 "
        //   // : " transition-all delay-500 opacity-0 translate-x-full  ")
        //   : " -translate-x-full transition-all delay-500")
      }
    >
      {/* <main id="drawer-example" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" aria-labelledby="drawer-label"> */}
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
  );
}
