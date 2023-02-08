import React from "react";
import "./CartItem.css";

import {useHistory} from "react-router-dom";

import {useDispatch} from "react-redux";
import {removeItem} from "../../Redux/Slices/cartSlice";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faEdit} from "@fortawesome/free-solid-svg-icons";

export default function CartItem({item, isCheckout}) {
	const history = useHistory();
	const dispatch = useDispatch();

	function onEdit() {
		history.push(`/order/edit/${item.cartID}`);
	}

	return (
		<div className="cart-item">
			{!isCheckout && (
				<div className="cart-items__buttons">
					{(item.type === "salad" || item.type === "pizza" || item.type === "deal") && (
						<button>
							<FontAwesomeIcon icon={faEdit} onClick={onEdit} />
						</button>
					)}
					<button>
						<FontAwesomeIcon icon={faTimes} onClick={() => dispatch(removeItem(item.cartID))} />
					</button>
				</div>
			)}
			<h5>{item.name}</h5>
			{item.type === "deal" ? (
				<ul>
					{item.extras.map((item) => {
						return (
							<li>
								{item.name}
								{item.extras && (
									<ul>
										{item.extras.map((item) => (
											<li>{item}</li>
										))}
									</ul>
								)}
							</li>
						);
					})}
				</ul>
			) : (
				<ul>{item.extras && item.extras.map((item) => <li>{item}</li>)}</ul>
			)}
			<p>{item.cost}₪</p>
		</div>
	);
}
