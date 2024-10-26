import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import nextIcon from "../assets/images/icons/next.svg";
import tsIcon from "../assets/images/icons/ts.svg";

export default function Slider() {
	return (
		<Swiper
			spaceBetween={24}
			slidesPerView={"auto"}
			freeMode={true}
			speed={600}
			mousewheel={true}
			navigation={{
				prevEl: ".slider__btn-prev",
				nextEl: ".slider__btn-next",
			}}
		>
			<SwiperSlide>
				<div className="h-[400px] aspect-[3/4] p-6 rounded-3xl flex flex-col items-center gap-4 justify-center text-center shadow-[0_6px_32px_0_rgba(0,0,0,0.10)] hover:shadow-[0_12px_32px_0_rgba(0,0,0,0.2)] transition-shadow duration-300">
					<img
						className="w-[55%] aspect-square"
						src={nextIcon}
						alt=""
					/>
					<p className="text-xl font-semibold">Next.js</p>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="h-[400px] aspect-[3/4] p-6 rounded-3xl flex flex-col items-center gap-4 justify-center text-center shadow-[0_6px_32px_0_rgba(0,0,0,0.10)] hover:shadow-[0_12px_32px_0_#5597f265] transition-shadow duration-300">
					<img
						className="w-[55%] aspect-square"
						src={tsIcon}
						alt=""
					/>
					<p className="text-xl font-semibold text-primary">TypeScript</p>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="h-[400px] aspect-[3/4] p-6 rounded-3xl flex flex-col items-center gap-4 justify-center text-center shadow-[0_6px_32px_0_rgba(0,0,0,0.10)] hover:shadow-[0_12px_32px_0_rgba(0,0,0,0.2)] transition-shadow duration-300">
					<img
						className="w-[55%] aspect-square"
						src={nextIcon}
						alt=""
					/>
					<p className="text-xl font-semibold">Next.js</p>
				</div>
			</SwiperSlide>
		</Swiper>
	);
}
