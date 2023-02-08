import {useState, useEffect, useRef} from "react";
import "./OrderDrink.css";

import {items} from "../../../data.js";

import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";

export default function OrderDrink({index, handleDone, item}) {
	const [chosenItemIndex, setChosenItemIndex] = useState(null);
	const [chosenItem, setChosenItem] = useState(null);
	const [alertMessage, setAlertMessage] = useState(null);
	const itemsRef = useRef([]);

	useEffect(() => {
		if (item) {
			setChosenItemIndex(item.index);
			setChosenItem({...item});
		}
	}, [item]);

	useEffect(() => {
		if (itemsRef.current.length > 0 && chosenItemIndex !== null) {
			itemsRef.current.forEach((item) => item.classList.remove("order-drink__big-img"));
			itemsRef.current[chosenItemIndex]?.classList.add("order-drink__big-img");
		}
	}, [chosenItemIndex]);

	function handleClick() {
		if (chosenItem) {
			handleDone({index, itemToAdd: {...chosenItem, index: chosenItemIndex}});
		} else {
			setAlertMessage(true);
			setTimeout(() => {
				setAlertMessage(false);
			}, 2000);
		}
	}

	return (
		<div className="order-drink">
			<div className="order-drink__scroll">
				{items
					.filter((item) => item.type === "drink")
					.map((item, index) => {
						return (
							<img
								key={index}
								className="order-drink__img"
								src={item.image}
								ref={(el) => (itemsRef.current[index] = el)}
								onClick={() => {
									setChosenItemIndex(index);
									setChosenItem(item);
								}}
							/>
						);
					})}
			</div>

			<div className="order-drink__alert">
				<Collapse in={alertMessage}>
					<Alert severity="error">you must to select drink</Alert>
				</Collapse>
			</div>
			{chosenItem && <h4 className="order-drink__choose-text">{chosenItem.name}</h4>}
			<button className="order__button link" onClick={handleClick}>
				DONE
			</button>
		</div>
	);
}
