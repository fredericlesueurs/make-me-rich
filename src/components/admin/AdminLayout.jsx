import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
    const [isDisplayMenu, setDisplayMenu] = useState(false);

    const handleMenu = (displayMenu = null) => setDisplayMenu(displayMenu ?? !isDisplayMenu);

    return (
        <>
            <div onClick={() => handleMenu()} className={["fixed lg:hidden bottom-2 left-1.5 flex items-center justify-center h-16 w-16 mt-2 mb-2 mx-auto bg-green-600 hover:text-white transition duration-300 ease-linear cursor-pointer shadow-sm group text-white z-20", isDisplayMenu ? "rounded-2xl" : "rounded-full"].join(' ')}>
                <MdOutlineMenu size={36} />
            </div>
            <Sidebar display={isDisplayMenu} />
            <div onClick={() => handleMenu(false)} className={"lg:ml-20 min-h-screen h-full"}>
                <Outlet />
            </div>
        </>
    );
};

export default AdminLayout;