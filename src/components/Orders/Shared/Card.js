import React from "react";

const Card = props => {
	return (
		<section className="py-5">
			<div className="container">
				<div className="row">{props.children}</div>
			</div>
		</section>
	);
};

export default Card;
