import React from "react";  
import Image01 from "../assets/image 7.png";  
import Image02 from "../assets/image 8.png";  

const data = [  
  {  
    id: 1,  
    title: "CoinCheck",  
    description: "Description ",   
    img: '',   
  },  
  {  
    id: 2,  
    title: "CoinCheck",  
    description: "Description ",   
    img: '',  
  },  
  {  
    id: 3,  
    title: "CoinCheck",  
    description: "Description ",  
    img: '',   
  },  
  {  
    id: 4,  
    title: "CoinCheck",  
    description: "Description ",   
    img: '',  
  },  
];  

const dataSecond = [  
  {  
    id: 1,  
    title: "Bitflyer",  
    description: "Description ",   
    img: '',   
  },  
  {  
    id: 2,  
    title: "Bitflyer",  
    description: "Description ",   
    img: '',  
  },  
  {  
    id: 3,  
    title: "Bitflyer",  
    description: "Description ",  
    img: '',   
  },  
  {  
    id: 4,  
    title: "Bitflyer",  
    description: "Description ",   
    img: '',  
  },  
];  

const Section = () => {  
  return (  
    <>  
      <div className="bg-[#F5F5F5] p-6 min-h-screen">  
        <h1 className="font-bold text-left mb-10 mt-10">人気のリファラルコード</h1>  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">  
          {data.map((item) => (  
            <div  
              key={item.id}  
              className="bg-white border border-gray-200 w-full
               h-[400px] text-center p-2 flex flex-col items-center justify-between"  
            >  
              <div  
                className="border border-5 border-gray-600 text-center
                 mt-5 w-[250px] h-[200px] flex flex-col justify-center items-center mb-3"  
              >  
                <img  
                  src={Image01}  
                  alt=""  
                  className="flex items-center justify-center"  
                />  
                <p className="text-center mb-1">{item.title}</p>  
                <p className="text-center mb-1">{item.description}</p>  
              </div>  
              <h1 className="text-black font-bold">Refer to get 1000 yen</h1>  
              <div className="flex items-center justify-evenly mt-3 gap-6 mb-2">  
                <h2 className="text-black">{item.title}</h2>  
                <div className="w-[60px] h-[60px] rounded-full bg-gray-700"></div>  
              </div>  
            </div>  
          ))}  
        </div>   
        <div className="mt-6 text-right ">
        <button className=" text-blue-600 px-4 py-2
         rounded hover:bg-blue-600 hover:text-white transition duration-200">
          全てのプロモーションコードを見る
        </button>
        </div>   
      </div>   

      <div className="bg-[#F5F5F5] p-6 min-h-screen">  
        <h1 className="font-bold text-left mb-10 mt-10">人気のリファラルコード</h1>  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">  
          {dataSecond.map((item) => (  
            <div  
              key={item.id}  
              className="bg-white border border-gray-200 w-full
               h-[400px] text-center p-2 flex flex-col items-center justify-between"  
            >  
              <div  
                className="border border-5 border-gray-600 text-center mt-5 w-[250px] h-[200px] flex flex-col justify-center items-center mb-3"  
              >  
                <img  
                  src={Image02}  
                  alt=""  
                  className="flex items-center justify-center"  
                />  
                {/* Uncomment if you want to display title and description */}  
                {/* <p className="text-center mb-1">{item.title}</p>  
                <p className="text-center mb-1">{item.description}</p> */}  
              </div>  
              <h1 className="text-black font-bold">Refer to get 1000 yen</h1>  
              <div className="flex items-center justify-evenly mt-3 gap-6 mb-2">  
                <h2 className="text-black">{item.title}</h2>  
                <div className="w-[60px] h-[60px] rounded-full bg-gray-700"></div>  
              </div>  
            </div>  
          ))}  
        </div>   
        <div className="mt-6 text-right ">
        <button className=" text-blue-600 px-4 py-2
         rounded hover:bg-blue-600 hover:text-white transition duration-200">
          全てのプロモーションコードを見る
        </button>
        </div>   
      </div> 


    </>  
  );  
};  

export default Section;