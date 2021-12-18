import React from "react";

// Components
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import Trends from "../Trends/Trends";
import Products from "../Products/Products";

const Main = () => {
	return (
		<>
			<Header />
			<Categories />
			<Products />
			<Trends />
		</>
	);
};

export default Main;
