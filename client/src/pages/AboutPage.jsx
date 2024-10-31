import Title from "../components/Title";
import Slider from "../components/Slider";

export default function AboutPage({ title }) {
	return (
		<>
			<Title content={title} />
			<Slider />
		</>
	);
}
