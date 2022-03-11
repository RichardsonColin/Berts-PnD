import Head from 'next/head';
// components
import ReviewsContent from '@/components/pages/ReviewsContent';
// constants
import { companyData } from '@/src/data/company';
// models
import { fetch } from '@/models/review';

export default function ReviewsPage({
  contentData,
  contentParams,
  companyData,
}) {
  const { companyName } = companyData;
  return (
    <>
      <Head>
        <title>Testimonials | {companyName}</title>
      </Head>
      <ReviewsContent
        contentData={contentData}
        contentParams={contentParams}
        id='testimonials'
        heading='Testimonials'
      ></ReviewsContent>
    </>
  );
}

// SSG
export async function getStaticProps() {
  const contentParams = { perPage: 5, order: 'date desc' };
  const { data } = await fetch({ page: 1, ...contentParams });
  return {
    props: { contentData: data, contentParams, companyData },
    revalidate: 60,
  };
}
