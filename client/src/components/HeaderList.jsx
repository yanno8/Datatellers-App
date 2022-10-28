import React from "react";


const HeaderList = () => {
    return ( 
        <div className="grid grid-cols-6 space-x-5">
            <div className="flex px-6 py-3 bg-white rounded-lg font-bold">
                <span>Name</span>
            </div>
            <div className="flex px-6 py-3 bg-white rounded-lg font-bold">
                <span>Code</span>
            </div>
            <div className="flex px-6 py-3 bg-white rounded-lg font-bold">
                <span>Age</span>
            </div>
            <div className="flex px-6 py-3 bg-white rounded-lg font-bold">
                <span>Address</span>
            </div>
            <div className="flex px-6 py-3 bg-white rounded-lg font-bold">
                <span>Phone</span>
            </div>
            <div className="flex px-6 py-3 bg-white rounded-lg font-bold">
                <span>Status</span>
            </div>
            
        </div>
     );
}
 
export default HeaderList;