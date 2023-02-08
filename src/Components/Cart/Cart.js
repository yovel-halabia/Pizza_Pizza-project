import React from "react";
import "./Cart.css";

import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

import CartItem from "./CartItem";

export default function Cart({isCheckout}) {
	const cartState = useSelector((state) => state.cart);
	return (
		<div className="cart">
			{cartState.cartItems.length > 0 ? (
				<>
					<div className="cart__items">
						{cartState.cartItems.map((item, index) => (
							<CartItem key={index} item={item} isCheckout={isCheckout} />
						))}
					</div>
					<h4 className="cart__amount">amount:{cartState.amount}₪</h4>
					{!isCheckout && (
						<Link className="cart__link" to="checkout">
							go to checkout
						</Link>
					)}
				</>
			) : (
				<div className="cart__empty">
					<div className="cart__icon">
						<FontAwesomeIcon icon={faShoppingCart} />
					</div>
					<span>Cart is empty. Add menu items.</span>
				</div>
			)}
		</div>
	);
}
