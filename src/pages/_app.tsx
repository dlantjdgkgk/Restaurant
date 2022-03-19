import { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import Head from 'next/head';
import { CacheApiConfig } from 'react-cache-api';

const app = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'
                />
            </Head>
            <CacheApiConfig baseURL='https://api.digital-hamster.net'>
                <Component {...pageProps} />
            </CacheApiConfig>
        </>
    );
};

export default wrapper.withRedux(app);
