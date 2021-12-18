import React from "react";
import { useSelector } from "react-redux";
import Card from "../Orders/Shared/Card";
import CartItem from "./CartItem";
import Checkout from "../Orders/Checkout/Checkout";

import { ToastContainer } from "react-toastify";
import successMessage from "../hooks/successMessage";

import "./Css/Cart.css";

const Cart = () => {
	const cartItems = useSelector(state => state.cart.items);

	const renderCartItems = () => {
		return (
			<>
				{cartItems.map(item => {
					return (
						<CartItem
							key={item.id}
							id={item.id}
							name={item.name}
							imageUrl={item.imageUrl}
							price={item.price}
							quantity={item.quantity}
							totalPrice={item.totalPrice}
							message={successMessage}
						/>
					);
				})}
				<ToastContainer />
			</>
		);
	};
	return (
		<Card>
			<div className="col-lg-8">
				<div className="cart-details">
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<div className="product-list">
								<p className="product-name-cart">Product name</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-3">
							<p className="quantity-text">Quantity</p>
						</div>
						<div className="col-lg-3 col-md-3">
							<p className="price-text">Unit Price</p>
						</div>
					</div>
				</div>
				{renderCartItems()}
			</div>
			<Checkout />
		</Card>
	);
};
export default Cart;
