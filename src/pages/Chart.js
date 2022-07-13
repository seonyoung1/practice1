import { useOutletContext } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../state/atoms';

// interface Iohlcv {
// 	time_open: number;
// 	time_close: number;
// 	open: string;
// 	high: string;
// 	low: string;
// 	close: string;
// 	volume: string;
// 	market_cap: number;
// }

const Chart = () => {
	const coinId = useOutletContext();
	const { isLoading, data } = useQuery(['ohlcv', coinId], () => fetchCoinHistory(coinId), { refetchInterval: 10000 });
	const isDark = useRecoilValue(isDarkAtom);
	// console.log(data);
	return (
		<>
			{isLoading ? (
				'loading...'
			) : (
				<ApexChart
					type="line"
					series={[
						{
							name: 'Price',
							data: data?.map((price) => Number(price.close)),
							// data: [15, 18, 20, 30, 40, 50],
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
						stroke: {
							curve: 'smooth',
							width: 4,
						},
						yaxis: {
							show: false,
						},
						xaxis: {
							type: 'category',
							categories: data?.map((price) => new Date(price.time_close).toLocaleTimeString()),
							axisBorder: { show: false },
							axisTicks: { show: false },
							labels: { show: false },
						},
						fill: {
							type: 'gradient',
							gradient: { gradientToColors: ['#0be881'], stops: [0, 100] },
						},
						colors: ['#0fbcf9'],
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
export default Chart;
