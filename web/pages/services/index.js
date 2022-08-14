import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import ServicesContent from '@/components/pages/ServicesContent';
// constants
import { servicesData } from '@/data/services';
import { companyData } from '@/data/company';

ServicesPage.propTypes = {
  contentData: PropTypes.arrayOf(PropTypes.object).isRequired,
  companyData: PropTypes.object.isRequired,
};

export default function ServicesPage({ contentData, companyData }) {
  const { companyName } = companyData;
  const title = `Services | ${companyName}`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ServicesContent
        contentData={contentData}
        id='services'
        heading='Services'
        title='Check Out Our Services'
        subtitle='What We Offer'
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
