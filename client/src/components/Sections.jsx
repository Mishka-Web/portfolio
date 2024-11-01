import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactSection from "../routes/sections/ContactSection";
import HomeSection from "../routes/sections/HomeSection";
import ProjectsSection from "../routes/sections/ProjectsSection";

export default function Sections() {
	return (
		<>
			<div className="p-[0px_40px_0px_86px] m-[80px_0px_40px]">
				<Routes>
					<Route
						path="/"
						element={
							<HomeSection
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
							<ProjectsSection
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
							<ContactSection
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
