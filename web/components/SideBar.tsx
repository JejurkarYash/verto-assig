"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { useAppContext } from '@/store/ContextProvider';

const items = [
    {
        id: 1,
        name: "Add Employee",
        action: "add",
        heading: "Add Employee",
        paragraph: "Create new employee records and add them to the system",
        svg: (
            <svg
                viewBox="0 0 24 24"
                className="size-5 fill-none stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M7,5H3M5,3V7" />
                <path d="M11,3.35A5.8,5.8,0,0,1,13,3a6,6,0,1,1-5.65,8" />
                <path d="M9.08,13.64A7,7,0,0,0,5,20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1,7,7,0,0,0-3.9-6.27" />
            </svg>
        )
    },
    {
        id: 2,
        name: "Edit Employee",
        action: "edit",
        heading: "Edit Employee",
        paragraph: "Update existing employee information and modify their details",
        svg: (
            <svg
                viewBox="0 0 24 24"
                className="size-5 fill-none stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" />
                <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" />
            </svg>
        )
    },
    {
        id: 3,
        name: "Delete Employee",
        action: "delete",
        heading: "Delete Employee",
        paragraph: "Remove employee records permanently from the system",
        svg: (
            <svg
                viewBox="0 0 24 24"
                className="size-5 fill-none stroke-current"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M10 11V17" />
                <path d="M14 11V17" />
                <path d="M4 7H20" />
                <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" />
                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" />
            </svg>
        )
    },
    {
        id: 4,
        name: "All Employees",
        action: "view",
        heading: "All Employees",
        paragraph: "View and manage all employee records in the database",
        svg: (
            <svg
                viewBox="0 0 24 24"
                className="size-5 fill-current stroke-none"
            >
                <path d="M15.8 21C15.8 21.3866 16.1134 21.7 16.5 21.7C16.8866 21.7 17.2 21.3866 17.2 21H15.8ZM4.8 21C4.8 21.3866 5.1134 21.7 5.5 21.7C5.8866 21.7 6.2 21.3866 6.2 21H4.8ZM6.2 18C6.2 17.6134 5.8866 17.3 5.5 17.3C5.1134 17.3 4.8 17.6134 4.8 18H6.2ZM12.3 21C12.3 21.3866 12.6134 21.7 13 21.7C13.3866 21.7 13.7 21.3866 13.7 21H12.3ZM13.7 18C13.7 17.6134 13.3866 17.3 13 17.3C12.6134 17.3 12.3 17.6134 12.3 18H13.7ZM11.7429 11.3125L11.3499 10.7333L11.3499 10.7333L11.7429 11.3125ZM16.2429 11.3125L15.8499 10.7333L15.8499 10.7333L16.2429 11.3125ZM3.2 21V19.5H1.8V21H3.2ZM8 14.7H11V13.3H8V14.7ZM15.8 19.5V21H17.2V19.5H15.8ZM11 14.7C13.651 14.7 15.8 16.849 15.8 19.5H17.2C17.2 16.0758 14.4242 13.3 11 13.3V14.7ZM3.2 19.5C3.2 16.849 5.34903 14.7 8 14.7V13.3C4.57583 13.3 1.8 16.0758 1.8 19.5H3.2ZM11 14.7H15.5V13.3H11V14.7ZM20.3 19.5V21H21.7V19.5H20.3ZM15.5 14.7C18.151 14.7 20.3 16.849 20.3 19.5H21.7C21.7 16.0758 18.9242 13.3 15.5 13.3V14.7ZM6.2 21V18H4.8V21H6.2ZM13.7 21V18H12.3V21H13.7ZM9.5 11.3C7.67746 11.3 6.2 9.82255 6.2 8.00001H4.8C4.8 10.5958 6.90426 12.7 9.5 12.7V11.3ZM6.2 8.00001C6.2 6.17746 7.67746 4.7 9.5 4.7V3.3C6.90426 3.3 4.8 5.40427 4.8 8.00001H6.2ZM9.5 4.7C11.3225 4.7 12.8 6.17746 12.8 8.00001H14.2C14.2 5.40427 12.0957 3.3 9.5 3.3V4.7ZM12.8 8.00001C12.8 9.13616 12.2264 10.1386 11.3499 10.7333L12.1358 11.8918C13.3801 11.0477 14.2 9.61973 14.2 8.00001H12.8ZM11.3499 10.7333C10.8225 11.091 10.1867 11.3 9.5 11.3V12.7C10.4757 12.7 11.3839 12.4019 12.1358 11.8918L11.3499 10.7333ZM14 4.7C15.8225 4.7 17.3 6.17746 17.3 8.00001H18.7C18.7 5.40427 16.5957 3.3 14 3.3V4.7ZM17.3 8.00001C17.3 9.13616 16.7264 10.1386 15.8499 10.7333L16.6358 11.8918C17.8801 11.0477 18.7 9.61973 18.7 8.00001H17.3ZM15.8499 10.7333C15.3225 11.091 14.6867 11.3 14 11.3V12.7C14.9757 12.7 15.8839 12.4019 16.6358 11.8918L15.8499 10.7333ZM11.9378 5.42349C12.5029 4.97049 13.2189 4.7 14 4.7V3.3C12.8892 3.3 11.8667 3.68622 11.0622 4.33114L11.9378 5.42349ZM14 11.3C13.3133 11.3 12.6775 11.091 12.1501 10.7333L11.3642 11.8918C12.1161 12.4019 13.0243 12.7 14 12.7V11.3Z" />
            </svg>
        )
    },
]

const SideBar = () => {
    const { sideBarIsOpen, activeTab, setActiveTab, setParagraph, setHeading } = useAppContext();
    const [activeItem, setActiveItem] = useState<number>();


    return (
        <div className={` md:flex h-full w-52 lg:w-60 bg-background  flex-col shadow-lg transition-all duration-500  ${sideBarIsOpen ? "block fixed z-50 " : "hidden"}`}>
            {/* Logo Section */}
            <div className="flex items-center justify-center py-8 border-b border-neutral-300  ">
                <div className="flex items-center space-x-3">
                    <Image
                        src="/verto.svg"
                        alt="Verto Logo"
                        height={80}
                        width={80}
                        className="dark:invert"
                    />

                </div>
            </div>

            {/* Navigation Section */}
            <nav className="flex-1 px-4 py-6">
                <div className="space-y-2">
                    <ul className="space-y-1">
                        {items.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => {
                                        setActiveTab(item.name)
                                        setActiveItem(item.id)
                                        setHeading(item.heading)
                                        setParagraph(item.paragraph)
                                    }}
                                    className={`
                                        w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium
                                        transition-all duration-300 group relative overflow-hidden
                                        ${activeItem === item.id
                                            ? 'bg-foreground  text-background shadow-md  '
                                            : 'text-foreground hover:bg-neutral-100  hover:text-accent-foreground'
                                        }
                                    `}
                                >
                                    {/* Icon Container */}
                                    <div className={`
                                        flex items-center justify-center w-5 h-5 transition-transform duration-200
                                        ${activeItem === item.id ? 'scale-110' : 'group-hover:scale-105'}
                                    `}>
                                        {item.svg}
                                    </div>

                                    {/* Text */}
                                    <span className="truncate">{item.name}</span>

                                    {/* Active Indicator */}
                                    {activeItem === item.id && (
                                        <div className="absolute right-2 w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Footer Section */}
            <div className="p-4 border-t  border-neutral-300">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted/50">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-primary-foreground">A</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">Admin User</p>
                        <p className="text-xs text-muted-foreground truncate">admin@verto.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;     