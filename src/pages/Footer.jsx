import React from 'react';
import Image from '../assets/log 1.png';

const Footer1 = [
  {
    id: 1,
    title: 'footer link',
    text1: 'footer link',
    text2: 'footer link',
    text3: 'footer link',
    text4: 'footer link',
  },
  {
    id: 2,
    title: 'footer link',
    text1: 'footer link',
    text2: 'footer link',
    text3: 'footer link',
    text4: 'footer link',
  },
  {
    id: 3,
    title: 'footer link',
    text1: 'footer link',
    text2: 'footer link',
    text3: 'footer link',
    text4: 'footer link',
  },
  {
    id: 4,
    title: 'footer link',
    text1: 'footer link',
    text2: 'footer link',
    text3: 'footer link',
    text4: 'footer link',
  },
];

const Footer = () => {
  return (
    <div className='bg-white w-screen h-auto p-14 border border-t-2 border-t-black'>
      <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-10 lg:gap-20'>
        <img src={Image} alt="Logo" className='w-[100px] h-[100px] object-contain' />
      
        {/* Footer Sections */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-20 text-center'>
          {Footer1.map((item) => (
            <div key={item.id} className='flex flex-col items-center text-center'>
              <h1 className='text-black text-2xl font-bold mb-4'>{item.title}</h1>
              <p className='text-black text-md mb-2'>{item.text1}</p>
              <p className='text-black text-md mb-2'>{item.text2}</p>
              <p className='text-black text-md mb-2'>{item.text3}</p>
              <p className='text-black text-md'>{item.text4}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
