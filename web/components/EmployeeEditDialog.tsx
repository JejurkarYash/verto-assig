"use client"
import React, { FormEvent, useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { useAppContext } from '@/store/ContextProvider'
import { toast } from 'sonner'

interface employeePropsType {
    id: number;
    name: string;
    email: string;
    position: string;
}

const EmployeeEditDialog = ({ employee }: { employee: employeePropsType }) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [position, setPosition] = useState<string>("");
    const [open, setOpen] = useState(false);

    const { updateEmployee } = useAppContext();

    useEffect(() => {
        setName(employee.name);
        setEmail(employee.email);
        setPosition(employee.position);
    }, [employee])

    const saveChanges = async (e: FormEvent) => {
        e.preventDefault();

        if (name === employee.name && email === employee.email && position === employee.position) {
            setOpen(false);
            return;
        }

        try {
            updateEmployee(employee.id, {
                name,
                email,
                position,

            });
            setOpen(false);

            toast.info("Employee Details Updaated !")
        } catch (error) {
            console.error("Failed to update employee:", error);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" aria-label="Edit employee">
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[520px]">
                <DialogHeader>
                    <DialogTitle>Edit Employee</DialogTitle>
                </DialogHeader>
                <form className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="edit-name">Name</Label>
                        <Input id="edit-name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} aria-required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="edit-email">Email</Label>
                        <Input
                            id="edit-email"
                            type="email"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            aria-required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="edit-role">Role</Label>
                        <Input id="edit-role" value={position} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPosition(e.target.value)} aria-required />
                    </div>
                    <DialogFooter className="gap-2">
                        <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={saveChanges} >
                            Save changes
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default EmployeeEditDialog