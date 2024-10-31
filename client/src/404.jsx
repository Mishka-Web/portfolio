import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page" className="flex flex-col gap-4 justify-center items-center h-screen">
			<h1 className="text-5xl">Oops!</h1>
			<p className="text-2xl">Sorry, an unexpected error has occurred.</p>
			<p className="text-xl">
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
