import { Link } from 'react-router-dom';
import { Container, Header, Item, List, ToggleDark } from '../styles/global';
import { useQuery } from 'react-query';
import { fetchCoins } from '../api';
import { Helmet } from 'react-helmet-async';
import { useRecoilState } from 'recoil';
import { isDarkAtom } from '../state/atoms';

interface ICoin {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	is_new: boolean;
	is_active: boolean;
	type: string;
}

const CoinList = () => {
	const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);
	const [isDark, setIsDark] = useRecoilState(isDarkAtom);
	const toggleDark = () => {
		setIsDark((current) => !current);
	};
	// const setDarkAtom = useSetRecoilState(isDarkAtom);
	// const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

	// const [data, setData] = useState<CoinInterface[]>([]);
	// const [loading, setLoading] = useState(true);
	// useEffect(() => {
	// 	(async () => {
	// 		const response = await fetch('https://api.coinpaprika.com/v1/coins');
	// 		const json = await response.json();
	// 		setData(json.slice(0, 100));
	// 		setLoading(false);
	// 	})();
	// }, []);

	return (
		<Container>
			<Helmet>
				<title>Coins</title>
			</Helmet>
			<Header>
				<h1 className="title">Coins</h1>
				<ToggleDark className={isDark ? 'dark' : 'light'} onClick={toggleDark}>
					<span>{isDark ? 'Dark' : 'Light'}</span>
				</ToggleDark>
			</Header>
			{isLoading ? (
				'loading...'
			) : (
				<List>
					{data?.slice(0, 100).map((coin) => (
						<Item key={coin.id}>
							<Link
								to={{
									pathname: `/${coin.id}`,
									// state: { name: coin.name },
								}}
							>
								<img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt="" />
								{coin.name} &rarr;
							</Link>
						</Item>
					))}
				</List>
			)}
		</Container>
	);
};

export default CoinList;
