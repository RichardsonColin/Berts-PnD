import sanityClient from '@sanity/client';

export default sanityClient({
  apiVersion: '2021-10-21',
  projectId: process.env['SANITY_PROJECT_ID'],
  dataset: 'production',
  useCdn: true,
});
