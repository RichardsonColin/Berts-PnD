import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import PagesContent from '@/components/pages/PagesContent';
// constants
import { companyData } from '@/src/data/company';

ContactPage.propTypes = {
  companyData: PropTypes.object.isRequired,
};

export default function ContactPage({ companyData }) {
  const { companyName } = companyData;
  return (
    <>
      <Head>
        <title>Contact | {companyName}</title>
      </Head>
      <PagesContent id='contact' heading='Contact Us'></PagesContent>
    </>
  );
}

// SSG
export async function getStaticProps() {
  return {
    props: { companyData },
  };
}
