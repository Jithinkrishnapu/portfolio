// pages/index.js
import Head from 'next/head';
import Portfolio from './pages/portfolio';

export const revalidate = 100
export default function Home() {
  return (
    <div className='px-2 h-[100vh] flex justify-center items-center' >
      <Head>
        <title>Jithin Krishna</title>
         <meta name="description" content="Explore my portfolio showcasing projects and skills in web and mobile development."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Portfolio />
    </div>
  );
}

