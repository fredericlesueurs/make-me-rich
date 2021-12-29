import React, { useState } from "react";
import { MdClear, MdOutlineAccountBalanceWallet } from "react-icons/md";
import { Outlet } from "react-router-dom";
import AccountsBar from "./AccountsBar";

const AdminBarDisplayContext = React.createContext({
    displayed: true,
    toggleAdminBar: (display) => {}, 
});

const AccountsLayout = () => {
    const [adminBarOpen, setAdminBarOpen] = useState(true);
    const toggleAdminBar = (display) => setAdminBarOpen(display);

    return (
        <div className="flex min-h-screen h-full">
            <AdminBarDisplayContext.Provider value={{
                displayed: adminBarOpen,
                toggleAdminBar
            }}>
                <AccountsBar />
                <div className="lg:ml-96 w-full ">
                <Outlet />
                </div>
                <div onClick={() => toggleAdminBar(!adminBarOpen)} className={["fixed lg:hidden bottom-2 right-1.5 flex items-center justify-center h-16 w-16 mt-2 mb-2 mx-auto bg-green-600 hover:text-white transition duration-300 ease-linear cursor-pointer shadow-sm group text-white rounded-full z-20"].join(' ')}>
                    { adminBarOpen ? 
                        <MdClear size={36} />
                        : <MdOutlineAccountBalanceWallet size={36} />
                    }
                </div>
            </AdminBarDisplayContext.Provider>
        </div>
    );
};

export {AccountsLayout, AdminBarDisplayContext};