import { createSlice } from "@reduxjs/toolkit";

import categories from "../../data/categories.json";

const categoriesSlice = createSlice({
	name: "categories",
	initialState: { categories: categories, selectedCategory: 6 },
	reducers: {
		saveSelectedCategory(state, action) {
			const id = action.payload.id;
			state.selectedCategory = id;
		},
	},
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice;
