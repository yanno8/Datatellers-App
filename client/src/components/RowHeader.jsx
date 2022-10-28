import React from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'


const RowHeader = () => {
    return ( 
        <div className="flex items-center justify-between w-[80%] m-auto p-3 ">
            <span className="text-red-600 border-b-[3px] border-b-red-600">Appointments</span>

            <div className="flex items-center justify-around bg-white rounded-xl  overflow-hidden ">
                <input type="text" className=" px-8 py-3 outline-none " placeholder="search" />
                <MagnifyingGlassIcon className="w-5 h-5 mr-3" />
            </div>
        </div>
     );
}
 
export default RowHeader;