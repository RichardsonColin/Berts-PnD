import Head from 'next/head';
// components
import PagesContent from '@/components/pages/PagesContent';
// constants
import { COMPANY_NAME } from '@/src/constants';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | {COMPANY_NAME}</title>
      </Head>
      <PagesContent id='about' heading='About Us'></PagesContent>
    </>
  );
}
