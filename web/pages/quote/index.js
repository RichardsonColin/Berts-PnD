import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import QuoteContent from '@/components/pages/QuoteContent';
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
      <QuoteContent
        id='quote'
        heading='Request Quote'
        title='Send us a Quote Request'
        subtitle='Free Estimates'
      />
    </>
  );
}

// SSG
export async function getStaticProps() {
  return {
    props: { companyData },
  };
}
