import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact () {
    return(
        <div className="w-10/12 mx-auto flex flex-col flex-wrap gap-6 justify-center content-center py-12">
            <div className="flex flex-col gap-4 content-center">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold font-mont text-black">
                    Fale conosco
                </h1>
                <p className="text-sm lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-black ">
                    Envie-nos uma mensagem e responderemos o mais breve possível. Aguardamos o seu contato!
                </p>
            </div>
            
            <div className="flex justify-center">
                <Link  href='/contato'className="flex gap-2 items-center font-semibold border-solid border-2 border-black rounded-xl duration-200 hover:bg-white uppercase bg-bgcard font-oswald px-4 py-2 text-black">
                    <h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl  ">
                        Contato 
                    </h1>
                    <ArrowRight className="h-5 w-5 lg:h-8 lg:w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 3xl:h-14 3xl:w-14"/>
                </Link>
            </div>

        </div>
    )
}