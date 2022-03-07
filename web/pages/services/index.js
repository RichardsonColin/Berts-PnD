import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import ServicesContent from '@/components/pages/ServicesContent';
// constants
import { servicesData } from '@/src/data/services';
import { companyData } from '@/src/data/company';

ServicesPage.propTypes = {
  contentData: PropTypes.arrayOf(PropTypes.object).isRequired,
  companyData: PropTypes.object.isRequired,
};

export default function ServicesPage({ contentData, companyData }) {
  const { companyName } = companyData;
  return (
    <>
      <Head>
        <title>Services | {companyName}</title>
      </Head>
      <ServicesContent
        contentData={contentData}
        id='services'
        heading='Services'
      />
    </>
  );
}

// SSG
export async function getStaticProps() {
  const contentData = servicesData;
  return {
    props: { contentData, companyData },
  };
}
