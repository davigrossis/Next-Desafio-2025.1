export default function CreateProduct () {
    return( 
        <div className="w-full lg:w-9/12 xl:w-7/12 p-4 border-2 rounded-md flex flex-col gap-6">
            <form action="flex flex-col py-6" autoComplete="off">
                <div className="flex flex-col gap-1">
                    <label>Nome do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md" 
                        name="create-product"
                        placeholder="Nome"
                        type="text"
                    />
                    <label>Preço do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md" 
                        name="create-product"
                        placeholder="Preço"
                        type="number" 
                    />
                    <label>Descrição do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md" 
                        name="create-product"
                        placeholder="Descrição"
                        type="text" 
                    />
                    <label>Imagem do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md" 
                        name="create-product"
                        placeholder="Imagem"
                        type="text" 
                    />
                </div>
                <div className="w-full flex justify-end pt-8 pb-6">
                    <button className="w-full lg:w-1/2 xl:w-3/12 bg-sky-600 hover:bg-btncard rounded-md px-6 py-2">
                        Criar
                    </button>
                </div>
            </form>
        </div>
    )
}