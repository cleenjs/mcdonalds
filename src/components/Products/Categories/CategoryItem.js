import React from "react";
import { useDispatch } from "react-redux";
import { productsActions } from "../../store/products-slice";
import { categoriesActions } from "../../store/categories-slice";
import { useSelector } from "react-redux";

import "./Css/CategoryItem.css";

const allCategoryId = 6;

const CategoryItem = ({ name, id }) => {
	const dispatch = useDispatch();

	const activeCategory = useSelector(
		state => state.categories.selectedCategory
	);

	const selectedCategory = activeCategory === id ? "selected-category" : "";

	const filterProducts = () => {
		dispatch(productsActions.filteredProducts({ id }));
		dispatch(categoriesActions.saveSelectedCategory({ id }));
	};

	return (
		<>
			{id === allCategoryId ? (
				<li className={`${selectedCategory} list category`}>{name}</li>
			) : (
				<li
					onClick={filterProducts}
					className={`${selectedCategory} list category`}
				>
					{name}
				</li>
			)}
		</>
	);
};

export default CategoryItem;
