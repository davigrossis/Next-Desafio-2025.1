import Image from "next/image";
import Link from "next/link";

type ProdutoProps = {
    link: string;
    value: number;
    title: string;
    image: string;
  }

export default function CardPopular ({ link, value, title, image }: ProdutoProps) {
    return(
        <Link href={link} className="group">
            <div className="flex bg-bgcard group-hover:shadow-[0px_4px_10px_rgba(255,255,255,0.5)] rounded-xl duration-300">
                <div className="flex w-full flex-col rounded-xl shadow-[0px_4px_10px_rgba(255,255,255,0.2)]">
                    <div className="overflow-hidden rounded-t-xl">
                        <Image
                        src={image}
                        alt={title}
                        width={800}
                        height={800}
                        className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-2 flex flex-col justify-between">
                        <span className="text-xl 2xl:text-2xl 3xl:text-3xl font-semibold line-clamp-2 ">
                            R${value}
                        </span>
                        <h1 className=" text-sm lg:text-lg 2xl:text-xl 3xl:text-2xl truncate ">{title}</h1>
                    </div>
                </div>   
            </div>
            
        </Link>
    )
}

