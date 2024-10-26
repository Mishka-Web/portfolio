// import React, { useEffect, useState } from 'react';
import Body from "./components/Body";
import { Helmet } from "react-helmet";

function App() {
	// const [posts, setPosts] = useState([]);

	// useEffect(() => {
	// 	fetch("http://localhost:1337/api/posts")
	// 		.then((response) => response.json())
	// 		.then((data) => setPosts(data));
	// }, []);

	return (
		<>
			<Helmet>
				<title>Portfolio | dev/richer</title>
				<meta name="description" content="dev/richer" />
				<link rel="canonical" href="https://devricher.com" />
				<meta property="og:title" content="dev/richer" />
				<meta property="og:description" content="dev/richer" />
			</Helmet>
			<Body />
		</>
	);
}

export default App;
