import {useState, useEffect} from "react";

import {useHistory, useParams} from "react-router-dom";

import {useSelector} from "react-redux";

import {items} from "../../data";

export default function useGetItem() {
	const history = useHistory();
	const params = useParams();
	const [item, setItem] = useState({});
	const cartState = useSelector((state) => state.cart);

	useEffect(() => {
		let foundedItem;
		if (params.orderType === "add") foundedItem = items.filter((item) => item.id === params.itemID);
		else if (params.orderType === "edit") foundedItem = cartState.cartItems.filter((item) => item.cartID === params.itemID);
		else history.push("/menu");
		foundedItem.length !== 0 && (foundedItem[0].type !== "dessert" || foundedItem[0].type !== "drink")
			? setItem(() => foundedItem[0])
			: history.push("/menu");
	}, [params]);

	return item;
}
