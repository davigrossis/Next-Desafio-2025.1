import Link from "next/link";
import { DeleteButton, EditButton, ViewButton } from "../buttons";
import { Product } from "../../../../types/data";


export default function ManageProductsTable ({products, count}: {products: Product[], count: number}) {
    return(
        <div className="w-full p-4 border-2 rounded-md flex flex-col gap-4">
            <div className="flex flex-wrap items-center w-full justify-between">
                <span className="text-base self-end">
                    99 produtos encontrados...
                </span>
                <Link
                href={'/admin/create'}
                >
                    <button className="py-2 w-full md:w-52 px-6 border-2 rounded-md bg-sky-600 hover:bg-btncard">
                        + Criar Categoria
                    </button>
                    
                </Link>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-base text-left">
                    <thead className="uppercase font-oswald ">
                        <tr className="bg-bg2">
                            <th scope="col" className="px-6 py-3">
                                Nome do Produto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Preço
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descrição
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                        <tr key={index} className="border-b border-b-sky-950 bg-sky-600 hover:bg-sky-800">
                            <th className="px-6 py-6 font-medium">
                                {product?.title}
                            </th>
                            <th className="px-6 py-6 font-medium">
                                R${product?.price}
                            </th>
                            <th className="px-6 py-6 font-medium">
                                {product?.description 
                                ? product.description.length > 30 ? product.description.slice(0,30) + '...'
                                : product.description
                                : 'Descrição não existente' }
                            </th>
                            <th className="px-6 py-6 flex items-center gap-4 text-black">
                                <ViewButton id={product?.id}/>
                                <EditButton id={product?.id}/>
                                <DeleteButton id={product?.id}/>
                            </th>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}