import React from "react";


const AccountTransactionList = ({ children }) => {
    return (
        <div className="flex flex-col w-11/12 h-auto bg-gray-700 rounded-3xl shadow-lg mx-auto my-2">
            <div className="w-full h-full m-auto mt-6 mb-6 px-6">
                <div className="grid grid-cols-4 grid-rows-1 text-gray-400 h-10 text-center font-bold">
                    <span>Date</span>
                    <span>Type</span>
                    <span>Name</span>
                    <span>Amount</span>
                </div>
                {children}
            </div>
        </div>
    );
};

export default AccountTransactionList;