import React from "react";
import Root from "./routes/root";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import ErrorPage from "./404";
import ProjectsSection from "./routes/sections/ProjectsSection";
import ContactSection from "./routes/sections/ContactSection";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/projects",
				element: <ProjectsSection />,
			},
			{
				path: "/contact",
				element: <ContactSection />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
