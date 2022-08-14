import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import PortfolioContent from '@/components/pages/PortfolioContent';
// constants
import { companyData } from '@/data/company';
// models
import { fetchPortfolioImages } from '@/models/portfolioImage';

PortfolioPage.propTypes = {
  contentData: PropTypes.arrayOf(PropTypes.object).isRequired,
  contentParams: PropTypes.object.isRequired,
  companyData: PropTypes.object.isRequired,
};

export default function PortfolioPage({
  contentData,
  contentParams,
  companyData,
}) {
  const { companyName } = companyData;
  const title = `Portfolio | ${companyName}`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <PortfolioContent
        contentData={contentData}
        contentParams={contentParams}
        companyData={companyData}
        id='portfolio'
        heading='Portfolio'
        title='Preview Our Work'
        subtitle="What We've Done"
      />
    </>
  );
}

// SSG
export async function getStaticProps() {
  const contentParams = { perPage: 5, order: '_createdAt desc' };
  const { data } = await fetchPortfolioImages({
    page: 1,
    ...contentParams,
  });
  return {
    props: { contentData: data, contentParams, companyData },
    revalidate: 60,
  };
}
