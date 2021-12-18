import React from "react";

const Card = props => {
	return (
		<section className="pb-1">
			<div className="container">
				<div className="row py-lg-3">{props.children}</div>
			</div>
		</section>
	);
};

export default Card;
