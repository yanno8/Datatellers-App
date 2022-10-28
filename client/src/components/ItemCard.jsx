import React from "react";


const ItemCard = ({title, number, bgcolor, color}) => {
    return ( 
    <div className= {`rounded-bl-xl rounded-tr-xl flex flex-col p-3 space-y-4 h-28 ${bgcolor} `}>
        <h1 className="font-bold block text-xl">{title}</h1>
        <span className={`font-bold text-4xl ${color}`}>{number}</span>
    </div> );
}
 
export default ItemCard;