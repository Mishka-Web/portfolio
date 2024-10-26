export default function Wrapper({ children }) {
	return <div className="grid grid-cols-[1fr_0.75fr] w-full h-screen">{children}</div>;
}