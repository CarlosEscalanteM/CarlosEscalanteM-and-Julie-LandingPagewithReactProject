import React from "react";

//Components
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";

//Home Component
const Home = () => {
	return (
	<div className="Container">
	<Navbar />
	<Jumbotron />
	</div>
	);
};

export default Home;
