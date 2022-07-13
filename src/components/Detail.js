import React from 'react';
import styled from 'styled-components';

const Overview = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: rgba(0, 0, 0, 0.5);
	padding: 10px 20px;
	border-radius: 10px;
`;
const OverviewItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	span:first-child {
		font-size: 10px;
		font-weight: 400;
		text-transform: uppercase;
		margin-bottom: 5px;
	}
`;
const Description = styled.p`
	margin: 20px 0px;
`;

const Detail = ({ info, priceInfo }) => {
	return (
		<>
			<Overview>
				<OverviewItem>
					<span>Rank:</span>
					<span>{info?.rank}</span>
				</OverviewItem>
				<OverviewItem>
					<span>Symbol:</span>
					<span>${info?.symbol}</span>
				</OverviewItem>
				<OverviewItem>
					<span>Price:</span>
					<span>${priceInfo?.quotes?.USD?.price?.toFixed(3)}</span>
				</OverviewItem>
			</Overview>
			<Description>{info?.description}</Description>
			<Overview>
				<OverviewItem>
					<span>Total Suply:</span>
					<span>{priceInfo?.total_supply}</span>
				</OverviewItem>
				<OverviewItem>
					<span>Max Supply:</span>
					<span>{priceInfo?.max_supply}</span>
				</OverviewItem>
			</Overview>
		</>
	);
};
export default React.memo(Detail);
