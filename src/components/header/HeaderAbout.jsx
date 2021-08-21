import React from "react";
import Text from "./Text";
import Btn from "./Btn";

const Header_about = () => {
  return (
    <div className="flex justify-center items-center h-full z-10">
      <div className=" w-60 text-xl sm:text-3xl sm:w-90 lg:text-4xl lg:w-108 2xl:text-5xl 2xl:w-144 dsk_lg:text-6xl dsk_lg:w-179">
        <Text />
        <Btn />
      </div>
    </div>
  );
};

export default Header_about;
