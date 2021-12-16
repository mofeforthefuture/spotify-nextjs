import Head from 'next/head';
import Sidebar from '../components/sidebar';

export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>Mofe's spotify</title>
        <link rel='icon' href='/spotify.ico' />
      </Head>
      <main>
        {/*Sidebar*/}
        <Sidebar />
        {/*Center*/}
      </main>
      <div>{/*Player*/}</div>
    </div>
  );
}
