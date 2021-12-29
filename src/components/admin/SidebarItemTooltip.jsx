import React from "react";


const SidebarItemTooltip = ({children}) => {
    return (
        <span className="absolute w-auto p-2 m-2 min-w-max left-20 rounded-md shadow-md text-white bg-gray-900 font-bold text-xl transition-all duration-100 scale-0 origin-left group-hover:scale-100">
            {children}
        </span>
    );
};

export default SidebarItemTooltip;