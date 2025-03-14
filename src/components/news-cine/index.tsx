import { ChevronRight, ChevronLeft } from "lucide-react";
import CardNews from "./cardNews";
import Botao from "../botao";

export default function News () {
    return(
        <div className="w-full flex justify-center">
            <div className="w-10/12 mx-auto py-12">
                <div className="grid grid-cols-6 justify-center items-center">
                    <div className="place-items-start"> <button><ChevronLeft className="w-full h-40"/></button> </div>
                    <div className="col-span-4 py-8 content-center">
                        <CardNews link="/produto/1" value={199.99} title="Funko popFunko popFunko popFunkoopFunko pop ddasdasdasaasdasdasdas" image="/funko.png"/>
                    </div>
                    <div className="place-items-end"><button><ChevronRight className="w-full h-40" /></button> </div>
                   
                    
                </div>
                <div className="text-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl py-10 text-black font-extrabold">
                        Alguns dos nossos últimos lançamentos
                    </h1>
                    <Botao color="bgcard" text="Veja Mais" link="/produtos"/>
                </div>
                
            </div>
           
        </div>
    )
}

