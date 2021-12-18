import { createSlice } from "@reduxjs/toolkit";

import products from "../../data/products.json";

const productsSlice = createSlice({
	name: "products",
	initialState: { products: products },
	reducers: {
		filteredProducts(state, action) {
			const actions = action.payload;
			const filteredProducts = products.filter(
				prod => prod.categoryId === actions.id
			);
			state.products = filteredProducts;
		},
	},
});

export const productsActions = productsSlice.actions;

export default productsSlice;
