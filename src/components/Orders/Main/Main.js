import React from "react";

// Components
import Header from "../Header/Header";
import Cart from "../../Cart/Cart";
import Trends from "../../Products/Trends/Trends";

import "./Css/Main.css";

export default function Main() {
	return (
		<>
			<Header />
			<Cart />
			<Trends />
		</>
	);
}
