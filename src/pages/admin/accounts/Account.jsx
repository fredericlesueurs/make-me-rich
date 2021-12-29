import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DefaultAccountIcon from "../../../assets/default_icon_account.png";
import AccountTransactionList from "../../../components/admin/accounts/AccountTransactionList";
import AccountTransactionRow from "../../../components/admin/accounts/AccountTransationRow";
import AccountNotTransactionFound from "../../../components/admin/accounts/AccountNoTransactionFound";

const accounts = [
    {
        id: 'uuid1',
        icon: 'https://play-lh.googleusercontent.com/-s7XP7EJ72csF1FTWPJyExFr3-boaI_o_1YCLheIIUqYNxtiw89IYD1TiUV8KZjzcfY',
        name: 'Current account',
        bankName: 'Monabanq',
        type: 'Current account',
        createdAt: new Date(),
        amount: 1000000,
        amountRemaining: 200000,
        transaction: [],
    },
    {
        id: 'uuid2',
        name: 'Saving account',
        bankName: 'Credit mutuel',
        type: 'Saving account',
        createdAt: new Date(),
        amount: 100000,
        amountRemaining: 100000,
        transaction: [
            {
                id: 'uuid3',
                name: 'Virement de Morgane',
                amount: 100000,
                type: 'Transfer',
                date: new Date(),
            },
        ],
    },
]

const Account = () => {
    const params = useParams();
    const accountId = params.accountId;

    let [account, setAccount] = useState(null);

    useEffect(() => {
        setAccount(accounts.find(account => account.id == accountId) ?? null);
    });

    if (!account) {
        return (
            <div className="flex w-full h-screen bg-gray-600">
                <div className="flex flex-col items-center justify-center w-2/3 h-44 bg-gray-700 rounded-3xl shadow-lg m-auto">
                    <p className="text-white font-bold text-2xl">Account not found.</p>
                    <p className="text-white font-bold text-2xl">Please select an another account.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full min-h-screen h-full bg-gray-600 pt-5 pb-20 lg:pb-5">
            <div className="flex items-center justify-center w-11/12 h-auto mx-auto mb-4">
                <div className="flex w-1/4 lg:w-1/5 h-full">
                    { account.icon ? 
                        <img src={account.icon} className="flex h-auto w-3/4 rounded-xl items-baseline" />
                        : <img src={DefaultAccountIcon} className="flex h-auto w-3/4 rounded-xl items-baseline"/>
                    }
                </div>
                <div className="w-3/4 lg:w-4/5 h-full flex flex-col ml-2">
                    <span className="flex text-white font-bold text-2xl lg:text-4xl h-1/2 items-end pl-5 lg:pl-10">{account.name}</span>
                    <span className="flex text-gray-400 font-bold text-lg lg:text-2xl h-1/2 items-baseline pl-5 lg:pl-10">{account.bankName}</span>
                </div>
            </div>
            <div className="flex w-11/12 h-auto mx-auto mt-4 mb-2">
                <span className="flex text-gray-400 font-bold text-lg lg:text-2xl items-baseline pl-5 lg:pl-10">Amounts</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-10 w-11/12 h-auto mx-auto my-2">
                <div className="h-full w-full bg-gray-700 rounded-3xl shadow-lg py-4 px-5 lg:px-10">
                    <span className="flex text-gray-400 font-bold text-md lg:text-lg h-1/2 items-end ">Current</span>
                    <span className={["flex font-bold text-lg lg:text-2xl h-1/2 items-baseline", account.amount > 0 ? "text-green-500" : "text-red-500"].join(' ')}>{new Intl.NumberFormat('fr-FR', { style: "currency", currency: "EUR" }).format(account.amount / 100)}</span>
                </div>
                <div className="h-full w-full bg-gray-700 rounded-3xl shadow-lg py-4 px-5 lg:px-10">
                    <span className="flex text-gray-400 font-bold text-md lg:text-lg h-1/2 items-end">Remaining</span>
                    <span className={["flex font-bold text-lg lg:text-2xl h-1/2 items-baseline", account.amountRemaining > 0 ? "text-green-500" : "text-red-500"].join(' ')}>{new Intl.NumberFormat('fr-FR', { style: "currency", currency: "EUR" }).format(account.amountRemaining / 100)}</span>
                </div>
            </div>
            <div className="flex w-11/12 h-auto mx-auto mt-4 mb-2">
                <span className="flex text-gray-400 font-bold text-lg lg:text-2xl items-baseline pl-5 lg:pl-10">Abouts</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-10 w-11/12 h-auto mx-auto my-2">
                <div className="h-full w-full bg-gray-700 rounded-3xl shadow-lg py-4 px-5 lg:px-10">
                    <span className="flex text-gray-400 font-bold text-md lg:text-lg h-1/2 items-end">Type</span>
                    <span className="flex font-bold text-lg lg:text-2xl h-1/2 items-baseline text-white">{account.type}</span>
                </div>
                <div className="h-full w-full bg-gray-700 rounded-3xl shadow-lg py-4 px-5 lg:px-10">
                    <span className="flex text-gray-400 font-bold text-md lg:text-lg h-1/2 items-end">Created at</span>
                    <span className="flex font-bold text-lg lg:text-2xl h-1/2 items-baseline text-white">{new Intl.DateTimeFormat('fr-FR').format(account.createdAt)}</span>
                </div>
            </div>
            <div className="flex w-11/12 h-auto mx-auto mt-4 mb-2">
                <span className="flex text-gray-400 font-bold text-lg lg:text-2xl items-baseline pl-5 lg:pl-10">Previous transactions</span>
            </div>
            <AccountTransactionList>
                { account.transaction.length > 0 ? 
                    account.transaction.map((lightTransaction) => <AccountTransactionRow key={lightTransaction.id} lightTransaction={lightTransaction}/>)
                    : <AccountNotTransactionFound />
                }
            </AccountTransactionList>
        </div>
    );
};

export default Account;