import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Container, Header, ButtonHome } from '../styles/global';
import Detail from '../components/Detail';
import DetailTabs from '../components/DetailTabs';
import { useQuery } from 'react-query';
import { fetchCoinInfo, fetchCoinPrice } from '../api';

interface InfoData {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	is_new: boolean;
	is_active: boolean;
	type: string;
	description: string;
	message: string;
	open_source: boolean;
	started_at: string;
	development_status: string;
	hardware_wallet: boolean;
	proof_type: string;
	org_structure: string;
	hash_algorithm: string;
	first_data_at: string;
	last_data_at: string;
}

interface PriceData {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	circulating_supply: number;
	total_supply: number;
	max_supply: number;
	beta_value: number;
	first_data_at: string;
	last_updated: string;
	quotes: {
		USD: {
			ath_date: string;
			ath_price: number;
			market_cap: number;
			market_cap_change_24h: number;
			percent_change_1h: number;
			percent_change_1y: number;
			percent_change_6h: number;
			percent_change_7d: number;
			percent_change_12h: number;
			percent_change_15m: number;
			percent_change_24h: number;
			percent_change_30d: number;
			percent_change_30m: number;
			percent_from_price_ath: number;
			price: number;
			volume_24h: number;
			volume_24h_change_24h: number;
		};
	};
}

const Coin = () => {
	const navigate = useNavigate();
	const { coinId } = useParams<{ coinId: string }>();
	const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(['info', coinId], () => fetchCoinInfo(coinId as string));
	const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(['tickers', coinId], () => fetchCoinPrice(coinId as string), { refetchInterval: 5000 });

	const loading = infoLoading || tickersLoading;
	// const [info, setInfo] = useState<InfoData>();
	// const [priceInfo, setPriceInfo] = useState<PriceData>();
	// const [loading, setLoading] = useState(true);
	// useEffect(() => {
	// 	(async () => {
	// 		const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json();
	// 		const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json();
	// 		// console.log(infoData, priceData);
	// 		setInfo(infoData);
	// 		setPriceInfo(priceData);
	// 		setLoading(false);
	// 	})();
	// }, [coinId]);

	return (
		<Container>
			<Helmet>
				<title>{loading ? 'Coin' : `Coin - ${infoData?.name}`}</title>
			</Helmet>
			<ButtonHome onClick={() => navigate('/')}>&lt; GO HOME</ButtonHome>
			<Header>
				<h1 className="title">{loading ? '' : infoData?.name}</h1>
			</Header>
			{loading ? (
				'loading'
			) : (
				<>
					<Detail info={infoData} priceInfo={tickersData} />
					<DetailTabs />
					<Outlet context={coinId} />
				</>
			)}
		</Container>
	);
};

export default Coin;
