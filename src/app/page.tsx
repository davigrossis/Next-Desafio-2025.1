import Contact from "@/components/contact";
import Introduction from "@/components/introduction";
import Mission from "@/components/mission";
import News from "@/components/news-cine";
import Popular from "@/components/popular";

export default function Home() {
	return (
		<div>
			<Introduction />
			<Popular/>
			<News/>
			<Mission/>
			<Contact/>
		</div>

	)

}
