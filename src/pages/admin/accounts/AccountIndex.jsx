import React, { useContext } from "react";
import { AdminBarDisplayContext } from "../../../components/admin/accounts/AccountsLayout";

const AccountIndex = () => {
    const {toggleAdminBar} = useContext(AdminBarDisplayContext);

    return (
        <div className="flex w-full min-h-screen h-screen bg-gray-600">
            <div className="flex flex-col items-center justify-center w-10/12 lg:w-2/3 h-44 bg-gray-700 rounded-3xl shadow-lg m-auto">
                <span className="text-white font-bold text-xl lg:text-2xl mb-5">Please select an account.</span>
                <div onClick={() => toggleAdminBar(true)} className="flex items-center lg:hidden justify-center h-16 w-auto px-5 bg-green-600 rounded-2xl cursor-pointer"><span className="align-center text-white font-bold">View accounts</span></div>
            </div>
        </div>
    );
};

export default AccountIndex;