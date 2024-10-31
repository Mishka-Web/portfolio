import { NavLink } from "react-router-dom";

export default function Navigation() {
	const navLinks = [
		{
			name: "About",
			link: "/",
		},
		{
			name: "Projects",
			link: "/projects",
		},
		{
			name: "Contact",
			link: "/contact",
		},
	];

	return (
		<ul className="flex w-full max-w-[55%] mx-auto justify-between items-center font-medium uppercase mt-[70px]">
			{navLinks.map(({ name, link }) => (
				<li key={name}>
					<NavLink
						className={({ isActive }) =>
							isActive
								? "text-primary-45 transition-all line-through text-[1vw]"
								: "hover:text-primary-45 transition-all text-[1vw]"
						}
						to={link}
					>
						{name}
					</NavLink>
				</li>
			))}
		</ul>
	);
}
