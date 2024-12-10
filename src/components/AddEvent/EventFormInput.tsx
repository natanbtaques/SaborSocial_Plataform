import React from 'react'

interface FormInputProps {
    label: string;
    type: string;
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    rows?: number; // Para o campo de textarea
}

const EventFormInput: React.FC<FormInputProps> = ({
    label,
    type,
    name,
    value,
    onChange,
    required = false,
    rows = 1,
}) => (
    <div className="mb-1 text-site ">
        <label htmlFor={name} className="block mb-1 font-medium text-site">
            {label}:
        </label>
        {type === 'textarea' ? (
            <textarea
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                rows={rows}
                className="w-full p-2 border border-b-slate-900 bg-list rounded"
            />
        ) : (
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full p-2 border text-site bg-list rounded"
            />
        )}
    </div>
);


export default EventFormInput
