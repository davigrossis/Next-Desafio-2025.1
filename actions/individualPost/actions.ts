"use serve"

import prisma from "@/lib/db"


export async function fetchProductById(id: number){
    const product = await prisma.product.findUnique({
        where: { id },
        select: {
            id: true,
            title:true,
            description:true,
            image:true,
            price:true,
        }
    })

    return product;
}
