import React from "react";

//Components
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//Home Component
const Home = () => {
	return (
	<div className="Container">
	<Navbar />
	<Jumbotron />
	<div className="card-container">
                <div className="row">
					<Card />
					<Card />
					<Card />
					<Card />
	</div>
	</div>
	<Footer />
	</div>
	);
};

export default Home;
