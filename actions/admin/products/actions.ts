"use server";

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function fetchProducts() {
    const products = await prisma.product.findMany({
        orderBy: {
            id: "asc",
        }
    });

    const count = await prisma.product.count()

    return { products, count };
}

export async function deleteProduct(id: number | undefined ) {
    await prisma.product.delete({
        where: { id },
    });

    revalidatePath('/admin')
}

export async function fetchProductById(id : number | undefined) {
    const product = await prisma.product.findUnique({
        where: { id },
        select: {
            id: true,
            title: true,
            price: true,
            description: true,            
            image: true
        }
    })

    return product || undefined
}

export async function createProduct(formData: FormData) {
    const title = formData.get("name") as string;
    const price = Number(formData.get("price") as string);
    const description = formData.get("description") as string;
    const image = formData.get("image") as string;

    await prisma.product.create({
        data: {
            title,
            price,
            description,
            image
        }
    })

    redirect("/admin")
}

export async function updateProduct(id: number | undefined , formData: FormData) {
    const title = formData.get("name") as string;
    const price = Number(formData.get("price") as string);
    const description = formData.get("description") as string;
    const image = formData.get("image") as string;

    await prisma.product.update({
        where: { id },
        data: {
            title,
            price,
            description,
            image
        }
    })

    redirect("/admin")
}