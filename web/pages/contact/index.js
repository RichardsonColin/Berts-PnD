import Head from 'next/head';
// components
import PagesContent from '@/components/pages/PagesContent';
// constants
import { COMPANY_NAME } from '@/src/constants';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | {COMPANY_NAME}</title>
      </Head>
      <PagesContent id='contact' heading='Contact Us'></PagesContent>
    </>
  );
}
