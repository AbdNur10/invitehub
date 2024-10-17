import React from "react";
import Logo from "../assets/log 1.png";
import { IoMdArrowDropright } from "react-icons/io";
import Footer from "../pages/Footer";

const CodePosting = () => {
  return (
    <>
      {/* Logo Section */}
      <div className="p-6 bg-white ">
        <img src={Logo} alt="Logo" className="w-20 h-20 object-contain" />
      </div>

      {/* Circle and Arrow Section */}
      <div
  className="flex items-center justify-center h-auto bg-white
  md:h-[350px] w-full bg-gradient-to-r from-[#E386A6] to-[#737AFF] p-6"
>
<div className="flex flex-row items-center justify-center gap-6">
  {/* First Circle + Text */}
  <div className="flex flex-col items-center">
    <div className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] rounded-full bg-white flex items-center justify-center">
      <h1 className="text-2xl md:text-5xl font-bold text-[#E46962]">1</h1>
    </div>
    <p className="text-sm md:text-lg text-black mt-2">コードの入力</p>
  </div>

  {/* First Arrow */}
  <IoMdArrowDropright size={60} className="text-[#E46962]" />

  {/* Second Circle + Text */}
  <div className="flex flex-col items-center">
    <div className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] rounded-full bg-white flex items-center justify-center">
      <h1 className="text-2xl md:text-5xl font-bold text-[#E46962]">2</h1>
    </div>
    <p className="text-sm md:text-lg text-black mt-2">共有</p>
  </div>

  {/* Second Arrow */}
  <IoMdArrowDropright size={60} className="text-[#E46962]" />

  {/* Third Circle + Text */}
  <div className="flex flex-col items-center">
    <div className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] rounded-full bg-white flex items-center justify-center">
      <h1 className="text-2xl md:text-5xl font-bold text-[#E46962]">3</h1>
    </div>
    <p className="text-sm md:text-lg text-black mt-2">リワードを受け取る</p>
  </div>
</div>

</div>


      {/* Form Section */}
      <div className="flex flex-col items-center gap-6  p-12 px-4 w-full bg-white">
        {/* Email Field */}
        <div className="w-full md:w-[400px] flex flex-col items-start">
          <label
            htmlFor="email"
            className="font-bold text-black mb-2 self-start"
          >
            リワード名
          </label>
          <input
            type="text"
            id="email"
            placeholder=""
            className="w-full h-12 bg-white p-3 text-black text-sm font-medium  border-2
             border-gray-500 focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Password Field */}
        <div className="w-full md:w-[400px] flex flex-col items-start">
          <label
            htmlFor="password"
            className="font-bold text-black mb-2 self-start"
          >
            リンク/コード
          </label>
          <input
            type="password"
            id="password"
            placeholder=""
            className="w-full h-12 bg-white p-3 text-black text-sm font-medium 
             border-2 border-gray-500 focus:outline-none focus:border-gray-500"
          />
        </div>

        {/* Textarea Field */}
        <div className="w-full md:w-[400px] flex flex-col items-start">
          <label
            htmlFor="description"
            className="font-bold text-black mb-2 self-start"
          >
            説明
          </label>
          <textarea
            id="description"
            placeholder=""
            className="w-full h-40 bg-white p-3 text-black text-sm
             font-medium  border-2 border-gray-500 focus:outline-none focus:border-gray-500"
          ></textarea>
        </div>
        <div>
          <div
            className="flex w-64 h-12 items-center p-2 cursor-pointer justify-center bg-[#E46962]
          text-white m-auto font-bold  hover:bg-[#d95850] transition"
          >
            <p className="flex items-center gap-2 text-white font-bold">
              <span>投稿</span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CodePosting;
