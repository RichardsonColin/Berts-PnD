import Script from 'next/script';
import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import Layout from '@/components/layout/Layout';
import { ModalProvider, BaseModalBackground } from 'styled-react-modal';
// constants
import { COMPANY_NAME, COMPANY_DESCRIPTION } from '@/utils/constants';
// styles
import styled from 'styled-components';
import '../public/styles/globals.css';

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{COMPANY_NAME}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='description' content={COMPANY_DESCRIPTION} />
          {/* <Script
            src='https://kit.fontawesome.com/a237ec646f.js'
          ></Script> */}
        </Head>
        <ModalProvider backgroundComponent={FadingBackground}>
          <Component {...pageProps} />
        </ModalProvider>
      </Layout>
    </>
  );
}

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;
