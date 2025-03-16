"use server"

import prisma from "@/lib/db"

export default async function getPopularProducts() {
    const products = await prisma.product.findMany({
        select: {
            id: true,
            title: true,
            image: true,
            price: true,
        },
        take: 8
    })

    return products
    
}