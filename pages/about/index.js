import Head from 'next/head';
// constants
import { COMPANY_NAME } from '@/src/constants';

export default function AboutPage() {
  /*
    TODO:
      - replace sections with components
  */
  return (
    <>
      <Head>
        <title>About Us | {COMPANY_NAME}</title>
      </Head>
      <section id='hero-alternate'></section>
      <section id='about'></section>
      <section id='call-to-action'></section>
    </>
  );
}
