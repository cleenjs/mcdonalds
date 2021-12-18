import React from "react";
import { useSelector } from "react-redux";
// Components
import Container from "../Shared/Container";
import Trend from "./TrendTitle";
import TrendItem from "./TrendItem";
import successMessage from "../../hooks/successMessage";

const Trends = () => {
	const trends = useSelector(state => state.trends.trends);
	const renderTrendProducts = () => {
		return (
			<>
				{trends.map(tr => {
					return (
						<TrendItem
							name={tr.name}
							imageUrl={tr.imageUrl}
							price={tr.price}
							id={tr.id}
							key={tr.id}
							message={successMessage}
						/>
					);
				})}
			</>
		);
	};

	return (
		<Container>
			<Trend />
			{renderTrendProducts()}
		</Container>
	);
};

export default Trends;
