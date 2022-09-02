import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import ContactContent from '@/components/pages/ContactContent';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
// font-awesome
// TODO: In version 6, there should be a fix to remove the configuration
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
// constants
import { companyData } from '@/data/company';

ContactPage.propTypes = {
  companyData: PropTypes.object.isRequired,
};

export default function ContactPage({ companyData }) {
  const { companyName } = companyData;
  const title = `Contact | ${companyName}`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env['RECAPTCHA_SITE_KEY']}
        scriptProps={{ defer: true }}
      >
        <ContactContent
          companyData={companyData}
          id='contact'
          heading='Contact Us'
          title='Get in Touch'
          subtitle='Inquiry within'
        />
      </GoogleReCaptchaProvider>
    </>
  );
}

// SSG
export async function getStaticProps() {
  return {
    props: { companyData },
  };
}
