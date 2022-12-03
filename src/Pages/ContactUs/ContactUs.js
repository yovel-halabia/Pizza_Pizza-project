import React from "react";
import "./ContactUs.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope, faStoreAlt} from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
	const [doneClass, setDoneClass] = React.useState("hidden");

	function handleSubmit(e) {
		e.preventDefault();
		setDoneClass("alert alert-success");
		setInterval(() => setDoneClass("hidden"), 2000);
	}

	return (
		<div className="cucontent">
			<h1>Contact Us</h1>
			<div className="row">
				<div className="col-12 col-md-5">
					<form>
						<input type="text" placeholder="Full Name" />
						<textarea type="text" placeholder="Go ahead, we are listening..." rows="10" />
						<button onClick={handleSubmit} type="submit">
							Submit
						</button>
					</form>
					<div className={doneClass} role="alert">
						the note sent successfully
					</div>
				</div>

				<div className="col-12 col-md-2">
					<div className="culine"></div>
				</div>

				<div className="col-12 col-md-5">
					<div className="cucontacts">
						<a href="tel:+971835875">
							<FontAwesomeIcon icon={faPhone} />
							<text>Phone: +971-835-875</text>
						</a>
						<br />
						<a href="mailto:PizzaPizza@gmail.com">
							<FontAwesomeIcon icon={faEnvelope} />
							<text>Email: PizzaPizza@gmail.com</text>
						</a>
						<br />
						<a href="https://www.google.co.il/maps/place/%D7%A6%D7%A4%D7%A8%D7%99%D7%A8+3,+%D7%90%D7%95%D7%A8+%D7%99%D7%94%D7%95%D7%93%D7%94%E2%80%AD/@32.0277568,34.8726299,17z/data=!3m1!4b1!4m5!3m4!1s0x151d3566876fabd5:0xc697823564ecea5c!8m2!3d32.0277523!4d34.8704412">
							<FontAwesomeIcon icon={faStoreAlt} />
							<text>Address: Tzafrir 8, Or Yehuda</text>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
