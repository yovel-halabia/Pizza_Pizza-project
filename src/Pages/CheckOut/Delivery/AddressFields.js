import {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";
import "./AddressFields.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

export default function AddressFields({delivery, setDelivery}) {
	const [addressName, setAddressName] = useState(null);
	const [showAddressFields, setShowAddressFileds] = useState(false);
	const [isErr, setIsErr] = useState(false);
	const [cityInput, setCityInput] = useState("");
	const [streetInput, setStreetInput] = useState("");
	const [floorInput, setFloorInput] = useState("");

	function handleClick() {
		if (cityInput === "" || streetInput === "" || floorInput === "") {
			setIsErr(true);
		} else {
			setAddressName(`${cityInput} ${streetInput}, ${floorInput}`);
			setShowAddressFileds(false);
			setDelivery({...delivery, isSuccess: true});
			setIsErr(false);
		}
	}

	return (
		<div className="address-fields">
			<button onClick={() => setShowAddressFileds(!showAddressFields)}>
				<div className="address-fields__icon">
					<FontAwesomeIcon icon={faMapMarkerAlt} />
				</div>
				{addressName ? addressName : "select address"}
			</button>
			{showAddressFields && (
				<>
					<div className="address-fields__fields">
						<TextField onChange={(e) => setCityInput(e.target.value)} label="city" margin="normal" variant="outlined" />
						<TextField onChange={(e) => setStreetInput(e.target.value)} label="street" margin="normal" variant="outlined" />
						<TextField onChange={(e) => setFloorInput(e.target.value)} label="floor/department/entery" margin="normal" variant="outlined" />
					</div>
					<Collapse in={isErr}>
						<Alert severity="error">you must fill all fields</Alert>
					</Collapse>
					<button onClick={handleClick}>OK</button>
				</>
			)}
		</div>
	);
}
