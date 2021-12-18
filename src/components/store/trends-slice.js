import { createSlice } from "@reduxjs/toolkit";

import trends from "../../data/trends.json";

const trendsSlice = createSlice({
	name: "trends",
	initialState: { trends: trends },
});

export const trendsActions = trendsSlice.actions;

export default trendsSlice;
