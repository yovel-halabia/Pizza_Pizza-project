import {useState, useEffect} from "react";
import "./OrderDeal.css";

import {items} from "../../../data";

import OrderPizza from "../OrderPizza/OrderPizza";
import OrderDrink from "./OrderDrink";
import ChooseSalad from "./ChooseSalad";
import DealProgressBar from "./DealProgressBar";

export default function OrderDeal({item, handleDone}) {
	const [orderItems, setOrderItems] = useState([]);
	const [orderPosition, setOrderPosition] = useState(0);

	useEffect(() => {
		if (orderItems.length === items[item.id].items.length)
			handleDone({
				itemToAdd: {
					...item,
					extras: orderItems,
				},
			});
	}, [orderItems]);

	const handleDoneItem = ({index, itemToAdd}) => {
		setOrderItems((prev) => [...prev, itemToAdd]);
		setOrderPosition(index + 1);
	};

	return (
		<div>
			<DealProgressBar itemID={item.id} orderPosition={orderPosition} itemsLength={items[item.id].items?.length} />
			<div className="orderDeal__items-container">
				<div className="orederDeal__items-inner" style={{right: orderPosition * 100 + "%", width: items[item.id].items?.length * 100 + "%"}}>
					{items[item.id].items?.map((itemName, index) => {
						if (itemName === "FAMILY TRAY L")
							return (
								<div className="orederDeal__item">
									<OrderPizza key={index} index={index} item={item.extras ? item.extras[index] : items[1]} handleDone={handleDoneItem} />
								</div>
							);
						else if (itemName === "FAMILY TRAY XL")
							return (
								<div className="orederDeal__item">
									<OrderPizza key={index} index={index} item={item.extras ? item.extras[index] : items[2]} handleDone={handleDoneItem} />
								</div>
							);
						else if (itemName === "DRINK")
							return (
								<div className="orederDeal__item">
									<OrderDrink key={index} index={index} item={item.extras && item.extras[index]} handleDone={handleDoneItem} />
								</div>
							);
						else if (itemName === "SALAD")
							return (
								<div className="orederDeal__item">
									<ChooseSalad key={index} index={index} item={item.extras && item.extras[index]} handleDone={handleDoneItem} />
								</div>
							);
					})}
				</div>
			</div>
		</div>
	);
}
