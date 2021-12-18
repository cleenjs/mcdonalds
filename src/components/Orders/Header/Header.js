import React from "react";
import { Link } from "react-router-dom";
import "./Css/Header.css";
const Header = () => {
	return (
		<div className="container header-top">
			<div className="row">
				<div className="col-lg-6 col-md-6">
					<Link to="/">
						<div className="back-to-menu pt-2">
							<i className="fas fa-chevron-left col-back">
								<p className="back-to-text">Back to products</p>
							</i>
						</div>
					</Link>
				</div>
				<div className="col-lg-6 col-md-6">
					<div className="heading-text">
						<h2>
							<b>Checkout</b>
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Header;
