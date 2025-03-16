import ProductPage from "@/components/product-page";
import { fetchFilteredPosts } from "../../../actions/produtos/actions";

export default async function Page ({
    searchParams,

}: {
    searchParams: {
        query?: string;
        page?: string;
    }
}) {

    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    const {products , count, totalPages} = await fetchFilteredPosts(query, currentPage)

    return(
        <div className="space-y-24 md:space-y-32 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto">
            <ProductPage products={products} count={count} totalPages={totalPages}/>
        </div>
    )
}