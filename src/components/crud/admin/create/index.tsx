"use client"

import { createProduct } from "../../../../../actions/admin/products/actions";

export default function CreateProduct () {
    return( 
        <div className="w-full lg:w-9/12 xl:w-7/12 p-4 border-2 rounded-md flex flex-col gap-6">
            <form className="flex flex-col py-6" autoComplete="off" action={createProduct}>
                <div className="flex flex-col gap-1">
                    <label>Nome do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md text-black" 
                        name="name"
                        placeholder="Nome"
                        type="text"
                    />
                    <label>Preço do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md text-black" 
                        name="price"
                        placeholder="Preço"
                        type="text" 
                    />
                    <label>Descrição do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md text-black" 
                        name="description"
                        placeholder="Descrição"
                        type="text" 
                    />
                    <label>Imagem do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md text-black" 
                        name="image"
                        placeholder="Imagem"
                        type="text" 
                    />
                </div>
                <div className="w-full flex justify-end pt-8 pb-6">
                    <button className="w-full lg:w-1/2 xl:w-3/12 bg-sky-600 hover:bg-btncard rounded-md px-6 py-2">
                        Criar
                    </button>
                </div>
            </form>
        </div>
    )
}