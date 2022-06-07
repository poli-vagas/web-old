import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initAuth } from '../services/firebase'
import Navbar from '../components/Navbar';

initAuth();

const PoliVagas = ({ Component, pageProps }: AppProps) => {
  return (<>
    <Navbar/>
    <Component {...pageProps} />
  </>)
};

export default PoliVagas;

