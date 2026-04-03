import React from 'react';
import SDetails from './sDetails';
const Carts = ({selectCard,setSelectedCard}) => {
      const total = selectCard.reduce((sum, item) => sum + item.price, 0);
    const cutTheCheckOut=()=>{
     
        setSelectedCard([]);
    }
    return (
            <div>
           <div className="mt-8 p-6 shadow shadow-purple-400 rounded-xl">
  <h1 className="text-xl font-bold mb-4">Your Cart</h1>

  {selectCard.map((info, id) => (
    <SDetails 
      key={id} 
      info={info} 
      setSelectedCard={setSelectedCard}
      selectCard={selectCard}
     
    />
  ))}

  <div className="flex justify-between mt-4 font-semibold">
    <span>Total:</span>
    <span>${total}</span>
  </div>

  <button onClick={()=>cutTheCheckOut()} className="w-full mt-4 py-3 rounded-3xl text-white bg-gradient-to-r from-blue-500 to-purple-500">
    Proceed To Checkout
  </button>
</div>
        </div>
    );
};

export default Carts;