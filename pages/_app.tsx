import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout';

function PyPackageApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default PyPackageApp
