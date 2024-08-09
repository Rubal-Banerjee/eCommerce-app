"use client"

import updateProduct from "@/actions/updateProduct";
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import React, { Dispatch, FormEvent, SetStateAction, useState } from "react"
import { IoIosCloseCircleOutline } from "react-icons/io";

interface PropsType {
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
}

export const Popup = ({ setOpenPopup, setUpdateTable }: PropsType) => {

    const productData = useAppSelector((state) => state.productReducer);
    const dispatch = useAppDispatch();

    const [inputData, setInputData] = useState({
        id: productData.id,
        name: productData.name,
        category: productData.category,
        price: productData.price
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(setLoading(true))

        updateProduct(inputData).then(() => {
            makeToast("Product Updated Successfully!")
            setUpdateTable((prevState) => !prevState)
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            dispatch(setLoading(false))
            setOpenPopup(false)
        })
    }

    return <div className="fixed top-0 left-0 w-full h-screen bg-[#00000070] grid place-items-center">
        <div className="relative bg-white w-[700px] rounded-lg text-center py-8">
            <IoIosCloseCircleOutline className="absolute text-2xl right-0 top-0 m-4 cursor-pointer hover:text-red-600"
            onClick={() => setOpenPopup(false)} />
            <h2 className="text-2xl mt-3">Edit Product</h2>
            <form className="mt-6 w-fit space-y-4 mx-auto" onSubmit={handleSubmit}>
                <input className="border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit"
                type="text" placeholder="Name" onChange={(e) => {
                    setInputData({ ...inputData, name: e.target.value })
                }} value={inputData.name} required />
                <input className="border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit"
                type="text" placeholder="Category" onChange={(e) => {
                    setInputData({ ...inputData, category: e.target.value })
                }} value={inputData.category} required />
                <input className="border block border-gray-500 outline-none px-4 py-2 rounded-lg w-fit"
                type="text" placeholder="Price" onChange={(e) => {
                    setInputData({ ...inputData, price: e.target.value })
                }} value={inputData.price} required />
                <div className="flex justify-end">
                    <button className="bg-accent block text-white px-8 py-2 rounded-lg self-center">Save</button>
                </div>
            </form>
        </div>
    </div>
}