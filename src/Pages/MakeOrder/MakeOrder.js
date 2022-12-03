import React from "react";
import "./MakeOrder.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

import OrderPizza from "./OrderPizza";
import OrderSalad from "./OrderSalad";
import OrderDeal from "./OrderDeal";

function MakeOrder(props) {
	const localStorage = window.localStorage;
	const item = JSON.parse(localStorage.getItem("item"));
	let orderItems = JSON.parse(localStorage.getItem("orderItems"));
	const index = JSON.parse(localStorage.getItem("index"));

	function checkOrder() {
		if (item.type === "salad") {
			return <OrderSalad item={item} onChange={handleOrder} />;
		} else if (item.type === "pizza") {
			return <OrderPizza item={item} onChange={handleOrder} />;
		} else if (item.type === "deal") {
			return <OrderDeal item={item} onChange={handleOrder} />;
		}
	}

	function handleOrder(orderItem) {
		if (orderItem && index) {
			orderItems = orderItems.map((item, indexItem) => {
				if (indexItem == index) {
					return orderItem;
				} else {
					return item;
				}
			});
			localStorage.setItem("orderItems", JSON.stringify(orderItems));
			localStorage.setItem("index", JSON.stringify(""));
		} else if (orderItems) {
			localStorage.setItem("orderItems", JSON.stringify([...orderItems, orderItem]));
		} else {
			localStorage.setItem("orderItems", JSON.stringify([orderItem]));
		}
		handleCancel();
	}

	function handleCancel() {
		window.location.replace("/menu#checkout");
	}

	return (
		<div className="mo">
			<button className="moreturn" onClick={handleCancel}>
				back to menu <FontAwesomeIcon icon={faCaretDown} style={{transform: "rotate(-90deg)"}} />
			</button>
			<div className="mocontent">{checkOrder()}</div>
		</div>
	);
}

export default MakeOrder;
