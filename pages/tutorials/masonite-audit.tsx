/* eslint-disable @next/next/no-img-element */
import Script from 'next/script'
import Head from 'next/head'
import Page from '../../components/page'


const MasoniteAudit = () => {
  return (
    <Page>
      <Head>
        <title>PyPackage 0.0.2 - Masonite Audit</title>
      </Head>
      <main className='md:px-32 px-16 pt-4'>
        <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0660597578690897" crossOrigin="anonymous"></Script>
        <h1 className='text-3xl font-bold text-center mt-12'>Masonite Audit</h1>
        <p className="text-center mb-8 ml-[20%] mr-[20%] mt-8">
        This tutorial will guide through the implementation of audit package in your masonite project.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hQMzEwnTY0Y" title="Masonite Audit" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className='m-auto'></iframe>
      </main>
    </Page>
  );
}

export default MasoniteAudit
