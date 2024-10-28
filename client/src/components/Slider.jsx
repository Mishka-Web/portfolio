import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

import arrIcon from "../assets/images/icons/arrow.svg";

export default function Slider() {
	const navigationNextRef = useRef(null);
	const navigationPrevRef = useRef(null);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:1337/api/tech-cards/?populate=*")
			.then((response) => setCards(response.data.data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<Swiper
			spaceBetween={24}
			slidesPerView={"auto"}
			freeMode={true}
			mousewheel={true}
			speed={800}
			autoplay={{
				delay: 7500,
				disableOnInteraction: false,
			}}
			modules={[Navigation, Autoplay, Mousewheel]}
			navigation={{
				prevEl: navigationPrevRef.current,
				nextEl: navigationNextRef.current,
			}}
		>
			{cards?.map(({ id, link, name, accentColor, image }) => (
				<SwiperSlide key={id}>
					{({ isActive }) => (
						<a
							href={link}
							target="_blank"
							rel="noreferrer"
							className={`h-[40.5vh] w-[17.75vw] min-w-[32vh] p-6 rounded-3xl flex flex-col items-center gap-4 justify-center text-center transition-all duration-500`}
							style={{
								boxShadow: `0 6px 24px 0 ${accentColor}40`,
							}}
						>
							{image && (
								<img
									className={`w-[60%] h-[13vh] object-contain aspect-square transition-all duration-500`}
									src={"http://localhost:1337" + image.url}
									alt=""
								/>
							)}
							<p
								className={`text-2xl font-semibold transition-all duration-500 ${
									isActive ? "opacity-100" : "opacity-65"
								}`}
								style={{
									color: accentColor,
								}}
							>
								{name}
							</p>
						</a>
					)}
				</SwiperSlide>
			))}
			<div className="flex items-center flex-wrap gap-[1vw] mt-[6.5vh]">
				<button
					ref={navigationPrevRef}
					type="button"
					className="p-[0.5vw] inline-flex items-center justify-center rounded-full aspect-square slider__btn-prev slider__btn shadow-[0_2px_24px_0_rgba(0,0,0,0.15)] disabled:opacity-30 transition-all duration-500"
				>
					<img
						className="w-[1.75vw] pointer-events-none select-none"
						src={arrIcon}
						alt="arrow-left"
					/>
				</button>
				<button
					ref={navigationNextRef}
					type="button"
					className="p-[0.5vw] inline-flex items-center justify-center rounded-full aspect-square slider__btn-prev slider__btn shadow-[0_2px_24px_0_rgba(0,0,0,0.15)] disabled:opacity-30 transition-all duration-500"
				>
					<img
						className="w-[1.75vw] rotate-180 pointer-events-none select-none"
						src={arrIcon}
						alt="arrow-right"
					/>
				</button>
			</div>
		</Swiper>
	);
}
