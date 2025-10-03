"use client"
import { createContext, ReactNode, useContext, useState } from "react";
import axios from "axios";


type Employee = {
    id: number,
    name: string,
    email: string,
    position: string
}



interface AppContextType {
    activeTab: string,
    sideBarIsOpen: boolean,
    setActiveTab: (tab: string) => void,
    setSideBarIsOpen: (state: boolean) => void,
    heading: string,
    setHeading: (heading: string) => void
    paragraph: string,
    setParagraph: (paragraph: string) => void

    // Employee state
    error: any,
    isLoading: boolean,
    employees: Employee[],
    fetchEmployees: () => Promise<void>,
    updateEmployee: (id: number, updatedData: Partial<Employee>) => void;
    deleteEmployee: (id: number) => void,
    addEmployee: (employee: { name: string, email: string, position: string }) => void,
}




export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [activeTab, setActiveTab] = useState<string>("");
    const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false);
    const [heading, setHeading] = useState<string>("Add Employee");
    const [paragraph, setParagraph] = useState<string>("Create new employee records");

    // Employee State
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(undefined);


    const fetchEmployees = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/employees`);
            if (response.status !== 200) {
                setError("Something went wrong while fetching employees");
                return;
            }
            console.log(response.data);
            setEmployees(response.data.data);
            setIsLoading(false);
            setError(undefined);

        } catch (e: any) {
            setError(e.message);
        }
    }

    const updateEmployee = async (id: number, employee: Partial<Employee>) => {
        // setIsLoading(true);
        try {
            const data = {
                id: id,
                name: employee.name,
                email: employee.email,
                position: employee.position
            }
            console.log(data);
            const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/employees`, data);
            if (response.status !== 200) {
                setError("Something went wrong while updating employee");
                return;
            }
            console.log(response.data);
            setEmployees((prev) => prev.map((e) => (e.id === id ? { ...e, ...employee } : e)));
            setIsLoading(false);
            setError(undefined);

        } catch (e: any) {
            setError(e.message);
        }
    }

    const deleteEmployee = async (id: number) => {
        // setIsLoading(true);
        try {
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/employees/${id}`);
            if (response.status !== 200) {
                setError("Something went wrong while deleting employee");
                return;
            }
            setEmployees((prev) => prev.filter((e) => e.id !== id));
            setIsLoading(false);
            setError(undefined);

        } catch (e: any) {
            setError(e.message);
        }
    }

    const addEmployee = async (employee: { name: string, email: string, position: string }) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/employees`, employee);
            if (response.status !== 201) {
                setError("Something went wrong while adding employee");
                return;
            }

            console.log(response.data);
            setEmployees((prev) => [...prev, response.data.newEmployee]);
            // Re-fetching employees to ensure data consistency
            setIsLoading(false);
            setError(undefined);

        } catch (e: any) {
            setError(e.message);
        }
    }




    return (
        <AppContext.Provider value={{ activeTab, setActiveTab, sideBarIsOpen, setSideBarIsOpen, heading, setHeading, paragraph, setParagraph, employees, fetchEmployees, updateEmployee, deleteEmployee, addEmployee, isLoading, error }}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
}
