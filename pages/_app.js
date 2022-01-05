import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import Layout from '@/components/layout/Layout';
// constants
import { COMPANY_NAME, COMPANY_DESCRIPTION } from '@/src/constants';
// global styles
import GlobalStyle from '../styles/globalStyles';

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Head>
          <title>{COMPANY_NAME}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='description' content={COMPANY_DESCRIPTION} />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
