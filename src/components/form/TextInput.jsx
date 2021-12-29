import React from "react";


const TextInput = ({ id, label, name, type, placeholder, value, disabled, error, onChange }) => {
    return (
        <>
            <label htmlFor={id} className="flex w-full text-gray-400 font-bold text-md lg:text-lg h-1/2 items-end mb-2">{label}</label>
            <input id={id} type={type} disabled={disabled} placeholder={placeholder ?? label} name={name} value={value} onChange={onChange} className={["px-4 py-2 my-1 w-full rounded-lg border bg-gray-600 border-gray-600 text-white focus:outline-none focus:ring-4 focus:ring-green-500", disabled && "opacity-50 cursor-not-allowed"].join(' ')}/>
            {error && <p className="text-red-500">{error.message}</p>}
        </>
    );
};

export default TextInput;