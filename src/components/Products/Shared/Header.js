import React from "react";

const Header = props => {
	return (
		<section className="pt-4">
			<div className="container">
				<div className="row">{props.children}</div>
			</div>
		</section>
	);
};

export default Header;
