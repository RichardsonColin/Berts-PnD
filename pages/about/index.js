import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import AboutContent from '@/components/pages/AboutContent';
// constants
import { aboutData } from '@/src/data/about';
import { companyData } from '@/src/data/company';

AboutPage.propTypes = {
  contentData: PropTypes.object.isRequired,
  companyData: PropTypes.object.isRequired,
};

export default function AboutPage({ contentData, companyData }) {
  const { companyName } = companyData;
  return (
    <>
      <Head>
        <title>About | {companyName}</title>
      </Head>
      <AboutContent
        contentData={contentData}
        companyData={companyData}
        id='about'
        heading='About Us'
      />
    </>
  );
}

// SSG
export async function getStaticProps() {
  const contentData = aboutData;
  return {
    props: { contentData, companyData },
  };
}
