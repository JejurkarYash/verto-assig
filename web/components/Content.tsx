"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AddEmployeeCard from "./AddEmployeeCard"
import { useAppContext } from "./../store/ContextProvider";
import EditEmployeeCard from './EditEmployeeCard';
import DeleteEmployeeCard from './DeleteEmployeeCard';
import AllEmployeCard from './AllEmployeCard';

const Content = () => {
    const { sideBarIsOpen, setSideBarIsOpen, heading, paragraph, activeTab, fetchEmployees } = useAppContext();

    // fetching employees on component mount
    useEffect(() => {
        fetchEmployees();
    }, []);


    const renderContent = () => {

        switch (activeTab) {
            case "Edit Employee":
                return <EditEmployeeCard />;
            case "Delete Employee":
                return <DeleteEmployeeCard />;
            case "All Employees":
                return <AllEmployeCard />;
            default:
                return <AddEmployeeCard />
        }


    }


    return (
        <div className='  flex flex-col gap-4 items-center w-full h-full '>
            {/* header */}
            <div className="bg-white w-full py-6 border border-b border-neutral-200 px-4 h-[5.5rem] md:bg-none flex flex-row justify-between items-center">


                <div className='   '>
                    <h1 className=' font-bold text-xl '>{heading}</h1>
                    <p className=' font-black text-neutral-500 text-xs '>{paragraph}</p>
                </div>
                <div className=" md:hidden ">
                    <button className=" transition-all duration-150 " onClick={() => setSideBarIsOpen(!sideBarIsOpen)}>
                        {
                            sideBarIsOpen ? <Image src="/closeIcon.svg" alt='close-icon' height={30} width={30} /> : <Image src="/openHamBurger.svg" alt='hamburger-icon' width={40} height={40} />
                        }

                    </button>
                </div>
            </div>
            {/* content */}
            {renderContent()}
        </div>
    )
}

export default Content