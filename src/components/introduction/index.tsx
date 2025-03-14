import Botao from "../botao";
import Image from 'next/image';

export default function Introduction (){
    return(
        <div className="relative w-full h-screen flex justify-center items-end pb-11 gap-6  bg-gradient-to-b from-transparent to-black">
            <Image 
                src='/planodefundo.jpg'
                alt="Plano de fundo"
                layout="fill"
                objectFit="cover"
                
                className="z-[-1]" 
            />
            <div className="text-center py-8 ">
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl pb-10 font-semibold">
                    Compre produtos dos seus filmes favoritos<br />Crie sua conta e acompanhe agora nossas promoções
                    <br />Últimos lançamentos e muito mais
                </h1>
                <Botao color="bgcard" text="Comece Agora" link="/login" />
            </div>
        </div>
    )
}
