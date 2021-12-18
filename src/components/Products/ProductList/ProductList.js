import React from "react";
import { useSelector } from "react-redux";
// Components
import ProductItem from "./ProductItem";
import Card from "../Shared/Card";
import { ToastContainer } from "react-toastify";
import message from "../../utils/message";

const Products = () => {
	const products = useSelector(state => state.products.products);

	const renderProducts = () => {
		return (
			<>
				{products.map(prod => {
					return (
						<ProductItem
							key={prod.id}
							name={prod.name}
							imageUrl={prod.imageUrl}
							price={prod.price}
							id={prod.id}
							message={message}
						/>
					);
				})}
				<ToastContainer />
			</>
		);
	};

	return <Card>{renderProducts()}</Card>;
};

export default Products;
