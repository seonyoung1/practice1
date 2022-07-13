import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Tabs = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin: 25px 0;
	gap: 10px;
`;

const Tab = styled.span`
	text-align: center;
	text-transform: uppercase;
	font-size: 12px;
	font-weight: 400;
	background-color: rgba(0, 0, 0, 0.5);
	padding: 7px 0px;
	border-radius: 10px;
	a {
		display: block;
		color: inherit;
	}
	.selected {
		color: ${(props) => props.theme.accentColor};
	}
`;

const DetailTabs = () => {
	return (
		<Tabs>
			<Tab>
				<NavLink to="chart" className={({ isActive }) => (isActive ? 'selected' : '')}>
					Chart
				</NavLink>
			</Tab>
			<Tab>
				<NavLink to="price" className={({ isActive }) => (isActive ? 'selected' : '')}>
					Price
				</NavLink>
			</Tab>
		</Tabs>
	);
};

export default React.memo(DetailTabs);
