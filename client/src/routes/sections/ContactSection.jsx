import Title from "../../components/Title";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiURL } from "../../lib/constants";

export default function ContactPage({ title }) {
	const [socialLinks, setContact] = useState([]);

	useEffect(() => {
		axios
			.get(`${apiURL}/api/contact/?populate=*`)
			.then((response) => setContact(response.data.data.socialLinks))
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<Title content={title} />
			<ul className="list-disc list-inside">
				{socialLinks.map((item) => (
					<li className="mb-6 list-item text-xl" key={item.id}>
						<a className="inline-flex hover:text-primary transition-all" href={item.target} rel="noreferrer" target="_blank">
							{item.text}
						</a>
					</li>
				))}
			</ul>
		</>
	);
}
