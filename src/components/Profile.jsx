import React, { useState } from "react";
import Logo from "../assets/log 1.png";
import { MdOutlineContentCopy } from "react-icons/md";
import Image from "../assets/image 7.png";
import Footer from "../pages/Footer";

const ImagesSection = [
  {
    id: 1,
    img: Image,
  },
  {
    id: 2,
    img: Image,
  },
  {
    id: 3,
    img: Image,
  },
  {
    id: 4,
    img: Image,
  },
  {
    id: 5,
    img: Image,
  },
];

const Profile = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to handle dot click and change image
    const handleDotClick = (index) => {
      setActiveIndex(index);
    };
  return (
    <>
      <div className="p-6 bg-white ">
        <img src={Logo} alt="Logo" className="w-20 h-20 object-contain" />
        <h1 className="font-bold text-black text-center text-2xl">
          あなたのプロモーションを友達に共有しよう !
        </h1>
      </div>
      <div
        className="flex items-center justify-center h-auto bg-white gap-6
  md:h-[350px] w-full bg-gradient-to-r from-[#E386A6] to-[#737AFF] p-6"
      >
        <div className="w-[120px] h-[120px] rounded-full bg-white flex items-center cursor-pointer justify-center">
          <h1 className="text-sm font-normal text-black">User Profile</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-lg text-white font-bold">User Name</h1>
          <div className="flex items-center justify-between gap-2">
            <h1 className="text-sm text-blue-700 underline font-bold">
              invitehub.com/xxxx/xxxxxx/xxxxx
            </h1>
            <MdOutlineContentCopy
              className="text-white cursor-pointer"
              size={20}
            />
          </div>
        </div>
        <div className="w-full md:w-[400px] flex flex-col items-start">
          <textarea
            id="description"
            placeholder="Self Introduction"
            className="w-full h-[110px] bg-white p-3 text-black text-sm rounded-lg
             font-medium  border-2 border-gray-500 focus:outline-none focus:border-gray-500"
          ></textarea>
        </div>
      </div>

      <div className="w-[50%] h-[300px] bg-white mt-6 mb-6 border m-auto border-gray-300 rounded-lg">
        <h1 className="font-bold text-black text-center text-2xl mt-4 mb-4">
          あなたがシェアしたプロモーション一覧
        </h1>
        <hr className="border-gray-300 p-1 " />

        <div className="flex items-center justify-center bg-white p-8">
          <div className="grid grid-cols-5 gap-6">
            {ImagesSection.map((item) => (
              <div
                key={item.id}
                className="w-[120px] h-[100px] border border-gray-300 flex items-center justify-center"
              >
                <img
                  src={item.img}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                index === activeIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Profile;