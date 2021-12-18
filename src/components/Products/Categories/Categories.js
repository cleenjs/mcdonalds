import React from "react";
import { useSelector } from "react-redux";

// Components
import CategoryItem from "./CategoryItem";

const Categories = () => {
	const categories = useSelector(state => state.categories.categories);

	const renderCategories = () => {
		return (
			<ul className="u-list">
				{categories.map(cat => {
					return <CategoryItem key={cat.id} name={cat.name} id={cat.id} />;
				})}
			</ul>
		);
	};

	return (
		<>
			<div className="container">
				<div className="row py-3">
					<div className="col-lg-12">{renderCategories()}</div>
				</div>
			</div>
		</>
	);
};

export default Categories;
