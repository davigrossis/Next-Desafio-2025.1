import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function ContactPage (){
    return(
        <div className="w-full lg:w-10/12  mx-auto my-auto flex px-2 justify-center">
            <div className=" flex flex-col items-center w-11/12 md:grid md:grid-cols-2 py-10 md:items-stretch ">
                <div className="flex flex-col bg-bg2 rounded-t-xl w-full md:rounded-none md:rounded-l-xl px-6 py-8 gap-10">
                    <div className="flex flex-col gap-4 ">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-mont">Fale conosco</h1>
                        <p className="text-sm lg:text-lg 2xl:text-xl 3xl:text-2xl">
                        Envie-nos uma mensagem e responderemos o mais breve possível<br/>
                        Aguardamos o seu contato!
                        </p>
                    </div>
                    <form className="flex flex-col gap-4">
                        <p className="mb-[-0.8rem] pl-1 text-xs">Nome</p>
                        <input type="text" placeholder="Nome" className="p-3 bg-[#549ABB] rounded-lg placeholder-black placeholder-opacity-70" required/>
                        <p className="mb-[-0.8rem] pl-1 text-xs">Email</p>
                        <input type="email" placeholder="Email" className="p-3 bg-[#549ABB] rounded-lg placeholder-black placeholder-opacity-70" required/>
                        <p className="mb-[-0.8rem] pl-1 text-xs">Assunto</p>
                        <input type="text" placeholder="Assunto" className="p-3 bg-[#549ABB] rounded-lg placeholder-black placeholder-opacity-70" required/>
                        <p className="mb-[-0.8rem] pl-1 text-xs">Mensagem</p>
                        <textarea placeholder="Mensagem" rows={5} className="p-3 bg-[#549ABB] rounded-lg placeholder-black placeholder-opacity-70 resize-none" required/>
                    </form>
                    <div className="flex justify-end  ">
                        <button className="bg-bgcard py-4 px-4 font-oswald uppercase rounded-xl text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-4xl">Enviar</button>
                    </div>
                </div>

                <div className="flex flex-col w-full bg-white rounded-b-xl md:rounded-r-xl md:rounded-none px-6 py-8 gap-6">
                    <div className="flex">
                        <span className="flex gap-2"> <Instagram className="h-10 w-10 text-black" /> <Facebook className="h-10 w-10 text-black"/> <Twitter className="h-10 w-10 text-black"/></span>
                    </div>
                    <div className="flex flex-col text-black gap-3">
                        <span className="flex items-center gap-2 text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl"><Phone/> +55 (XX) XXXXX-XXXX</span>
                        <span className="flex items-center gap-2 text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl"><Mail/> contatocineboxd@gmail.com</span>
                        <span className="flex items-center gap-2 text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl"><MapPin/> XXXXXXXXXXXXXXXXX, XXXX/XX
                        XXXXXXX</span>
                    </div>
                    <div className="w-full h-60 md:h-full aspect-[16/9]">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.0972624500932!2d-43.37452402313821!3d-21.776496398458892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b9e2bea807b%3A0x7ac85ca76e3d3d1d!2sCode%20Empresa%20Jr.%20de%20Computa%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1741994113920!5m2!1spt-BR!2sbr" 
                            className="w-full h-full border-0"
                            style={{border:0}}
                            loading="lazy" 
                        >       
                    </iframe>
                    </div>
                </div>

            </div>

        </div>
    )
}