import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import ContactContent from '@/components/pages/ContactContent';
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
      <ContactContent
        id='contact'
        heading='Contact Us'
        title='Get in Touch'
        subtitle='Inquiry within'
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
