import React, { use } from 'react';
import Card from './card';
const Cards = ({fetchCards,selectCard,setSelectedCard}) => {
     const useHook = use(fetchCards);
    return (
       
        <div className='grid grid-cols-3 gap-3'>
            
            {
                useHook.map(res=><Card setSelectedCard={setSelectedCard} selectCard={selectCard}  key={res.id} res={res}></Card>)
            }
        </div>
    );
};

export default Cards;