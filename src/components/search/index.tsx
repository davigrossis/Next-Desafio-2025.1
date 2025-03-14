import { SearchIcon } from "lucide-react"

type Search ={
    count: number
}


export default function Search({count} : Search) {
    return(
        <form
        className="flex w-full lg:w-10/12"
        id="search"
        autoComplete="off"
        >
            <div className="flex flex-col w-full gap-2 my-10">
                <div className="relative flex items-center w-full">
                    <SearchIcon className="w-7 h-7 absolute text-black/50 left-4"/>
                    <input
                    id="search-input"
                    name="search-input"
                    type="text"
                    placeholder="| Pesquise o que procura..."
                    className="w-full rounded-xl px-16 py-6 text-black border border-black/50 transition-all duration-300 font-mont"
                    />
                </div>
                <span className="text-white/70">Total de {count} publicações encontradas.</span>
            </div>   
        </form>
    )
}