import profileImgSrc from "../assets/images/me.jpg";
import bg from "../assets/images/bg.png";
import Header from "./Header";

export default function BlockMain() {
	return (
		<div className="flex flex-col h-screen text-center items-center justify-end relative">
			<Header />
			<div className="flex w-full pt-0 p-6 pb-[86px] z-10 flex-col items-center gap-[55px]">
				<img
					className="logo max-w-[50%] pointer-events-none select-none z-30 w-full h-full rounded-full aspect-square object-contain"
					src={profileImgSrc}
					alt=""
				/>
				<div className="flex flex-col gap-[25px] text-center">
					<h2 className="text-[31px] text-white-65 font-normal">
						Hey! this is <b className="text-primary">Richer,</b>
					</h2>
					<p className="text-2xl font-light text-white-50">
						I’m a Web Developer based in Yekaterinburg
					</p>
				</div>
			</div>
			<img
				className="w-full h-auto pointer-events-none select-none absolute bottom-0 mix-blend-multiply bg-transparent z-0"
				src={bg}
				alt=""
			/>
		</div>
	);
}
