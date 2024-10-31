import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";

export default function Sections() {
	return (
		<>
			<div className="p-[0px_40px_0px_86px] m-[80px_0px_40px]">
				<Routes>
					<Route
						path="/"
						element={
							<AboutPage
								title={
									<>
										<b>T</b>echnologies <b>U</b>sed
									</>
								}
							/>
						}
					/>
					<Route
						path="/projects"
						element={
							<ProjectsPage
								title={
									<>
										<b>P</b>rojects
									</>
								}
							/>
						}
					/>
					<Route
						path="/contact"
						element={
							<ContactPage
								title={
									<>
										<b>C</b>ontact
									</>
								}
							/>
						}
					/>
				</Routes>
			</div>
		</>
	);
}
