import React from "react";
import Logo from "../assets/log 1.png";
import Google from "../assets/icons8-google-30.png";
import Footer from "../pages/Footer";

const Login = () => {
  return (
    <>
      <div className="p-16 bg-white">
        <img src={Logo} alt="" className="w-20 h-20 object-contain " />

        <div>
          <h1 className="text-3xl font-bold text-center mb-6">
            Invitehubへようこそ
          </h1>
          <div
            className="flex w-[200px] h-auto items-center p-2 cursor-pointer mb-6
         justify-center m-auto border border-b-2 border-t-2 bg-gray-300 "
          >
            <p className="flex items-center gap-2">
              <img src={Google} alt="" />
              <span>Login with Google</span>
            </p>
          </div>
          <h1 className="text-xl font-normal text-center mb-6">or</h1>
        </div>

        <div className="flex flex-col items-center gap-6 mb-6">
          <input
            type="text"
            placeholder="email"
            className="w-64 h-12 bg-gray-100 p-3 text-black text-sm font-medium text-center border-2 border-gray-300 focus:outline-none focus:border-gray-500"
          />
          <input
            type="text"
            placeholder="password"
            className="w-64 h-12 bg-gray-100 p-3 text-black text-sm font-medium text-center border-2 border-gray-300 focus:outline-none focus:border-gray-500"
          />
        </div>
        <div className="flex text-center justify-center items-center gap-6 mb-6 ">
          <h2 className="text-blue-500 hover:underline cursor-pointer">
            プライバシポリシー
          </h2>
          <h2 className="text-blue-500 hover:underline cursor-pointer">
            利用規約
          </h2>
        </div>
        <div
          className="flex w-64 h-12 items-center p-2 cursor-pointer justify-center bg-[#E46962]
          text-white m-auto font-bold rounded-lg hover:bg-[#d95850] transition"
        >
          <p className="flex items-center gap-2 text-white font-bold">
            <span>ログイン</span>
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
