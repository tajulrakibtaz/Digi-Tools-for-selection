import React from 'react';
import { toast } from 'react-toastify';
const SDetails = ({ info,setSelectedCard,selectCard }) => {
const handleRemoveid=(info)=>{
     toast (`${info.title} is removed from the cart`);
const filerInfo = selectCard.filter(selectedPlayer=>selectedPlayer.id!==info.id);
setSelectedCard(filerInfo);

}
    return (
        <div>
            <div >

                <div className="flex justify-between p-6">
                    <div className="flex gap-2">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-4 text-xl">
                            {info.icon}
                        </div>
                        <div className="">
                            <h1>{info.title}</h1>
                            <p>${info.price}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={()=>handleRemoveid(info)} className="text-red-500">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SDetails;