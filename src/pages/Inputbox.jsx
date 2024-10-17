import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const Inputbox = () => {
  return (
    <div className="flex flex-col items-center justify-start h-[550px] w-full
     bg-gradient-to-r from-[#E386A6] to-[#737AFF]">
      <div className="flex flex-col items-center mt-12 gap-4">
        <h1 className="text-white font-bold text-2xl text-center mt-4">
          気になっている
        </h1>
        <h1 className="text-white font-bold text-xl text-center">
          プロモーションを探そう!
        </h1>
      </div>
      <div className="relative mt-12 w-full lg:max-w-[700px] max-w-[400px]">
        <input
          type="input"
          placeholder="Search Here.."
          className="w-full sm:w-[60%] md:w-[70%] lg:w-full 
          h-[50px] bg-white rounded-2xl p-3 pl-10 pr-10 text-black
          placeholder:px-4
          "
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <GoArrowLeft className="text-gray-600 cursor-pointer" size={20} />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <RxCross2 className="text-gray-600 cursor-pointer" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Inputbox;
