import Head from 'next/head';
// constants
import { COMPANY_NAME } from '@/src/constants';

export default function ContactPage() {
  /*
    TODO:
      - replace sections with components
  */
  return (
    <>
      <Head>
        <title>Contact | {COMPANY_NAME}</title>
      </Head>
      <section id='hero-alternate'></section>
      <section id='contact'></section>
      <section id='call-to-action'></section>
    </>
  );
}
