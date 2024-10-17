import React from "react";
import Logo from "../assets/log 1.png";
import { GoArrowLeft } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import Footer from "../pages/Footer";

const Forum = () => {
  return (
    <>
      <div className="p-6 bg-white ">
        <img src={Logo} alt="Logo" className="w-20 h-20 object-contain" />
      </div>
      <div
        className="flex flex-col items-center justify-start h-[500px] w-full
     bg-gradient-to-r from-[#E386A6] to-[#737AFF]"
      >
        <div className="flex flex-col items-center mt-12 gap-4">
          <h1 className="text-white font-bold text-2xl text-center mt-4">
            トピックを作成
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

      <div className="bg-[#F5F5F5]">
        <div className="flex items-start gap-6 justify-start p-14 lg:mx-12">
          <h1 className="text-black font-normal text-xl">トピック一覧</h1>
          <div
            className="bg-[#747BFF] px-4 py-2 text-white text-center
             rounded-full items-center justify-center w-[160px] h-auto"
          >
            人気トピック
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-evenly p-6 gap-4 w-[90%] h-auto border border-gray-900 mb-6">
            <h1 className="text-black font-normal w-full md:w-[50%]">
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入ります
            </h1>
            <div className="w-24 h-24 rounded-full bg-white"></div>
            <div className="bg-[#E46962] text-white font-bold text-center p-3 w-full md:w-[220px] h-auto">
              詳細を表示
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-evenly p-6 gap-4 w-[90%] h-auto border border-gray-900 mb-6">
            <h1 className="text-black font-normal w-full md:w-[50%]">
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入ります
            </h1>
            <div className="w-24 h-24 rounded-full bg-white"></div>
            <div className="bg-[#E46962] text-white font-bold text-center p-3 w-full md:w-[220px] h-auto">
              詳細を表示
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-evenly p-6 gap-4 w-[90%] h-auto border border-gray-900 mb-6">
            <h1 className="text-black font-normal w-full md:w-[50%]">
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入ります
            </h1>
            <div className="w-24 h-24 rounded-full bg-white"></div>
            <div className="bg-[#E46962] text-white font-bold text-center p-3 w-full md:w-[220px] h-auto">
              詳細を表示
            </div>
          </div>

          <div></div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Forum;
