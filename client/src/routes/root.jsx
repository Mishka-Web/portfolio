import BlockInfo from "../components/BlockInfo";
import BlockMain from "../components/BlockMain";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useEffect, useState } from "react";
import favicon from "../assets/images/icons/favicon.ico";
import { apiURL } from "../lib/constants";

export default function Root() {
	const [seo, setSeo] = useState([]);

	useEffect(() => {
		axios
			.get(`${apiURL}/api/main`)
			.then((response) => setSeo(response.data.data));
	}, []);

	return (
		<>
			<Helmet>
				<title>{seo.title}</title>
				<meta name="description" content={seo.desc} />
				<meta property="og:title" content={seo.title} />
				<meta property="og:description" content={seo.desc} />
				<meta property="og:image" content={favicon} />
				<link rel="icon" href={favicon} />
				<link rel="apple-touch-icon" href={favicon} />
				<meta name="theme-color" content="#ffffff" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Helmet>
			<div className="grid grid-cols-[1fr_0.9fr] w-full h-screen">
				<BlockMain />
				<BlockInfo />
			</div>
		</>
	);
}
