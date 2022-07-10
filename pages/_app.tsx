import '../styles/globals.css'
import type { AppProps } from 'next/app'

function PyPackageApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default PyPackageApp
