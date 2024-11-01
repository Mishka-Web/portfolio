import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import { apiURL } from "../lib/constants";

export default function BlockMain() {
	const [desc, setDesc] = useState([]);

	useEffect(() => {
		axios
			.get(`${apiURL}/api/description/?populate=*`)
			.then((response) => setDesc(response.data.data));
	}, []);

	return (
		<div className="flex flex-col h-screen text-center items-center justify-center relative">
			<Header title={desc.heading ?? "DEV/RICHER"} />
			<div className="flex w-full p-6 py-0 z-10 flex-col items-center gap-[4vh] mt-[15vh] mb-[5vh]">
				{desc.image && (
					<img
						className="logo max-w-[75%] max-h-[55vh] pointer-events-none select-none z-30 rounded-full aspect-square object-contain"
						src={apiURL + desc.image.url}
						alt=""
					/>
				)}
				<div className="flex flex-col gap-[1.5vh] text-center">
					{desc.title && (
						<div className="text-[1.5vw] text-white-65 font-normal title">
							<ReactMarkdown>{desc.title}</ReactMarkdown>
						</div>
					)}
					{desc.subtitle && (
						<div className="text-[1.1vw] font-light text-white-50 text--select">
							<ReactMarkdown>{desc.subtitle}</ReactMarkdown>
						</div>
					)}
				</div>
			</div>
			{desc.background && (
				<img
					className="w-full h-auto pointer-events-none select-none absolute bottom-0 mix-blend-multiply bg-transparent z-0"
					src={apiURL + desc.background.url}
					alt=""
				/>
			)}
		</div>
	);
}
