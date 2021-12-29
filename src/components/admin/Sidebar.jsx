import React from "react";
import { MdAccountBalance, MdSpaceDashboard, MdAttachMoney } from 'react-icons/md';

import SidebarItem from "./SidebarItem";


const Sidebar = ({ display }) => {
    return (
        <div className={["lg:flex flex-col fixed top-0 left-0 h-screen w-20 m-0 shadow-lg bg-gray-900 text-green-500 z-10 transition lg:translate-x-0 border-r-4 border-green-500 lg:border-0", display ? "translate-x-0" : "translate-x-[-5rem]"].join(' ')}>
            <SidebarItem to="/app" icon={<MdSpaceDashboard size="36" />} tooltip="Dashboard" />
            <SidebarItem to="/app/accounts" icon={<MdAccountBalance size="36" />} tooltip="Accounts"/>
            <SidebarItem to="/app/transactions" icon={<MdAttachMoney size="36" />} tooltip="Transactions"/>
        </div>
    );
};

export default Sidebar;