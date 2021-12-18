import React from "react";

// Components
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import Trends from "../Trends/Trends";
import ProductList from "../ProductList/ProductList";

const Main = () => {
	return (
		<>
			<Header />
			<Categories />
			<ProductList />
			<Trends />
		</>
	);
};

export default Main;
