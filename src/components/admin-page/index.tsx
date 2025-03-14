import ManageProductsTable from "./manage-products";

export default function AdminPage() {
    return(
        <div className="w-full flex flex-col justify-center my-auto gap-10">
            <div className="flex flex-col gap-2 items-center text-center ">
                <h1 className="font-mont  text-center text-4xl xl:text-5xl 2xl:text-6xl font-extrabold">
                    Gerenciamento de produtos
                </h1>
                <p className="text-xl 2xl:text-2xl 3xl:text-3xl">Gerencie seus produtos aqui!</p>
            </div>
            <div>
                <ManageProductsTable/>
            </div>
            
        </div>
    )
}