import Image from "next/image";
import Link from "next/link";


type ProdutoProps = {
    link: string;
    value: number;
    title: string;
    image: string;
  }

export default function CardNews ({ link, value, title, image }: ProdutoProps) {
    return(
        <Link href={link} className="group block">
            <div className="flex bg-bgcard group-hover:shadow-2xl rounded-xl duration-300">
                <div className="flex flex-col lg:flex-row w-full rounded-xl shadow-xl">
                    <div className="flex overflow-hidden p-2">
                        <Image
                        src={image}
                        alt={title}
                        width={800}
                        height={800}
                        className="w-full h-full md:max-h-96 rounded-xl object-cover"
                        />
                    </div>
                    <div className="p-2 flex flex-col">
                        <span className="text-xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-semibold line-clamp-2 ">
                            R${value}
                        </span>
                        <h1 className="text-sm lg:text-lg 2xl:text-xl 3xl:text-2xl truncate whitespace-normal ">{title}</h1>
                    </div>
                </div>   
            </div>
            
        </Link>
    )
}

