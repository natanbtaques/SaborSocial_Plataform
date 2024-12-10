import React from "react";

interface FormInputProps {
    label: string;
    type: string;
    name: string;
    value: string | number;
    options?: string[]; // Lista de opções para dropdown
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    required?: boolean;
    rows?: number;
    kg?: number;
}

const EventFormInput: React.FC<FormInputProps> = ({
    label,
    type,
    name,
    value,
    options, // Opções para o dropdown
    onChange,
    required = false,
    rows = 1,
}) => (
    <div className="mb-1 text-site">
        <label htmlFor={name} className="block mb-1 font-medium text-site">
            {label}:
        </label>
        {type === "textarea" ? (
            <textarea
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                rows={rows}
                className="w-full p-2 border border-gray-800 bg-list rounded focus:outline-none focus:border-orange-500 resize-none"
            />
        ) : type === "select" && options ? (
            <select
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full p-2 border border-gray-800 text-site bg-list rounded focus:outline-none focus:border-orange-500"
            >
                <option value="" disabled className="text-site">
                    Selecione uma opção
                </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        ) : (
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full p-2 border border-gray-800  text-site bg-list rounded focus:outline-none focus:border-orange-500"
            />
        )}
    </div>
);

export default EventFormInput;
