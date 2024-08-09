"use server"

import prisma from "@/db"

export default async function getProducts() {
    try {
        return (await prisma.product.findMany());
    } catch (error: any) {
        return ({
            error
        });
    }
}