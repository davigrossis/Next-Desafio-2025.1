import Link from "next/link";
import Search from "../search";
import CardProduct from "./cardProduct";
import { Product } from "../../../types/data";
import Pagination from "../pagination";

export default function ProductPage ({products, count, totalPages}: {products: Product[], count: number, totalPages: number}) {
    return(


        <div className="w-full space-y-12 justify-items-center">
            <Search count={count}/>
            {count === 0 ? (
                <div className="w-full flex flex-col">
                    <span className="text-2xl font-extrabold">
                        Nenhuma publicação encontrada.
                    </span>
                    <span className="text-xl text-black/70">
                        Tente procurar por outra coisa, ou explore <Link href={"/produtos"}></Link>
                    </span>
                </div>
            ) : (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
                    {products.map((product, index) => (
                        <CardProduct key={index} product={product}/>
                    ))}                    
                </div>
            )}
            {totalPages > 1 && (
                <Pagination totalPages={totalPages}/>
            )}
        </div>
    )
}