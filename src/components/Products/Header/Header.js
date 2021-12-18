import React from "react";

// Components
import Header from "../Shared/Header";
import Cart from "../Cart/Cart";

const HeaderTitle = () => {
	return (
		<Header>
			<div className="col-lg-6 col-md-6">
				<div className="heading-text">
					<h1>Food shop</h1>
				</div>
			</div>
			<Cart />
		</Header>
	);
};

export default HeaderTitle;
