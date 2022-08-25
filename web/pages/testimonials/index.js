import Head from 'next/head';
import PropTypes from 'prop-types';
// components
import ReviewsContent from '@/components/pages/ReviewsContent';
// constants
import { companyData } from '@/data/company';
// models
import { fetchReviews } from '@/models/review';

ReviewsPage.propTypes = {
  contentData: PropTypes.arrayOf(PropTypes.object).isRequired,
  contentParams: PropTypes.object.isRequired,
  companyData: PropTypes.object.isRequired,
};

export default function ReviewsPage({
  contentData,
  contentParams,
  companyData,
}) {
  const { companyName } = companyData;
  const title = `Testimonials | ${companyName}`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ReviewsContent
        contentData={contentData}
        contentParams={contentParams}
        id='testimonials'
        heading='Testimonials'
        title='Our Latest Reviews'
        subtitle='What Customers Are Saying'
      ></ReviewsContent>
    </>
  );
}

// SSG
export async function getStaticProps() {
  const contentParams = { perPage: 5, order: 'date desc' };
  const { data } = await fetchReviews({ page: 1, ...contentParams });
  return {
    props: { contentData: data, contentParams, companyData },
    revalidate: 86400,
  };
}
