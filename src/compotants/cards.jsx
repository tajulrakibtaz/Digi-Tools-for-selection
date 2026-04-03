import React, { use } from 'react';
import Card from './card';
const Cards = ({fetchCards,selectCard,setSelectedCard}) => {
     const useHook = use(fetchCards);
    return (
       
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-4'>
            
            {
                useHook.map(res=><Card setSelectedCard={setSelectedCard} selectCard={selectCard}  key={res.id} res={res}></Card>)
            }
        </div>
    );
};

export default Cards;