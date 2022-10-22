/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import Page from '../components/page'

const HomePage: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>PyPackage 0.0.2</title>
      </Head>
      <main className='md:px-32 px-16 h-full md:w-[1200px] mx-auto flex flex-col items-center'>
        <img src="/pypackage-logo.png" className="w-[320px] mx-auto -mt-12 -mb-12" />
        <h1 className='text-3xl font-bold text-center mt-0 hidden'>PyPackage</h1>
        <p className="text-center mb-1 -mt-4">Py-Package is an open-source platform which creates lots of great open source projects mainly for Masonite framework. Python is the main language being used here.</p>
        <p className="text-center mt-4 mb-1">
          Talking about the framework, Masonite is a Python framework. It is very easy to use and easy to learn. And it is shipped with a lot of great features. Because of its easy learning curve and features, it will be a great framework for Python developers. There are lots of improvements going on and soon it will be a full-fledged framework. There are lots of projects being created using Masonite. For more details about Masonite, please visit <a href="https://docs.masoniteproject.com/" target="_blank" rel='noreferrer' className="text-red-600">Masonite</a>
        </p>

        <p className="text-center mt-4 mb-1">
          You are welcome to contribute to the project that we created. You can either fork the project or create a pull request. Let us build a better future for Masonite. We are always looking for new features and improvements.
        </p>

        <p className="text-center mt-4 mb-1 bg-warning text-white rounded-md shadow-lg px-2 py-4 w-full">
          There are lots of features coming soon here in PyPackage. Stay tuned.<br />For now, you can check out the <Link href="/packages"><a className='text-red-600 font-bold'>Packages</a></Link> we have created.
        </p>

        <p className="text-center mt-4 pb-4">
          If you have any questions, please feel free to contact us here: <span className='font-semibold text-sm text-yellow-600'>info@pypackage.com</span>
        </p>
      </main >
    </Page >
  )
}

export default HomePage
