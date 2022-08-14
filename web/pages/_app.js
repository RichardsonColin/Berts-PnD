import Head from 'next/head';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// components
import Layout from '@/components/layout/Layout';
import { ModalProvider, BaseModalBackground } from 'styled-react-modal';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
// constants
import { COMPANY_NAME, COMPANY_DESCRIPTION } from '@/utils/constants';
// font-awesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
// styles
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
        </Head>
        <ModalProvider backgroundComponent={FadingBackground}>
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env['RECAPTCHA_SITE_KEY']}
            scriptProps={{ defer: true }}
          >
            <Component {...pageProps} />
          </GoogleReCaptchaProvider>
        </ModalProvider>
      </Layout>
    </>
  );
}

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;
