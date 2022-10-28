import React from "react";
import Header from "../components/Header";
import HeaderList from "../components/HeaderList";
import Items from "../components/Items";
import RowHeader from "../components/RowHeader";
import RowTable from "../components/RowTable";
import { PlusIcon } from '@heroicons/react/24/solid';
import ChangePage from "../components/ChangePage";
// import { useState } from "react";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";


const Dashboard = () => {

    const patients = useSelector((state) => state.patients);

    console.log(patients);

    // const [setData] = useState([])

    // const Action = async () =>{
    //     const result = await fetch(`https://jsonplaceholder.typicode.com/todos`).then(data => data.json())
    //     setData(result)
    // }

    // useEffect(() => {
    //   Action()
    // })
    
    const User = [
        {name: "fatima Halima", code: "A01021022", age: "35", status: "passed"},
        {name: "fatima Halima", code: "A01021022", age: "35", status: "passed"},
        {name: "fatima Halima", code: "A01021022", age: "35", status: "resheduled"},
        {name: "fatima Halima", code: "A01021022", age: "35", status: "missed"},
        {name: "fatima Halima", code: "A01021022", age: "35", status: "resheduled"},
        {name: "fatima Halima", code: "A01021022", age: "35", status: "passed"},
    ]
    return ( 
        <div className="bg-gray-100 h-screen ">
            <Header />
            <section className="ml-[100px] p-8">
                <RowHeader />
                <Items />
               
            </section>
            <section className="ml-[100px] m-auto">
                <HeaderList />
                {
                    User.map(({name, code, age, status}) => (
                        <RowTable name={name} code={code} age={age} status={status} />
                    ))
                
                }
            </section>
            <section>
                <div className="flex justify-center w-full fixed bottom-3">
                    <ChangePage />
                </div>
               <Link to="/register">
                    <div className="bg-red-500 w-10 rounded-sm shadow-lg shadow-black/30 fixed h-10 items-center flex justify-center bottom-5 right-5 cursor-pointer">
                        <PlusIcon className="w-6 h-6 text-white" />
                    </div>
               </Link>
                
            </section>
           
        </div>
     );
}
 
export default Dashboard;