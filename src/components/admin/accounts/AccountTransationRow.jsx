import React from "react";


const AccountTransactionRow = ({ lightTransaction }) => {
    return (
        <div className="grid grid-cols-4 grid-rows-1 text-white text-center rounded-xl h-10 hover:bg-gray-600">
            <span className="flex items-center justify-center">{new Intl.DateTimeFormat('fr-FR').format(lightTransaction.date)}</span>
            <span className="flex items-center justify-center">{lightTransaction.type}</span>
            <span className="flex items-center justify-center">{lightTransaction.name}</span>
            <span className="flex items-center justify-center">{new Intl.NumberFormat('fr-FR', { style: "currency", currency: "EUR" }).format(lightTransaction.amount / 100)}</span>
        </div>
    );
};

export default AccountTransactionRow;