import React, { useContext } from "react";
import { MdAdd, MdClear } from "react-icons/md";
import { NavLink } from "react-router-dom";
import AccountBarItem from "./AccountBarItem";
import { AdminBarDisplayContext } from "./AccountsLayout";

const accounts= [
    {
        id: 'uuid1',
        icon: 'https://play-lh.googleusercontent.com/-s7XP7EJ72csF1FTWPJyExFr3-boaI_o_1YCLheIIUqYNxtiw89IYD1TiUV8KZjzcfY',
        name: 'Current account',
        amount: 1000000,
        amountRemaining: 200000,
    },
    {
        id: 'uuid2',
        name: 'Saving account',
        amount: 100000,
        amountRemaining: 100000,
    },
]

const AccountsBar = () => {
    const {displayed, toggleAdminBar} = useContext(AdminBarDisplayContext)
    return (
        <div className={["lg:fixed lg:flex flex-col w-full lg:w-96 h-screen overflow-y-auto overflow-x-auto m-0 bg-gray-800 text-center shadow-lg", displayed ? "fixed" : "hidden"].join(' ')}>
            <div className="flex h-16 mt-2 justify-center">
                <h2 className="flex items-center text-white font-bold h-full text-2xl">My accounts</h2>
            </div>
            <div className="flex flex-col items-center mt-10">
                <NavLink to={'/app/accounts/create'} 
                    className={
                        (navData) => navData.isActive ? 
                        "flex items-center w-4/5 bg-gray-600 h-auto rounded-lg mt-2 mb-2 ring-4 ring-green-500" 
                        : "flex items-center w-4/5 bg-gray-700 h-auto rounded-lg shadow-lg mt-2 mb-2 hover:bg-gray-600"
                    } onClick={() => toggleAdminBar(false)}
                >
                    <div className="block m-2 h-auto w-16 rounded-xl text-green-500"><MdAdd size={64} /></div>
                    <div className="flex flex-col w-full text-white m-2 text-left">
                        <div className="font-bold">
                            Create an account
                        </div>
                    </div>
                </NavLink>
                { accounts.map((account) => {
                    return <AccountBarItem onClick={() => toggleAdminBar(false)} key={account.id} id={account.id} name={account.name} amount={account.amount} amountRemaining={account.amountRemaining} icon={account.icon} />
                })}
            </div>
        </div>
    );
};

export default AccountsBar;