import { createSlice } from "@reduxjs/toolkit";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
const totalQuantityFromLocalStorage = JSON.parse(
	localStorage.getItem("totalQuantity") || 0
);
const totalPriceFromLocalStorage = JSON.parse(
	localStorage.getItem("totalPrice") || 0
);

const couponFromLocalStorage = JSON.parse(
	localStorage.getItem("coupon") || false
);

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: cartFromLocalStorage,
		totalQuantity: totalQuantityFromLocalStorage,
		totalPrice: totalPriceFromLocalStorage,
		coupon: {
			activatedCoupon: couponFromLocalStorage,
			value: 1,
			name: "mc",
		},
	},
	reducers: {
		addItemToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find(item => item.id === newItem.id);
			state.totalQuantity++;
			state.totalPrice += newItem.price;
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.name,
					imageUrl: newItem.imageUrl,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + newItem.price;
			}
		},
		removeItemFromCart(state, action) {
			const id = action.payload;
			const existingItem = state.items.find(item => item.id === id);
			state.totalQuantity--;
			state.totalPrice -= existingItem.price;
			if (existingItem.quantity === 1) {
				state.items = state.items.filter(item => item.id !== id);
			} else {
				existingItem.quantity--;
			}
		},
		addCouponCode(state, action) {
			const coupon = action.payload.coupon;
			if (
				coupon === state.coupon.name &&
				state.coupon.activatedCoupon === false
			) {
				// localStorage.setItem("coupon", JSON.stringify(true));
				state.coupon.activatedCoupon = !state.coupon.activatedCoupon;
				state.totalPrice -= state.coupon.value;
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
