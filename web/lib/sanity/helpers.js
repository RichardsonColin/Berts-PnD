import sanityClient from '@/lib/sanity/client';

// general sanity query
export const sanityQuery = async (type, params) => {
  let query = '';
  try {
    const { filterFor, orderBy, rangeWithin } = params;
    query =
      `*[_type == "${type}" && !(_id in path('drafts.**')) ${filterFor}] ${orderBy}${rangeWithin}`.trim();

    return await sanityClient.fetch(query);
  } catch (error) {
    console.error(`Sanity Error on ${type} ---
      Query: ${query}
      Error: ${error}
    `);
  }
};

// common params used to filter GROQ query statements; defaults to 10 resources per query
export const sanityParseParams = ({ page, perPage = 10, filter, order }) => {
  // check for params
  const hasPage = page !== undefined;
  const hasFilter = filter !== undefined;
  const hasOrder = order !== undefined;
  // sanity ranges begin at 0
  const rangeFrom = hasPage ? (Number.parseInt(page) - 1) * perPage : -1;
  const rangeTo = hasPage ? Number.parseInt(page) * perPage : -1;
  // query statements
  const rangeWithin = hasPage ? `[${rangeFrom}...${rangeTo}]` : '';
  const filterFor = hasFilter ? `&& ${filter}` : '';
  const orderBy = hasOrder ? `| order(${order})` : '';

  return {
    rangeWithin,
    filterFor,
    orderBy,
  };
};
