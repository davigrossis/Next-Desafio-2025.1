import Contact from "@/components/contact";
import Introduction from "@/components/introduction";
import Mission from "@/components/mission";
import News from "@/components/news-cine";
import Popular from "@/components/popular";
import getPopularProducts from "../../actions/home/actions";
import getNewsProducts from "../../actions/home/newsProducts/actions";

export default async function Home() {

	const products = await getPopularProducts()
	const news = await getNewsProducts()

	return (
		<div>
			<Introduction />
			<Popular products={products}/>
			<News products={news}/>
			<Mission/>
			<Contact/>
		</div>

	)

}
