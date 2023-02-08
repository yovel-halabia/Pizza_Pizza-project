import {createSlice} from "@reduxjs/toolkit";
import {generateID} from "../../Util/generateID";

const initialState = {
	cartItems: [],
	amount: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action) => {
			if (action.payload.cartID) {
				state.cartItems = state.cartItems.map((item) => {
					if (item.cartID === action.payload.cartID) return action.payload;
					else return item;
				});
			} else {
				state.cartItems.push({cartID: generateID(), ...action.payload});
				state.amount += action.payload.cost;
			}
		},
		removeItem: (state, action) => {
			state.cartItems = state.cartItems.filter((item) => {
				if (item.cartID === action.payload) {
					state.amount -= item.cost;
					return false;
				}
				return true;
			});
		},
		initCart: () => initialState,
	},
});

export const {addItem, removeItem, initCart} = cartSlice.actions;

export default cartSlice.reducer;
