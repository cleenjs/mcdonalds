import React from "react";

// Components
import Header from "../Shared/Header";
import CartIcon from "../Shared/CartIcon";

const HeaderTitle = () => {
	return (
		<Header>
			<div className="col-lg-6 col-md-6">
				<div className="heading-text">
					<h1>Food shop</h1>
				</div>
			</div>
			<CartIcon />
		</Header>
	);
};

export default HeaderTitle;
