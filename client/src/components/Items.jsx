import React from "react";
import ItemCard from "./ItemCard";


const Items = () => {
    return ( 
        <div className="grid grid-cols-3 space-x-6 p-3 w-[80%] m-auto">
            <ItemCard title="Missed" number="15" bgcolor="bg-red-200" color="text-red-700"  />
            <ItemCard title="Rechuduled" number="21" bgcolor="bg-yellow-200" color="text-yellow-700" />
            <ItemCard title="Passed" number="05" bgcolor="bg-green-200" color="text-green-700"  />
        </div>
     );
}
 
export default Items;