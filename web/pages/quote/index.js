import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import PagesContent from '@/components/pages/PagesContent';
// constants
import { companyData } from '@/src/data/company';

QuotePage.propTypes = {
  companyData: PropTypes.object.isRequired,
};

export default function QuotePage({ companyData }) {
  const { companyName } = companyData;
  return (
    <>
      <Head>
        <title>Quote | {companyName}</title>
      </Head>
      <PagesContent id='quote' heading='Request Quote'></PagesContent>
    </>
  );
}

// SSG
export async function getStaticProps() {
  return {
    props: { companyData },
  };
}
