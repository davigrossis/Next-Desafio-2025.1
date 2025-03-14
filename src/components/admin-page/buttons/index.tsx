import { Edit2, Eye, Trash2 } from "lucide-react"
import Link from "next/link"

export function EditButton({id} : { id: number}) {
    return(
        <Link
        href={`/admin/manage/products/edit/${id}`}
        className="h-6">
            <button className="font-medium text-cyan-400 hover:underline">
                Editar
            </button>
        </Link>
    )
} 

export function DeleteButton({id} : { id: number}) {
    return(
        <button className="font-medium text-red-600 hover:underline">
            Deletar
        </button>
    )
} 

export function ViewButton({id} : { id: number}) {
    return(
        <button className="font-medium text-cyan-100 hover:underline">
            Visualizar
        </button>
    )
} 