import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import productsSlice from "./products-slice";
import categoriesSlice from "./categories-slice";
import trendsSlice from "./trends-slice";

const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		products: productsSlice.reducer,
		categories: categoriesSlice.reducer,
		trends: trendsSlice.reducer,
	},
});

export default store;
