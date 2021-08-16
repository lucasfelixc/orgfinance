import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { SideBar, Header } from '~/components';
import { Wrapper } from '~/styles/App';
import GlobalStyle from '~/styles/global';
import theme from '~/styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>OrgFinance</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <main>
            <Header />
            <SideBar />
            <Component {...pageProps} />
            <GlobalStyle />
          </main>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
