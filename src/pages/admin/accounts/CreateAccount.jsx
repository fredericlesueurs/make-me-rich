import React, { useEffect, useState } from "react";
import CreateAccountIcon from "../../../assets/create_account_icon.png";
import * as yup from "yup";
import { useFormik } from "formik";
import TextInput from "../../../components/form/TextInput";
import SelectInput from "../../../components/form/SelectInput";


const validationSchema = yup.object().shape({
    name: yup.string().required({message: 'Please provide account name.'}),
    bankName: yup.string().required({message: 'Please provide a bank name.'}),
    type: yup.string().required({message: 'Please provide an account type.'}),
    initialAmount: yup.number().required({message: 'Please provide an amount.'})
});


const CreateAccount = () => {
    const [isSending, setSending] = useState(false); 

    const formik = useFormik({
        initialValues: {
            name: '',
            bankName: '',
            type: '',
            initialAmount: 0,
          },
          validationSchema: validationSchema,
          onSubmit: (
            values,
            { setSubmitting }
          ) => {
            setSending(true);
            setTimeout(() => {
                console.log(values);
                setSending(false);
            }, 3000);
            setSubmitting(false);
          },
    });

    return (
        <div className="flex flex-col w-full min-h-screen h-full bg-gray-600 pt-5 pb-20 lg:pb-5">
            <div className="flex justify-center w-11/12 h-auto mx-auto mt-4 mb-4">
                <div className="flex w-1/4 lg:w-1/5 h-full">
                    <img src={CreateAccountIcon} className="flex h-auto w-3/4 rounded-xl items-baseline"/>
                </div>
                <div className="w-3/4 lg:w-4/5 h-full flex flex-col ml-2">
                    <span className="flex text-white font-bold text-2xl lg:text-4xl h-1/2 items-end pl-5 lg:pl-10">Create an account</span>
                    <span className="flex text-gray-400 font-bold text-lg lg:text-2xl h-1/2 items-baseline pl-5 lg:pl-10">Create a new account</span>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit} onReset={formik.resetForm}>
                <div className="flex w-11/12 h-auto mx-auto mt-4 mb-2">
                    <span className="flex text-gray-400 font-bold text-lg lg:text-2xl items-baseline pl-5 lg:pl-10">Abouts</span>
                </div>
                <div className="w-11/12 bg-gray-700 rounded-3xl shadow-lg h-auto mx-auto my-2 pt-2 pb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-10 w-10/12 lg:w-11/12 mx-auto">
                        <div className="h-full w-full">
                            <TextInput id="name" type="text" name="name" label="Name" disabled={isSending} onChange={formik.handleChange} value={formik.values.name} error={formik.errors.name && formik.touched.name ? formik.errors.name : null} />
                        </div>
                        <div className="h-full w-full">
                            <TextInput id="bankName" type="text" name="bankName" label="Bank name" disabled={isSending} onChange={formik.handleChange} value={formik.values.bankName} error={formik.errors.bankName && formik.touched.bankName ? formik.errors.bankName : null} />
                        </div>
                        <div className="h-full w-full">
                            <SelectInput id="type" name="type" label="Type" options={[{value: 'currentAccount', label: 'Current account'}]} disabled={isSending} onChange={formik.handleChange} error={formik.errors.type && formik.touched.type ? formik.errors.type : null} />
                        </div>
                    </div>
                </div>
                <div className="flex w-11/12 h-auto mx-auto mt-4 mb-2">
                    <span className="flex text-gray-400 font-bold text-lg lg:text-2xl items-baseline pl-5 lg:pl-10">Amounts</span>
                </div>
                <div className="w-11/12 bg-gray-700 rounded-3xl shadow-lg h-auto mx-auto my-2 pt-2 pb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-10 w-10/12 lg:w-11/12 mx-auto">
                        <div className="h-full w-full">
                            <TextInput id="initialAmount" type="number" name="initialAmount" label="Initial Amount" disabled={isSending} onChange={formik.handleChange} value={formik.values.initialAmount} error={formik.errors.initialAmount && formik.touched.initialAmount ? formik.errors.initialAmount : null} />
                        </div>
                    </div>
                </div>
                <div className="flex w-11/12 h-auto mx-auto mt-4 mb-2">
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <button disabled={isSending} type="submit" className={["bg-green-600 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto", !isSending && "hover:bg-green-500", isSending && "opacity-50 cursor-not-allowed"].join(' ')}>
                            {isSending ? "Sending..." : "Create"}
                        </button>
                        <button disabled={isSending} type="reset" className={["bg-gray-700 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto", !isSending && "hover:bg-gray-800", isSending && "opacity-50 cursor-not-allowed"].join(' ')}>Reset</button>
                    </div>            
                </div>
            </form> 
        </div>
    );
};

export default CreateAccount;
