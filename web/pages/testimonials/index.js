import Head from 'next/head';
// components
import PagesContent from '@/components/pages/PagesContent';
// constants
import { COMPANY_NAME } from '@/src/constants';

export default function TestimonialsPage() {
  return (
    <>
      <Head>
        <title>Testimonials | {COMPANY_NAME}</title>
      </Head>
      <PagesContent id='testimonials' heading='Testimonials'></PagesContent>
    </>
  );
}
