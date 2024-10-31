import Navigation from "./Navigation";
import Sections from "./Sections";

export default function BlockInfo() {
	return (
		<div className="flex flex-col bg-white text-black p-[0_0_24px_0] overflow-x-hidden">
			<Navigation />
			<Sections />
		</div>
	);
}
