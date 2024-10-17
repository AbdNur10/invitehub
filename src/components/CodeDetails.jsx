import React from "react";
import Logo from "../assets/log 1.png";
import Image from "../assets/image 7.png";
import Footer from "../pages/Footer";

const CodeDetails = () => {
  return (
    <>
      <div className="p-6 bg-white">
        <img src={Logo} alt="Logo" className="w-[120px] h-20 object-contain" />
      </div>

      <div className="flex items-center justify-center bg-white">
        <input
          type="text"
          placeholder="Search"
          className="w-[90%] md:w-[350px] h-12 bg-white p-3 text-black text-sm rounded-xl mb-6
          font-medium text-center border-2 border-gray-300 focus:outline-none focus:border-gray-500"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-center p-6 gap-6 bg-white">
        <div className="p-4 lg:p-12 bg-white w-full lg:w-[40%]">
          <img
            src={Image}
            alt="Logo"
            className="w-full h-40 object-contain border border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-4 bg-white w-full lg:w-[90%] mb-6">
          <label
            htmlFor="email"
            className="font-normal text-black self-start"
          >
            サービス詳細
          </label>
          <div className="w-[95%] h-[350px] p-2 border border-gray-300 overflow-auto">
            <p className="font-normal">
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入ります
            </p>
          </div>
          <label
            htmlFor="email"
            className="font-normal text-black self-start"
          >
            利用条件
          </label>
          <div className="w-[95%] h-[190px] border p-2 border-gray-300 overflow-auto">
            <p>
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入りますここにテキストが入ります
              ここにテキストが入りますここにテキストが入ります
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CodeDetails;
