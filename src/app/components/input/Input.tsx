'use client';

import Link from "next/link";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors
    //icon?: React.ReactNode;
    onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({id, label, type, disabled, required, register, errors, onChange}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (onChange) {
          onChange(value); // Llamada a la función proporcionada por la prop
        }
      };
    return (
        <div className="w-full relative flex justify-between">
            <input autoComplete="off" id={id} disabled={disabled} {...register(id, {required})} placeholder="" type={type} onChange={handleChange}
            className={`peer w-full p-4 pt-6 outline-none bg-white font-light border-2 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed
            ${errors[id]? 'border-rose-400' : 'border-slate-400'}
            ${errors[id]? 'focus:border-rose-400' : 'focus:border-slate-400'}`} />
            <label className={`absolute cursor-text text-md duration-150 transform -translate-y-4 top-5 z-10 origin-[0] left-4
            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4
            ${errors[id]? 'text-rose-500' : 'text-slate-400'}`} 
            htmlFor={id}>{label}</label>
        </div>
    );
}

export default Input;