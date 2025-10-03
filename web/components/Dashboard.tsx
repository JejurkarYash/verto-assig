"use client0"
import React, { useState } from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar';
import Content from './Content';
import { useAppContext } from '@/store/ContextProvider';

const Dashboard = () => {
    const { activeTab, setActiveTab, sideBarIsOpen, setSideBarIsOpen } = useAppContext();

    return (
        <main className='h-screen w-screen bg-neutral-200 flex flex-row   '>
            {sideBarIsOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setSideBarIsOpen(false)}
                />
            )}
            <SideBar />
            <Content />

        </main>
    )
}

export default Dashboard