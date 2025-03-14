import CreateProduct from "@/components/crud/admin/create";
import DashboardTitle from "@/components/dashboard-title";

export default function Page() {
    return (
        <div className="w-full space-y-12 flex justify-center items-center min-h-screen">
            <div className="w-10/12 flex flex-col gap-10">
                <DashboardTitle title="Criar Produto" description="Crie um novo produto por aqui"/>
                <CreateProduct/>
            </div>
            
        </div>
    )
}