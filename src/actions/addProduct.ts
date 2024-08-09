"use server"

import prisma from "@/db"

export interface Iproduct {
    imgSrc: string;
    fileKey: string;
    name: string;
    price: string;
    category: string;
}

export default async function addProduct({ imgSrc, fileKey, name, price, category }: Iproduct) {
    try {
        return (await prisma.product.create({
            data: {
                imgSrc,
                fileKey,
                name,
                price,
                category
            }
        }));
    } catch (error: any) {
        return ({
            error
        });
    }
}