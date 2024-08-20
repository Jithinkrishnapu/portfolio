// pages/index.js
import Head from 'next/head';
import Portfolio from './pages/portfolio';

export const revalidate = 0
export default function Home() {
  return (
    <div className='px-2 h-[100vh] flex justify-center items-center bg-white' >
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="A simple flip card example using react-card-flip in a Next.js project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Portfolio />
    </div>
  );
}

