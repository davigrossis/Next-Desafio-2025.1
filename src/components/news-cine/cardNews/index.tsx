import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../../types/data";


type CardNewsProps = {
    product: Product
  }

export default function CardNews ({ product }: CardNewsProps) {
    return(
        <Link href={`/produto/${product.id}`} className="group block">
            <div className="flex bg-bgcard group-hover:shadow-2xl rounded-xl duration-300">
                <div className="flex flex-col w-full rounded-xl shadow-xl">
                    <div className="flex overflow-hidden p-2">
                        <Image
                        src={product.image || '/funko.png'}
                        alt={product.title || 'Imagem'}
                        width={800}
                        height={800}
                        className="max-h-40 md:max-h-96 md:max-w-96 2xl:max-h-[450px] 2xl:max-w-[450px] rounded-xl object-cover"
                        />
                    </div>
                    <div className="p-2 flex flex-col">
                        <span className="text-xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold line-clamp-2 ">
                            R${product.price}
                        </span>
                        <h1 className="text-sm lg:text-lg 2xl:text-xl 3xl:text-2xl truncate whitespace-normal font-bold ">{product.title}</h1>
                        <p>{product.description}</p>
                    </div>
                </div>   
            </div>
            
        </Link>
    )
}

