import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoinList from '../pages/CoinList';
import Coin from '../pages/Coin';
import Price from '../pages/Price';
import Chart from '../pages/Chart';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<CoinList />} />
				<Route path="/:coinId" element={<Coin />}>
					<Route path={`price`} element={<Price />} />
					<Route path={`chart`} element={<Chart />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
