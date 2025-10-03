"use client"
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogFooter, DialogHeader } from './ui/dialog'
import { Button } from './ui/button'
import { useAppContext } from '@/store/ContextProvider'

interface EmployeeProps {
    id: number;
    name: string;
    email: string;
    position: string;
}

const EmployeeDeleteDialog = ({ employee }: { employee: EmployeeProps }) => {
    const [open, setOpen] = useState(false);
    const { deleteEmployee } = useAppContext();

    // Debug logging
    console.log("EmployeeDeleteDialog - employee:", employee);
    console.log("EmployeeDeleteDialog - open state:", open);

    const handleDelete = async () => {
        console.log("Delete button clicked for employee:", employee.id);
        try {
            await deleteEmployee(employee.id);
            setOpen(false);
        } catch (error) {
            console.error("Failed to delete employee:", error);
        }
    };

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button
                        variant="destructive"
                        size="sm"
                        aria-label="Delete Employee"
                        onClick={() => {
                            console.log("Delete trigger clicked!");
                            setOpen(true);
                        }}
                    >
                        Delete
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[520px]">
                    <DialogHeader>
                        <DialogTitle>Delete Employee</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                        <p className="text-sm text-muted-foreground">
                            Are you sure you want to delete <strong>{employee.name}</strong>? This action cannot be undone.
                        </p>
                    </div>
                    <DialogFooter className="gap-2">
                        <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="button" variant="destructive" onClick={handleDelete}>
                            Delete
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default EmployeeDeleteDialog