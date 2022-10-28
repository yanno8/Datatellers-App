import React from "react";
import { ChevronRightIcon, ChevronLeftIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';




const ChangePage = () => {
    return ( 
        <div className="bg-white flex justify-between items-center w-[250px] py-3 rounded-lg">
            <ChevronLeftIcon className="w-4 h-4 ml-2" />
            <span className="text-gray-800">1</span>
            <span className="text-gray-400">2</span>
            <EllipsisHorizontalIcon className="w-4 h-4" />
            <span className="text-gray-400">9</span>
            <span className="text-gray-400">10</span>
            <ChevronRightIcon className="w-4 h-4 mr-2" />
        </div>
     );
}
 
export default ChangePage;