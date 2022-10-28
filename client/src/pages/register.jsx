import React from "react";
import Header from "../components/Header";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import RowTitle from "../components/RowTitle";
import { Link } from "react-router-dom";



const RegisterPage = () => {
    return ( 
        <div className="bg-gray-100 h-screen">
            <Header />
            <div className="flex space-x-8 font-bold items-center p-8 ">
                <Link to="/">
                    <ArrowLeftIcon className="w-8 h-8" />
                </Link>
                
                <span>NEW RECORD</span>
            </div>
            <section className="w-[85%] m-auto">
                <RowTitle title="General Information" />
                <div className="flex p-3 justify-between border-b pb-8">
                    <div className="flex flex-col space-y-2">
                        <span>Unique Code</span>
                        <input type="text" disabled="true" className="bg-white p-2 rounded-lg" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Name</span>
                        <input type="text" className="bg-white p-2 rounded-lg" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Sex</span>
                       <select className="w-64 p-2 rounded-lg">
                            <option value="">
                                 Male
                            </option>
                       </select>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Phone</span>
                        <input type="text" className="bg-white p-2 rounded-lg" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Email</span>
                        <input type="text" className="bg-white p-2 rounded-lg" />
                    </div>

                </div>
                <RowTitle title="Appointment information" />
                <div className="flex p-3 justify-between pb-8">
                    <div className="flex flex-col space-y-2">
                        <span>Appointment date</span>
                        <input type="text" disabled="true" className="bg-white p-2 rounded-lg" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>First time</span>
                        <input type="text" className="bg-white p-2 rounded-lg" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Request date</span>
                       <select className="w-64 p-2 rounded-lg">
                            <option value="">
                                 Male
                            </option>
                       </select>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Appointment Status</span>
                        <input type="text" className="bg-white p-2 rounded-lg" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>Appointment Time</span>
                        <input type="text" className="bg-white p-2 rounded-lg text-right" placeholder="AM" />
                    </div>

                </div>
                <RowTitle title="Address Information" />
                <div className="flex p-3 space-x-4">
                    <div className="flex flex-col space-y-2">
                        <span>Address 1</span>
                        <input type="text" className="bg-white p-2 rounded-lg w-[300px]" />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>City</span>
                        <input type="text" className="bg-white p-2 rounded-lg w-[200px]" />
                    </div>

                </div>
                <RowTitle title="Notes" />
                <div className="flex p-3 space-x-4">
                    <div className="flex flex-col space-y-2">
                        <span>Before appointment</span>
                        <textarea className="w-[450px] h-[150px] rounded-lg "></textarea>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>After appointment</span>
                        <textarea className="w-[450px] h-[150px] rounded-lg "></textarea>
                    </div>

                </div>
                <div className="bg-red-500 text-lg px-6 py-2 absolute bottom-5 right-5 rounded-lg shadow shadow-black/30 text-white font-bold"> 
                    save
                </div>
            </section>
            
        </div>
     );
}
 
export default RegisterPage;