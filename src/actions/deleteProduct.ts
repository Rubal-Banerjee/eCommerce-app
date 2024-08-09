"use server"

import prisma from "@/db"

export default async function deleteProduct(id: number) {
    try {
        return (await prisma.product.delete({
            where: {
                id
            }
        }));
    } catch (error: any) {
        return ({
            error
        });
    }
}