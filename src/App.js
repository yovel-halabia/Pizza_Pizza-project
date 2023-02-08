import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import {Home, Menu, AboutUs, ContactUs, Order, CheckOut} from "./Pages/index";

export default function App() {
	return (
		<div className="background">
			<Router>
				<NavBar />
				<Switch>
					<Route path="/contact-us">
						<ContactUs />
					</Route>
					<Route path="/about-us">
						<AboutUs />
					</Route>
					<Route path="/order/:orderType/:itemID">
						<Order />
					</Route>
					<Route path="/menu">
						<Menu />
					</Route>
					<Route path="/checkout">
						<CheckOut />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
