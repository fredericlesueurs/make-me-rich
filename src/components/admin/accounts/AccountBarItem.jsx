import React from "react";
import { NavLink } from "react-router-dom";
import DefaultAccountIcon from "../../../assets/default_icon_account.png";

const AccountBarItem = ({id, name, amount, amountRemaining, icon, onClick}) => {
    return (
        <NavLink to={`/app/accounts/${id}`} 
            className={
                (navData) => navData.isActive ? 
                "flex items-center w-4/5 bg-gray-600 h-auto rounded-lg mt-2 mb-2 ring-4 ring-green-500" 
                : "flex items-center w-4/5 bg-gray-700 h-auto rounded-lg shadow-lg mt-2 mb-2 hover:bg-gray-600"
            } onClick={onClick}
        >
            {icon ? 
                <img src={icon} className="block m-2 h-auto w-16 rounded-xl"/> 
                : <img src={DefaultAccountIcon} className="block m-2 h-auto w-16 rounded-xl"/>
            }
            <div className="flex flex-col w-full text-white m-2 text-left">
                <div className="font-bold">
                    {name}
                </div>
                <div>
                    Amount: <span className="font-bold text-green-500">{new Intl.NumberFormat('fr-FR', { style: "currency", currency: "EUR" }).format(amount / 100)}</span>
                </div>
                <div>
                    Remaining: <span className="font-bold text-green-500">{new Intl.NumberFormat('fr-FR', { style: "currency", currency: "EUR" }).format(amountRemaining / 100)}</span>
                </div>
            </div>
        </NavLink>
    );
};

export default AccountBarItem;