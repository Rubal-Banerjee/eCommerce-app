"use server"

import prisma from "@/db"

interface UpdateType {
    id: number;
    name: string;
    category: string;
    price: string;
}

export default async function updateProduct({ id, name, category, price }: UpdateType) {
    try {
        return (
            await prisma.product.update({
                where: {
                    id
                },
                data: {
                    name,
                    category,
                    price
                }
            }));
    } catch (error: any) {
        return ({
            error
        });
    }
}