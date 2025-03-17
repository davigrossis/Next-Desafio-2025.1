import Image from "next/image";
import { IndivualProduct } from "../../../types/data";

export default function IndividualPost({product}: {product: IndivualProduct | null}) {
        
    return(
        <div className="w-full flex flex-col my-auto lg:grid lg:grid-cols-8 gap-8">
            <div className="lg:col-span-4">
                <Image
                src={product?.image||'/funko.png'}
                alt="Placeholder"
                width={1920}
                height={1080}
                className="lg:h-[700px] object-cover aspect-video w-full rounded-xl"
                />
            </div>
            <div className="lg:col-span-4 lg:max-h-[700px] 3xl:max-h-max lg:px-4 overflow-auto flex flex-col gap-8 lg:gap-4">
                <div className="flex flex-wrap items-center gap-4 font-bold w-full border-b ">
                    <h1 className="font-mont text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl line-clamp-2">
                        {product?.title}
                    </h1>
                </div>
                <div className="flex gap-2 items-start">
                    <span className="pt-[0.2rem]">R$</span>
                    <span className="font-mont font-bold text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl">{product?.price}</span>
                </div>
                
                <p className="text-base 2xl:text-lg 3xl:text-xl text-justify">
                   {product?.description}
                </p>
            </div>
        </div>
    )
}