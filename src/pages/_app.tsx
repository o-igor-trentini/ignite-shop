import type { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Ignite Shop</title>
        </Head>

        <Component {...pageProps} />
    </>
);

export default App;
