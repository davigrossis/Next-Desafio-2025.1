import Image from "next/image";
import Link from "next/link";

type ProdutoProps = {
    link: string;
    value: number;
    title: string;
    image: string;
}

export default function CardProduct({ link, value, title, image }: ProdutoProps) {
    return (
        <Link 
        href={'/'} 
        className="w-full lg:w-10/12 flex group ">
            <div className="w-full flex flex-col shadow-lg rounded-xl group-hover:shadow-2xl duration-300 overflow-hidden">
                <Image
                src={'/funko.png'}
                alt="Funko"
                width={1920}
                height={1080}
                className="max-w-full lg-max-w[450px] 2xl:max-w-[550px]"
                />
                <div className="flex flex-col justify-between gap-4 p-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="line-clamp-1 text-xl 2xl:text-2xl 3xl:text-3xl font-semibold">
                            Placeholder
                        </h1>
                        <div className="flex gap-4">
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <span>R$4000,00</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-1">
                                    <span>Categoria</span>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <p className="line-clamp-3 text-base 2xl:text-xl 3xl:text-2xl">
                        Placeholder Texto
                    </p> 
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm 2xl:text-lg 3xl:text-xl font-semibold uppercase break-words">
                            #categoria
                        </span>
                    </div>  
                </div>

            </div>
        </Link>
    );
}
