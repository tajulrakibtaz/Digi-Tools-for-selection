import React from 'react';
import img from '../assets/products/user.png'
import img2 from '../assets/products/package.png'
import img3 from '../assets/products/rocket.png'
const Steps = () => {
    return (
    <div className='max-w-[1200px] mx-auto my-[120px]'>
            <div className='max-w-[1200px] mx-auto text-center'>
<h1 className='text-[48px] font-extrabold'>Get Started in 3 Steps</h1>
<p className='text-[16px]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='flex justify-between'>
<div className='shadow max-w-[380px] p-4 text-center '>

<div className='relative'>
<span className='bg-purple-500 w-6 h-6 text-white rounded-full absolute top-0 right-0'>01</span>
<div className='mx-auto p-2 bg-purple-100 rounded-full w-[60px] h-[60px]'>
    <img src={img} alt="" />
</div>
<h1 className='font-bold text-[24px]'>Create Account</h1>
<p>Sign up for free in seconds. No credit card <br /> required to get started.</p>
</div>
</div>
<div className='shadow max-w-[380px] p-4 text-center '>

<div className='relative'>
<span className='bg-purple-500 w-6 h-6 text-white rounded-full absolute top-0 right-0'>02</span>
<div className='mx-auto p-2 bg-purple-100 rounded-full w-[60px] h-[60px]'>
    <img src={img2} alt="" />
</div>
<h1 className='font-bold text-[24px]'>Choose Products</h1>
<p>Browse our catalog and select the toolsthat fit your needs.</p>
</div>
</div>
<div className='shadow max-w-[380px] p-4 text-center '>

<div className='relative'>
<span className='bg-purple-500 w-6 h-6 text-white rounded-full absolute top-0 right-0'>03</span>
<div className='mx-auto p-2 bg-purple-100 rounded-full w-[60px] h-[60px]'>
    <img src={img3} alt="" />
</div>
<h1 className='font-bold text-[24px]'>Start Creating</h1>
<p>Download and start using your premium tools immediately.</p>
</div>
</div>
            </div>
        </div>
    );
};

export default Steps;