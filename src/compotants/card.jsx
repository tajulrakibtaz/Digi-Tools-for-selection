import React, {  useState } from 'react';

import { toast } from 'react-toastify';
const Card = ({res,selectCard,setSelectedCard}) => {
     const [isTaken,setTaaken]=useState(false)
     const onclicked=() => {setTaaken(true);
    toast (`${res.title} is added to the cart`);
    setSelectedCard ([...selectCard,res]);
      
      }
    return (
        <div className=''>
              <div className="card w-96 bg-base-100 shadow-2xl p-8">
  <div className="card-body  relative">
    <div className='w-max-[380px]'><span className="badge badge-xs badge-warning absolute top-2 right-0 ">{res.badge}</span></div>
     <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4 text-xl">
    {res.icon}
  </div>
    <div className="">
      <h2 className="text-[24px] font-bold ">{res.title}</h2>
      <span className="text-[16px]">{res.description}</span>
    </div>
    <div className='text-[24px]'>{res.price}<samp className='text-[16px]'>/mo</samp></div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{res.features[0]}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{res.features[1]}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{res.features[2]}</span>
      </li>
     
    </ul>
    <div className="mt-6">
      <button onClick={()=>onclicked()
      }
      disabled={isTaken}
      className={`btn  ${isTaken===false?'btn-primary':'bg-amber-400 text-amber-50'}  btn-block rounded-3xl`}>{isTaken===false?'Buy Now':'Moved to cart'}</button>
    </div>
  </div>
</div>
          
        </div>
    );
};

export default Card;