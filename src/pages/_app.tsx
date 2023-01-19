import type { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { globalStyles } from '../styles/global';
import logoSvg from '../assets/logo.svg';
import { Container, Header } from '@/styles/pages/app';
import Image from 'next/image';

globalStyles();

const App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Container>
            <Head>
                <title>Ignite Shop</title>
            </Head>

            <Header>
                <Image src={logoSvg} alt="" />
            </Header>

            <Component {...pageProps} />
        </Container>
    );
};

export default App;
