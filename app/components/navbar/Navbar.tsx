import React from "react";
import { Logo } from "./logo";
import Navbar from "./Buttons";
const Navbarr = () => {
  return (
    <div className="h-40 lg:h-50 flex flex-col justify-center items-center bg-black">
      <div className="flex flex-row justify-center mx-auto">
        <div className="mt-10 lg:mr-40 mr-20">
          <Logo />
        </div>
        <div className="mt-20 lg:mt-[26%]">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Navbarr;
