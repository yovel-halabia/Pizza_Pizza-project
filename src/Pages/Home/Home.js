import React from "react";
import "./Home.css";
import {Link} from "react-router-dom";
import useIsMobile from "../../Hooks/useIsMobile";

export default function HomePage() {
	const isMobile = useIsMobile();

	return (
		<div className="home">
			{!isMobile ? (
				<div className="home__shape">
					<div>
						<span>
							“in the love
							<br />
							of pizza”
						</span>
					</div>

					<div>
						<Link to="menu">order now</Link>
					</div>
				</div>
			) : (
				<Link className="home__mobile-link link" to="menu">
					order now
				</Link>
			)}
		</div>
	);
}

