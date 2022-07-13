import { useOutletContext } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../state/atoms';

const Price = () => {
	const coinId = useOutletContext();
	const { isLoading, data } = useQuery(['ohlcv', coinId], () => fetchCoinHistory(coinId), { refetchInterval: 10000 });
	const isDark = useRecoilValue(isDarkAtom);
	return (
		<>
			{isLoading ? (
				'loading...'
			) : (
				<ApexChart
					type="candlestick"
					series={[
						{
							data: data?.map((price, idx) => [Number(idx), Number(price.open), Number(price.high), Number(price.low), Number(price.close)])
						},
					]}
					options={{
						theme: {
							mode: isDark ? 'dark' : 'light',
						},
						chart: {
							height: 800,
							width: 500,
							toolbar: {
								show: false,
							},
							background: 'transparent',
						},
						grid: { show: false },
						yaxis: {
							show: false,
						},
						xaxis: {
							type: 'category',
							axisBorder: { show: false },
							axisTicks: { show: false },
							labels: { show: false },
						},
						// colors: ['#0fbcf9'],
						tooltip: {
							y: {
								formatter: (value) => `$${value.toFixed(2)}`,
							},
						},
					}}
				/>
			)}
		</>
	);
};

export default Price;
