import React, { useState } from 'react'
import { Card } from './ui/card'
import EmployeeEditDialog from './EmployeeEditDialog'
import { useAppContext } from '@/store/ContextProvider';

const EditEmployeeCard = () => {
    const { employees, isLoading, error } = useAppContext();

    
    return (
        <div className=' w-full h-full items-center justify-center   px-8  transition-all duration-200 trasnform  '>
            <div className="space-y-6 mt-10">
                <Card className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full border-t border-border">
                            <thead className="bg-muted text-muted-foreground">
                                <tr>
                                    <th className="text-left text-xs font-medium uppercase tracking-wider px-4 py-3">Name</th>
                                    <th className="text-left text-xs font-medium uppercase tracking-wider px-4 py-3">Email</th>
                                    <th className="text-left text-xs font-medium uppercase tracking-wider px-4 py-3">Position</th>
                                    <th className="text-right text-xs font-medium uppercase tracking-wider px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={4} className="px-4 py-6 text-center text-muted-foreground">
                                            Loading employees...
                                        </td>
                                    </tr>
                                ) : employees.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="px-4 py-6 text-center text-muted-foreground">
                                            No employees to edit. Add employees first.
                                        </td>
                                    </tr>
                                ) : (
                                    employees.map((e) => (
                                        <tr key={e.id} className="border-t border-border">
                                            <td className="px-4 py-3 align-middle">{e.name}</td>
                                            <td className="px-4 py-3 align-middle text-muted-foreground">{e.email}</td>
                                            <td className="px-4 py-3 align-middle">{e.position}</td>
                                            <td className="px-4 py-3 align-middle">
                                                <div className="flex items-center justify-end">
                                                    <EmployeeEditDialog employee={e} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>

        </div>
    )
}

export default EditEmployeeCard