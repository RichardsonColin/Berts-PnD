import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import Layout from '@/components/layout/Layout';
// constants
import { COMPANY_NAME, COMPANY_DESCRIPTION } from '@/src/constants';
// global styles
import '../styles/globals.css';

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>{COMPANY_NAME}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={COMPANY_DESCRIPTION} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
