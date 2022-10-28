import React from "react";



const RowTable = ({name, code, age, address, phone, status}) => {

    const checkStatus = (status) =>{
        if(status === "passed"){
            return  <span className="bg-green-200 text-green-700 font-bold px-4 py-1 rounded-full">{status}</span>
        }
        else if(status === "missed")
        {
            return  <span className="bg-red-200 text-red-700 font-bold px-4 py-1 rounded-full">{status}</span>
        }
        else{
            return  <span className="bg-orange-200 text-orange-700 font-bold px-4 py-1 rounded-full">{status}</span>
        }
    }

    return ( 
        <div className="grid grid-cols-6 bg-white space-x-5 mt-6">
            <span className="px-6 py-3 font-semibold">{name}</span>
            <span className="px-6 py-3">{code}</span>
            <span className="px-6 py-3">{age}</span>
            <span className="px-6 py-3">{address}</span>
            <span className="px-6 py-3">{phone}</span>
            <div className="px-6 py-3 ">
               {checkStatus(status)}
            </div>
           
        </div>
     );
}
 
export default RowTable;