import {useState} from "react";
import "./NavBar.css";
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faBars} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";

import useIsMobile from "../Hooks/useIsMobile";
import MNavBar from "./MNavBar";

export default function NavBar() {
	const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
	const isMobile = useIsMobile();

	return (
		<>
			<div className="nav-bar">
				<Link to="/">
					<img className="nav-bar__logo" src={logo} alt="" />
				</Link>
				{!isMobile ? (
					<>
						<div className="nav-bar__links">
							<Link to="menu">menu</Link>
							<Link to="about-us">about us</Link>
							<Link to="contact-us">contact us</Link>
						</div>
						<div className="nav-bar__phone">
							<a href="tel:971-835-875" target="_blank">
								<FontAwesomeIcon icon={faPhone} />
								<span>+971-835-875</span>
							</a>
						</div>
					</>
				) : (
					<div className="nav-bar__hamburger">
						<FontAwesomeIcon onClick={() => setMobileNavIsOpen(true)} icon={faBars} color="white" size="3x" />
					</div>
				)}
			</div>
			{mobileNavIsOpen && <MNavBar closeNav={() => setMobileNavIsOpen(false)} />}
		</>
	);
}
