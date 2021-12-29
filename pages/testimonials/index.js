import Head from 'next/head';
// constants
import { COMPANY_NAME } from '@/src/constants';

export default function TestimonialsPage() {
  /*
    TODO:
      - replace sections with components
  */
  return (
    <>
      <Head>
        <title>Testimonials | {COMPANY_NAME}</title>
      </Head>
      <section id='hero-alternate'></section>
      <section id='testimonials'></section>
      <section id='call-to-action'></section>
    </>
  );
}
