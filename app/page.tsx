// pages/index.js
"use client";
import Head from 'next/head';
import Portfolio from './pages/portfolio';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Flip Card Example</title>
        <meta name="description" content="A simple flip card example using react-card-flip in a Next.js project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className='flex flex-col justify-center items-center min-h-[100vh] p-[0_0.5rem]'>
        <Portfolio />
      </div>
    </div>
  );
}

