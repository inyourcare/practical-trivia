import React from "react";

function Footer() {
  return (
    <footer className="my-16 flex flex-col justify-center w-6/6 sm:w-[610px] md:w-[610px] lg:w-[610px] xl:w-[610px] 2xl:w-[610px] p-6 mx-auto  border-t-2 border-grey-100">
      <span className="text-center text-base">
        {" "}
        {/* Copyright by{" "} */}
        Copyright © {new Date().getFullYear()}
        <a className="text-current" href="">
          {" "}
          실용주의 잡학사전.{" "}
        </a>{" "}
        <br/>
        All rights reserved.
        <br/>
        practicaltrivia@gmail.com
      </span>{" "}
    </footer>
  );
}

export default Footer;
