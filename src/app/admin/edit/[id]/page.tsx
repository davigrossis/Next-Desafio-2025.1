import EditProduct from "@/components/crud/admin/edit";
import DashboardTitle from "@/components/dashboard-title";

export default function Page() {
    return (
        <div className="w-full space-y-12 flex justify-center items-center min-h-screen">
            <div className="w-10/12 flex flex-col gap-10">
                <DashboardTitle title="Editar Produto" description="Edite seu produto por aqui"/>
                <EditProduct/>
            </div>
            
        </div>
    )
}