export default function Navigation() {
	return (
		<ul className="flex w-full max-w-[55%] mx-auto justify-between items-center font-medium uppercase mt-[70px]">
			<li>
				<a className="text-primary-45 transition-all text-[1vw] line-through" href="/about">About</a>
			</li>
			<li>
				<a className="hover:text-primary-45 transition-all text-[1vw]" href="/projects">Projects</a>
			</li>
			<li>
				<a className="hover:text-primary-45 transition-all text-[1vw]" href="/contact">Contact</a>
			</li>
		</ul>
	);
}