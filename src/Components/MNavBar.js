import React from 'react';
import "./MNavBar.css";
import {Link, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export default function MNavBar({closeNav}) {
	const location = useLocation();

	return (
		<div className="mobile-nav-bar">
			<div className="mobile-nav-bar__close">
				<FontAwesomeIcon onClick={closeNav} icon={faTimes} size="3x" />
			</div>

			<div className="mobile-nav-bar__links">
				<Link className={location.pathname === "/menu" && "mobile-nav-bar__link-selected"} to="menu" onClick={closeNav}>
					menu
				</Link>

				<Link className={location.pathname === "/about-us" && "mobile-nav-bar__link-selected"} to="about-us" onClick={closeNav}>
					about us
				</Link>

				<Link className={location.pathname === "/contact-us" && "mobile-nav-bar__link-selected"} to="contact-us" onClick={closeNav}>
					contact us
				</Link>
			</div>
		</div>
	);
}

