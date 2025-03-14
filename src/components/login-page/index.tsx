export default function LoginPage() {
    return (
        <div className="flex flex-col items-center min-h-screen justify-center">
            <div className="w-1/2 text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl py-10 font-semibold">
                Comece agora sua experiência no Cineboxd
            </div>

            <div className="w-full md:w-3/4 flex flex-col items-center lg:flex-row lg:items-stretch content-center gap-10">

                <div className="flex flex-col w-3/4 bg-bg2 gap-4 px-6 py-8">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-mont mb-8 ">Entrar</h2>
                    <input type="text" placeholder="Nome" className="p-3 bg-[#549ABB] rounded-lg placeholder-black placeholder-opacity-70" required/>
                    <input type="email" placeholder="Email" className="p-3 bg-[#549ABB] rounded-lg placeholder-black placeholder-opacity-70" required/>
                    <input type="password" placeholder="Senha" className="p-3 bg-[#549ABB] rounded-lg placeholder-black placeholder-opacity-70" required/>
                    <button className="w-full bg-bgcard text-white p-2 rounded">Entrar</button>
                </div>

                <div className="flex w-auto items-center justify-center text-lg font-mont font-semibold">OU</div>


                <div className="flex flex-col  w-3/4 bg-bg2 gap-4 px-6 py-8 ">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-mont  mb-8">Cadastre-se</h2>
                    <input type="text" placeholder="Nome" className="p-3 bg-[#549ABB] rounded-lg placeholder-black placeholder-opacity-70" required/>
                    <input type="email" placeholder="Email" className="p-3 bg-[#549ABB] rounded-lg placeholder-black placeholder-opacity-70" required/>
                    <input type="password" placeholder="Senha" className="p-3 bg-[#549ABB] rounded-lg placeholder-black placeholder-opacity-70" required/>
                    <input type="password" placeholder="Confirmar senha" className="p-3 bg-[#549ABB] rounded-lg placeholder-black placeholder-opacity-70" required/>
                    <button className="w-full bg-header text-white p-2 rounded">Cadastrar</button>
                </div>
            </div>
        </div>
    );
}
