"use server"

import prisma from "@/lib/db"

export default async function getNewsProducts() {
    const products = await prisma.product.findMany({
        select: {
            id: true,
            title: true,
            image: true,
            price: true,
            description: true,
        },
        orderBy: {
            createdAt: "desc",
        },
        take: 3
    })

    return products
    
}