import React from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';

function FormField({ label, id, placeholder, register, errors, type }) {
    return (
        <div>
            <Label htmlFor={id}>{label} <span className="text-red-500">*</span></Label>
            <Input id={id} type={type} placeholder={placeholder} {...register(id)} />
            {errors[id]?.message && <p className="text-red-500">{errors[id].message}</p>}
        </div>
    );
}

export default FormField