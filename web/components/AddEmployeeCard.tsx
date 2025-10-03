
"use client"
import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useAppContext } from '@/store/ContextProvider'
import { toast } from 'sonner';

const AddEmployeeCard = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [position, setPosition] = useState<string>("");
    const { addEmployee } = useAppContext();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, email, position });
        addEmployee({ name, email, position });

        toast.success("Employee Created Succesfully !")

        setName("");
        setEmail("");
        setPosition("");
    }
    return (
        <div className=' w-full h-full items-center justify-center   px-8  transition-all duration-200 trasnform  '>
            <Card className=' my-10 sm:w-[70vw] mx-auto  md:w-[70vw] xl:w-[60vw] 2xl:w-[50vw]  '>
                <CardContent >
                    <form className=' flex flex-col gap-4  ' onSubmit={handleSubmit}>
                        <div className=' flex flex-col gap-2 lg:flex-row lg:gap-10 lg:items-center     '>
                            <span className=' space-y-2 flex flex-col w-60  '>
                                <label className='font-medium text-base lg:text-lg  ' htmlFor="">Name</label>
                                <Input className='lg:h-10  ' required value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='enter employee name' />
                            </span>
                            <span className='space-y-2 flex flex-col w-60'>
                                <label htmlFor="" className='font-medium text-base lg:text-lg '>Email</label>
                                <Input className='lg:h-10  ' required value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='enter employee email' />
                            </span>
                            <span className='space-y-2 flex flex-col w-60 '>

                                <label htmlFor="" className='font-medium text-base lg:text-lg'>Position</label>
                                <Input className='lg:h-10 ' required value={position} onChange={(e) => setPosition(e.target.value)} type='text' placeholder='enter employee position ex-Engineer' />
                            </span>
                        </div>
                        <div className="">


                            <Button variant={"default"} className='my-4 h-10  p-1  '>
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
                                <span>Add Employee</span></Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddEmployeeCard