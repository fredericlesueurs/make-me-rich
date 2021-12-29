import React from "react";
import Select from 'react-select';

const SelectInput = ({ id, label, name, options, disabled, error, onChange }) => {
    return (
        <>
            <label htmlFor={id} className="flex w-full text-gray-400 font-bold text-md lg:text-lg h-1/2 items-end mb-2">{label}</label>
            <Select
                className="basic-single"
                classNamePrefix="select"
                isDisabled={disabled}
                isSearchable={true}
                name={name}
                options={options}
                onChange={onChange}
            />
            {error && <p className="text-red-500">{error.message}</p>}
        </>
    );
}

export default SelectInput;