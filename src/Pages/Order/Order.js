import React from "react";
import "./Order.css";

import {Link, useHistory} from "react-router-dom";

import {useDispatch} from "react-redux";
import {addItem} from "../../Redux/Slices/cartSlice";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

import OrderPizza from "./OrderPizza/OrderPizza";
import OrderSalad from "./OrderSalad";
import OrderDeal from "./OrderDeal/OrderDeal";
import useGetItem from "./useGetItem";

export default function Order() {
	const history = useHistory();
	const dispatch = useDispatch();
	const item = useGetItem();

	function handleDone({itemToAdd}) {
		dispatch(addItem(itemToAdd));
		history.push("/menu");
	}

	return (
		<div className="order">
			<Link to="menu" className="order__link-return">
				back to menu <FontAwesomeIcon icon={faCaretDown} style={{transform: "rotate(-90deg)"}} />
			</Link>
			{item?.type === "salad" && <OrderSalad item={item} handleDone={handleDone} />}
			{item?.type === "pizza" && <OrderPizza item={item} handleDone={handleDone} />}
			{item?.type === "deal" && <OrderDeal item={item} handleDone={handleDone} />}
		</div>
	);
}
