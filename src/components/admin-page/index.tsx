import ManageProductsTable from "./manage-products";

export default function AdminLayout() {
    return(
        <div className="w-full flex flex-col justify-center my-auto gap-10">
            <div className="flex flex-col gap-2 items-center ">
                <h1 className="font-mont text-4xl font-extrabold">
                    Gerenciamento de produtos
                </h1>
                <p>Gerencie seus produtos aqui!</p>
            </div>
            <div>
                <ManageProductsTable/>
            </div>
            
        </div>
    )
}