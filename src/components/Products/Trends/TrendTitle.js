import React from "react";

const TrendTitle = () => {
	return (
		<div className="col-lg-3 pt-5">
			<div className="trending pb-5">
				<h2 className="py-5">TRENDING NOW</h2>
				<div className="btn-group">
					<button id="left" type="button" className="btn arrows">
						<i className="fas fa-chevron-left"></i>
					</button>
					<button id="right" type="button" className="btn arrows">
						<i className="fas fa-chevron-right"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default TrendTitle;
