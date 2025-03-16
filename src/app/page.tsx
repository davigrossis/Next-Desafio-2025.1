import Contact from "@/components/contact";
import Introduction from "@/components/introduction";
import Mission from "@/components/mission";
import News from "@/components/news-cine";
import Popular from "@/components/popular";
import getPopularProducts from "../../actions/home/actions";

export default async function Home() {

	const products = await getPopularProducts()

	return (
		<div>
			<Introduction />
			<Popular products={products}/>
			<News/>
			<Mission/>
			<Contact/>
		</div>

	)

}
