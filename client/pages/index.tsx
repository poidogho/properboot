import type { NextPage } from 'next';
import Head from 'next/head';
import Homes from './modules/_homes';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Welcome to properly</title>
      </Head>
      <Homes />
    </div>
  );
};

export default Home;
