import {useState} from "react";
import "./ContactUs.css";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope, faStoreAlt} from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
	const [alert, setAlert] = useState({show: false, text: "", severity: "success"});
	const [nameInput, setNameInput] = useState("");
	const [noteInput, setNoteInput] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (nameInput !== "" && noteInput !== "") {
			setAlert({show: true, severity: "success", text: "Note sent successfully"});
		} else {
			setAlert({show: true, severity: "error", text: "You must fill all fields"});
		}
		setTimeout(() => {
			setNameInput("");
			setNoteInput("");
			setAlert((prev) => {
				return {...prev, show: false};
			});
		}, 2000);
	}

	return (
		<div className="page contact-us">
			<h1>Contact Us</h1>
			<div className="row">
				<div className="col-12 col-md-5 contact-us_form contact-us__row">
					<form onSubmit={handleSubmit}>
						<input value={nameInput} onChange={(e) => setNameInput(e.target.value)} type="text" placeholder="Full Name" />
						<textarea
							value={noteInput}
							onChange={(e) => setNoteInput(e.target.value)}
							type="text"
							placeholder="Go ahead, we are listening..."
							rows="10"
						/>
						<button type="submit">Submit</button>
					</form>
					<Collapse in={alert.show}>
						<Alert severity={alert.severity}>{alert.text}</Alert>
					</Collapse>
				</div>

				<div className="col-12 col-md-2 contact-us__row">
					<div className="contact-us__line"></div>
				</div>

				<div className="col-12 col-md-5 contact-us__row">
					<div className="contact-us__links">
						<a href="tel:+971835875" target="_blank">
							<FontAwesomeIcon icon={faPhone} />
							<span>Phone: +971-835-875</span>
						</a>
						<a href="mailto:PizzaPizza@gmail.com" target="_blank">
							<FontAwesomeIcon icon={faEnvelope} />
							<span>Email: PizzaPizza@gmail.com</span>
						</a>
						<a
							href="https://www.google.co.il/maps/place/%D7%A6%D7%A4%D7%A8%D7%99%D7%A8+3,+%D7%90%D7%95%D7%A8+%D7%99%D7%94%D7%95%D7%93%D7%94%E2%80%AD/@32.0277568,34.8726299,17z/data=!3m1!4b1!4m5!3m4!1s0x151d3566876fabd5:0xc697823564ecea5c!8m2!3d32.0277523!4d34.8704412"
							target="_blank">
							<FontAwesomeIcon icon={faStoreAlt} />
							<span>Address: Tzafrir 8, Or Yehuda</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
