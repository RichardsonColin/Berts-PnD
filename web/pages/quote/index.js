import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import QuoteContent from '@/components/pages/QuoteContent';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
// constants
import { companyData } from '@/data/company';

QuotePage.propTypes = {
  companyData: PropTypes.object.isRequired,
};

export default function QuotePage({ companyData }) {
  const { companyName } = companyData;
  const title = `Quote | ${companyName}`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env['RECAPTCHA_SITE_KEY']}
        scriptProps={{ defer: true }}
      >
        <QuoteContent
          id='quote'
          heading='Request Quote'
          title='Send us a Quote Request'
          subtitle='Free Estimates'
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
