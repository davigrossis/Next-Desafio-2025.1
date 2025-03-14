import Image from "next/image";

type CardMissionProps = {
    title: string,
    text: string,
    src: string,
}

export default function CardMission ({ title , text , src}: CardMissionProps) {
    return(
        <div className="flex h-full bg-bgcard p-4">
            <div>
                <Image
                src={src}
                alt={title}
                width={120}
                height={120}
                className="max-h-12 max-w-12 p-2 lg:p-1 xl:p-0"
                />
            </div>
            <div>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl pl-2 pb-5 font-extrabold font-mont">{title}  
                </h1>
                
                <p className="text-sm lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl pl-2">{text}</p>
            </div>
           
                        
        </div>
    )
}