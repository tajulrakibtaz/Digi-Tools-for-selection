
import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
const Navbar = ({ selectCard }) => {
    return (
          <div className=' flex flex-col md:flex-row md:justify-between items-center max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
              <h1 class=" text-[40px] font-bold
bg-gradient-to-b from-indigo-600 to-purple-500 
bg-clip-text text-transparent">
                DigiTools
            </h1>
    <div className='flex gap-3 items-center'>
                <p className='font-semibold text-[16px]'>Features</p>
                <p className='font-semibold text-[16px]'>Pricing</p>
                <p className='font-semibold text-[16px]'>Testimonials</p>
                <p className='font-semibold text-[16px]'>FAQ</p>
            </div>
             <div className='flex items-center'>

                <button className='mr-5 font-semibold text-[16px] '><div className='flex items-center gap-2'><div className="relative inline-block">
                    <CiShoppingCart className="w-10 h-10" />

                    <div className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
                        {selectCard.length}
                    </div>
                </div>


                    <samp>Login</samp></div></button>
                <button className='font-semibold text-[16px] px-[16px] py-[12px] text-white rounded-full 
bg-gradient-to-r from-blue-500 to-purple-500 '>Get Started</button>
            </div>



        </div>
    );
};

export default Navbar;
