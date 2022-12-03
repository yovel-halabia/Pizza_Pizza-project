import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from "./Components/NavBar";
import MNavBar from "./Components/MNavBar";
import {Home, Menu, AboutUs, ContactUs, MakeOrder} from "./Pages/index";

function App() {
	const [navClick, setNavClick] = React.useState(false);
	const [location, setLocation] = React.useState("");

	function setNavClickTrue() {
		setNavClick(true);
	}
	function setNavClickFalse() {
		setNavClick(false);
	}

	function getLocation(location) {
		setLocation(location);
	}

	return (
		<div className="background">
			<NavBar setTrue={setNavClickTrue} />
			<Router>
				<Switch>
					<Route path="/contact-us">
						<ContactUs getLocation={getLocation} />
					</Route>
					<Route path="/about-us">
						<AboutUs getLocation={getLocation} />
					</Route>
					<Route path="/make-order">
						<MakeOrder />
					</Route>
					<Route path="/menu">
						<Menu getLocation={getLocation} />
					</Route>
					<Route path="/">
						<Home getLocation={getLocation} />
					</Route>
				</Switch>
			</Router>
			<MNavBar getLocation={location} navClick={navClick} setFalse={setNavClickFalse} />
		</div>
	);
}

export default App;
