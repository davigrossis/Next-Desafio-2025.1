import Image from "next/image";
import CardMission from "./cardMission";

export default function Mission() {
    return (
        <div className="w-full flex justify-center bg-bg2 py-4">
            <div className="w-10/12 grid md:grid-cols-2 py-16 gap-4 items-stretch">

                <div className="flex flex-col gap-4">
                    <CardMission 
                        title="Missão" 
                        text="Oferecer aos fãs de cinema produtos exclusivos e de alta qualidade, proporcionando uma experiência única que transforma a paixão pelos filmes em algo tangível e colecionável."
                        src="/icons/target.png"
                    />
                    <CardMission 
                        title="Visão" 
                        text="Ser a referência global no mercado de produtos de filmes"
                        src="/icons/eye.png"
                    />
                </div>

                <div className="flex flex-col bg-bgcard p-4">
                    <div className="flex items-start">
                        <Image
                            src="/icons/gem.png"
                            alt="Valores"
                            width={120}
                            height={120}
                            className="max-h-12 max-w-12 p-2 lg:p-1 xl:p-0"
                        />
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl pl-2 pb-5 font-extrabold font-mont">
                            Valores
                        </h1>
                    </div>
                    <ul className="text-sm lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl pl-10 list-disc">
                        <li>Paixão pelo Cinema: Nosso amor por filmes nos inspira a selecionar os melhores produtos para os fãs.</li>
                        <li>Qualidade e Exclusividade: Garantimos produtos autênticos, duráveis e especiais para nossos clientes.</li>
                        <li>Atendimento Excepcional: Valorizamos cada cliente e buscamos oferecer a melhor experiência de compra.</li>       
                        <li>Inovação e Criatividade: Estamos sempre em busca de novas tendências e produtos diferenciados.</li>  
                        <li>Compromisso e Transparência: Atuamos com honestidade, respeito e dedicação em cada etapa do nosso negócio.</li>        
                    </ul>
                </div>
            </div>
        </div>
    );
}
