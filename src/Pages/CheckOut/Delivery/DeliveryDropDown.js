import React from "react";
import "./DeliveryDropDown.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCar, faStoreAlt, faCaretDown} from "@fortawesome/free-solid-svg-icons";

export default function DeliveryDropDown({delivery, setDelivery}) {
	return (
		<div class="dropdown show delivery-drop-down">
			<button className="delivery-drop-down__button" data-toggle="dropdown">
				<FontAwesomeIcon icon={delivery?.icon} />
				{delivery?.name || "select your delivery"}
				<FontAwesomeIcon className="drop-icon" icon={faCaretDown} />
			</button>

			<div class="dropdown-menu delivery-drop-down__items">
				<div class="dropdown-item" onClick={() => setDelivery({name: "Delivery", icon: faCar, isSuccess: false})}>
					<FontAwesomeIcon icon={faCar} /> Delivery
				</div>
				<hr />
				<div class="dropdown-item" onClick={() => setDelivery({name: "Pickup", icon: faStoreAlt, isSuccess: true})}>
					<FontAwesomeIcon icon={faStoreAlt} /> Pickup
				</div>
			</div>
		</div>
	);
}
