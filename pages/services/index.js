import Head from 'next/head';
// components
import PagesContent from '@/components/pages/PagesContent';
// constants
import { COMPANY_NAME } from '@/src/constants';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | {COMPANY_NAME}</title>
      </Head>
      <PagesContent id='services' heading='Services'></PagesContent>
    </>
  );
}
