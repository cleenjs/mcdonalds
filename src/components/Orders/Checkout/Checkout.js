import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import message from "../../utils/message";
import "./Css/Checkout.css";

const shippingCost = 2;

const Checkout = () => {
	const dispatch = useDispatch();

	const [couponCodeName, setCouponCodeName] = useState("");

	const changeCouponCode = e => setCouponCodeName(e.target.value);
	const productsTotalPrice = useSelector(state => state.cart.totalPrice);
	const productItems = useSelector(state => state.cart.items);
	const finalPrice = useSelector(state => state.cart.totalPrice) + shippingCost;

	const coupon = useSelector(state => state.cart.coupon);
	const couponUsage = coupon.activatedCoupon;
	const couponValue = coupon.value;
	const couponName = coupon.name;

	const addCouponCode = () => {
		if (couponUsage === false && couponName === couponCodeName) {
			message("success", "Coupon code is successfully used!");
			dispatch(
				cartActions.addCouponCode({
					coupon: "mc",
				})
			);
		} else {
			message("error", "Coupon is already used or wrong coupon name!");
		}
	};

	const sendRequest = () => {
		const request = {
			items: productItems,
			productsPrice: productsTotalPrice.toFixed(2),
			finalPrice: finalPrice.toFixed(2),
		};

		console.log(request);
	};

	return (
		<div className="col-lg-4">
			<div className="total p-3 mt-5">
				<div className="input-group mb-3 mt-3">
					<input
						type="text"
						className="form-control"
						placeholder="Enter a coupon code"
						value={couponCodeName}
						onChange={changeCouponCode}
					/>
					<div className="input-group-append">
						<button onClick={addCouponCode} className="btn btn-outline-warning">
							Apply
						</button>
					</div>
				</div>
				{couponUsage && (
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<div className="name coupon-width">
								<p className="coupon-name">
									<u>
										<b>Coupon is activated</b>
									</u>
								</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="amount text-right">
								<p className="coupon-name">
									<u>
										<b>-${couponValue}</b>
									</u>
								</p>
							</div>
						</div>
					</div>
				)}

				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="name">
							<p>Items subtotal:</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="amount text-right">
							<p>${productsTotalPrice.toFixed(2)}</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="name">
							<p>Delivery fee:</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="amount text-right">
							<p>$2</p>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="name">
							<h5>
								<b>Total</b>
							</h5>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="amount text-right">
							<h4>
								<b>${finalPrice.toFixed(2)}</b>
							</h4>
						</div>
					</div>
				</div>
				<button
					onClick={sendRequest}
					className="btn btn-warning w-100 py-2 my-2"
				>
					Proceed to checkout
				</button>
			</div>
		</div>
	);
};

export default Checkout;
