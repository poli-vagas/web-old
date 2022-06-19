import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initAuth } from '../services/firebase'
import Navbar from '../components/Navbar';
import Head from 'next/head';
import { initApi } from '../services/api';

initAuth();
initApi(process.env.NEXT_PUBLIC_API || 'https://poli-vagas-api.herokuapp.com');

const PoliVagas = ({ Component, pageProps }: AppProps) => {
  return (<>
    <Head>
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💼</text></svg>"/>
    </Head>
    <Navbar/>
    <Component {...pageProps} />
  </>)
};

export default PoliVagas;

