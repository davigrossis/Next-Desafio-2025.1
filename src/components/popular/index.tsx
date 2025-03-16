import { Product } from "../../../types/data";
import CardPopular from "./cardPopular";

type CardPopularProps ={
    products: Product[]
} 

export default function Popular ({products}: CardPopularProps)  {
    return(
        <div className="w-full flex flex-col bg-bg2">
            <div className="w-10/12 mx-auto py-12">
                 <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    {products.map((product, index) => (
                        <CardPopular key={index} product={product} />
                    ))}
                    
                    
                </div>
                <div className="text-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl pt-10 pb-10 font-extrabold">
                        Alguns dos produtos mais vendidos da nossa loja
                    </h1>
                </div>
            </div>
           
        </div>
    )
}

