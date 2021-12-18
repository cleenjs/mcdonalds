import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Css/CartItem.css";

const CartItem = ({ id, name, price, imageUrl, quantity, message }) => {
	const dispatch = useDispatch();

	const removeItemHandler = () => {
		dispatch(cartActions.removeItemFromCart(id));
		message(`${name} quantity decreased!`);
	};

	const addItemHandler = () => {
		dispatch(
			cartActions.addItemToCart({
				id,
				name,
				price,
				imageUrl,
			})
		);
		message(`${name} quantity increased!`);
	};

	const totalPrice = price * quantity;
	return (
		<div className="product-details py-2">
			<div className="row">
				<div className="col-lg-2 col-md-2">
					<div className="product-image">
						<img src={imageUrl} alt={name} className="w-100" />
					</div>
				</div>
				<div className="col-lg-4 col-md-4 pt-3 cart-item-bs">
					<div className="product-description">
						<h4>
							<b>{name}</b>
						</h4>
					</div>
				</div>
				<div className="col-lg-3 col-md-3 pt-4">
					<div className="cart-box">
						<i
							onClick={removeItemHandler}
							className="fas fa-minus action-buttons minus-icon"
						></i>
						<p className="qty quantity-left">
							<b>{quantity}</b>
						</p>
						<i
							onClick={addItemHandler}
							className="fa fa-plus action-buttons"
						></i>
					</div>
				</div>
				<div className="col-lg-2 col-md-2 pt-4 cart-box-price">
					<p className="price">${totalPrice.toFixed(2)}</p>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
