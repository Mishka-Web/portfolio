export default function Header({ title }) {
	return (
		<header className="header flex items-center p-[21px_23px] left-0 top-0 absolute w-full h-[70px] z-50">
			<h1 className="text-xl tracking-[0.12em] font-normal">{title}</h1>
		</header>
	);
}
