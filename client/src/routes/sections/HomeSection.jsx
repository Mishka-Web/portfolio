import Title from "../../components/Title";
import Slider from "../../components/Slider";

export default function HomePage({ title }) {
	return (
		<>
			<Title content={title} />
			<Slider />
		</>
	);
}
