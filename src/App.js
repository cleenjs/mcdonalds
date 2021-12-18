import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products/Main/Main";
import Orders from "./components/Orders/Main/Main";
import "./App.css";

function App() {
	const cart = useSelector(state => state.cart.items);
	const totalQuantity = useSelector(state => state.cart.totalQuantity);
	const totalPrice = useSelector(state => state.cart.totalPrice);
	const couponUsage = useSelector(state => state.cart.coupon.activatedCoupon);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
		localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
		localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
		localStorage.setItem("coupon", JSON.stringify(couponUsage));
	}, [cart, totalQuantity, totalPrice, couponUsage]);

	return (
		<Routes>
			<Route path="/" element={<Products />} />
			<Route path="/checkout" element={<Orders />} />
		</Routes>
	);
}

export default App;
