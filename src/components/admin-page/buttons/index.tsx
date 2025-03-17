'use client'

import Link from "next/link"
import { deleteProduct } from "../../../../actions/admin/products/actions"

export function EditButton({id} : { id: number | undefined }) {
    return(
        <Link
        href={`/admin/edit/${id}`}
        className="h-6">
            <button className="font-medium text-cyan-400 hover:underline">
                Editar
            </button>
        </Link>
    )
} 

export function DeleteButton({id} : { id: number | undefined }) {
    return(
        <button onClick={() => deleteProduct(id)} className="font-medium text-red-600 hover:underline">
            Deletar
        </button>
    )
} 

export function ViewButton({id} : { id: number | undefined }) {
    return(
        <Link
        href={`/admin/visualizar/${id}`}
        className="h-6">
            <button className="font-medium text-cyan-200 hover:underline">
                Visualizar
            </button>
        </Link>
    )
} 