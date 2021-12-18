import React from "react";
import { useSelector } from "react-redux";
// Components
import Container from "../Shared/Container";
import Trend from "./TrendTitle";
import TrendItem from "./TrendItem";
import message from "../../utils/message";

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
							message={message}
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
