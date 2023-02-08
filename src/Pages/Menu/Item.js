import React from 'react';
import './Item.css';

import {useHistory} from "react-router-dom";

import {useDispatch} from "react-redux";
import {addItem} from "../../Redux/Slices/cartSlice";

export default function Item({item}) {
	const history = useHistory();
	const dispatch = useDispatch();
	const handleOrder = () => (item.type === "drink" || item.type === "dessert" ? dispatch(addItem(item)) : history.push(`/order/add/${item.id}`));
	return (
		<div className="item">
			<div className="item___img-container">
				<img src={item.image} />
			</div>
			<h5>{item.name}</h5>
			<p>{item.cost}₪</p>
			<button onClick={handleOrder}>ORDER NOW</button>
		</div>
	);
}
