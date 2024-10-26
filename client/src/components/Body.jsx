import BlockInfo from "./BlockInfo";
import BlockMain from "./BlockMain";
import Wrapper from "./Wrapper";

export default function Main() {
	return (
		<Wrapper>
			<BlockMain />
			<BlockInfo />
		</Wrapper>
	);
}
