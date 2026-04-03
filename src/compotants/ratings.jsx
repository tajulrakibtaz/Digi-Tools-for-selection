
import React from 'react';

const Ratings = () => {
    return (
          <div className='text-white 
bg-gradient-to-r from-blue-500 to-purple-500  '>
            <div className='flex flex-col md:flex-row md:justify-between items-center max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 gap-4 md:gap-0'>
<div className='border-r  m-9 pr-50'>
    <h1 className='font-extrabold text-[60px] '>50K+</h1>
    <p className='text-[24px]'>Active Users</p>
</div>
<div className='border-r  m-9 pr-50'>
    <h1 className='font-extrabold text-[60px] '>200+</h1>
    <p className='text-[24px]'>Premium Tools</p>
</div>
<div className='m-9 pr-50'>
    <h1 className='font-extrabold text-[60px] '>4.9</h1>
    <p className='text-[24px]'>Rating</p>
</div>






            </div>




        </div>
    );
};

export default Ratings;