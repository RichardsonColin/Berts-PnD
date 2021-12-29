import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import Layout from '@/components/layout/Layout';
// constants
import { COMPANY_NAME } from '@/src/constants';
// styles
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
        <meta
          name='description'
          content='Bert&#39;s Painting &amp; Decorating is a father and son company providing service in English and French to many satisfied customers for over 35 years. We are Red Seal Qualified Journeyman Painters providing interior and exterior work in residential and small commercial buildings.'
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
