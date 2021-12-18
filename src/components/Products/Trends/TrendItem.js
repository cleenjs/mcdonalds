import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const TrendItem = ({ id, name, price, imageUrl, message }) => {
	const dispatch = useDispatch();

	const addToCartHandler = () => {
		dispatch(
			cartActions.addItemToCart({
				id,
				name,
				price,
				imageUrl,
			})
		);
		message("success", `${name} successfully added to cart!`);
	};

	return (
		<div className="col-lg-3 col-6 col-sm-12">
			<div className="product">
				<i onClick={addToCartHandler} className="fas fa-shopping-bag icon"></i>
				<div className="product-img text-center">
					<img src={imageUrl} className="w-100" alt={name} />
				</div>
				<h2 className="product-name py-2">{name}</h2>
				<p className="product-price">${price}</p>
			</div>
		</div>
	);
};
export default TrendItem;
