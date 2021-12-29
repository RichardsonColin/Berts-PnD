import Head from 'next/head';
// constants
import { COMPANY_NAME } from '@/src/constants';

export default function ServicesPage() {
  /*
    TODO:
      - replace sections with components
  */
  return (
    <>
      <Head>
        <title>Services | {COMPANY_NAME}</title>
      </Head>
      <section id='hero-alternate'></section>
      <section id='services'></section>
      <section id='call-to-action'></section>
    </>
  );
}
