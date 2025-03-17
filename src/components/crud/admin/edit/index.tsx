"use client"

import { updateProduct } from "../../../../../actions/admin/products/actions"
import { Product } from "../../../../../types/data"

export default function EditProduct ({product}: {product: Product | null }) {

    const updateProductWithId = product?.id ? updateProduct.bind(null, product.id) : async () => {};

    return( 
        <div className="w-full lg:w-9/12 xl:w-7/12 p-4 border-2 rounded-md flex flex-col gap-6">
            <form className="flex flex-col py-6" autoComplete="off" action={updateProductWithId} >
                <div className="flex flex-col gap-1 ">
                    <label>Nome do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md text-black" 
                        name="name"
                        placeholder="Nome"
                        type="text"
                        defaultValue={product?.title}
                    />
                    <label>Preço do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md text-black" 
                        name="price"
                        placeholder="Preço"
                        type="number" 
                        defaultValue={product?.price}
                    />
                    <label>Descrição do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md text-black" 
                        name="description"
                        placeholder="Descrição"
                        type="text"
                        defaultValue={product?.description || "Descrição não existe"}
                    />
                    <label>Imagem do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md text-black" 
                        name="image"
                        placeholder="Imagem"
                        type="text" 
                        defaultValue={product?.image}
                    />
                </div>
                <div className="w-full flex justify-end pt-8 pb-6">
                    <button className="w-full lg:w-1/2 xl:w-3/12 bg-sky-600 hover:bg-btncard rounded-md px-6 py-2">
                        Editar
                    </button>
                </div>
            </form>
        </div>
    )
}