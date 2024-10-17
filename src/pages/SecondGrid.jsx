import React, { useState } from "react";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const GridComponent = () => {
  const [page, setPage] = useState(0);
  const gridsPerPage = 8; // Show 8 items per page

  // Grid items with specific categories
  const gridItems = [
    "category",
    "category",
    "category",
    "category",
    "category",
    "category",
    "category",
    "category",
    "category",
    "category",
    "category",
    "category",
    "category",
    "category",
    "category",
    "category",
  ];

  const referrals = [
    { name: "Refer Name 1", referralCount: 5 },
    { name: "Refer Name 2", referralCount: 3 },
    { name: "Refer Name 3", referralCount: 8 },
    { name: "Refer Name 4", referralCount: 2 },
    { name: "Refer Name 5", referralCount: 1 },
  ];

  const nextPage = () => {
    if ((page + 1) * gridsPerPage < gridItems.length) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <div className="bg-white p-6">
        <h1 className="font-bold text-left mb-16 mt-10 ml-6">その他のカテゴリー</h1>
        <div className="flex flex-col items-center mt-10">
          <div className="flex items-center justify-center">
            <button
              onClick={prevPage}
              className="arrow-button bg-gray-800 w-8 h-8 text-lg rounded-full text-white font-bold flex items-center justify-center"
              disabled={page === 0}
            >
              <IoMdArrowDropleftCircle />
            </button>

            <div className="flex flex-col items-center justify-center gap-6">
              <div className="grid grid-cols-4  gap-8 mx-4  md:grid-cols-8">
                {gridItems
                  .slice(page * gridsPerPage, (page + 1) * gridsPerPage)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center rounded-full
                     lg:w-[120px] lg:h-[60px] bg-[#F5C0C3] w-[80px] h-[50px]"
                    >
                      {item}
                    </div>
                  ))}
              </div>
              <div className="grid grid-cols-4 gap-8  mx-4  md:grid-cols-8">
                {gridItems
                  .slice(page * gridsPerPage, (page + 1) * gridsPerPage)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center rounded-full
                     lg:w-[120px] lg:h-[60px] bg-[#F5C0C3] w-[80px] h-[50px]"
                    >
                      {item}
                    </div>
                  ))}
              </div>
            </div>

            <button
              onClick={nextPage}
              className="arrow-button bg-gray-800 w-8 h-8 text-lg 
               rounded-full text-white font-bold flex items-center justify-center"
              disabled={(page + 1) * gridsPerPage >= gridItems.length}
            >
              <IoMdArrowDroprightCircle />
            </button>
          </div>

          {/* Dots for pagination */}
          <div className="flex gap-2 mt-6 mb-6">
            {Array.from(
              { length: Math.ceil(gridItems.length / gridsPerPage) },
              (_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    page === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setPage(index)} // Change page on dot click
                ></div>
              )
            )}
          </div>
        </div>
      </div>

   
    </>
  );
};

export default GridComponent;
