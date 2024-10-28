import Navigation from "./Navigation";
import Title from "./Title";
import Sections from "./Sections";
import Slider from "./Slider";

export default function BlockInfo() {
	return (
		<div className="flex flex-col bg-white text-black p-[0_0_24px_0] overflow-x-hidden">
			<Navigation />
			<Sections>
				<Title content={(<><b>T</b>echnologies <b>U</b>sed</>)} />
				<Slider />
			</Sections>
		</div>
	);
}
