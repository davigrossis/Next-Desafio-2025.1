import EditProduct from "@/components/crud/admin/edit";
import DashboardTitle from "@/components/dashboard-title";
import { fetchProductById } from "../../../../../actions/admin/products/actions";

export default async function Page(
        {params}: {
            params: { id: string }
        }
) {

    const id = parseInt(params.id, 10)
    const product = await fetchProductById(id)

    return (
        <div className="w-full space-y-12 flex justify-center items-center min-h-screen">
            <div className="w-10/12 flex flex-col gap-10">
                <DashboardTitle title={`Editar Produto ${product?.title}`} description="Edite seu produto por aqui"/>
                <EditProduct product={product} />
            </div>
            
        </div>
    )
}