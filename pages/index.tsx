import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PyPackage 0.1.0</title>
        <meta name="description" content="Crafting open source packages in Masonite ecosystem." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>PyPackage<sup style={{
          fontSize: '0.3em',
        }}>0.1</sup></h1>
      </main>
    </div>
  )
}

export default Home
