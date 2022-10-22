/* eslint-disable @next/next/no-img-element */
import Script from 'next/script'
import Head from 'next/head'
import Page from '../../components/page'
import axios from 'axios';
import getConfig from 'next/config'

type Props = {
  tutorials: [];
};

const TutorialsPage = (props: Props) => {
  return (
    <Page>
      <Head>
        <title>PyPackage 0.0.2 - Tutorials</title>
      </Head>
      <main className='md:px-32 px-16 pt-4'>
        <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0660597578690897" crossOrigin="anonymous"></Script>
        <h1 className='text-3xl font-bold text-center mt-12'>Tutorials</h1>
        <p className="text-center mb-8"></p>
        <section className='grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full mt-4'>
          {props.tutorials.map(({ name, description, path, image }, i) => (
            <div className="card glass" key={i}>
              <a href={path} className="card-content no-underline">
                <figure><img alt={name} src={image} /></figure>
                <div className="card-body p-4">
                  <h2 className="card-title">{name}</h2>
                  <p>{description}</p>
                </div>
              </a>
            </div>
          ))}
        </section>
      </main>
    </Page>
  );
}

export async function getStaticProps() {
  const { serverRuntimeConfig } = getConfig()
  const response = await axios.get(`${serverRuntimeConfig.base}/api/tutorials`);
  const tutorials = response.data.tutorials;
  return {
    props: {
      tutorials
    }
  }
}

export default TutorialsPage
