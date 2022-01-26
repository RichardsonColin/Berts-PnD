import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import AboutContent from '@/components/pages/AboutContent';
// constants
import { aboutData } from '@/src/data/about';

AboutPage.propTypes = {
  contentData: PropTypes.object.isRequired,
};

export default function AboutPage({ contentData }) {
  return (
    <>
      <Head>
        <title>About | {contentData.companyName}</title>
      </Head>
      <AboutContent contentData={contentData} id='about' heading='About Us' />
    </>
  );
}

// SSG
export async function getStaticProps() {
  const contentData = aboutData;
  return {
    props: { contentData },
  };
}
