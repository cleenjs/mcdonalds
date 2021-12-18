import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Css/CartIcon.css";

const CartIcon = () => {
	const cartQuantity = useSelector(state => state.cart.totalQuantity);

	return (
		<div className="col-lg-6 col-md-6 text-right pt-3">
			<div className="grp-btn">
				<div className="btn-group btn-group-toggle">
					<Link to="/checkout">
						<label className="btn btn-light">
							<i className="fas fa-shopping-bag cart-icon"></i>
							<span className="badge badge-warning" id="lblCartCount">
								{cartQuantity}
							</span>
						</label>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CartIcon;
