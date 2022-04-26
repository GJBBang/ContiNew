import GlobalStyle from "@styles/globalstyle";
import styled, { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import type { AppProps } from "next/app";
declare global {
	interface Window {
		kakao: any;
	}
}
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Container>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</C>
	);
}
export default MyApp;

const Container = styled.div`
	padding: 1rem 0 0 1rem;
`;
