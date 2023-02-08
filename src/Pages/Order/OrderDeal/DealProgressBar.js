import React from "react";
import "./DealProgressBar.css";
import {items} from "../../../data";

export default function DealProgressBar({itemID, orderPosition, itemsLength}) {
	return (
		<div className="deal-progress-bar">
			{items[itemID]?.items?.map((itemName) => (
				<div>{itemName}</div>
			))}
			<div className="deal-progress-bar__progress" style={{width: orderPosition * (100 / itemsLength) + "%"}}></div>
		</div>
	);
}
