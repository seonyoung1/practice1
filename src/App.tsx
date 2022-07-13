import { HelmetProvider } from 'react-helmet-async';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { darkTheme, lightTheme } from './styles/theme';
import Router from './components/Router';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './state/atoms';

function App() {
	const isDark = useRecoilValue(isDarkAtom);
	return (
		<div className="App">
			<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
				<GlobalStyle />
				<HelmetProvider>
					<Router />
				</HelmetProvider>
				<ReactQueryDevtools initialIsOpen={false} />
			</ThemeProvider>
		</div>
	);
}

export default App;
