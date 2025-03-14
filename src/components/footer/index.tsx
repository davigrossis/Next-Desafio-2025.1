import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return(
        <div className="bg-footer w-full mt-24 pt-6 pb-16 min-h-[250px] flex justify-around items-center text-white md:flex flex-col lg:flex-row px-8 gap-6">
            <div className="flex flex-col text-left gap-5 items-center lg:items-start">
                <span className="text-[1.5rem] font-semibold font-oswald">Sobre</span>
                <span className="text-[1rem] inline-block">Lorem ipsum dolor sit amet, consectetur a<br />
                    dipiscing elit. Sed felis neque, malesuada a nibh et, <br />
                    varius tortor. In vel rutrum neque. Nunc congue <br />
                    eget nibh lacinia, eget convallis dolor vestibulum </span>
            </div>

            <div className="flex flex-col font-semibold font-oswald gap-2">
                <span className="text-[1.5rem] pb-2">Produtos</span>
                <span className="text-[1rem] ">Filmes</span>
                <span className="text-[1rem] ">Desenhos</span>
                <span className="text-[1rem] ">Series de TV</span>
                <span className="text-[1rem] ">Animes</span>
            </div>

            <div className="flex flex-col items-center gap-5">
                <span className="flex gap-8"> <Instagram className="h-10 w-10"/> <Facebook className="h-10 w-10"/> <Twitter className="h-10 w-10"/> <Youtube className="h-10 w-10"/>  </span>
                <span className="text-center">Fique por dentro das nossas redes sociais e <br /> nao perca nada</span>
                <span className="text-center">@Cineboxd <br /> @Cineboxd_ecommerce</span>

            </div>

        </div>
    )
}