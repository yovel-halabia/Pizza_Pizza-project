import {useState, useImperativeHandle, forwardRef} from "react";
import "./Delivery.css";
import DeliveryDropDown from "./DeliveryDropDown";
import AddressFields from "./AddressFields";

export default forwardRef(function Delivery(props, ref) {
	const [delivery, setDelivery] = useState({name: "", icon: "", isSuccess: false});

	useImperativeHandle(ref, () => {
		return {
			checkDelivery() {
				if (!delivery.isSuccess) return true;
				else return false;
			},
		};
	});

	return (
		<div className="delivery">
			<DeliveryDropDown delivery={delivery} setDelivery={setDelivery} />
			{delivery && (
				<>
					{delivery.name === "Pickup" && <span className="delivery__pickup">The order will be ready between 20-30 minutes after ordering</span>}
					{delivery.name === "Delivery" && <AddressFields delivery={delivery} setDelivery={setDelivery} />}
				</>
			)}
		</div>
	);
});
