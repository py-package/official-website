import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout';
import Script from 'next/script';

function PyPackageApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-TV45ZD32T8" />
      <Script strategy="lazyOnload" id='scripts'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TV45ZD32T8', {
                page_path: window.location.pathname,
              });
          `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default PyPackageApp
