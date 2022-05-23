import sanityClient from 'part:@sanity/base/client';
import groq from 'groq';

const client = sanityClient.withConfig({ apiVersion: '2021-10-21' });
// get count of published content given a type
export const getCount = async (type, params = {}) => {
  let paramsQuery = '';

  for (let key in params) {
    paramsQuery += `&& ${key} == $${key}`;
  }

  // ignore drafts
  const query = groq`count(*[_type == "${type}" && !(_id in path("drafts.**")) ${paramsQuery}])`;
  const result = await client.fetch(query, params);
  return result;
};

// Rules
export const limitLanding = async (limit, context, value) => {
  const count = await getCount(context.document._type, {
    onLanding: true,
  });

  if (value && count === limit) {
    return `Limit of ${limit} on the front page has been reached. Please uncheck another one first.`;
  }

  return true;
};
