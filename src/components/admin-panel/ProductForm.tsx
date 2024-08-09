"use client"

import addProduct, { Iproduct } from "@/actions/addProduct";
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks"
import { makeToast } from "@/utils/helper";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { FormEvent, useState } from "react";

export const ProductForm = () => {
    const dispatch = useAppDispatch();
    const [payload, setPayload] = useState<Iproduct>({
            imgSrc: "",
            fileKey: "",
            name: "",
            price: "",
            category: ""
        });

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(setLoading(true))
        addProduct(payload).then(() => {
            makeToast("Product added successfully!")
            setPayload({
                imgSrc: "",
                fileKey: "",
                name: "",
                price: "",
                category: ""
            })}).catch((error) => {
            console.log(error)
        }).finally(() => {
            dispatch(setLoading(false))
        })
    }

    return <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <Image className="max-h-[300px] w-auto object-contain rounded-md" 
        src={payload.imgSrc ? payload.imgSrc : "/placeholderImage.jpg"}
        width={800}
        height={500}
        alt="Product Image" 
        />
        <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          setPayload({
            ...payload,
            imgSrc: res[0]?.url,
            fileKey: res[0]?.key
          })
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          console.log(error)
        }}
      />
      <div>
        <label className="block ml-1">Product Name</label>
        <input className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md" type="text"
        onChange={(e) => {
            setPayload({
                ...payload,
                name: e.target.value
            })
        }} value={payload.name} required />
      </div>
      <div>
        <label className="block ml-1">Product Category</label>
        <input className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md" type="text"
        onChange={(e) => {
            setPayload({
                ...payload,
                category: e.target.value
            })
        }} value={payload.category} required />
      </div>
      <div>
        <label className="block ml-1">Product Price</label>
        <input className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md" type="text"
        onChange={(e) => {
            setPayload({
                ...payload,
                price: e.target.value
            })
        }} value={payload.price} required />
      </div>
      <div className="flex justify-end">
        <button className="bg-pink text-white px-8 py-2 rounded-md">
            Add
        </button>
      </div>
    </form>
}