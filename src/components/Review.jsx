import React, { useState } from "react";
import Logo from "../assets/log 1.png";
import { MdOutlineContentCopy } from "react-icons/md";
import Star from "../assets/icons8-star-20.png";
import Footer from "../pages/Footer";

const Review = () => {
  return (
    <>
      <div className="p-6 bg-white">
        <img src={Logo} alt="Logo" className="w-20 h-20 object-contain" />
        <h1 className="font-bold text-black text-center text-xl sm:text-2xl">
          このリファラルはいかがでしたか ?
        </h1>
      </div>
      <div
        className="flex flex-col sm:flex-row items-center justify-center m-auto h-auto bg-white gap-6
        md:h-[350px] w-full bg-gradient-to-r from-[#E386A6] to-[#737AFF] p-6"
      >
        <div className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] rounded-full bg-white flex items-center cursor-pointer justify-center">
          <h1 className="text-xs sm:text-sm font-normal text-black">User Profile</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-sm sm:text-lg text-white font-bold">User Name</h1>
          <div className="flex items-center justify-between gap-2">
            <h1 className="text-xs sm:text-sm text-blue-700 underline font-bold">
              invitehub.com/xxxx/xxxxxx/xxxxx
            </h1>
            <MdOutlineContentCopy
              className="text-white cursor-pointer"
              size={20}
            />
          </div>
          <div className="flex items-center gap-1">
            <img src={Star} alt="Star" className="w-4 h-4 sm:w-5 sm:h-5" />
            <img src={Star} alt="Star" className="w-4 h-4 sm:w-5 sm:h-5" />
            <img src={Star} alt="Star" className="w-4 h-4 sm:w-5 sm:h-5" />
            <img src={Star} alt="Star" className="w-4 h-4 sm:w-5 sm:h-5" />
            <img src={Star} alt="Star" className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
        <div className="w-full sm:w-[400px] flex flex-col items-center">
          <textarea
            id="description"
            placeholder="Self Introduction"
            className="w-full h-[100px] sm:h-[110px] bg-white p-3 text-black text-xs sm:text-sm rounded-lg text-start
             font-medium  border-2 border-gray-500 focus:outline-none focus:border-gray-500"
          ></textarea>
        </div>
      </div>
      <div className="bg-white p-6 sm:p-12">
        <h1 className="text-center text-black font-semibold text-xs sm:text-sm p-2 mb-4">評価をする</h1>
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
          <img src={Star} alt="Star" className="w-5 h-5 sm:w-7 sm:h-7" />
          <img src={Star} alt="Star" className="w-5 h-5 sm:w-7 sm:h-7" />
          <img src={Star} alt="Star" className="w-5 h-5 sm:w-7 sm:h-7" />
          <img src={Star} alt="Star" className="w-5 h-5 sm:w-7 sm:h-7" />
          <img src={Star} alt="Star" className="w-5 h-5 sm:w-7 sm:h-7" />
        </div>
        <div className="w-full sm:w-[400px] flex flex-col m-auto items-center">
          <label htmlFor="password" className="font-bold text-black self-center">
            コメント
          </label>
          <input
            type="text"
            id="password"
            placeholder=""
            className="w-full h-20 sm:h-24 bg-white p-3 text-black text-xs sm:text-sm font-medium 
             border-2 border-gray-500 focus:outline-none focus:border-gray-500"
          />
        </div>
        <div
          className="flex w-full sm:w-64 h-10 sm:h-12 items-center p-2 cursor-pointer justify-center bg-[#E46962]
          text-white m-auto font-bold hover:bg-[#d95850] transition mt-6"
        >
          <p className="flex items-center gap-2 text-xs sm:text-sm text-white font-bold">
            <span>レビューを投稿</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Review;
