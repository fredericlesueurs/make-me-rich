import React from "react";
import { Link } from "react-router-dom";
import SidebarItemTooltip from "./SidebarItemTooltip";

const SidebarItem = ({icon, to, tooltip}) => {
    return (
        <Link to={to} className="relative flex items-center justify-center h-16 w-16 mt-2 mb-2 mx-auto rounded-full hover:rounded-2xl bg-gray-800 hover:bg-green-600 hover:text-white transition duration-300 ease-linear cursor-pointer shadow-sm group">
            {icon}
            { tooltip ? <SidebarItemTooltip>{tooltip}</SidebarItemTooltip> : null}
        </Link>
    );
};

export default SidebarItem;