import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import Layout from '@/components/Layout';
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
        <title>Bert&#39;s Painting &#38; Decorating</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Winnipeg&#39;s top painters and painting services. Inquire about our interior painting, exterior painting and decorating expertise.'
        />
      </Head>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
